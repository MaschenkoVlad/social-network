import css from "./CurrentUser.module.css"

import profilePic from "../../../../../../assets/images/profile-1.jpg"

const CurrentUser: React.FC = (): JSX.Element => {
  return (
    <div className={css.root}>
      <div className={css.profilePhoto}>
        <img src={profilePic} alt="current_user" />
      </div>
      <div className={css.userBio}>
        <span>Diana Ayi</span>
        <span className={css.userNickname}>@dayi</span>
      </div>
    </div>
  )
}

export default CurrentUser
