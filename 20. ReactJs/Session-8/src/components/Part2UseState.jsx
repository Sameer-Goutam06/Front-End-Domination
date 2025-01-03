import { useState } from "react";
export default function Part2UseState(){
    //using state on arrays to pop out last elements
    const [items, setItems] = useState([1,2,3,4,5]);
    return(
        <>
            <h1 className="text-lg font-sans text-center mt-4">Pop Out last elements whenever you click the last button</h1>
            <div className="p-4">
                {
                    items.map((item) => (
                        <h5 key={item}>{item}</h5>
                    ))
                }
            </div>
            <button className="p-3 rounded-full font-sans bg-blue-400 text-white"
            onClick={() => {
                setItems((prevItems) => {
                    const newItems = [...prevItems]; // Create a copy of the array
                    newItems.pop(); // Safely modify the copy
                    return newItems.length > 0 ? newItems : ["The array is empty"]; // Return the copy
                });
            }}>Pop Out Last Element
            </button>
        </>
    )
}