import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCSS } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
