import { useState } from "react";
export default function Part1UseState()
{
const [val, setVal] = useState({ name: "Sameer", isPresent: false });
  return (
    <>
      <div className="p-4">
        <h1 className="text-base font-sans">State and Properties</h1>
        <h2 className="font-sans">Name: {val.name}</h2>
        <h2 className="font-sans">IsPresent: {val.isPresent.toString()}</h2>
        <button
          onClick={() => setVal({ ...val, isPresent: !val.isPresent })}
          className={`p-2 ${
            val.isPresent ? "bg-blue-500" : "bg-red-500"
          } font-sans rounded-full text-white`}
        >
        Change IsPresent
        </button>
      </div>
    </>
  );
}