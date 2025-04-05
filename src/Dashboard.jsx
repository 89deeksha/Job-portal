import Head from "./Components/Header/Head";
import Cards from "./Components/Jobcard/Cards";
import Nav from "./Components/Navbar/Nav";
import Search from "./Components/Searchbar/Search";
import jobdata from "./Dumydata"
import "./index.css";

function Dashboard() {
  return (
    <>
    {/* All components are listed below */}
      <Nav/> 
      <Head/>
      <Search/>
      {jobdata.map((job)=>{
       return <Cards key={job.id}{...job}/>
      })}
      
    </>
  );
}

export default Dashboard;
