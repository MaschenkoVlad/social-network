import CurrentUser from "./components/CurrentUser"
import Logo from "./components/Logo"
import Searchbar from "./components/Searchbar"

import css from "./Topbar.module.css"

const Topbar: React.FC = (): JSX.Element => {
  return (
    <header className={css.root}>
      <div className={css.container}>
        <Logo label="Socialnetwork" />
        <Searchbar />
        <div className={css.wrapper}>
          <button className={css.btn}>create</button>
          <CurrentUser />
        </div>
      </div>
    </header>
  )
}

export default Topbar
