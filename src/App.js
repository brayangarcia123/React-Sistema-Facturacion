import './App.css';
import CharacterList from './CharacterList';
import Header from './header/Header';
import Footer from './footer/Footer';
//import Sidebar from './menu/Menu2';
import Sidebar from './sidebar/Sidebar';
import Customer from './customer/Customer';
import Seller from './seller/Seller';
import Main from './main/Main';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/customer" element={<Customer/>}/>
              <Route path="/seller" element={<Seller/>}/>
              <Route path="/characterlist" element={<CharacterList/>}/>
            </Routes>
          </Sidebar>
        </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
