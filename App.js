const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{id:"grandchild"},"hello world child")
    )
)

 
const heading = React.createElement("h1",
      {id:"heading"}
    ,"hello world");

const root =ReactDOM.createRoot( document.getElementById("root"));

root.render(parent);