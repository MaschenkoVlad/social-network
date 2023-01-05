import { Routes, Route } from "react-router-dom"

import { routes } from "./routes"

const AppRoutes = (): JSX.Element => {
  return (
    <>
      <Routes>
        {routes.map(({ name, path, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}

export default AppRoutes
