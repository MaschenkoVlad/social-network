import Counter from "../features/counter/Counter"
import Dashboard from "../features/posts"
import Home from "../features/users"

interface IRoute {
  name: string
  path: string
  Component: React.ElementType
}

export const routes: IRoute[] = [
  {
    name: "SignInPage",
    path: "/sign-in",
    Component: Counter,
  },
  {
    name: "SignUpPage",
    path: "/sign-up",
    Component: Dashboard,
  },
  {
    name: "ResetPasswordPage",
    path: "/reset-password",
    Component: Home,
  },
  // {
  //   name: "InboxListPage",
  //   path: "/inbox-list",
  //   component: null,
  // },
  // {
  //   name: "InboxPage",
  //   path: "/inbox",
  //   component: null,
  // },
  // {
  //   name: "FeedPage",
  //   path: "/feed",
  //   component: null,
  // },
]
