import Navbar from './components/Navbar';
import Header from './components/Header';
import Players from './components/Players';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Players />
      </main>
    </>
  );
}

export default App;
