import { Outlet } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

import css from "./DashboardLayout.module.css"

const DashboardLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <main className={css.root}>
        <div className={css.container}>
          <Sidebar />
          <Outlet />
          <div>Right Panel</div>
        </div>
      </main>
    </>
  )
}

export default DashboardLayout
