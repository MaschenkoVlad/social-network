import css from "./Searchbar.module.css"

const Searchbar: React.FC = (): JSX.Element => {
  return (
    <div className={css.searchBar}>
      <input type="search" placeholder="search" />
    </div>
  )
}

export default Searchbar
