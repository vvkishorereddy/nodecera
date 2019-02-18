import React, { Component } from "react";

const withMouse = WrappedComponent => {
  return class withMouse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Mouse"
      };
    }

    render() {
      return <WrappedComponent {...this.props} name={this.state.name} />;
    }
  };
};

const withCat = WrappedComponent => {
  return class withCat extends Component {
    render() {
      console.log("inside cat", this.props);
      return <WrappedComponent {...this.props} name="Cat" />;
    }
  };
};

const NameComponent = ({ name }) => {
  return <div> {name} </div>;
};

const App = () => {
  const EnhancedComponent = withMouse(withCat(NameComponent));

  return (
    <div>
      <EnhancedComponent />
    </div>
  );
};

export default App;
