#!/bin/sh

deploy() {
  echo "deploying to branch: $1"
  push-dir --dir=dist --branch=$1 --cleanup
}

gen() {
  echo "generating dist: $1"
  pug -o dist -O "{env: \"$1\"}" index.pug
}

available=("gh-pages", "final")
case "$1" in
  -d|--deploy)
    if [[ "${available[@]}" =~ "$2" ]]; then
      deploy "$2"
    else
      echo "Unknown parameter: $2"
      exit 1
    fi
  ;;

  -g|--generate)
    if [[ "${available[@]}" =~ "$2" ]]; then
      gen "$2"
    else
      echo "Unknown parameter: $2"
      exit 1
    fi
  ;;

  *)
    echo "Unknown parameter: $1"
    exit 1
esac

