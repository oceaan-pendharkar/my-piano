import React from 'react';
import Key from './Key';
import '../styles/Piano.css';

class Piano extends React.Component{
    render(){
        return(
            <div className="piano">
                <Key />
                <Key />
                <Key />
            </div>
        )
    }
}

export default Piano;