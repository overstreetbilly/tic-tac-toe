import { useState } from "react";

const Player = ({ initialName, symbol }) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    if (isEditing) {
        editablePlayerName = (
            <input
                type='text'
                required
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    return (
        <li>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};

export default Player;