// import React, { useState } from "react";
import React from "react";

function ToDoItem(props) {

    // CODE FOR MAKING LINE THROUGH ON CLICK TO DO ITEMS, AFTER AGAIN CLICKING REMOVE LINE THROUGH

    // const [line, setLine] = useState("True");

    // function handleClick() {
    //     setLine(prevValue np=> {
    //         return !prevValue;
    //     });
    // }    

    // return (
    //     <div onClick={handleClick}>
    //         <li style={{ textDecoration: line ? "none" : "line-through" }}>{props.text}</li>
    //     </div>

    // );

    //CODE FOR DELETING ITEMS FROM TO DO LIST

    return (
        <div
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoItem;
