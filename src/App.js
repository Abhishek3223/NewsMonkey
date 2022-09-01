
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './component/navbar';
import News from './component/news';
import {
  BrowserRouter as Router,

  Route,

  Routes
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 10,
  }

  setProgress = (prog) => {
    this.setState({
      progress: prog,
    })

  }
  render() {
    return (

      <Router>
        <LoadingBar
          height='3'

          color='#f11946'
          progress={this.state.progress}
        // onLoaderFinished={() => setProgress()}
        />
        < Navbar />


        <Routes>

          <Route exact path="/general"
            element={<News setProgress={this.setProgress} key="general" PageSize={12} country={'in'} category={'general'} />} />


          <Route exact path="/business"
            element={<News setProgress={this.setProgress} key="business" PageSize={12} country={'in'} category={'business'} />} />


          <Route exact path="/health"
            element={<News setProgress={this.setProgress} key="health" PageSize={12} country={'in'} category={'health'} />} />

          <Route exact path="/entertainment"
            element={<News setProgress={this.setProgress} key="entertainment" PageSize={12} country={'in'} category={'entertainment'} />} />





          <Route exact path="/science"
            element={<News setProgress={this.setProgress} key="science" PageSize={12} country={'in'} category={'science'} />} />


          <Route exact path="/sports"
            element={<News setProgress={this.setProgress} key="sports" PageSize={12} country={'in'} category={'sports'} />} />


          <Route exact path="/technology"
            element={<News setProgress={this.setProgress} key="technology" PageSize={12} country={'in'} category={'technology'} />} />



        </Routes>
      </Router>

    );
  }
}
