import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const LineTwo = ({ vin, miles, setVin, setMiles }) => {

  return (
    <Row>
        <Col sm={7}>
          <FormGroup>
            <Input defaultValue={vin} type="text" name="vin" id="vin" onChange={(e) => setVin(e.target.value)} placeholder="VIN" />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Input defaultValue={miles} type="number" min={0} max={300000} name="miles" id="miles" onChange={(e)=>setMiles(e.target.value)} placeholder="Miles" />
          </FormGroup>
        </Col>
      </Row>
  )
}

LineTwo.propTypes = {
  miles: PropTypes.number.isRequired,
  vin: PropTypes.string.isRequired,
  setMiles: PropTypes.func.isRequired,
  setVin: PropTypes.func.isRequired
}

export default LineTwo