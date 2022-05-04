# People of GNOME

The source for the [The People of GNOME](https://teams.pages.gitlab.gnome.org/Engagement/websites/people-of-gnome)

## About

People of GNOME is a website that contains lists and indexes of all the past and current Contributors of GNOME.
The site is developed with
and maintained using [Jekyll][official-jekyll], a Static Site Generator
developed with Ruby. The site uses following types of files for the content
generation:

 * HTML files with extension `.html`
 * Markdown files with extension `.md`

The data used by the site is stored in the form of following files:

 * YAML files with extension `.yml`
 * JSON files with extension `.json`

## Project Structure

    ...
    ├── .gitlab/                            #contains GitLab template files for bugs and merge requests
    ├── _data/                              #contains site's data files
    │   ├── members/                        #contains all the members/contributors stored in the platform in YML format
    │   ├── navigation.yml                  #links to be added to the site's header and footer sections
    │   ├── member-template.yml             #contains template to add members
    │   ├── projects.json                   #contains all the GNOME projects metadata
    │   ├── badges.json                     #contains metadata of all GNOME Badges/Tags
    │   ├── events.json                     #contains metadata of all GNOME conferences
    │   └── social_networks.json            #contains all kind of supported social networks
    ├── _includes/                          #contains numerous templates like headers and footer
    │   ├── footer.html                     #the footer of the site
    │   ├── header.html                     #the meta data of the site
    │   ├── navbar.html                     #the navbar of the site
    │   ├── subheader.html                  #the subheader of the site
    │   ├── contributors/                   #contains templates for the contributors pages
    │   ├── foundation/                     #contains templates for the foundation pages
    │   ├── speakers/                       #contains templates for the speakers pages
    │   └── sections/                       #generic templates reused across the website
    │       ├── members.html                #contains the member widget template
    │       ├── member-badges.html          #contains a sub-widget for displaying a member badges
    │       ├── member-events.html          #contains a sub-widget for displaying a member events list
    │       ├── member-posts.html           #contains a sub-widget for displaying blog posts
    │       └── member-social.html          #contains a sub-widget for displaying a member social networks
    ├── _layouts/     
    │   ├── member.html                     #contains permanent profile page template for each members
    │   ├── post.html                       #contains complete single blog post template
    ├── assets/                             #contains site's valuable entities
    │   ├── font/                           #contains site's font: Red Hat Display
    │   ├── img/                            #contains site's images and illustrations
    │   ├── js/                             #contains the scripts used in the site
    │   └── scss                            #contains site's preprocessor stylesheets
    │       ├── colorful.scss               #stylesheet for syntax highlighting
    │       ├── index.scss                  #stylesheet for user defined styles
    │       ├── markdown.scss               #stylesheet for styling the markdown content
    │       └── theme.scss                  #stylesheet for website's theme. Generated from Bootstrap
    ├── collections/                        #contains the site's collections
    │   └── _pages/                         #contains site's main pages
    ├── _config.yml                         #contains Jekyll settings for the site
    ├── .gitignore
    ├── .gitlab-ci.yml                      #for GitLab Continuous Integration and Deployment
    ├── 404.html                            #custom not found page. Only works when deployed to GitLab Pages
    ├── Gemfile                             #contains gem dependencies for the site.
    ├── Gemfile.lock
    ├── LICENSE.txt
    ├── package-lock.json
    ├── package.json                        #contains node dependencies for the site.
    ├── README.md
    └── setup.sh                            #script for setting up the website

## Adding yourself to the Website

Create a new YAML file on `_data/members/` directory containing the following entries. You can also look at [this template](_data/member-template.yml)

For more detailed info on what each field means, please go through this wiki page [here](https://gitlab.gnome.org/Teams/Engagement/websites/people-of-gnome/-/wikis/Adding-yourself-to-the-Website).

| Field         | Description                                       | Example                 | Type                                                    |
| ------------- |:-------------------------------------------------:| -----------------------:| ------------------------------------------------------- |
| ID            | Your file name                                    | member-template         | string                                                  |
| Name          | Your name                                         | John Smith              | string                                                  |
| Nick Name     | Your nick name                                    | ovflowd                 | string                                                  |
| Pronoun       | Your pronoun                                      | he\him                  | string                                                  |
| Bio           | Your bio/description                              | Kindness is amazing!    | string                                                  |
| Country       | Your country/favourite emoji                      | 💫                      | emoji                                                   |
| Avatar        | Your Avatar Image                                 | https://imgur.com/image | string/boolean                                          |
| Position      | Your current position at the GNOME Project        | Community Manager       | string                                                  |
| Badges        | All the badges/roles you held at GNOME/Foundation | `['engagement-team']`   | array:entries from `badges.json`                        |
| Status        | If you're a current/active GNOME Contributor      | `true`                  | boolean                                                 |
| Projects      | The Projects/Repositories you're working on       | `['gtk']`               | array:entries from `projects.json`                      |
| Mentors       | Programs in which you mentored students           | `['gsoc-2021']`         | array:entries from `activities.json`                    |
| Mentees       | Programs in which you were mentored               | `['outreachy-2020']`    | array:entries from `activities.json`                    |
| Events        | The Events you participated in                    | `['guadec-2018']`       | array:entries from `events.json`                        |
| Socials       | Social media handles                              | `{'twitter': 'handle'}` | collection:key from `social_networks.json`;value:string |

After this, add a new entry and commit the changes with a **Merge Request**. If details are filled in correctly, it will be approved.

## Adding blog posts

Create a new directory in `collections/_posts/` having similar name of your ID used in your profile.
To create a blog post add a file in your respective directory with the following format:
```
YEAR-MONTH-DAY-title.md
```
Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, For example, the following are examples of valid post filenames:
```
2021-03-24-gnome-40-release.md
2019-09-12-a-new-look-for-the-health-app.md
```

You can also look at [this sample blog post](_data/2021-03-24-gnome-40.md) for reference.

| Field         | Description                                       | Example                 | Type                                                    |
| ------------- |:-------------------------------------------------:| -----------------------:| ------------------------------------------------------- |
| `layout`      | Post                                              | post                    | string                                                  |
| `title`       | Blog post title                                   | GNOME 40 Release!       | string                                                  |
| `author`      | Your name                                         | Claudio Wunder          | string                                                  |
| `author_id`   | Your ID                                           | claudio-wunder          | string                                                  |
| `tags`        | Tags used (Optional Field)                        | [GNOME 40, Features, Release] | array                                             |
| `banner_img`  | Link of banner image  (Optional Field)            | https://xyz/image.png   | string                                             |

## Add Custom Badges/Social Networks and Projects

You're also free to add new Badges and Social Networks and Projects/Repositories, by creating new entries on the `social_networks.json`, `badges.json` and `projects.json`.

## Installing & Running

### Dependencies

- Software Dependencies
  - [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
  - [rbenv](https://github.com/rbenv/rbenv#installation)
    - [ruby-build](https://github.com/rbenv/ruby-build#installation) (if not installed by your package manager)
  - [NodeJS](https://nodejs.org/en/download/)

- Installing Dependencies in **Ubuntu/Debian**
  ```bash
  # update repositories & install basic build dependencies
  sudo apt update && sudo apt install -y build-essential bash git rsync curl gnupg2

  # prepare to install nodejs and yarn
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null

  # add yarn package to whitelist
  echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

  # update repositories & install nodejs, yarn and rbenv
  sudo apt update && sudo apt install rbenv nodejs yarn ruby-build

  # initialize rbenv
  rbenv init

  # updates ruby-build local packages
  git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build

  # install ruby 2.7.5
  rbenv install 2.7.5
  ```
- Installing Dependencies Windows
  - Please use [WSL](https://docs.microsoft.com/en-us/windows/wsl/)
- Installing Dependencies in macOS
  ```bash
  # install dependencies
  brew install node@16 rsync gnupg2 openssl rbenv ruby-build

  # force system to use node.js v16
  brew link --force --overwrite node@16

  # install ruby 2.7.5
  rbenv install 2.7.5
  ```
- Installing Dependencies Docker
  - Haha, that's a joke. Docker is the only real dependency!
  - Optionally [install `docker compose`](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)
    (if on Linux)

### Setting up the repository

To get the site up and running locally, follow the below steps:

**PS.:** You need to have a full Bash environment. If you're on Windows, please use WSL.

- Create a local clone of the website:
  ```
  git clone https://gitlab.gnome.org/Teams/Engagement/websites/people-of-gnome.git
  ```
- Change into the people-of-gnome directory
  ```
  cd people-of-gnome
  ```
### Setup and serve locally

#### In host OS

- Perform the following commands to install dependencies and structure the website properly:
  ```
  ./setup.sh
  ```
- Build the site and make it available on your local server
  ```
  ./run.sh
  ```

### In Docker

- If `docker compose` is installed _(default on MacOS and Windows)_
```bash
docker compose up

### personal customisation options in docker-compose.override.yml
### https://docs.docker.com/compose/extends/#understanding-multiple-compose-files

```
- Using just `docker`
```bash
docker build --tag people-of-gnome:dev .
docker run -it \
    --name=people-of-gnome-dev-server \
    --volume=$(pwd):/site \
    --volume=/site/node_modules \
    --volume=/site/.bundle \
    --volume=/site/assets/3rd-party \
    --publish=4000:4000 \
    --publish=35729:35729 \
    people-of-gnome:dev

### customisation options `man docker-run`
```

- Browse [http://localhost:4000](http://localhost:4000) to view the website.

## Project Dependencies

This project relies on the dependencies as well. These dependencies are provided
in the Ruby `Gemfile` or NPM's `package.json`. Following table shows the
list of dependencies used by this project:

Package | Version | File | Source
--- | --- | --- | ---
bootstrap | `4.6.0` | [package.json][package.json] | [GitHub](https://github.com/twbs/bootstrap/)
@fortawesome/fontawesome-free | `5.15.3` | [package.json][package.json] | [GitHub](https://github.com/FortAwesome/Font-Awesome/)
jquery-slim | `3.0.0` | [package.json][package.json] | [GitHub](https://github.com/thesabbir/jquery-slim)
popper.js | `1.16.1` | [package.json][package.json] | [GitHub](https://github.com/FezVrasta/popper.js/)
slick-carousel | `1.8.1` | [package.json][package.json] | [GitHub](https://github.com/kenwheeler/slick/)
moment | `2.24.0` | [package.json][package.json] | [GitHub](https://github.com/moment/moment/)
node-sass | `4.13.1` | [package.json][package.json] | [GitHub](https://github.com/sass/node-sass/)
jekyll | `3.8.5` | [Gemfile][Gemfile] | [GitHub](https://github.com/jekyll/jekyll/)

Read about adding/updating/removing dependencies on [how to contribute](CONTRIBUTING.MD#addingupdatingremoving-dependencies).

## Pipeline

The pipeline used by the website is the top-level component of continuous
integration, delivery, and deployment.

The pipeline defined by this repository uses the `Ruby2.5` image. The pipeline
consists of a script that runs before the site is tested/deployed. The
script that runs before the test/deployment of the website basically
installs all the `gem/npm dependencies` and then builds the website
before testing/deploying.

`test` stage is performed on all branches but `master`. `deploy` stage on
the other hand is performed only on `master` branch.

## Code of Conduct

This project is an open source project with a contributor community that spans across
the globe. We want everyone in our community to feel safe and encourage the
participation of people from all backgrounds, regardless of
experience level, age, gender, identity, race, religion, or nationality. We
expect all contributors to uphold the [Code of Conduct][code-of-conduct].

## License Information

This project is licensed under the [Creative Commons BY-SA-4.0][license].

<!-- markdown variables -->
[contributing]: /CONTRIBUTING.md
[code-of-conduct]: https://wiki.gnome.org/Foundation/CodeOfConduct
[official-jekyll]: https://jekyllrb.com
[package.json]: package.json
[Gemfile]: Gemfile
[license]: LICENSE.txt
