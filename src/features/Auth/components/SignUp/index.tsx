import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik"
import * as Yup from "yup"

import FacebookIcon from "../../../../components/FacebookIcon"
import GoogleIcon from "../../../../components/GoogleIcon"
import TwitterIcon from "../../../../components/TwitterIcon"
import css from "../../Auth.module.css"
import { ISignUpInitialValues } from "../../types"

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  userFirstName: Yup.string().required("Required"),
  userLastName: Yup.string().required("Required"),
  userNickname: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  repeatPassword: Yup.string().required("Required"),
})

const initialValues: ISignUpInitialValues = {
  userFirstName: "",
  userLastName: "",
  userNickname: "",
  email: "",
  password: "",
  repeatPassword: "",
}

const SignUp: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1 className={css.title}>Create Account</h1>
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
              <Field type="text" name="userFirstName" className={css.field} />
              <ErrorMessage name="userFirstName" />
            </div>

            <div className={css.fieldWrapper}>
              <Field type="text" name="userLastName" className={css.field} />
              <ErrorMessage name="userLastName" />
            </div>

            <div className={css.fieldWrapper}>
              <Field type="text" name="userNickname" className={css.field} />
              <ErrorMessage name="userNickname" />
            </div>

            <div className={css.fieldWrapper}>
              <Field type="email" name="email" className={css.field} />
              <ErrorMessage name="email" />
            </div>

            <div className={css.fieldWrapper}>
              <Field name="password" type="password" className={css.field} />
              <ErrorMessage name="password" />
            </div>

            <div className={css.fieldWrapper}>
              <Field name="repeatPassword" type="password" className={css.field} />
              <ErrorMessage name="repeatPassword" />
            </div>

            <button className={css.button} type="submit">
              Submit
            </button>

            <div className={css.socials}>
              <span className={css.socialIcon}>
                <FacebookIcon width="24px" height="24px" />
              </span>
              <span className={css.socialIcon}>
                <TwitterIcon width="24px" height="24px" />
              </span>
              <span className={css.socialIcon}>
                <GoogleIcon width="24px" height="24px" />
              </span>
            </div>

            <div>
              <span className={css.loginAccount}>Already have an Account ?</span>
              <span className={css.loginAccountRedirect}>Sign In</span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUp
