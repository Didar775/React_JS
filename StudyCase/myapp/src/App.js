import React, { useState } from "react";
import { BrowserRouter , Route} from "react-router-dom";
import './styles/App.css' 
import Posts from "./pages/Posts"



function App() {

  return (
      <BrowserRouter>
        <Route path = "/posts">
          <Posts/>
        </Route>
      </BrowserRouter>
  )
}

export default App;
