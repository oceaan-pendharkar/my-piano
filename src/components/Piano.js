import Key from './Key';
import '../styles/Piano.css';

export default function Piano() {
        return(
            <div className="piano">
                <Key className="key"/>
                <Key className="black-key"/>
                <Key className="key"/>
                <Key className="black-key"/>
                <Key className="key"/>
                <Key className="key"/>
                <Key className="black-key"/>
                <Key className="key"/>
                <Key className="black-key"/>
                <Key className="key"/>
                <Key className="black-key"/>
                <Key className="key"/>
            </div>
        )
}

