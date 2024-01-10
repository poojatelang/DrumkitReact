import React, { useState } from 'react'
import data from "./Data"

const Sounds = () => {
    const [state, setState] = useState("");
    console.log(state)
    const handleClick = (key) => {
        data.map((ele, ind) => {
            switch (key) {
                case ele.name:
                    let tom = new Audio(ele.audio);
                    tom.play();
                    setState(key);

                    break;
                default: console.log(key);
            }
        })
    }
    return (
        <>

            <div className="set">
                {data.map((ele, index) => {
                    return (
                        <button

                            key={index}
                            style={{ backgroundImage: `url("${ele.img}")` }}
                            className={ele.name == state ? "drum pressed" : "drum"}
                            onClick={() => handleClick(ele.name)}
                            onKeyPress={(e) => handleClick(e.key)}>
                            {ele.name}

                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default Sounds