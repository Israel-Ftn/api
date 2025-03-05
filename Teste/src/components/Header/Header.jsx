import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <header>
          <Link to='/'>TMDB Filmes Populares</Link>
   
        </header>
    </div>
  )
}

export default Header