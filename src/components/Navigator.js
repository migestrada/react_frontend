import React, { Component } from 'react'

export default class Navigator extends Component {
    state = {
        rol : this.props.rol
    }

    administradorNav = () => {
        return <nav>
            <ul>
                <li><a href="https://www.google.com/" rel="noopener">Tareas</a></li>
                <li><a href="https://www.google.com/" rel="noopener">Usuarios</a></li>
                <li><button onClick={this.logout}>Logout</button></li>
            </ul>
            <h3>Administrador</h3>
        </nav>
    }

    funcionarioNav = () => {
        return <nav>
            <ul>
                <li><a href="https://www.google.com/" rel="noopener">Tareas</a></li>
                <li><a href="https://www.google.com/" rel="noopener">Informes</a></li>
                <li><button onClick={this.logout}>Logout</button></li>
            </ul>
            <h3>Funcionario</h3>
        </nav>
    }   

    render() {
        switch (this.state.rol) {
            case "1":
                return this.administradorNav()
            case "2":
                return this.funcionarioNav()
            default:
                return <h1>Solicita Un Rol</h1>
        }
    }
}
