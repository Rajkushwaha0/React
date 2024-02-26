//
//
// <div id="root">
//  <div id="box">
//          <h1 id="heading">Hellow World!</h1>
//          <h1 id="heading">Heading2</h1>
//  </div>
//</div>
//
//

const heading = React.createElement("h1", { id: "heading" }, "Hello World!");
// console.log(heading);
const heading2 = React.createElement("h1", { id: "heading" }, "Heading2");
const box = React.createElement("div", { id: "box" }, [heading, heading2]);
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// console.log(root);
// root.render(box);

//
//
// <div id="root">
//  <div id="heading">
//      <div id="child">
//          <h1>Nested example</h1>
//      </div>
//  </div>
//</div>
//
//

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Nested Example")
  )
);
// console.log(parent);
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(parent);

//
//
// <div id="root">
//  <div id="parent">
//      <div id="child">
//          <h1>I am first div first heading</h1>
//          <h1>I am first div second heading<h1>
//      </div>
//      <div id="child">
//          <h1>I am second div first heading</h1>
//          <h1>I am second div second heading<h1>
//      </div>
//  </div>
//</div>
//
//

const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am first div first heading"),
    React.createElement("h1", {}, "I am first div second heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am second div first heading"),
    React.createElement("h1", {}, "I am second div second heading"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent1);
