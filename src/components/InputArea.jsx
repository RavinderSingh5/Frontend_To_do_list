import React, {useState} from 'react';

function InputArea(props) {
    const [inputItem, setInputItem] = useState("");

    function getInput(event) {
        setInputItem(event.target.value);
    }

    return (
        <div className="form" >
            <input onChange={getInput} type="text" value={inputItem} />
            <button
                onClick={() => {
                    props.onAdd(inputItem);
                    setInputItem("");
                }}
            >
                <span>Add</span>
            </button>
        </div>

    );
}



export default InputArea;