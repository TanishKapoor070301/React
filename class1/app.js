//react code    

//create h1
// const heading = React.createElement("h1", { id: "heading1", abc: "xyz" }, "hello world from React!");
//{} ->attribute to ur tags like id:"" class:"" let give id
//abc: "xyz" also possible attribute bnana h bs kuch bnao
// console.log(heading); //its an React element and this react h1 element is javascript object
//this object have one thing props have attribute and children
// {
//     props: { id: 'heading1', abc: 'xyz', children: 'hello world from React!' }
// }





/*    <div id="parent">
        <div id="child">
            <h1>hello nested</h1>
        </div>
    </div>
 */

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "nested divs")))



//to pass subling array use [,,]
/*    <div id="parent">
        <div id="child">
            <h1>hello nested</h1>
            <h2>hello nested1</h2>
        </div>
    </div>
 */


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "nested divs"), React.createElement("h2", {}, "nested divs2")]))



/*    <div id="parent">
        <div id="child">
            <h1>hello nested</h1>
            <h2>hello nested1</h2>
        </div>

        <div id="child">
            <h1>hello nested</h1>
            <h2>hello nested1</h2>
        </div>
    </div>
 */

const parent = React.createElement("div", { id: "parent" },

    [React.createElement("div", { id: "child" },

            [React.createElement("h1", {}, "nested divs"), React.createElement("h2", {}, "nested divs2")]),

        React.createElement("div", { id: "child2" },

            [React.createElement("h1", {}, "nested divs"), React.createElement("h2", {}, "nested divs2")])
    ])


//create root btao root kya hai render kisme krvana hai
const root = ReactDOM.createRoot(document.getElementById("root"));

//render heading in root
root.render(parent);


const div_inside_B = React.createElement("div", {}, "hello Tanish");
const parent_B = ReactDOM.createRoot(document.getElementById('B'));
parent_B.render(div_inside_B)