import Navbar from "./components/navbar"
import Header from "./components/header"
import Categories from "./components/CategoryMain"
import Procedure from "./components/procedure"
import Footer from "./components/Footer"

const Home=()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <Categories/>
        <Procedure/>
        <Footer/>
        </>
    );

}
export default Home;