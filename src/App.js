import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ScriptTag from 'react-script-tag';
import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css"
import "./assets/css/owl.carousel.css"
import "./assets/css/owl.theme.css"

import Home from "./Home";
import Login from "./components/Signin"
import SignUp from "./components/signup";
import PostAd from "./components/PostAd";
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/post-ad" element={<PostAd />} />
          <Route exact path="/categories" element={<SearchPage />} />
          {/*<Route exact path="/assignment" component={Assignment}/>
        <Route exact path="/service" component={service}/>
        <Route exact path="/contact" component={contact}/>
        <Route exact path="/about" component={about}/>
        <Route exact path="/signup/Signinmain" component={Signinmain}/>
        <Route exact path="/signup/signinfreelancer" component={Signinfreelancer}/>
        <Route exact path="/checkout" component={checkout}/> */}

        </Routes>
        {/* <ScriptTag>
          <script src="/assets/js/jquery-latest.js"></script>
          <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
          <script src="/assets/js/owl.carousel.min.js"></script>
          <script src="/assets/js/jquery.matchHeight-min.js"></script>
          <script src="/assets/js/hideMaxListItem.js"></script>
          <script src="/assets/plugins/jquery.fs.scroller/jquery.fs.scroller.js"></script>
          <script src="/assets/plugins/jquery.fs.scroller/jquery.fs.selecter.js"></script>
          <script src="/assets/js/script.js"></script>


        </ScriptTag> */}
      </div>
      {/* <h1 className="App-intro">;{this.state.apiResponse}</p> */}

    </BrowserRouter >

  );
}

export default App;
