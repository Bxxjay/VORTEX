import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Store from '../pages/Store.jsx'
import Cart from '../pages/Cart.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sneakers" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
