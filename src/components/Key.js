import React from 'react';
import '../styles/Key.css';

class Key extends React.Component {
    render(){
        // check if the note is a sharp note
        let keyClassName = "key";
        if(this.props.note.includes("b")){
            keyClassName = "black-key"
            //hide note name
            return(
                <div className={keyClassName}>
                    <div className="key-text">
                        &nbsp;
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className={keyClassName}>
                    <div className="key-text">
                    {this.props.note.toUpperCase()}
                    </div>
                </div>
        )
        }
    }
}

export default Key;