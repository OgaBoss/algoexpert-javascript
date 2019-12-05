import CaesarCipherEncryptor from "../src/CaesarCipherEncryptor";

describe('Caesar Cipher Encryptor', () => {
	test('cipher encryptor using unicode', () => {
		const cipher = new CaesarCipherEncryptor;
		const response = cipher.encrypt('Hello', 2);
		expect(response).toEqual('Jgnnq')
	})
})