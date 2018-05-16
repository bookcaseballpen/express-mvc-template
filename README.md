# Express MVC template

This is a simple MVC framwork using Express, Router and Pug. In serverjs, it use a loop to dynamiclly add in router as controllers and use pug as template engine.

Template created base on article : [A simple mvc framework with node and express](http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/) - by Tim Roberts

<!-- TOC -->

- [Express MVC template](#express-mvc-template)
  - [How to use](#how-to-use)
  - [file structure](#file-structure)
  - [optional middlewares](#optional-middlewares)
  - [log](#log)

<!-- /TOC -->

## How to use

clone the repo, install packages and run start script

## file structure

* controllers - controller folder
* views - view folder
* public - static folder
* server.js - nodejs express server

## optional middlewares

* express.logger()
* express.bodyParser()
* express.methodOverride()
* express.cookieParser()
* express.session()

## log

* 2018-05-16: repo first created
