#!/bin/bash

# set directories
CURRENT_DIR=$(pwd)
GEM_PATH=$CURRENT_DIR/.bundle
BUNDLER_PATH=$GEM_PATH/bin

# initialize rbenv
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

# set the ruby version locally to 2.7.5
rbenv local 2.7.5

echo -e "\n💡 \033[1;31mplease access via localhost and not 127.0.0.1! \033[0m"

echo -e "\n🎉 \033[1;34mstarting jekyll \033[0m\n"

$BUNDLER_PATH/bundle exec jekyll s --watch --livereload --host=${JEKYLL_HOST:-localhost} --baseurl=""
