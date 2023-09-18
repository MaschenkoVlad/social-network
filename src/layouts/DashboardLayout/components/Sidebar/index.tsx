import CurrentUser from "./components/CurrentUser"
import SidebarComponent from "./components/Sidebar"

import css from "./Sidebar.module.css"

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className={css.root}>
      <CurrentUser />
      <SidebarComponent />
    </div>
  )
}

export default Sidebar
