import React from 'react';
import './App.css';
import TopRow from './components/TopRow';
import MiddleRow from './components/MiddleRow';
import BottomRow from './components/BottomRow';
import Bio from './components/Bio';
import Projects from './components/Projects';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: "home",
      width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      console.log("window changed!");
      this.setState({width: window.innerWidth})
  })
}

  render () {
    if (this.state.width > 768) {
      return (
        <>
        <TopRow />
        <MiddleRow />
        <BottomRow />
        </>
      )
    }
    else {
      return (
        <>
        <Bio />
        <Projects />
        </>
      )
    }
  }
}

export default App;
