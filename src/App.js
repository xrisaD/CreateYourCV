import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <OutlinedTimeline />
    </>
  );
}

export default App;
