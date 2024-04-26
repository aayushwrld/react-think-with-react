
// Iteration-1x

let container = document.getElementById("react-container")
// ReactDOM.render("Hello! Welcome to React",container)



// Iteration-2

function ReactContainer() {
  return React.createElement(
    'h1',
    { id: "h1-tag" },
    'Hello!',
    React.createElement('div', null, "Welcome to react")
  )

}
// ReactDOM.render(RectContainer() , container)


// Iteration-3

class ReactContainer extends React.Component {
  // JSX tags
  // JSX there should be one parent element
  render() {
    return (
      <div>Hello! Welcome to Kalvium
        <div>This is babel</div>
      </div>)
  };
}

// Direclty pass the component to render
ReactDOM.render(<ReactContainer />, container);