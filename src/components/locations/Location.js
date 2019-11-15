import React, { useState } from 'react'
import {
  Card,
  CardTitle,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle
} from 'reactstrap'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Car from '../cars/Car'

const Location = ({ location }) => {
  let [dropdownOpen, setDropdownOpen] = useState(false)

  const displayCars = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const cars = useSelector(state => state.cars.all)
  
  let filteredCars = cars.filter(car => (location.id === car.location_id)).map(car => (<Car key={car.id} car={car} />))

  return (
    <Card className='mt-1'>
      <Row>
        <Col>
          <CardTitle value='1' className='cars-list' >
            <ButtonDropdown isOpen={dropdownOpen} toggle={()=>displayCars()}>
              <DropdownToggle color='secondary' className='m-2 btn-outline-light'>{location.name}</DropdownToggle>
            </ButtonDropdown>
          </CardTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={dropdownOpen ? '' : 'no-display'} >
            {filteredCars}
          </div>
        </Col>
      </Row>
    </Card>

  )
}

Location.propTypes = {
  location: PropTypes.object.isRequired
}

export default Location