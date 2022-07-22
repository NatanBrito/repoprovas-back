import Joi from "joi";

interface signup {
  email: string;
  password: string;
  confirmPassword: string;
}
interface signin {
  email: string;
  password: string;
}
export const SignIn = Joi.object<signin>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const SignUp = Joi.object<signup>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});
