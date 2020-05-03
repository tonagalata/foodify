import React, { Component } from 'react'
import styles from './Restaurants.module.css'
import restaurantService from '../../service/restaurantService'
import { Link } from 'react-router-dom'

class Restaurants extends Component {
  state = this.getInitialState()

   getInitialState(){
     return {
      restaurants: []
     }
   }

   componentDidMount = async () => {
    try {
      const data = await restaurantService.index()
       console.log(data)
        this.setState({
         restaurants: data
       })
    } catch (error) {
      console.log(error)
    }
   }


  render() { 
    return ( 
      <main>
      <h1 className={styles.main}>
      Restaurants
      </h1>
      {/* <button> 
        //onClick={this.handleRestaurants}>
        Get Resturants
      </button> */}
    { this.state.restaurants.map((d, idx) => 
    <div key={d._id} className={styles.restaurantContainer}>
      <h2 key={d.title}>{d.title}</h2>
      <div>{d.reviews.map( r => <div key={r._id}>{r.rating} : {r.content}</div>)}</div>
      <div key={d.addedBy.name}>{d.addedBy.name}</div>
      <div key={d.addedBy.email}>{d.addedBy.email}</div>
      <Link to={`restaurants/${d._id}/review`}><button>Add review</button></Link>
      {/* <Link to={`/`}><button>Create Resturant</button></Link> */}
    </div>
  ) }
  <Link to='/create-restaurant'><button>Create Resturant</button></Link>

    </main>
     );
  }
}
 
export default Restaurants;