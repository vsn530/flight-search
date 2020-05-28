import React from 'react';
import firebase from 'firebase'
import googleAuthProvider from '../firebase/firebase'
import { connect } from 'react-redux';

const Header = (props) => {

    const handleClick = () => {
        if(props.isAuthenticated){
            firebase.auth().signOut().then(()=>{
                console.log(firebase.auth().currentUser)
                props.dispatch({
                    type: 'LOGOUT_USER',
                })
            }).catch(err=>console.log(err))
            return
        }
        firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
            var token = result.credential.accessToken;

            var user = result.user;

            props.dispatch({
                type: 'LOGIN_USER',
                payload: {
                    isAuthenticated: true,
                    name: user.displayName
                }
            })
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    
    
    return (
       
        <header className='App-header'>
            <div className='container'>
            <div className='login'>
                <h1><i className="fas fa-plane-departure blue"></i>Sky Scanner</h1>                
                <div>                    
                    <button className='btn btn-login' onClick={handleClick}>{props.isAuthenticated?'Logout':'Login'}</button> 
                </div>
                
            </div>                
                
            </div>
        </header>
    )
}   
const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.userData.isAuthenticated,
        userName: state.userData.name
    }
}

export default connect(mapStateToProps)(Header);