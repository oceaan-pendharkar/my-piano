import '../styles/Key.css';

export default function Key(props) {
    function handleClick() {
        alert("You clicked a key!");
    }
    return (
        <div className={props.className}>
            <button className="note" onClick={handleClick}>
                <p className="note-name">{props.note}</p>
            </button>
        </div>
    )
}