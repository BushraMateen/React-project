import React from "react";
import { Component } from 'react';


class UserGreting extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Bushra</div>

        // return this.state.isLoggedIn ? (
        //     <div>Welcome Bushra</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // let message 
        // if(this.state.isLoggedIn) {
        //     message= <div>Welcome Bushra</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if (this.state.isLoggedIn){
        //     return <div>Welcome Bushra</div>
        // }else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div> Welcome Bushra</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreting