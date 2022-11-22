import { useFormik } from "formik";

// Formik for sign in
export const useSignInFormik = () => {
  const initialValues = {
    userName: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
  });

  return formik;
};
