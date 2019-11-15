import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button, Form } from 'reactstrap'

import { AddNewCar } from '../../../store/cars/actions'
import LineOne from '../new-car-form/LineOne'
import LineTwo from '../new-car-form/LineTwo'
import LineThree from '../new-car-form/LineThree'

const NewCarForm = () => {
  const dispatch = useDispatch()

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
    
    dispatch(AddNewCar(newCar))

    setYear('')
    setMake('')
    setModel('')
    setVin('')
    setMiles('')
    setDollars('')
    setCents('')
    setLocation('')
  }
  
  let newCar = {
    
    location_id: location,
    make: make,
    miles: miles,
    model: model,
    price: `${dollars}.${cents}`,
    vin: vin,
    year: year
  }

  return (


    <div>
      <Link to='/'><Button className="mt-1">Home</Button></Link>
      <Form className="mt-1" onSubmit={(e)=>handleSubmit(e)}>
        <LineOne year={year} make={make} model={model} setYear={setYear} setMake={setMake} setModel={setModel} />
        
        <LineTwo vin={vin} setVin={setVin} miles={miles} setMiles={setMiles} />
        
        <LineThree location={location} setLocation={setLocation} dollars={dollars} setDollars={setDollars} cents={cents} setCents={setCents} />

        <Button color="danger" disabled={location === '' || location === '0'|| vin === '' || vin.length < 17 || vin.length > 17 }>Add Car</Button>
      </Form>
    </div>
)
}

export default NewCarForm

// <FormGroup className="mt-2 ml-5" >
//             <Input defaultChecked={sold === 'true' ? true : false} value={sold} type="checkbox" name="sold" id="sold" onClick={()=>handleCheck()} /> {'Sold'}
//           </FormGroup>
// <FormGroup>
//             <Input value={soldDate} type="text" name="sold-date" id="sold-date" onChange={(e)=>setSoldDate(e.target.value)} disabled={sold === 'true' ? false : true} placeholder="MM/DD/YYYY" />
//           </FormGroup>

// const handleCheck = () => {

//   if (sold === '') {
//     setSold('true')
//   } else if (sold === 'true') {
//     setSold('false')
//   } else if (sold === 'false') {
//     setSold('true')
//   } else {
//     setSold('')
//   }
// }
