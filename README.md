# WebSite of Beehavior

## Table of contents
- [WebSite of Beehavior](#website-of-beehavior)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Accounts Credentials](#accounts-credentials)
  - [Project Dependencies](#project-dependencies)
  - [Quickstart](#quickstart)
    - [Run for development](#run-for-development)
    - [Build for production](#build-for-production)
  - [Info about project directories](#info-about-project-directories)
  - [License](#license)

## Introduction

Beehavior is a project to monitor hives remotly. This web application provides a user interface to administer hives and observe hives metrics. We provide user accounts to take a look at the project.

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Accounts Credentials

- Application User Credentials :
  - Lambda User : 
    - email : **lambda@beehavior.com**
    - password : **root**

  - Void User : 
    - email : **vide@beehavior.com**
    - password : **root**

  - Admin User : 
    - email : **admin@beehavior.com**
    - password : **root**
- TTN Credentials
  - email : **PRCPrototypeRucheConnectee@teleworm.us**
  - password : **LGMC'estLeMeilleurLycée**

## Project Dependencies

- Operating System : **Windows/Linux**
- Version Control : **Git (recommended)**
- Javascript Context : **NodeJS (v14.x)**
- Package Manager : **Yarn**

## Quickstart

> You need to copy the project from Github before

```bash
(Beehavior) $ git clone https://github.com/beehavior-bts/webapp
(Beehavior) $ cd webapp
(Beehavior/webapp) $ yarn install
```

### Run for development

```bash
(Beehavior/webapp) $ yarn run dev
```

> See the **nuxt.config.js** for more configuration and nuxt website **https://nuxtjs.org/docs/configuration-glossary/configuration-server/**

### Build for production

```bash
(Beehavior/webapp) $ yarn run generate
```

> This command compile the website in **dist** directory
> You can copy the content of **dist** directory and put in apache server for example

## Info about project directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## License

> Specifically, it grants any person who obtains a copy of the software and associated files the right to use, copy, modify, merge, distribute, publish, sublicense, and sell copies of the software. The only condition required to use the software is to include the same copyright notice in all copies or any substantial portions of the software. The final portion of the text provides for limitations and revokes any warranty implied by sharing the code.

MIT License

Copyright 2022 Raphaël Carrilho - Estéban Ristich - Baptiste Roussel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
