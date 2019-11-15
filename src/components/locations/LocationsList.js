import React from 'react'
import { Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Location from './Location'

const LocationsList = () => {
  const locations = useSelector(state => state.locations.all)
  const cars = useSelector(state => state.cars.all)

  

  let listOfLocations = locations.map(location => (<Location key={location.id} location={location} />))
  return (
    <div>
      {listOfLocations[0] ? (<Link to='/'><Button className="mt-1">Home</Button></Link>) : ''}
      {listOfLocations[0] ? listOfLocations : "Locations Loading..."}
    </div>
  )
}


export default LocationsList 