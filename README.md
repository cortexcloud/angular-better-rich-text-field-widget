# AngularWidgetTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Install package

- **Login to cortex github package**  Set up [Github Personal Access Token (Classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with `read:package` scope.

```bash
npm login --scope=@cortexcloud --auth-type=legacy --
# Enter some non-empty string when it ask for Username. There're no need to be your username.
# Enter GitHub personal access token (classic) when it ask for Token.
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build upload package

Run `npm run build:widget` to build package for uploading to content manager.

## Upload widget to Better studio

* Go to https://tools.better.care/studio/content-manager/select
* Click on "Upload" on the top right of the page.
* Upload ./dist/elements/rich-text-field-widget.js.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
