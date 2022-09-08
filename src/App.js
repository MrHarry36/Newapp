import React from "react";
import Navbar from "./Component/Navbar";
import Section1 from "./Component/section1";
import Section2 from "./Component/section2";
import Section3 from "./Component/section3";
import Section4 from "./Component/section4";
import Section5 from "./Component/section5";
import Footer from "./Component/footer";
import {Routes,Route} from "react-router-dom"





function App() {
  return (
    <div className="App">
      
<Navbar/>

<Section1/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Footer/>






    </div>
  );
}

export default App;
