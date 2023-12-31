import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "../utils/context";
// import { loginRoute } from "../utils/APIroutes";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const { current, setCurrent } = useGlobalContext();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(3, "Too Short!").max(25, "Too Long!").required(),
    username: Yup.string().min(3, "Too Short!").max(15, "Too Long!").required(),
  });

  const onSubmit = async (data) => {
    axios
      .post("https://dummyjson.com/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.token);
        // changeuser(response.token);
        setCurrent(response.data.token);
        console.log(current);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Invalid credentials");
      });
  };
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <label>Username </label>

          <Field
            style={{
              backgroundColor: "transparent",
              padding: "0.7em",
              border: "0.1rem solid #4e0eff ",
              borderRadius: "0.4rem",
              color: "white",
              width: "100%",
              fontSize: "1rem",
            }}
            autoComplete="on"
            id="logincred"
            name="username"
            placeholder="username"
          />
          <ErrorMessage name="username" component="span" />
          <label>Password </label>

          <Field
            style={{
              backgroundColor: "transparent",
              padding: "0.7em",
              border: "0.1rem solid #4e0eff ",
              borderRadius: "0.4rem",
              color: "white",
              width: "100%",
              fontSize: "1rem",
            }}
            autoComplete="off"
            id="logincred"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="span" />
          <button type="submit"> LOGIN</button>
          {/* <span>
            Do not have an account ? <Link to="/register">Register.</Link>
          </span> */}
        </Form>
      </Formik>
    </FormContainer>
  );
}

export default Login;

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  label {
    display: flex;
    color: black;
    background-color: #e1d1e8;
    padding: 0.5rem;
    // border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1rem;
  }

  Form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }

  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
// const Field = styled.Field`
//   background-color: transparent;
//   padding: 3rem;
//   border: 0.1rem solid #4e0eff;
//   border-radius: 0.4rem;
//   color: white;
// width: 100%;
// font-size: 1rem;
// &:focus {
//   border: 0.1rem solid #997af0;
//   outline: none;
//   }
// `;
