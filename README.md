# DataStore Import Export App

[![Build Status](https://travis-ci.org/hisptz/datastore-import-export-app.svg?branch=master)](https://travis-ci.org/hisptz/datastore-import-export-app)
[![Maintainability](https://api.codeclimate.com/v1/badges/9fa8f69239aa18d74fe7/maintainability)](https://codeclimate.com/github/hisptz/datastore-import-export-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9fa8f69239aa18d74fe7/test_coverage)](https://codeclimate.com/github/hisptz/datastore-import-export-app/test_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Interactive datastore import export tool based on DHIS2 platform aim at extending import and export capabilities for datastore contents

## Prerequisites

1. [NodeJs (10 or higher)](https://nodejs.org)
2. npm (6.4.0 or higher), can be installed by running `apt install npm`
3. git, can be installed by running `apt install git`

## Setup

Clone repository

```bash
 git clone https://github.com/hisptz/datastore-import-export-app.git
```

Navigate to application root folder

```bash
cd datastore-import-export-app
```

Install all required dependencies for the app

```bash
npm install
```

## Development server

To start development server

```bash
npm start
```

Navigate to [http://localhost:4200](http://localhost:4200).

This command will require proxy-config.json file available in the root of your source code, usually this file has this format

```json
{
  "/api": {
    "target": "https://play.dhis2.org/2.29/",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  },
  "/": {
    "target": "https://play.dhis2.org/2.29/",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  }
}
```

We have provided `proxy-config.example.json` file as an example, make a copy and rename to `proxy-config.json`

## Build

To build the project run

`npm run build`

The build artifacts will be stored in the `dist/`, this will include a zip file ready for deploying to any DHIS2 instance.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
