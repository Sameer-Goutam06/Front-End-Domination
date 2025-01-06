import { useState } from "react";
/* eslint-disable no-unused-vars */
export default function Part3UseState() {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
    const [isEven, setIsEven] = useState(false);

    return (
        <>
            <div>
                <h1 className="text-lg font-sans text-center mt-4">
                    Pop Out last elements whenever you click the button
                </h1>
                <div className="p-4">
                    {val.filter(item => (isEven ? item % 2 === 0 : item % 2 !== 0))
                        .map(item => (
                            <h5 key={item}>{item}</h5>
                        ))}
                </div>
                <button
                    className="p-3 rounded-full font-sans bg-blue-400 text-white"
                    onClick={() => setIsEven(!isEven)}
                >
                    Render {isEven ? "Odd" : "Even"} Numbers
                </button>
            </div>
        </>
    );
}
