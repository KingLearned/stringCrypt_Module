# stringCrypt_Module

The `stringCrypt` Module provides encryption and decryption functionality for data using a code key. It also includes a method for comparing a decrypted result with a provided value.

## Usage

```javascript
// Create a new instance of the Crypt class
const Encode = new stringCrypt();

// Encrypt data using a code key
const encryptedResult = Encode.encrypt(CodeKey);//A String Data 

// Decrypt encrypted data
const decryptedResult = Encode.decrypt(encryptedData);

// Compare decrypted data with a provided value
const isMatch = Encode.compare(encryptedData, Datatocompare);
```

## Methods

`encrypt(CodeKey)`
The encrypt method encrypts data using a code key.

* `CodeKey` (required): The code key used for encryption.
Returns the encrypted result.

* `decrypt` (encryptedData)
The decrypt method decrypts encrypted data.

* `encryptedData` (required): The encrypted data to be decrypted.
Returns the decrypted result.

* `compare` (encryptedData, Datatocompare)
The compare method compares a decrypted result with a provided value.

* encryptedData (required): The encrypted data to be decrypted and compared.
* Datatocompare (required): The value to compare with the decrypted data.
- Returns true if the decrypted result is equal to Datatocompare, and false otherwise.

## Example
```javascript
const CodeKey = 'encryptionkey';
const Datatocompare = 'compareValue';

const Encode = new stringCrypt();

const encryptedResult = Encode.encrypt(CodeKey);
console.log(encryptedResult);
// Output: 'eeriyne'

const decryptedResult = Encode.decrypt(encryptedResult);
console.log(decryptedResult);
// Output: 'encryptionkey'

const isMatch = Encode.compare(encryptedResult, Datatocompare);
console.log(isMatch);
// Output: false

```
## Contributing
Contributions are welcome! If you find any issues or would like to propose enhancements, please submit a pull request.

## Author
This Module was Developed by [Mr. Learned](https://twitter.com/nez_Dking) CEO @ [(LDC) Concepts](https://learnedsconcept.onrender.com)