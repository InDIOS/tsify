# vue-tsify

Fork of [**tsify**](https://github.com/TypeStrong/tsify) that allow working with Typescript Decorators and Vue.js.

# Features

* Works with [**tsify**](https://github.com/TypeStrong/tsify)
* Support for [**preprocess**](https://github.com/jsoverson/preprocess)
* Support for [**Browserify-HMR**](https://github.com/AgentME/browserify-hmr)
* Support for decorators with [**vue-ts-decorate**](https://github.com/InDIOS/vue-ts-decorate)
* Support for CSS preprocess and scoped CSS with [**absurd-css**](https://github.com/InDIOS/absurd-css) module

# Usage

Since it runs on tsify, the usage is identically to work with tsify module. Just change some things:

* When you use a html template you don't need
 use other browserify transformation, in the component 
 options use `templateUrl` instead of `template` and just 
 put the relative url, it will be converted in a required
 module properly, is the same with `styleUrl` property. You can use
 whatever options you want. Eg:
  ```javascript
  // Use of templateUrl property
  @Component({
    templateUrl: './relative/path/to/template.html'
    // ...
  })
  // Or use
  @Component({
    template: require('./relative/path/to/template.html')
    // ...
  })
  /**************************************************/
  // Use of styleUrl property
  @Component({
    styleUrl: './relative/path/to/style'/* or */'./relative/path/to/style.css'
    // ...
  })
  // Or use
  @Component({
    style: require('./relative/path/to/style')/* or */require('./relative/path/to/style.css')
    // ...
  })
  ```
# Options
* All the tsify options are available.
* In the tsify options, you can use the `vueOptions` with this properties:
  * `htmlMinify`: the options of [html-minifier](https://github.com/kangax/html-minifier) module.
  * `minifyCss`: `true` if you want minify the CSS or false if you don't (default to `false`).
  * `includeHmrFiles`: if you want include HMR module in other files, put an array of files path to include (default to `[]`).
* Also in the tsify options, you can use the `preprocess` option with an object of values to use in the `preprocess` scope.

> **NOTE:** By default every file with @Component, @Directive, @Filter and @Mixin decorators are included in HMR includes option.
