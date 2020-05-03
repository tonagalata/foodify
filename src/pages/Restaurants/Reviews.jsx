import React, { Component } from 'react';
import restaurantService from '../../service/restaurantService'

class Reviews extends Component {

  state = this.getInitialState()

  getInitialState(){
    return {
     rating: 5,
     content: ''
    }
  }

  isFormValid = () => {
    return (
      this.state.rating &&
      this.state.content
    );
  }

  handleChange = e => {
    console.log(e.target.name)
   this.setState({
    [e.target.name]: e.target.value
   })
 }

  handleSubmit = async (e) => {
    e.preventDefault();
    if(!this.isFormValid()) return;
    try {
      const { rating, content } = this.state;
      await restaurantService.createReview({ rating, content }, this.props.match.params.id)
      this.setState(this.getInitialState(), () => {
        // add the token to state
        this.props.history.push('/restaurants')

      })
    } catch (error) {
      // set error message to the error property on state
      this.setState({
        rating: 5,
        content: '',
        error: error.message
      })
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id)
  }
  
  render() { 
    return ( 
      <main>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='rating'>Rating</label>
            <select id='rating' name='rating' value={this.state.rating} onChange={this.handleChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <label htmlFor='content'>Comment</label>
            <textarea
            id='content'
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
            />
            <button 
            type='submit' disabled={!this.isFormValid()}
            >Submit</button>
          </form>
      </main>
     );
  }
}
 
export default Reviews;