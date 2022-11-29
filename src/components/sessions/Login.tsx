import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import Icon from "../icon/Icon";
import TextField from "../text-field/TextField";
import { H3, H5 } from "../Typography";
import { StyledSessionCard } from "./SessionStyle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";

const Login: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const loginUser = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        //const user = userCredential.user;
        router.push("/vendor/dashboard");
        console.log("logged in");
      })
      .catch((error) => {
        alert("logg in failed");
        alert(error.mesage);
      });
  };

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values) => {
    router.push("/profile");
    console.log(values);
  };

  const { errors, touched } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema,
  });

  return (
    <StyledSessionCard mx="auto" my="2rem" boxShadow="large">
      <form className="content">
        <H3 textAlign="center" mb="0.5rem">
          Welcome To Home Click Site Manager
        </H3>
        <H5
          fontWeight="600"
          fontSize="12px"
          color="gray.800"
          textAlign="center"
          mb="2.25rem"
        >
          Log in with email & password
        </H5>

        <TextField
          mb="0.75rem"
          name="email"
          placeholder="exmple@mail.com"
          label="Email or Phone Number"
          type="email"
          fullwidth
          onChange={(e) => setEmail(e.target.value)}
          errorText={touched.email && errors.email}
        />
        <TextField
          mb="1rem"
          name="password"
          placeholder="*********"
          autoComplete="on"
          type={passwordVisibility ? "text" : "password"}
          label="Password"
          fullwidth
          endAdornment={
            <IconButton
              size="small"
              type="button"
              p="0.25rem"
              mr="0.25rem"
              color={passwordVisibility ? "gray.700" : "gray.600"}
              onClick={togglePasswordVisibility}
            >
              <Icon variant="small" defaultcolor="currentColor">
                {passwordVisibility ? "eye-alt" : "eye"}
              </Icon>
            </IconButton>
          }
          onChange={(e) => setPassword(e.target.value)}
          errorText={touched.password && errors.password}
        />

        <Button
          mb="1.65rem"
          variant="contained"
          color="primary"
          fullwidth
          onClick={(e) => {
            e.preventDefault(), loginUser();
          }}
        >
          Login
        </Button>
      </form>
    </StyledSessionCard>
  );
};

const initialValues = {
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("${path} is required"),
  password: yup.string().required("${path} is required"),
});

export default Login;
