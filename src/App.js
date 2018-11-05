import React, { Component } from "react";
import Button from "./components/button";
import MainSlider from "./components/MainSlider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
  }

  galleryspin(sign) {
    let spinner = document.getElementsByClassName("spinner")[0];
    if (!sign) {
      let newAngle = this.state.angle + 45;
      this.setState({ angle: newAngle });
    } else {
      let newAngle = this.state.angle - 45;
      this.setState({ angle: newAngle });
    }
    spinner.setAttribute(
      "style",
      "-webkit-transform: rotateY(" +
        this.state.angle +
        "deg); -moz-transform: rotateY(" +
        this.state.angle +
        "deg); transform: rotateY(" +
        this.state.angle +
        "deg);"
    );
  }

  render() {
    return (
      <div className="App">
        <MainSlider />

        <Button
          value=" &lt;"
          update={this.galleryspin.bind(this)}
          returnValue="-"
          buttonClass="ss-icon"
        />
        <Button
          value="&gt;"
          update={this.galleryspin.bind(this)}
          returnValue=""
          buttonClass="ss-icon-right"
        />
      </div>
    );
  }
}

export default App;
