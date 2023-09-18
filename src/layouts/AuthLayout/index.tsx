import { Outlet } from "react-router-dom"

import css from "./AuthLayout.module.css"

import bannerImg from "../../assets/images/img-login.svg"

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.authBanner}>
          <img src={bannerImg} alt="auth_banner" />
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
