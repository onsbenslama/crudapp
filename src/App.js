import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

function App() {
 return (
<Router>
<Navbar/>

<Route path="/" exact>
<Home/>
</Route>

<Route path="/note">
<Note/>
</Route>

<Route path="/create">
<CreateNote/>
</Route>
</Router>
 )
}

export default App;
