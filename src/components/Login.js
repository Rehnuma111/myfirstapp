import { Formik } from "formik";
import { Button } from "@mui/material";
import app_config from "../config";
import Swal from "sweetalert2";

const Login = () => {
  const url = app_config.api_url;

  // object created
  const loginForm = {
    email: "",
    password: "",
  };

  //Action to Submit form
  const LoginSubmit = (formdata) => {
    console.log(formdata);
    //three thinks are required  to request
    // 1. Address
    // 2. http Request Method
    // 3. data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have loggedin successfully!",
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is incorrect!",
          });
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);


      });
  };

  return (
    <div className="login-bg">
      <h1 className="text-center">Login Component</h1>
      <hr />
      <div className="col-md-6 mx-auto">
        <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            //here we put the form
            <form onSubmit={handleSubmit}>
              <label className="mt-3">Email</label>
              <input
                className="form-control"
                placeholder="Email"
                id="email"
                value={values.email}
                onChange={handleChange}
              />

              <label className="mt-3">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter Password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              <Button type="submit"
                className="w-100 mt-5"
                color="secondary"
                variant="contained">Register to continue</Button>

              {/* <button className="btn btn-secondary w-100 mt-5">
                Login to Continue
              </button> */}
            </form>

            // Material UI Button

            // <Button />
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;