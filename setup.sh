#!/bin/bash

# set directories
CURRENT_DIR=$(pwd)
GEM_PATH=$CURRENT_DIR/.bundle
BUNDLER_PATH=$GEM_PATH/bin

# initialize rbenv
eval "$(rbenv init -)"

# set the ruby version locally to 2.7.5
rbenv global 2.7.5
	
echo -e "\n💡 \033[1;34minstalling node dependencies \033[0m\n"

# install npm dependencies
yarn install --cache .npm --prefer-offline --frozen-lockfile

echo -e "\n💡 \033[1;34minstalling bundler locally \033[0m\n"

# install bundler
gem install bundler:2.3.8 --install-dir=$GEM_PATH --quiet --no-user-install

echo -e "\n💡 \033[1;34minstalling bundler packages locally \033[0m\n"

# set bundler path
$BUNDLER_PATH/bundle config set --local path $GEM_PATH

# set ffi options
$BUNDLER_PATH/bundle config build.ffi --enable-libffi-alloc

# install bundler dependencies
$BUNDLER_PATH/bundle install --standalone

echo -e "\n💡 \033[1;34mcopying node packages locally \033[0m\n"

dependencies=('@fortawesome' 'bootstrap' 'jquery-slim' 'moment' 'popper.js' 'slick-carousel' 'lazysizes')

for dependency in "${dependencies[@]}"
do
    rsync -a node_modules/${dependency} assets
    echo -e "✓ \033[1;32mmoved ${dependency} to assets/ folder \033[0m"
done

echo -e "\n👌 \033[1;35minstallation finished \033[0m\n"
