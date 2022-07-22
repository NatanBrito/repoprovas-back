import Cryptr from "cryptr";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
interface dataJwt {
  email: string;
  id: number;
}

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
  console.log({ utilToken: token });
  try {
    const verify = jwt.verify(token, process.env.JWTPASS);
    console.log({ utilTokenAfter: verify });
    return verify;
  } catch (e) {
    console.log({ erro: e });
  }
}
