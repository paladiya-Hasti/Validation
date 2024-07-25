import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";


const Vaild = () => {
  const uservaildationschema = Yup.object().shape({
    name: Yup.string()
      .min(3)
      .max(10)
      .required("username must be least 3 charater"),
    email: Yup.string()
      .email("enter a vaild address")
      .required("enter emial address"),
    password: Yup.string()
      .min(6)
      .max(10)
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "regex"
      )
      .required("password must be least 6 charater"),
  });
  let formdata = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: uservaildationschema,
    onSubmit: (value) => {
      console.log(value);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div>
      <form className="box w-50" onSubmit={formdata.handleSubmit}>
        <h2>sign up!!</h2>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formdata.values.name}
            onChange={formdata.handleChange}
            onBlur={formdata.handleBlur}
            className={`form-control ${
              formdata.touched.name && formdata.errors.name ?"error" :null}`}
            id="name"
            aria-describedby="name"
          />
          {formdata.touched.name && formdata.errors.name ? (
            <p style={{ color: "red" }}>{formdata.errors.name}</p>
          ) : null}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formdata.values.email}
            onChange={formdata.handleChange}
            onBlur={formdata.handleBlur}
            className={`form-control ${
              formdata.touched.email && formdata.errors.email ?"error" :null}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {formdata.touched.email && formdata.errors.email ? (
            <p style={{ color: "red" }}>{formdata.errors.email}</p>
          ) : null}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="text"
            name="password"
            value={formdata.values.password}
            onChange={formdata.handleChange}
            onBlur={formdata.handleBlur}
            className={`form-control ${
              formdata.touched.password && formdata.errors.password ?"error" :null}`}            id="exampleInputPassword1"
          />
          {formdata.touched.password && formdata.errors.password ? (
            <p style={{ color: "red" }}>{formdata.errors.password}</p>
          ) : null}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Vaild;
