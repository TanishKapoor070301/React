import React from "react";
import ReactDOM from "react-dom/client";

//react element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const jsx_heading = < h1 id = "heading" > namsate using JSX < /h1>;
console.log(jsx_heading);
const rootjsx = ReactDOM.createRoot(document.getElementById("root_jsx"));
rootjsx.render(jsx_heading);