export default class CaesarCipherEncryptor {
	encrypt(words, key) {
		const MAXIMUM_UNICODE = 122;
		const MINIMUM_UNICODE = 96;

		let newWord = [];
		for(let i = 0; i < words.length; i++) {
			let newCharacter = words.charCodeAt(i) + key;
			if (newCharacter > MAXIMUM_UNICODE) {
				newCharacter = MAXIMUM_UNICODE + newCharacter % MAXIMUM_UNICODE
			}

			newWord.push(String.fromCharCode(newCharacter))
		}
		return newWord.join('')
	}
}