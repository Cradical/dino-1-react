import React from 'react'

const AddJobForm = (props) => {

    return (
        <aside id="side-bar">
            <section>
                <h3>Add Job</h3>
                <form onSubmit={props.handleSubmit} className="job-form">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"></input>
                    <label htmlFor="pay">Compensation</label>
                    <input type="text" name="pay"></input>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" rows="8" cols="40"></textarea>
                    <input type="submit" name="submit" value="Submit"></input>
                </form>
            </section>
        </aside>
    )

    //build function in this component to gather info from form
}

export default AddJobForm;


