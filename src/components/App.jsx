import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header class="container p-6 mt-6">
          <div class="title has-text-centered has-text-dark">Counter App</div>
        </header>
        <main>
          <div class="level">
            <div class="level-item">
              <div
                id="display"
                class="is-size-2 has-text-weight-bold has-text-dark"
              >
                0
              </div>
            </div>
          </div>
          <div class="columns is-centered p-4">
            <div class="column is-5 is-multiline is-centered">
              <div class="has-text-centered has-text-weight-bold my-4">
                Steps
              </div>
              <div class="has-text-centered">
                <div class="button mx-4 step">5</div>
                <div class="button mx-4 step">10</div>
                <div class="button mx-4 step">15</div>
              </div>
            </div>
            <div class="column is-5 is-multiline is-centered">
              <div class="has-text-centered has-text-weight-bold my-4">
                Maximum Value
              </div>
              <div class="has-text-centered">
                <div class="button mx-4 max">15</div>
                <div class="button mx-4 max">100</div>
                <div class="button mx-4 max">200</div>
              </div>
            </div>
          </div>

          <div class="level">
            <div class="level-item">
              <div class="button mx-4 increment is-success">Increment</div>
              <div class="button mx-4 decrement is-danger">Decrement</div>
              <div class="button mx-4 reset is-info">Reset</div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
