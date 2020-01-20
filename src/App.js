import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        { title: "Test 1", id: 1 },
        { title: "Test 2", id: 2 },
      ]
    };
  }

  render() {
    const { articles } = this.state;

    return (
        <ul>
          { articles.map(el => <li key={el.id}>{el.title}</li>) }
        </ul>
    );
  }
}

export default App;
