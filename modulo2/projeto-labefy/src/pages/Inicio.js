import React from "react";
import Registro from "./Registro";
import Login from "./Login";
import Labefy from "./Labefy";
import styled from "styled-components";


export default class Inicio extends React.Component{
    render(){
        return(
            <div>
                <button>Login</button>
                <button>Registro</button>
                <button>Labefy</button>
            </div>
        )
    }
}