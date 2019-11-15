import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from 'reactstrap'


import { DeleteCar, FetchOneCar } from '../../store/cars/actions'

const Car = ({ car }) => {

  const dispatch = useDispatch()
  let carId = car.id

  const deleteCar = (e) => {
    dispatch(DeleteCar(e.target.id))
  }

  const editCar = (e) => {
    dispatch(FetchOneCar(e.target.id))
  }

  return (
    <Card className='mt-1'>
      <Row>
        <Col>
          <CardBody>
            <Row>
              <Col>
                <CardTitle>{car.vin}</CardTitle>
              </Col>
            </Row>
            <Row>
              <Col sm='2'>{car.year}</Col>
              <Col sm=''>{car.make}</Col>
              <Col>{car.model}</Col>
            </Row>

            <Row className='mt-2'>
              <Col>{car.miles}</Col>
              <Col>{car.price}</Col>
              <Col>
                {car.is_sold ? `Sold` : ''}
                
              </Col>
            </Row>

            <Row className="mt-2">
              <Col></Col>
              <Col>
                <Link to={`/car-details/${carId}`}><Button id={car.id} outline color="info" size="sm" onClick={(e) => editCar(e)}>View Details</Button></Link>
                
              </Col>
              <Col>
                <Button id={car.id} outline color="danger" size="sm" onClick={(e)=>deleteCar(e)}>Delete</Button>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Card>

  )
}

Car.propTypes = {
  car: PropTypes.object.isRequired
}
export default Car
