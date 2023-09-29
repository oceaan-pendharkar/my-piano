import '../styles/Key.css';
import { useState } from 'react';

export default function Key(props) {
    const [className, setClassName] = useState(props.className);

    function handleClick() {
        setClassName(props.className + "-clicked");
    }

    function handleMouseUp() {
        setClassName(props.className);
    }

    return (
        <div className={className}>
            <button className="note" onMouseDown={handleClick} onMouseUp={handleMouseUp}>
                <p className="note-name">{props.note}</p>
            </button>
        </div>
    )
}