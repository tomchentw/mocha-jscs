# mocha-jscs [![Travis CI][travis-image]][travis-url] [![Quality][codeclimate-image]][codeclimate-url] [![Coverage][codeclimate-coverage-image]][codeclimate-coverage-url] [![Dependencies][gemnasium-image]][gemnasium-url] [![Gitter][gitter-image]][gitter-url]
> Add jscs as mocha test in your test suite.

[![Version][npm-image]][npm-url]


## Usage

```shell
npm install mocha-jscs --save-dev
```

Make sure you have a jscs config defined using either:

* a .jscs.json file in your project root
* or jscs options in your package.json

In your config you should use one of the available [presets](http://jscs.info/overview.html#options) or for more advanced configurations, define your own set of [rules](http://jscs.info/rules.html).

Next, add this to `test/index.js` in your project, with the following content:

```js
require("mocha-jscs")();
```

You can also config the paths to run against:

```js
require("mocha-jscs")(["./lib"]); // Array of paths
```


That's it! You are done.


## Contributing

[![devDependency Status][david-dm-image]][david-dm-url]

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## Credits

* [`mocha-jshint`](https://github.com/Muscula/mocha-jshint)


[npm-image]: https://img.shields.io/npm/v/mocha-jscs.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/mocha-jscs

[travis-image]: https://img.shields.io/travis/tomchentw/mocha-jscs.svg?style=flat-square
[travis-url]: https://travis-ci.org/tomchentw/mocha-jscs
[codeclimate-image]: https://img.shields.io/codeclimate/github/tomchentw/mocha-jscs.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/tomchentw/mocha-jscs
[codeclimate-coverage-image]: https://img.shields.io/codeclimate/coverage/github/tomchentw/mocha-jscs.svg?style=flat-square
[codeclimate-coverage-url]: https://codeclimate.com/github/tomchentw/mocha-jscs
[gemnasium-image]: https://img.shields.io/gemnasium/tomchentw/mocha-jscs.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/tomchentw/mocha-jscs
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/tomchentw/mocha-jscs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[david-dm-image]: https://img.shields.io/david/dev/tomchentw/mocha-jscs.svg?style=flat-square
[david-dm-url]: https://david-dm.org/tomchentw/mocha-jscs#info=devDependencies
