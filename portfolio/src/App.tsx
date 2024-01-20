import './App.css'
import PortfolioNavbar from './components/navbar/navbar'
import Experience from './pages/experience/experience'

import PortfolioHome from './pages/home/home'
import PortfolioProject from './pages/projects/projects'

function App() {

  return (
    <>
      <PortfolioNavbar/>
      <div className='components-container'>
        <PortfolioHome/>
        <PortfolioProject/>
        <Experience/>
      </div>
    </>
  )
}

export default App
