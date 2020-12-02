import React from 'react'
import {
    connect
} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import Navigation from './component/navbar'
import Home from './page/home'
import LinkPage from './page/linkpage'
import TodoList from './page/todolist'
import NotFound from './page/404notfound'
import CarouselComp from './page/carousel'
import NewsAPIid from './page/newsAPI_id'
import NewsAPIus from './page/newsAPI_us'
import NewsAPIjp from './page/newsAPI_jp'
import Login from './page/login'
import Axios from 'axios'
import {
    login
} from './action'
import Register from './page/register'

class App extends React.Component {
    componentDidMount(){
        Axios.get(`http://localhost:2000/login_users?username=${localStorage.getItem('username')}`)
        .then((res) => this.props.login(res.data[0]))
        .catch((err) => console.log(err))
    }

    render(){
        return(
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/LinkPage' component={LinkPage}/>
                    <Route path='/Carousel' component={CarouselComp}/>
                    <Route path='/TodoList' component={TodoList}/>
                    <Route path='/NewsAPIid' component={NewsAPIid}/>
                    <Route path='/NewsAPIus' component={NewsAPIus}/>
                    <Route path='/NewsAPIjp' component={NewsAPIjp}/>
                    <Route path='/Login' component={Login}/>
                    <Route path='/Register' component={Register}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default connect(null, {login}) (App)