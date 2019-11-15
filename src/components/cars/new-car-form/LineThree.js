import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

import PropTypes from 'prop-types'

const LineThree = ({ location, setLocation, dollars, setDollars, cents, setCents }) => {
  const locations = useSelector(state => state.locations.all)
  let length = locations.length


  return (
    <Row>
      <Col sm={3}>
        <FormGroup>
          <div className={location === '' ? "" : "no-display"}>
            <Input value={location} type="number" min={0} max={length} name="location" id="location" onChange={(e)=>setLocation(e.target.value)} placeholder="LID" />
          </div>

          <div className={location <= length && location !== '' && location !== '0' && location > 0 ? "" : "no-display"}>
            <Input value={location} type="number" min={0} max={length} name="location" id="location" onChange={(e)=>setLocation(e.target.value)} placeholder="LID" valid />
          </div>

          <div className={location > length || location < 0 || location === '0' ? "" : "no-display"}>
            <Input value={location} type="number" min={0} max={length} name="location" id="location" onChange={(e)=>setLocation(e.target.value)} placeholder="LID" invalid />
          </div>
        </FormGroup>
      </Col>

      
      <Col sm={7}>
        <InputGroup>
            <Input value={dollars} type="number" min={0} max={1000000} name="dollars" id="dollars" onChange={(e)=>setDollars(e.target.value)} placeholder="$" step="1" />
            <InputGroupAddon addonType="append">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>.</InputGroupText>
                </InputGroupAddon>
              <Input value={cents} type="number" min={0} max={99} name="cents" id="cents" onChange={(e)=>setCents(e.target.value)} placeholder="¢" step="1" />
            </InputGroupAddon>
          </InputGroup>
      </Col>
      <Col sm={3}></Col>
    </Row>
  )
}

LineThree.propTypes = {
  location: PropTypes.string.isRequired,
  dollars: PropTypes.string.isRequired,
  cents: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  setDollars: PropTypes.func.isRequired,
  setCents: PropTypes.func.isRequired
}

export default LineThree