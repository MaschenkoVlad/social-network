import css from "./SidebarComponent.module.css"
import { INavigationItem } from "./types"

import BookmarkIcon from "../../../../../../components/BookmarkIcon"
import ExploreIcon from "../../../../../../components/ExploreIcon"
import HomeIcon from "../../../../../../components/HomeIcon"
import MessageIcon from "../../../../../../components/MessageIcon"
import RingIcon from "../../../../../../components/RingIcon"
import SettingsIcon from "../../../../../../components/SettingsIcon"

const navigationItems: INavigationItem[] = [
  {
    img: HomeIcon,
    label: "home",
    path: "/",
  },
  {
    img: ExploreIcon,
    label: "explore",
    path: "/",
  },
  {
    img: RingIcon,
    label: "notifications",
    path: "/",
  },
  {
    img: MessageIcon,
    label: "messages",
    path: "/",
  },
  {
    img: BookmarkIcon,
    label: "bookmarks",
    path: "/",
  },
  {
    img: SettingsIcon,
    label: "settings",
    path: "/",
  },
]

const SidebarComponent: React.FC = (): JSX.Element => {
  return (
    <nav className={css.root}>
      <ul>
        {navigationItems.map(({ img: IconComponent, label }) => (
          <li className={css.menuItem} key={label}>
            <div>
              <IconComponent width={"24px"} height={"24px"} />
            </div>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SidebarComponent
