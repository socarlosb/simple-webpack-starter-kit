# simple-webpack-starter-kit

## Ideas/TODO

- [x] Install webpack
- [x] Test JS Modules
- [x] Browser live auto reload > hot module replacement
- [ ] scss compiler
- [x] add source maps (for better debug in browser dev tools)
- [x] babel (es6) compiler
- [ ] ./src/ folder structure
- [ ] images compressor
- [x] tree shaking
## devDependencies
- [x] webpack - really?!
- [x] rimraf - to delete files before creating a new one (clean slate)
- [x] webpack-dev-server - for hot module replacemente (updates your live browser without reloading! Also created dev-server.js file) (also use environment variabels here to not bundle any hot module code for production)
~~- [x] cross-env - Having some problems seeting NODE_ENV variables to development or prouction, can this correct this behavior?~~
- [x] babel - to understand and compile new javascript sintax and features(our bundle.js will now be in good old javascript sintax, and can run on Internet Explorer!)
- [x] file-loader - so that webpack can handle other type of files (besides javascript files)
- [x] url-loader - so that webpack push url as data (instead of a link to a file, which makes an http call, which makes it slower... not sure!)
- [x] uglifyjs-webpack-plugin - (read documentation for changes) it 'cleans' the bundle.js file
**IMPORTANT NOTES**
It does tree shaking by:
- 1st don't transpile modules with babel (check .babelrc file - modules: false)
- 2nd if conditions in code are always true, they will disapear (the condition, not the executed code)
- 3rd if conditions are always false the code will not be in the bundle.js (cause they will never execute)
- 4th unused modules code will not be part of the bundle.js file (cool)
- [x] css-loader - so that webpack can read css files (in the javascript file!)
- [x] style-loader - so that webpack can add the css file on my html file
## Sources
[Webpack Documentation](https://webpack.js.org/concepts/)
[Webpack 2 - A full tutorial (4 Nov 2016)](https://www.youtube.com/watch?v=eWmkBNBTbMM&t=2323s)
[Academind Webpack 2 Tutorial List](https://www.youtube.com/watch?v=GU-2T7k9NfI&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os)


## Tricks
When doing `npm install 'something'`, use `i` instead of `install`.
When doing `npm install 'something' --save-dev`, use `-D` instead of `--save-dev`.



## JUNK
      options: {
        limit: 10000,
        fallback: 'file-loader'
      }


  new UglifyJsPlugin({
    uglifyOptions: {
      mangle: {
        false
      },

      output: {
        comments: true
      },
      warnings: true
    }
  })
