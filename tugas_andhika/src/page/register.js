import Axios from 'axios'
import React from 'react'
import {
    Form,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Regs: false,
            Database: [],
            Datainput: [{
                username: '',
                email: '',
                password: '',
            }]
        }
    }
    show = () => {
        if (this.state.Regs === false) return (
            <div style={styles.container}>
                <h1>Register</h1>
                <Form.Control ref='username' style={styles.item} type="text" placeholder="Enter Username" />
                <Form.Control ref='email' style={styles.item} type="text" placeholder="Enter email" />
                <Form.Control ref='password' style={styles.item} type="password" placeholder="Enter Password" />
                <Button onClick={this.btnSubmit}>Submit</Button>
            </div>
        )
        if (this.state.Regs === true) return (
            <div style={styles.containerdone}>
                <h1>Your Account Has Been Registered</h1>
                <Button as={Link} to='/Login' style={styles.itemdone}>Login Now</Button>
                <Button as={Link} to='/' style={styles.itemdone}>To Home Page</Button>
            </div>
        )
    }
    btnSubmit = () => {
        let username = this.refs.username.value
        let email = this.refs.email.value
        let password = this.refs.password.value
        if (!username || !password || !email) return alert('input all form')
        Axios.get(`http://localhost:2000/login_users?username=${username}&email=${email}`)
            .then((res) => {
                console.log(res.data)
                console.log(res.data.length)
                if (res.data.length >= 1 ) return alert('username or email has been register')
                if (res.data.length === 0) return (
                    Axios.post('http://localhost:2000/login_users', {
                        username: username,
                        email: email,
                        password: password
                    })
                        .then((res) => {
                            console.log(res)
                            this.setState({ Regs: true })
                        })
                )

            })
    }

    render() {
        return (
            this.show()
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
    },
    containerdone: {
        margin: '100px auto',
        width: '500px',
        height: '300px',
        backgroundColor: 'lightblue',
        padding: '15px',
        borderRadius: '15px'
    },
    itemdone: {
        margin: '15px 0 15px 75px'
    }

}

export default Register