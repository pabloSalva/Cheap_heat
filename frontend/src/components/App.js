import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

// class App extends Component {
//     render(){
//         return <h1>React App</h1>
//     }
// }

const App = () => (
    <DataProvider endpoint = "api/entidad" 
                 render = {data => <Table data= {data}
                />}/>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(< App/>, wrapper) : null;

