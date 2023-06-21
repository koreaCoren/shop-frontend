import CryptoJS from "crypto-js";

// 암호화 함수
// const encrypt = (message, secretKey) => {
//     const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();
//     return encrypted;
// }

const encrypt = (message, secretKey) => {
    const iv = CryptoJS.enc.Hex.parse("IvData1zqywxz2345");
    const encrypted = CryptoJS.AES.encrypt(message, secretKey, {iv:iv});
    return encrypted.toString();
}

// 복호화 함수
const decrypt = (encryptedMessage, secretKey) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8);
    return decrypted;
}

export { encrypt, decrypt }