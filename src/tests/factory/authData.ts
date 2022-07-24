import { faker } from "@faker-js/faker";

function email() {
  return faker.internet.email();
}
function password() {
  return faker.internet.password();
}
export default {
  email,
  password,
};
