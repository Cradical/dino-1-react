import React, { Component } from 'react'
import JobsComponent from './components/jobsComponent'
import './style.css'
import AddJobForm from './components/addJobForm'
import Header from './components/header'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      jobs: []
    }
    
  }

  componentDidMount() {
    fetch("./assets/listing.js")
      .then(response => response.json())
      .then(response => this.setState({ jobs: response }))
  }

  //Build function to push data from addForm to push data to { jobs }
  addListing = (newJob) => {
    const { jobs } = this.state
    this.setState({
      jobs: [newJob, ...jobs]
    })
  }


  render() {
    return ( 
      <div className = "App" >
        <Header />
        <main>
          <JobsComponent jobsInfo={this.state.jobs} />
          <AddJobForm addListing={this.addListing}/>
        </main>
      </div>
    );
  }
}

export default App;