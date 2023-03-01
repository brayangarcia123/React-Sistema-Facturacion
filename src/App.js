import logo from './logo.svg';

import CharacterList from './CharacterList';
import Header from './header/Header';
import Footer from './footer/Footer';
import Sidebar from './menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
