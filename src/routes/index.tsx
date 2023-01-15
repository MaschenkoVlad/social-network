import { Routes, Route } from "react-router-dom"

interface IProp {
  routes: IRoute[]
}
interface IRoute {
  name: string
  path: string
  Component: React.ElementType
}

const AppRoutes: React.FC<IProp> = ({ routes }): JSX.Element => {
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
