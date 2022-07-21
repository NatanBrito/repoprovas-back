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
  password: Joi.string().length(10),
});

export const SignUp = Joi.object<signup>({
  email: Joi.string().email().required(),
  password: Joi.string().length(10).required(),
  confirmPassword: Joi.ref("password"),
});
