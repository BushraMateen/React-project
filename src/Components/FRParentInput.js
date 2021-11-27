import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import FRInput from './FRInput'

class FRParentInput extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()

    }

    render(){
        return(
            <div>
                <FRInput ref = {this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
        }
    }
export default FRParentInput