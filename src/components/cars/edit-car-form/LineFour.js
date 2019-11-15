import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const LineFour = ({ sold, soldDate, setSoldDate, handleCheck}) => {

  return (
    <Row>
      <Col sm={3}>
        <FormGroup className={`ml-4 mt-2  ${sold ? '' : 'no-display'}`}>
          <Input defaultChecked type="checkbox" name="sold" id="sold" onClick={(e)=>handleCheck(e)} /> {'Sold'}
        </FormGroup>
        <FormGroup className={`ml-4 mt-2 ${!sold ? '' : 'no-display'}`}>
          <Input type="checkbox" name="sold" id="sold" onClick={(e)=>handleCheck(e)} /> {'Sold'}
        </FormGroup>
      </Col>
      <Col sm={8}>
        
        <FormGroup>
          <Input defaultValue={sold ? soldDate : ''} type="text" name="sold-date" id="sold-date" onChange={(e)=>setSoldDate(e.target.value)} disabled={sold=== '' ? true : false} placeholder="MM/DD/YYYY" />
        </FormGroup>
      </Col>
      <Col sm={1}></Col>
    </Row>
  )
}

LineFour.propTypes = {
  sold: PropTypes.bool.isRequired,
  soldDate: PropTypes.string.isRequired,
  setSold: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired

}

export default LineFour


