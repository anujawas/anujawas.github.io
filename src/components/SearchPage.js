
import React from "react";
import Footer from "./Footer";
import Header from "./header";
import Navbar from "./navbar";
import Results from "./Results";
import Search from "./searchbar";

const SearchPage = () => {
    return (
        <>
           <Navbar/>
           <Search/>
           <Results/>
           <Footer/>
        </>
    )
}
export default SearchPage;