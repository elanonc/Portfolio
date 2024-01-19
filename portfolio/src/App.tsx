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
        <Experience/>
        <PortfolioProject/>
      </div>
    </>
  )
}

export default App
