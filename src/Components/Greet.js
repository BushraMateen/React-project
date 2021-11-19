import React from 'react';


const Greet = props => {
    console.log(props)
    return <h1>Hello {props.name} as {props.heroname}</h1>
}

export default Greet