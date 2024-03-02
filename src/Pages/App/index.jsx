import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Developers from '../Developers';
import Projects from '../../Components/Projects';
import Navbar from '../../Components/Navbar';
import Sobre from '../Sobre/sobre';
import Eslider from '../../Components/Slider/Slider';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Developers', element: <Developers  /> },
    { path: '/Projects', element: <Projects /> },
    { path: '/Sobre', element :<Sobre/>},
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
   )
}
export default App
