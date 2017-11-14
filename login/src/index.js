import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="云适配" />
    <h2>《登陆模版1》{'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
