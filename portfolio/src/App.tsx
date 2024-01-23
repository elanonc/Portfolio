import './App.css'
import PortfolioNavbar from './pages/navbar/navbar'
import Experience from './pages/experience/experience'

import PortfolioHome from './pages/home/home'
import PortfolioProject from './pages/projects/projects'
import PortfolioFooter from './pages/footer/footer'

function App() {

  return (
    <>
      <PortfolioNavbar/>
      <div className='components-container'>
        <PortfolioHome/>
        <PortfolioProject/>
        <Experience/>
      </div>
      <PortfolioFooter/>
    </>
  )
}

export default App
