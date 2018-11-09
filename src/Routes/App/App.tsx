import * as React from 'react';
import './App.css';
import { IProps } from './props';

class App extends React.Component<IProps> {

  public render() {
    return (
      <div className="App">
        <div class="bg" />

        <main>
          <section class="primary">
            <section class="title">
              <h1>Bit Casino</h1>
              <p>Play for a chance to win!</p>
            </section>

              <section class="card">
                <h1 class="card-title">Start Playing!</h1>

                <section class="inner">
                  <h2>1. Select Amount</h2>
                  <ul>
                    <li class="button">1.0 WEI</li>
                    <li class="button">5.0 WEI</li>
                    <li>OR</li>
                    <li>Custom Amount</li>
                    <li class="input"><input type="text" placeholder="15.0 WEI"/></li>
                  </ul>
                </section>

                <br />

                <section class="inner line-top">
                  <h2>2. Select Bet</h2>
                  <div style={{ marginBottom: '10px', width: '100%' }}>
                    <button>10</button>
                    <button>10-15</button>
                    <button>15</button>
                  </div>
                </section>

                <div class="submit-button"><h3>Submit</h3></div>
              </section>
          </section>

        </main>

      </div>
    );
  }

}

export default App;
