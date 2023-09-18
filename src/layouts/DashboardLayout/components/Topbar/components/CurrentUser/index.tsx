import css from "./CurrentUser.module.css"

import userImage from "../../../../../../assets/images/profile-1.jpg"

const CurrentUser: React.FC = (): JSX.Element => {
  return (
    <div className={css.profilePhoto}>
      <img src={userImage} alt="current_user" />
    </div>
  )
}

export default CurrentUser
