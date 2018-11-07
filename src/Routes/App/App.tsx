import * as React from 'react';
import './App.css';
import { IProps } from './props';

class App extends React.Component<IProps> {

  public render() {
    return (
      <div className="App">
        <div class="bg" />

        <header><a href="#">ZoomZoom</a></header>

        <main>
          <section class="card">
            <ul>
              <li>
                <span></span>
                <strong>How may I help you?</strong>
              </li>
              <li>
                <span></span>
                <strong>How may I help you?</strong>
              </li>
              <li>
                <span></span>
                <strong>How may I help you?</strong>
              </li>
            </ul>
          </section>

          <section class="primary">
            <h1>Your Personal Assistant</h1>
            <p>Get builders fast</p>

            <a href="#">Check it out!</a>
          </section>
        </main>
      </div>
    );
  }

}

export default App;
