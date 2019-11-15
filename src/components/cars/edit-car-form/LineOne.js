import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const LineOne = ({ setYear, setMake, setModel, year, make, model }) => {

  return (
    <Row>
        <Col sm={4}>
          <FormGroup>
          <Input defaultValue={year} type="number" name="year" id="year" onChange={(e)=>setYear(e.target.value)} placeholder="Year" />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Input defaultValue={make} type="text" name="make" id="make" onChange={(e)=>setMake(e.target.value)} placeholder="Make" />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Input defaultValue={model} type="text" name="model" id="model" onChange={(e)=>setModel(e.target.value)} placeholder="Model" />
          </FormGroup>
        </Col>
      </Row>
  )
}

LineOne.propTypes = {
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  setYear: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  setMake: PropTypes.func.isRequired
}

export default LineOne