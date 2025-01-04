import PropsDemo from "./components/Part1Props";
import Part1UseState from "./components/Part1UseState";
import Part2UseState from "./components/Part2UseState";
import Part3UseState from "./components/Part3UseState";
import Part1UseEffect from "./components/Part1UseEffect";
import Part2UseEffect from "./components/Part2UseEffect";
import Part1UseRef from "./components/Part1UseRef";
import Part2UseRef from "./components/Part2UseRef";
import Part1UseCallBack from "./components/Part1UseCallBack";
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
      <Part1UseCallBack></Part1UseCallBack>
    </>
  );
}
