import React from 'react'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { clearOneCarState } from '../../store/cars/actions'

const CarDetails = (props) => {
  const dispatch = useDispatch()
  let cars = useSelector(state => state.cars.all)
  let car = cars ? cars.filter(car => Number(props.match.params.id) === car.id)[0] : {}

  console.log('details: ', car)
  return (
    <div>
      <Link to='/cars-list'><Button className="mt-1 mr-1" onClick={()=>dispatch(clearOneCarState())}>Back</Button></Link>
      <Link to={`/edit-car/${Number(props.match.params.id)}`}><Button className="mt-1 edit-btn float-right">Edit</Button></Link>

      <Form className='mt-1'>
        <Row>
          <Col sm={4}>
            <FormGroup>
            <Input defaultValue={car.year} type="number" name="year" id="year" placeholder="Year" disabled />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Input defaultValue={car.make} type="text" name="make" id="make" placeholder="Make" disabled />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Input defaultValue={car.model} type="text" name="model" id="model" placeholder="Model" disabled />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={7}>
            <FormGroup>
              <Input defaultValue={car.vin} type="text" name="vin" id="vin" placeholder="VIN" disabled />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Input defaultValue={car.miles} type="number" min={0} max={300000} name="miles" id="miles" placeholder="Miles" disabled />
            </FormGroup>
          </Col>
        </Row>

        <Row>
        <Col sm={3}>
          <FormGroup>
            <div className={''}>
              <Input defaultValue={car.location_id} type="number" min={0} max={''} name="location" id="location" placeholder="LID" disabled />
            </div>
          </FormGroup>
        </Col>

        <Col sm={7}>
          <InputGroup>
              <Input defaultValue={car.price} type="number" name="price" id="price" placeholder='Price' disabled />
          </InputGroup>
        </Col>
        <Col sm={3}></Col>
        </Row>
        
        <Row>
        <Col sm={3}>
          <FormGroup className={`ml-4 mt-2`}>
            <Input defaultValue={car.is_sold ? 'sold ': ''} type="text" name="sold" id="sold" disabled />
          </FormGroup>
        </Col>
        <Col sm={8}>
          
          <FormGroup>
            <Input defaultValue={car.sold_date} type="text" name="sold-date" id="sold-date" placeholder='Sold Date' disabled />
          </FormGroup>
        </Col>
        <Col sm={1}></Col>
      </Row>
      </Form>
    </div>
  )
}

export default CarDetails