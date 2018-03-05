import React from "react";
import { render } from "react-dom";

const arr = [
  "Get up of the bed at 6:00",
  "Brush your teeth at 6:05",
  "Do some exercises at 6:15",
  "Take a bath at 6:30",
  "Eat you breakfast at 6:40",
  "Are you ready to drive to work at 7:00?",
  "Don't forget your appointment at 8:30",
  "You have a break at 9:30",
  "Congratulations! you have free today at 12:00",
  "It is a good day to eat your lunch in the resturant",
  "Go and visit some old friends",
  "Ops! it is the time to watch your favorit team RM",
  "Real Madrid vs PSG at 20:45",
  "Hey man! you have to sleep now"
];
const text = "This is a list for next freday for ";
function ToDoList(props) {
  return <ul>{arr.map((obj,index) => <li key={index.toString()}>{obj}</li>)}</ul>;
}
function Title(props) {
  return (
    <h1>
      {text} {props.name}
    </h1>
  );
}
class App2 extends React.Component {
  render() {
    return (
      <div>
        <Title name="Mousa" />
        <ToDoList />
      </div>
    );
  }
}
render(<App2 name="Mousa" time="5s" />, document.getElementById("root"));
