import React, {useContext} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {store} from '../../utils/store.js';
import styled from 'styled-components';

const StyledOptions= styled.div`
margin-top: 30px;
display: flex;




`
function Options({ values, errors, touched }) {
    const globalState = useContext(store)
    const {dispatch} = globalState
  return (
      <StyledOptions>
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <Field component="select" name="meal">
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
        <option value="platinum">Platinum</option>
      </Field>
      <label>
        <Field type="checkbox" name="tos" checked={values.tos} />
        Accept TOS
      </label>
      <button>Submit!</button>
    </Form>
    </StyledOptions>
  );
}


const FormikOptions = withFormik({
  mapPropsToValues({ email, password, tos, meal }) {
    return {
      email: email || "",
      password: password || "",
      tos: tos || false,
      meal: meal || "silver"
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    
  }
})(Options);


export default FormikOptions
