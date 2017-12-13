# simple-webpack-starter-kit

## Ideas/TODO

- [x] Install webpack
- [x] Test JS Modules
- [x] Browser live auto reload > hot module replacement
- [x] scss compiler
- [x] add source maps (for better debug in browser dev tools)
- [x] babel (es6) compiler
- [ ] ./src/ folder structure
- [ ] images compressor
- [x] tree shaking
## devDependencies
- [x] webpack - really?!
- [x] clean-webpack-plugin - to delete files before creating a new one (clean slate)
- [x] webpack-dev-server - for hot module replacemente (updates your live browser without reloading - for css only sadly!!!)
- [x] cross-env - Having some problems setting NODE_ENV variables to development or production, this correct for windos and mac users.
- [x] babel - to understand and compile new javascript sintax and features(our bundle.js will now be in good old javascript sintax, and can run on Internet Explorer!)
- [x] file-loader - so that webpack can handle other type of files (besides javascript files)
- [x] url-loader - so that webpack push url as data (instead of a link to a file, which makes an http call, which makes it slower... not sure!)
- [x] uglifyjs-webpack-plugin - (read documentation for changes) it 'cleans' the bundle.js file! (NOTE: this 'guy' is a beast, I had some problems with sourcemaps because of this guy, but to simplify we just need to add in the webpack modules.export the `devtools: "sourcemap"` flag and also add `sourceMap: true` to the plugin options, when the plugin is indicated, more info [here](https://github.com/webpack/webpack/issues/2704))
- [x] image-webpack-loader - to make images smaller (cool)


**IMPORTANT NOTES**
It does tree shaking by:
- 1st don't transpile modules with babel (check .babelrc file - modules: false)
- 2nd if conditions in code are always true, they will disapear (the condition, not the executed code)
- 3rd if conditions are always false the code will not be in the bundle.js (cause they will never execute)
- 4th unused modules code will not be part of the bundle.js file (cool)
- [x] css-loader - so that webpack can read css files (in the javascript file!)
- [x] style-loader - so that webpack can add the css file on the html head file
- [x] extract-text-webpack-plugin - to extract my css code to a separated file, for production
- [x] sass-loader - translate scss to css
- [x] node-sass - for webpack to know css!

## Sources
[Webpack Documentation](https://webpack.js.org/concepts/)

[Webpack 2 - A full tutorial (4 Nov 2016)](https://www.youtube.com/watch?v=eWmkBNBTbMM&t=2323s)

[Academind Webpack 2 Tutorial List](https://www.youtube.com/watch?v=GU-2T7k9NfI&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os)

[Ihatetomatoes Webpack 2 Tutorial](https://www.youtube.com/watch?v=JdGnYNtuEtE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY)


## Tricks
When doing `npm install 'something'`, use `i` instead of `install`.
When doing `npm install 'something' --save-dev`, use `-D` instead of `--save-dev`.

Basically use `npm i -D webpack`



## JUNK TO DELETE

    options: {
      limit: 10000,
      fallback: 'file-loader'
    }

//

    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: false,
        output: {
          comments: true
        },
        warnings: true
      }
    })

//

    {
      test: /\.(png|jpe?g|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }]
    },
