#!/bin/bash

GEM_PATH=.bundle
BUNDLER_PATH=$GEM_PATH/bin
	
echo -e "\n💡 \033[1;34minstalling node dependencies \033[0m\n"

# install npm dependencies
npx yarn install ---cache .npm --prefer-offline --frozen-lockfile

echo -e "\n💡 \033[1;34minstalling bundler locally \033[0m\n"

# install bundler
gem install bundler --install-dir=$GEM_PATH --quiet

echo -e "\n💡 \033[1;34minstalling bundler packages locally \033[0m\n"

# set bundler path
$BUNDLER_PATH/bundle config set --local path $GEM_PATH

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
