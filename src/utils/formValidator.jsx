import * as yup from "yup";
export const registerschema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const loginschema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const contactschema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});
export const validationSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone Number is required"),
  cover: yup.string().required("Cover Letter is required"),
  file: yup.mixed()
    .required("CV/Resume is required")
    .test(
      "fileSize",
      " CV/Resume is required or  size is too large",
      (value) => {
        return value && value[0] && value[0].size <= 12288 * 1024;
      }
    )
    .test("fileFormat", "Unsupported Format", (value) => {
      return (
        value &&
        value[0] &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value[0].type)
      );
    }),
  agree: yup.bool().oneOf([true], "You must accept the terms and conditions"),
});
