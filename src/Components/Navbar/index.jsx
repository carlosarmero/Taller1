import {NavLink} from 'react-router-dom'
import Eslider from '../Slider/Slider'

const Navbar = () => {
    
    const activeStyle = 'underline underline-offset-4'

    return(
      <header className='bg-white shadow-md py-2 '>
        <nav className='container mx-auto flex justify-between items-center '>
          <ul className='flex items-center gap-4 mt-4'>

           <li>
            <NavLink to = '/'
            className={({isActive}) => isActive ? activeStyle:undefined}
            >
            Todos
            </NavLink>
           </li>
           <li>
            <NavLink to = '/Developers'
            className={({isActive}) => isActive ? activeStyle:undefined}
            >
            Developers
               
            </NavLink>
            
           </li>
           <li>
            <NavLink to = '/Sobre'
            className={({isActive}) => isActive ? activeStyle:undefined}
            >
            Sobre mi
            </NavLink>
           </li>
           <li>
            <NavLink to = '/Projects'
            className={({isActive}) => isActive ? activeStyle:undefined}
            >
            Proyectos
            </NavLink>
           </li>

          </ul>       
        </nav>
      </header>
  
    )
}

export default Navbar