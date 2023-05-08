import { NavLink } from "react-router-dom"

function Header() {
  return (
    <nav>
        <NavLink to='/stopwatch'>Stopwatch</NavLink> ||
        <NavLink to='/timer'> Timer</NavLink>
    </nav>
  )
}

export default Header