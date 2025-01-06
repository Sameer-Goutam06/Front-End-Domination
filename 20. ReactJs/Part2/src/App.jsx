import PropsDemo from "./components/Props/Part1Props";
import Part1UseState from "./components/Hooks/Part1UseState";
import Part2UseState from "./components/Hooks/Part2UseState";
import Part3UseState from "./components/Hooks/Part3UseState";
import Part1UseEffect from "./components/Hooks/Part1UseEffect";
import Part2UseEffect from "./components/Hooks/Part2UseEffect";
import Part1UseRef from "./components/Hooks/Part1UseRef";
import Part2UseRef from "./components/Hooks/Part2UseRef";
import {Parent0,Parent1} from "./components/Hooks/Part1UseCallBack";
import Part2UseCallBack from "./components/Hooks/Part2UseCallBack";
import Part3UseCallBack from "./components/Hooks/Part3UseCallBack";
//understanding states and properties
export default function App() {
  return (
    <>
      <Part1UseState></Part1UseState>
      <Part2UseState></Part2UseState>
      <Part3UseState></Part3UseState>
      <br/>
      <PropsDemo></PropsDemo>
      <br/>
      <Part1UseEffect></Part1UseEffect>
      <br/>
      <Part2UseEffect></Part2UseEffect>
      <br/>
      <Part1UseRef></Part1UseRef>
      <br/>
      <Part2UseRef></Part2UseRef>
      <br/>
      <Parent0/>
      <br/>
      <Parent1/>
      <br/>
      <Part2UseCallBack/>
      <br/>
      <Part3UseCallBack/>
    </>
  );
}
