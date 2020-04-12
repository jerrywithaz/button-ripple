import React from "react";
import { render } from "react-dom";

import Button from "./components/Button";

class App extends React.Component<{}> {
  public render() {
    return (
      <React.Fragment>
        <Button />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
