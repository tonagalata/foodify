import React, { Component } from 'react'
import styles from './CreateRestaurantForm.module.css'
import restaurantService from '../../service/restaurantService'

class CreateRestaurantForm extends Component {

  state = this.getInitialState();

  getInitialState() {
    return {
      title: '',
      cuisine: '',
      addedBy: this.props.user,
      reviews: [],
      error: ''
    }
  } 

  isFormValid = () => {
    return (
      this.state.title
    );
  }

  handleChange = e => {
    this.setState({
      error: '',
      ...{[e.target.name]: e.target.value}
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { title, cuisine, addedBy } = this.state
      await restaurantService.create({ title, cuisine, addedBy });
      this.setState(this.getInitialState(), () => {
        this.props.history.push('/restaurants');
      });
    } catch (err) {
      this.setState({
        title: '',
        cuisine: '',
        addedBy: '',
        error: err.message,
      })
    }
  }


  render() {
    return (
      <section className={styles.section}>
        {
          this.state.error && <p>{this.state.error}</p>
        }

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <fieldset>
            <legend>Create Restaurant Form</legend>
            <label htmlFor='title'>
              Restaurant Name
            </label>
            <input 
              id='title' 
              name='title' 
              type='text' 
              value={this.state.title}
              onChange={this.handleChange}
            
            />
            <label 
            htmlFor='cuisine'>
              Cuisine
            </label>
            <input 
              id='cuisine' 
              name='cuisine' 
              type='text' 
              value={this.state.cuisine}
              onChange={this.handleChange} 
            />
            <input 
              id='addedBy' 
              name='addedBy' 
              type='text'
              hidden
              value={this.state.addedBy._id} 
              onChange={this.handleChange}
            />
            <button 
            type='submit' disabled={!this.isFormValid()}
            >Submit</button>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default CreateRestaurantForm;