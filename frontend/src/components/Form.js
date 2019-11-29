import React ,{ Component } from "react";
import PropTypes from "prop-types";

class Form extends Component{
    static propTypes = {
        endpoint : PropTypes.string.isRequired
    };

    state = {
        nombre_material : "",
        tipo : "",
        espesor : "",
        transmitancia_termica : "",
        estado : "",
        Users : "pablin"
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {nombre_material, tipo, espesor, transmitancia_termica, estado, Users} = this.state;
        const material = {nombre_material, tipo, espesor, transmitancia_termica, estado, Users};
        const conf = {
            method : "post",
            body : JSON.stringify(material),
            headers : new Headers({ "Content-type": "application/json"})
        };
        fetch(this.props.endpoint, conf)
        .then(response => console.log("material enviado: "+response));
    };

    render() {
        const {nombre_material, tipo, espesor, transmitancia_termica, estado} = this.state;
        return (
            <div className= "column">
                <from onSubmit = {this.handleSubmit}>
                    <div className= "field">
                        <label className = "label">nombre del material</label>
                    <div className = "control">

                        <input 
                            className = "input"
                            type = "text"
                            name = "nombre_material"
                            placeholder = "nombre del material"
                            onChange = {this.handleChange}
                            value = {nombre_material}
                            required = "true"
                        />
                        
                    </div>
                    </div>

                    <div className= "field">
                        <label className = "label">Tipo de material</label>
                    <div className = "control">

                        <input 
                            className = "input"
                            type = "text"
                            name = "tipo"
                            placeholder = "tipo de material"
                            onChange = {this.handleChange}
                            value = {tipo}
                            required = "true"
                        />
                        
                    </div>
                    </div>

                    <div className= "field">
                        <label className = "label">espesor</label>
                    <div className = "control">

                        <input 
                            className = "input"
                            type = "text"
                            name = "espesor"
                            placeholder = "espesor"
                            onChange = {this.handleChange}
                            value = {espesor}
                            required = "true"
                        />
                        
                    </div>
                    </div>

                    <div className= "field">
                        <label className = "label">conductividad termica</label>
                    <div className = "control">

                        <input 
                            className = "input"
                            type = "text"
                            name = "transmitancia_termica"
                            placeholder = "conductividad termica"
                            onChange = {this.handleChange}
                            value = {transmitancia_termica}
                            required = "true"
                        />
                        
                    </div>
                    </div>

                    <div className= "field">
                        <label className = "label">estado</label>
                    <div className = "control">

                        <input 
                            className = "input"
                            type = "text"
                            name = "estado"
                            placeholder = "estado"
                            onChange = {this.handleChange}
                            value = {estado}
                            required = "true"
                        />
                        
                    </div>
                    </div>

                   

                    <div className = "control">
                        <button type = "submit" value="Submit" className = "button is-info">
                            Crear
                        </button>

                    </div>
                </from>
            </div>
        )
    }
}

export default Form;
