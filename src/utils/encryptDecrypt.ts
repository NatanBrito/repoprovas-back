import Cryptr from "cryptr";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

interface dataJwt {
  email: string;
  id: string;
}

dotenv.config();
const cryptr = new Cryptr(process.env.ENCRYPTPASS);
export function EncryptPass(password: string) {
  const encrypt = cryptr.encrypt(password);
  return encrypt;
}
export function DecryptPass(password: string) {
  return cryptr.decrypt(password);
}
export function createToken(data: dataJwt) {
  const generate = jwt.sign(data, process.env.JWTPASS);
  return generate;
}
export function decryptToken(token: string) {
  const verify = jwt.verify(token, process.env.JWTPASS);
  return verify;
}
