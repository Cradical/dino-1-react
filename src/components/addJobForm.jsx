import React, { Component } from 'react'

class AddJobForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            tite: "",
            pay: "",
            description: "",
            interested: ""
     }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { title, pay, description, interested } = this.state
        const newJob = {
            title,
            pay,
            description,
            interested
        }
        this.props.addListing(newJob)
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    


    render() { 
        return (
            <aside id="side-bar">
                <section>
                    <h3>Add Job</h3>
                    <form onSubmit={this.onSubmit} className="job-form">
                        <label htmlFor="title" onChange={this.onChange}>Title</label>
                        <input type="text" name="title" onChange={this.onChange}></input>
                        <label htmlFor="pay" >Compensation</label>
                        <input type="text" name="pay" onChange={this.onChange}></input>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" rows="8" cols="40" onChange={this.onChange}></textarea>
                        <input type="submit" name="submit" value="Submit"></input>
                    </form>
                </section>
            </aside>
        )
    
    }
}
 
export default AddJobForm;

