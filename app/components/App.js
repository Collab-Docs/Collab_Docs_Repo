import React from 'react';
import MainContainer from '../container/MainContainer';


export default class App extends React.Component {
  render() {
    const widget = (
      <div id="content">
        <MainContainer />
      </div>
    );
    return widget;
  }
}
