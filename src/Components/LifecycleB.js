import React from "react";
import { Component } from "react";

class LifecycleB extends Component{
    constructor(props){
        super(props)


        this.state = {
            name : 'Bushra'
        }
        console.log('LifecycleB Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    render(){
        console.log('LifecycleB render')
        return  <div>Lifecycle B</div>

        
    }
}

export default LifecycleB