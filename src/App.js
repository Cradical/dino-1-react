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
  
  // async componentDidMount() {
  //   const response = await fetch("./assets/listing.js");
  //   console.log(response);
  //   const json = await response.json();
  //   console.log('json: ', json)
  //   this.setState({ jobs: json })
  // }


  componentDidMount() {
    fetch("./assets/listing.js")
      .then(response => response.json())
      .then(response => this.setState({ jobs: response }))
  }

  //Build function to push data from addForm to push data to { jobs }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')
    const data = new FormData(event.target)
    console.log('data: ', data)
    addListing({
      title: data.get('title'),
      compensation: data.get('pay'),
      description: data.get('description'),
      interested: []
    })
    event.target.reset()
  }

  addListing(data){
    let container = document.querySelector,
        listing = document.createElement('li')
  }

  render() {
    // console.log('state.jobs: ', this.state.jobs)
    return ( 
      <div className = "App" >
        <Header />
        <main>
          <JobsComponent jobsInfo={this.state.jobs} />
          <AddJobForm handleSubmit={this.handleSubmit} />
        </main>
      </div>
    );
  }
}

export default App;