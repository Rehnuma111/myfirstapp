import { useState } from "react";
let a = 10;

const EventHandling = () => {
    const [count, setCount] = useState(0);

    const handleclick = () => {
        console.log("button was clicked");
        console.log("Click event handling");
        a++;
        console.log(a);
    };
    const handleclick2 = () => {
        setCount(count + 3);
    };

    return (
        <div>
            <h1 className="text-center"> Event handling </h1>
            <button onDoubleClick={handleclick} className="btn btn-danger">
               
                Click me
            </button>
            <button
                onClick={() => {
                    console.log("from inline function");
                }}
                className="btn btn-danger"
            >
                
                Click me!!
            </button>

             <button className="btn btn-primary" onClick={handleclick2}> Update state</button>

            <h1> {a} </h1> 
            <h1> {count} </h1>
        </div>
    );
};
export default EventHandling;
