import {Button, Box, TextField} from  "@mui/material";
import {Field, Form, Formik} from "formik";
import {object, string} from "yup";

const initialValues = {
  email: "",
  name: "",
  password: "",
}


const MaterialForm = () => {
  return(
    <div className="MaterialForm">
      <Formik
      initialValues={initialValues}
      onSubmit={(values, FormikHelpers) =>{
        console.log(values)
      }}
      >
        {() =>(
        <Form autoComplete="off">
        <Field
        name="email"
        type="email"
        as={TextField}
        variant="outlined"
        color="primary"
        label="Email"
        fullwidth="true"
        />
        <Box height={14} />
        <Field
        name="name"
        type="name"
        as={TextField}
        variant="outlined"
        color="primary"
        label="Name"
        fullwidth="true"
         />
         <Box height={14} />
        <Field
        name="password"
        type="password"
        as={TextField}
        variant="outlined"
        color="primary"
        label="Password"
        fullwidth="true" />
        <Box height={18} />
        <Button
        variant="contained"
        color="success">
          Submit
        </Button>
        </Form>
        )}
      </Formik>
      </div>
      );
};

export  default MaterialForm;