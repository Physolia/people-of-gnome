FROM ruby:2.6.8

ENV JEKYLL_ENV=development
ENV JEKYLL_HOST=0.0.0.0
ENV LC_ALL=C.UTF-8
ENV GEM_PATH=.bundle
ENV BUNDLER_PATH=.bundle/bin

RUN apt-get update && apt-get install -y \
	build-essential bash git rsync curl gnupg2
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y
RUN apt-get install -y rbenv nodejs yarn rbenv ruby-build
RUN git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
RUN rbenv install 2.7.5

WORKDIR /site
COPY setup.sh run.sh /site
COPY Gemfile* package.json* /site
RUN chmod +x setup.sh run.sh
VOLUME /site/.bundle
VOLUME /site/node_modules
VOLUME /site/assets/3rd-party

# run build with --build-arg FORCE_SETUP=true
# to force rebuild of step
ARG FORCE_SETUP
RUN /site/setup.sh
CMD /site/run.sh
