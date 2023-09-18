import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik"
import * as Yup from "yup"

import css from "../../Auth.module.css"
import { ISignInInitialValues } from "../../types"

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const initialValues: ISignInInitialValues = {
  email: "",
  password: "",
}

const SignIn: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1 className={css.title}>Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className={css.root}>
            <div className={css.fieldWrapper}>
              <Field type="email" name="email" className={css.field} />
              <ErrorMessage name="email" />
            </div>

            <div className={css.fieldWrapper}>
              <Field name="password" type="password" className={css.field} />
              <ErrorMessage name="name" />
            </div>

            <button type="submit" className={css.button}>
              Submit
            </button>
            <button type="button">forgot password</button>

            <div>
              <span className="login__account">Don't have an Account ?</span>
              <span className="login__signin" id="sign-up">
                Sign Up
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignIn
