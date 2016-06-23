# unicode-emoji-modifier-base [![Build status](https://travis-ci.org/mathiasbynens/unicode-emoji-modifier-base.svg?branch=master)](https://travis-ci.org/mathiasbynens/unicode-emoji-modifier-base) [![Code coverage status](https://img.shields.io/codecov/c/github/mathiasbynens/unicode-emoji-modifier-base.svg)](https://codecov.io/gh/mathiasbynens/unicode-emoji-modifier-base)

_unicode-emoji-modifier-base_ is the set of Unicode symbols that can serve as a base for emoji modifiers, i.e. those with the `Emoji_Modifier_Base` property set to `Yes`.

It’s based on [`emoji-data.txt` v3.0](http://unicode.org/Public/emoji/3.0/emoji-data.txt). See [_UTR51: Diversity Implementations_](http://unicode.org/reports/tr51/#Diversity_Implementations) for more information.

## Installation

To use _unicode-emoji-modifier-base_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install unicode-emoji-modifier-base
```

Then, `require` it:

```js
const emojiModifierBase = require('unicode-emoji-modifier-base');
```

## Usage

This module exports a `Set` object. The most common usage is to check if a given code point is an emoji modifier base:

```js
emojiModifierBase.has(0x1F469)
// → true
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-emoji-modifier-base_ is available under the [MIT](https://mths.be/mit) license.
