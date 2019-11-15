import React from 'react'
import { Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Car from './Car'

const CarsList = () => {
    const cars = useSelector(state => state.cars.all)
    const locations = useSelector(state => state.locations.all)

    let carsWithLocations = cars.filter(car => {
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].id === car.location_id || car.location) {
          return car
        }
      }
    })

  let listOfCars = carsWithLocations.map((car, i) => (<Car key={i} car={car} />))
  
  return (
    <div>
      {listOfCars[0] ? (<Link to='/'><Button className="mt-1">Home</Button></Link>) : ''}
      {listOfCars[0] ? listOfCars : "Cars Loading...."}
    </div>
          )
        }

        export default CarsList