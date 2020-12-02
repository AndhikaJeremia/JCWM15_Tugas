import React from 'react'
import {
    Form,
    Button
} from 'react-bootstrap'
import {
    Redirect
} from 'react-router-dom'
import Axios from 'axios'
import {
    login
} from '../action'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            login_users: []
        }
    }

    btnLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value
        console.log(username, password)

        if(!username || !password) return alert('input all form')

        Axios.get(`http://localhost:2000/login_users?username=${username}&password=${password}`)
        .then((res) => {
            console.log(res.data)
            if(res.data.length === 0) return alert('invalid Username or Password')
            this.props.login(res.data[0])
            localStorage.setItem('username', username)
        })
        .catch((err) => console.log(err))
    }
    
    
    render () {
        if (this.props.username) return <Redirect to='/'/>
        return (
            <div style={styles.container}>
                <h1>Login Page</h1>
                <Form.Control ref='username' style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref='password'style={styles.item} type="password" placeholder="Enter Password" />
                <Button onClick={this.btnLogin}>Login</Button>

            </div>
        )
    }
}
const styles = {
    container: {
        margin: '100px auto',
        width: '300px', 
        height: '300px',
        backgroundColor: 'lightblue',
        padding: '15px',
        borderRadius: '15px'
    },
    item: {
        margin: '15px 0'
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, { login })(Login)