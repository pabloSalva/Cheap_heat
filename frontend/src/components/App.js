import React,{Component} from "react";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from '../store'; 
import Dashboard from './materiales/Dashboard'

import DataProvider from "./DataProvider";
import Table from "./Table";

class App extends Component {
    render(){
        return(
            
            <Provider store={store}>
                <Dashboard />
                <DataProvider endpoint = "/api/materiales" 
                render = {data => <Table data= {data}
            />}/>
            </Provider>
           

            
            
           
    )}
}

ReactDOM.render(<App />, document.querySelector('#app'));

// const App = () => (
//     <DataProvider endpoint = "api/entidad" 
//                  render = {data => <Table data= {data}
//                 />}/>
// );

// const wrapper = document.getElementById("app");

// wrapper ? ReactDOM.render(< App/>, wrapper) : null;

