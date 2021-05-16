<h1 align="center">
    <img src="docs_include/banner.png" alt="krowa" width="250"/>
    <br>
</h1>

<p align="center">
    <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-blue.svg?style=flat-square" alt="style"/></a>
    <a href="https://discord.gg/WK2qTecTkJ"><img src="https://img.shields.io/badge/discord-roxy.js-blue.svg?style=flat-square" alt="discord"></a>
    <a href="https://www.npmjs.com/package/roxy.js"><img src="https://img.shields.io/npm/v/roxy.js.svg?style=flat-square" alt="npm"></a>
    <a href="https://travis-ci.com/colenh/roxy.js"><img src="https://img.shields.io/travis/com/colenh/roxy.js?style=flat-square" alt="build"/></a>
    <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fcolenh%2Froxy.js?ref=badge_shield"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcolenh%2Froxy.js.svg?type=shield" alt="license"></a>
    <a href="https://david-dm.org/colenh/roxy.js"><img src="https://status.david-dm.org/gh/colenh/roxy.js.svg?style=flat-square" alt="dependencies"></a>
    <a href="https://david-dm.org/colenh/roxy.js"><img src="https://img.shields.io/snyk/vulnerabilities/npm/roxy.js.svg?style=flat-square" alt="vulnerabilities"></a>
</p>

## about

krowa is a js wrapper for almost every public api we can find. krowa is licensed under MIT

## install

```bash
# locally
    $ yarn add krowa
    $ npm install krowa --save

# globally
    $ yarn global add krowa
    $ npm install krowa -g
```

## example

```js
const krowa = require('krowa')
const res = krowa.GitHub.users.getUser('colenh')
console.log(res)
```

## docs

to view api documentation, tutorials, and more, visit: [krowa.js.org](https://krowa.js.org/)

## credits

* [cole](https://github.com/colenh) - lead maintainer
