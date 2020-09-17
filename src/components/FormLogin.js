import React, { Component } from 'react'
import '../css/FormLogin.css'

export class FormLogin extends Component {
    state = {
        username : "",
        password : ""
    }

    errorCodes = (code) => {
        switch (code) {
            case 400:
                return "Usuario y/o Contraseña invalidos"
        
            default:
                return `Error desconocido`
        }
    }
    
    onSubmit = async (e) => {
        e.preventDefault()

        let options = {
            method:"POST",
            body: JSON.stringify(this.state),
            headers: {
                'content-type' : 'application/json'
            }
        }

        try {

            let res = await fetch('http://127.0.0.1:8000/login/', options)

            if (!res.ok) throw new Error(this.errorCodes(res.status))

            let json = await res.json()

            localStorage.setItem('Token', json.token);
            
            window.location.reload();

        }catch(error){
            alert(error)
        }

    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <label>Username</label>
                    <br/>
                    <input type="Text" name="username" onChange={this.onChange} placeholder="Insert Username"/>

                    <br/>
                    <br/>
                    
                    <label>Password</label>
                    <br/>
                    <input type="Text" name="password" onChange={this.onChange} placeholder="Insert Password"/>

                    <br/>
                    <br/>
                    
                    <button>Login</button>
                </form>
            </div>
        )
    }

}

export default FormLogin
