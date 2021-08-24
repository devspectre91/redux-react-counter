import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  handleClick = (e) => {
    if (e.target.dataset.id === "increment") {
      this.props.dispatch({ type: "increment" });
    } else if (e.target.dataset.id === "decrement") {
      this.props.dispatch({ type: "decrement" });
    } else if (e.target.dataset.id === "reset") {
      this.props.dispatch({ type: "reset" });
    } else if (e.target.dataset.id === "step5") {
      this.props.dispatch({ type: "step5" });
    } else if (e.target.dataset.id === "step10") {
      this.props.dispatch({ type: "step10" });
    } else if (e.target.dataset.id === "step15") {
      this.props.dispatch({ type: "step15" });
    } else if (e.target.dataset.id === "15") {
      this.props.dispatch({ type: "15" });
    } else if (e.target.dataset.id === "100") {
      this.props.dispatch({ type: "100" });
    } else if (e.target.dataset.id === "200") {
      this.props.dispatch({ type: "200" });
    }
  };
  render() {
    return (
      <>
        <header className="container p-6 mt-6">
          <div className="title has-text-centered has-text-dark">
            Counter App
          </div>
        </header>
        <main>
          <div className="level">
            <div className="level-item">
              <div
                id="display"
                className="is-size-2 has-text-weight-bold has-text-dark"
              >
                {this.props.state.counter}
              </div>
            </div>
          </div>
          <div className="columns is-centered p-4">
            <div className="column is-5 is-multiline is-centered">
              <div className="has-text-centered has-text-weight-bold my-4">
                Steps
              </div>
              <div className="has-text-centered">
                <div
                  className={
                    this.props.state.step === 5
                      ? "button mx-4 step is-warning"
                      : "button mx-4 step"
                  }
                  data-id="step5"
                  onClick={this.handleClick}
                >
                  5
                </div>
                <div
                  className={
                    this.props.state.step === 10
                      ? "button mx-4 step is-warning"
                      : "button mx-4 step"
                  }
                  data-id="step10"
                  onClick={this.handleClick}
                >
                  10
                </div>
                <div
                  className={
                    this.props.state.step === 15
                      ? "button mx-4 step is-warning"
                      : "button mx-4 step"
                  }
                  data-id="step15"
                  onClick={this.handleClick}
                >
                  15
                </div>
              </div>
            </div>
            <div className="column is-5 is-multiline is-centered">
              <div className="has-text-centered has-text-weight-bold my-4">
                Maximum Value
              </div>
              <div className="has-text-centered">
                <div
                  className={
                    this.props.state.max === 15
                      ? "button mx-4 max is-warning"
                      : "button mx-4 max"
                  }
                  data-id="15"
                  onClick={this.handleClick}
                >
                  15
                </div>
                <div
                  className={
                    this.props.state.max === 100
                      ? "button mx-4 max is-warning"
                      : "button mx-4 max"
                  }
                  data-id="100"
                  onClick={this.handleClick}
                >
                  100
                </div>
                <div
                  className={
                    this.props.state.max === 200
                      ? "button mx-4 max is-warning"
                      : "button mx-4 max"
                  }
                  data-id="200"
                  onClick={this.handleClick}
                >
                  200
                </div>
              </div>
            </div>
          </div>

          <div className="level">
            <div className="level-item">
              <div
                className="button mx-4 increment is-success"
                data-id="increment"
                onClick={this.handleClick}
              >
                Increment
              </div>
              <div
                className="button mx-4 decrement is-danger"
                data-id="decrement"
                onClick={this.handleClick}
              >
                Decrement
              </div>
              <div
                className="button mx-4 reset is-info"
                data-id="reset"
                onClick={this.handleClick}
              >
                Reset
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default connect((state) => {
  return { state };
})(App);
