'use strict';

const fs = require('fs');
const jsesc = require('jsesc');
const range = require('lodash.range');

const parseEmojiData = function() {
	const set = new Set();
	const source = fs.readFileSync('./data/emoji-data.txt', 'utf8');
	const lines = source.split('\n');
	for (const line of lines) {
		if (!line || /^#/.test(line)) {
			continue;
		}
		const data = line.trim().split(';');
		const charRange = data[0].trim();
		const property = data[1].split('#')[0].trim();
		if (property != 'Emoji_Modifier_Base') {
			continue;
		}
		const rangeParts = charRange.split('..');
		if (rangeParts.length == 2) {
			range(
				parseInt(rangeParts[0], 16),
				parseInt(rangeParts[1], 16) + 1
			).forEach(function(codePoint) {
				set.add(codePoint);
			});
		} else {
			const codePoint = parseInt(rangeParts[0], 16);
			set.add(codePoint);
		}
	}
	return set;
};

const set = parseEmojiData();
const header = '// Generated using `npm run build`. Do not edit!';
const output = `${ header }\nmodule.exports = ${
	jsesc(set, {
		'compact': false,
		'numbers': 'hexadecimal'
	})
};\n`;
require('fs').writeFileSync('./index.js', output);
