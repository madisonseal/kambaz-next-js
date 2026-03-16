"use client"
import Link from "next/link";
import PassingFunctions from "./PassingFunctions";
import store from "./store";
import { Provider } from "react-redux";
import ReduxExamples from "./redux/page";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import StringStateVariables from "./StringStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";

export default function Lab4() {
  return (
    <Provider store={store}>
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={() => alert("Hello")} />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <hr />
      <ReduxExamples />
      <hr />
      <Link href="/labs/lab4/redux">Redux Examples</Link>
      <hr />
      <Link href="/labs/lab4/react-context">React Context Examples</Link>
      <hr />
      <Link href="/labs/lab4/zustand">Zustand Examples</Link>
    </div>
  </Provider>
  );
}