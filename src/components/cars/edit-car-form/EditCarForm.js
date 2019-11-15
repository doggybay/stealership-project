import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Button,
  Form
} from 'reactstrap'

import { Link } from 'react-router-dom'

import { EditCar } from '../../../store/cars/actions'
import LineOne from '../edit-car-form/LineOne'
import LineTwo from '../edit-car-form/LineTwo'
import LineThree from '../edit-car-form/LineThree'
import LineFour from '../edit-car-form/LineFour'

const EditCarForm = (props) => {
  
  const dispatch = useDispatch()
  let car = useSelector(state => state.cars.oneCar)
  

  let [year, setYear] = useState('')
  let [make, setMake] = useState('')
  let [model, setModel] = useState('')
  let [vin, setVin] = useState('')
  let [miles, setMiles] = useState('')
  let [dollars, setDollars] = useState('')
  let [cents, setCents] = useState('')
  let [price, setPrice] = useState('')
  let [location, setLocation] = useState('')
  let [sold, setSold] = useState('')
  let [soldDate, setSoldDate] = useState('')
  

  
  
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(EditCar(props.match.params.id, carToEdit))

    setYear('')
    setMake('')
    setModel('')
    setVin('')
    setMiles('')
    setDollars('')
    setCents('')
    setPrice('')
    setLocation('')
    setSold('')
    setSoldDate('')

    props.history.push('/cars-list')
  }
  
const handleCheck = (e) => {

    if (!e.target.checked) {
      setSold(false)
    } else{
      setSold(true)
    }
  }

//formatting data
  let priceToFormat = car.price
  let priceStr = priceToFormat ? priceToFormat.toString() : ''
  let statCents = priceStr.slice(priceStr.length - 2)
  let statDollars = priceStr.slice(0, priceStr.length - 3)

  let dateToFormat = car.sold_date
  let moment = require('moment')
  let newDate = new Date(dateToFormat * 1000)
  let formattedDate = moment(newDate).format('MM/DD/YYYY')

  let formatedPrice = cents === '' && dollars === '' ? `${statDollars}.${statCents}` : dollars === '' ? `${statDollars}.${cents}` : cents === '' ? `${dollars}.${statCents}` : `${dollars}.${cents}`

  
  let newFormattedDate = moment(soldDate).unix()

  //car to edit object
  let carToEdit = {
    
    location_id: location === '' ? car.location_id : Number(location),
    make: make === '' ? car.make : make,
    miles: miles === '' ? car.miles : Number(miles),
    model: model === '' ? car.model : model,
    price: dollars === '' ? car.price : Number(formatedPrice),
    vin: vin === '' ? car.vin : vin,
    year: year === '' ? car.year : Number(year),
    is_sold: sold === '' ? car.is_sold : sold,
    sold_date: soldDate === '' ? car.sold_date : newFormattedDate
  }
  
  
console.log('props: ', props)
  if (Object.keys(car).length === 0) {

    return (
      <div>
      <Link to='/'><Button className="mt-1 mb-1">Home</Button></Link>
      <Form onSubmit={(e) => handleSubmit(e)}>
      
      <LineOne year={year} make={make} model={model} setYear={setYear} setMake={setMake} setModel={setModel} />
      
      <LineTwo vin={vin} setVin={setVin} miles={miles} setMiles={setMiles} />
      
      <LineThree location={location} setLocation={setLocation} dollars={dollars} setDollars={setDollars} cents={cents} setCents={setCents} />
      
      <LineFour sold={sold} setSold={setSold} soldDate={soldDate} setSoldDate={setSoldDate} handleCheck={handleCheck} />

      <Button color="danger" disabled>Update Car</Button>
      </Form>
      </div>
)
  } else {


    return (
      <div> 
        <Link to={`/car-details/${car.id}`}><Button className="mt-1 mr-1 mb-1">Back</Button></Link>
        <Link to='/'><Button className="mt-1 mb-1">Home</Button></Link>

      <Form id={car.id} onSubmit={(e) => handleSubmit(e)}>
        
      <LineOne car={car} year={car.year} make={car.make} model={car.model} setYear={setYear} setMake={setMake} setModel={setModel} />
      
      <LineTwo vin={car.vin} setVin={setVin} miles={car.miles} setMiles={setMiles} />
      
      <LineThree price={car.price} location={car.location_id} setLocation={setLocation} dollars={statDollars} setDollars={setDollars} cents={statCents} setCents={setCents} />
        
      <LineFour stateSold={sold} sold={car.is_sold} setSold={setSold} soldDate={formattedDate} setSoldDate={setSoldDate} handleCheck={handleCheck} />
        

        <Button type='submit' name={car.id} color="danger" disabled={false}>Update Car</Button>
        </Form>
        </div>
)
  }
}

export default EditCarForm

