import React,{Fragment} from 'react'
import CustomLoading from '../components/CustomLoading'
import {Route,Redirect} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import ErrorPage from '../components/ErrorPage'
import NewQuestion from '../components/NewQuestion'
import LeaderBoard from '../components/LeaderBoard'
import Pol from '../components/Pol'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function signRouting(locationUrl ,redirectfrom){   
    if(locationUrl==='/'){
        return <Redirect to='/login'/>
    }else if(locationUrl === '/register'){
        return <Register/>
    }else if(redirectfrom !== null){
        return <Login redirectfrom={redirectfrom}/>
    }else{
        return <Login redirectfrom={null}/>
        
    }
}

function itemRouting(item){
    switch(item){
        case '/pol': return <Redirect to ='/pol/unanswered'/>
        case '/pol/unanswered': return <Fragment><NavBar/><Home isAns={0}/><Footer/></Fragment>
        case '/pol/answered': return <Fragment><NavBar/><Home isAns={1}/><Footer/></Fragment>
        case '/': return <Redirect to='/pol'/>
        case '/logout': return <Redirect to='/login'/>
        case '/login':  return <Redirect to='/pol'/>
        case '/register': return <Redirect to='/pol'/>
        case '/add': return <Fragment><NavBar/><NewQuestion/><Footer/></Fragment>
        case '/leader-board': return <Fragment><NavBar/><LeaderBoard/><Footer/></Fragment>
        case '/not-found': return <ErrorPage/>  
        default:return<ErrorPage/>
    }

}

function landingRouting(locationUrl){
    if(locationUrl.includes('questions') ){
        return <Fragment><NavBar/><Route path='/questions/:questionId'><Pol/></Route><Footer/></Fragment>
    }else {
        return itemRouting(locationUrl)
    }
}

export function controlRouting(status, locationUrl){
    switch (status){    
        case 0: return signRouting(locationUrl) // cred uploaded  auth none         
        case 1: return <CustomLoading/>// logged waiting fetch data exited from login submission   
        case 2: return landingRouting(locationUrl) // all data uplooaded        
        default: return <CustomLoading/> // initialized
    }
} 


