import VariablesAndConstants from "./VariablesandConstants";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import ClientComponentDemo from "./ClientComponentDemo";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Classes from "./Classes";
import Destructing from "./Destructing";
import FindIndex from "./FindIndex";
import Spreader from "./Spreader";
import Styles from "./Styles";

export default function Lab3() {
  console.log('Hello World!');
    return (
      <div>
      <VariableTypes />
      <BooleanVariables /> 
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength /> 
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction /> 
      <FindIndex />
      <FilterFunction />
      <JsonStringify /> 
      <House />
      <Spreader />
      <Destructing />
      <FunctionDestructing /> 
      <DestructingImports />
      <Classes />
      <Styles />
      <ClientComponentDemo />
      <div id="wd-lab-3" className="container">
        <h2>Lab 3</h2>
        <VariablesAndConstants />
        <Add a={3} b={4} />
        <h3>JavaScript</h3>
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
      </div>
      <PathParameters />
      <TodoItem />
      <TodoList />
      

      </div>
  );}
  