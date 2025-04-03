import Head from "./Components/Header/Head";
import Cards from "./Components/Jobcard/Cards";
import Nav from "./Components/Navbar/Nav";
import Search from "./Components/Searchbar/Search";
import "./index.css";

function App() {
  return (
    <>
      <Nav/>
      <Head/>
      <Search/>
      <Cards/>
    </>
  );
}

export default App;
