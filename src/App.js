import React, {useEffect} from 'react'
import { Row, Col, Container } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopNav from './components/layout/TopNav'

import CarsList from './components/cars/CarsList'
import LocationsList from './components/locations/LocationsList'
import NewCarForm from './components/cars/new-car-form/NewCarForm'
import EditCarForm from './components/cars/edit-car-form/EditCarForm'
import Landing from './components/landing/landing'
import CarDetails from './components/cars/CarDetails'

import { FetchCars } from './store/cars/actions'
import { fetchLocations } from './store/locations/actions'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchCars())
    dispatch(fetchLocations())
  })

  return (
    <Router>
      <div className="App">
        <TopNav />
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/cars-list' component={CarsList} />
                <Route path='/locations-list' component={LocationsList} />
                <Route path='/car-details/:id' component={CarDetails} />
                <Route path='/add-new-car' component={NewCarForm} />
                <Route path='/edit-car/:id' component={EditCarForm} />
                
              </Switch>
          </Col>
        </Row>
      </Container>
    </div>
    </Router>
    
  )
}

export default App
