import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Playlist from './Playlist/Playlist';

function App() {
  return (
    <div>
      <Sidebar />
      <main>
        <div className="main-container">
          <Header />
          
          <Playlist />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
