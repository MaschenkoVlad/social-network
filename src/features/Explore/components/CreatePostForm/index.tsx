import { useFormik } from "formik"

import css from "./CreatePostForm.module.css"

import userPicture from "../../../../assets/images/profile-1.jpg"

const CreatePostForm: React.FC = (): JSX.Element => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      newPostText: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const { newPostText } = values

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.profilePhoto}>
        <img src={userPicture} alt="current_user" />
      </div>
      <input
        id="newPostText"
        name="newPostText"
        type="text"
        onChange={handleChange}
        value={newPostText}
        placeholder="What's on your mind, User?"
        className={css.input}
      />

      <button type="submit" className={css.btn}>
        Post
      </button>
    </form>
  )
}

export default CreatePostForm
