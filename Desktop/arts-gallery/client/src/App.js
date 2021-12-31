import React from "react";
import Searchbox from "./Searchbox";
import Card from "./Card";
import Form from "./Form";
import Information from "./Information";
import Navbar from "./Navbar";
import Modal from "./Modal";

import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate// redirect
} from "react-router-dom";
import Editform from "./Editform";

const App = () => {
  return (
    
      
  
      
      <Router className="tc">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Information />} />
      </Routes>
      <Routes>
        <Route exact path="/form" element={<Form />} />
      </Routes>
      <Routes>
        <Route exact path="/edit/:id" element={<Editform />} />
      </Routes>
  </Router>
  )
};
 
export default App;

{
  /*<h1 > Arts GalLery</h1><button class="button3"><span> Add New Painting </span></button> 
                            <Searchbox/>
                        
                            <Information/>
                            
                            <Route path="/" component = { Information} />
                            <Route path="/Form" component = {Form} />
                            
                            
                             <Route path="/Form"> <Form/> </Route> 
                             <Information/>
                            <Form/>*/
}
