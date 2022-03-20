import logo from './logo.svg';
import './App.css';
import CheckBox from './components/CheckBox'
import RadioBox from './components/RadioBox'
import { useState } from 'react';
import { Icon, Col, Card, Row } from 'antd';
import {locations,lengths, services, environments, ratings, shapes, types,
  enhancementExtensions, nailArts} from './components/Data'
import 'antd/dist/antd.css'
const showFilteredResults = (filters) => {
  const variables = {
    skip: 0,
    limit: 8,
    filters: filters
  }
  //getProducts(variables)
  //setSkip(0)
}

const handleFilters = (filters, category) => {
  const newFilters = {...filters}
  console.log(newFilters)
  newFilters[category] = filters
  if (category === "location") {
      let locationValues =  handleLocation(filters)
      newFilters[category] = locationValues
  }
  showFilteredResults(newFilters)
  //setFilters(newFilters)
  const handleLocation = (value) => {
    const data = locations;
    let array = [];
    for (let key in data) {
      console.log('key',key)
      console.log('value',value)
      if (data[key].id === parseInt(value,10)) {
      array = data[key].array;
      }
    }
    console.log('array',array)
    return array
  }
}  
const handleLocation = (value) => {

}
//showFilterResults(newFilters)
//setFilters(newFilters)


function App() {
  const [filters, Setfilters] = useState({
    lengths: [],
    price: []
  })
  return (

// NEED TO CORRECT HANDLE FILTERS
<div>
<Row gutter = {[16,16]}>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {services} title = "Service"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {locations} title = "Location"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {environments} title = "Environment"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      </Row> 
      <Row gutter = {[16,16]}>
      <Col lg={5} xs={10} >
      <CheckBox 
      list = {lengths} title = "Length"
        handleFilters = {filters => handleFilters(filters, "lengths")}
      />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {shapes} title = "Shape"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      <Col lg={5} xs={10}  >
        <RadioBox
        list = {types} title = "Types"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      </Row>
      <Row gutter = {[16,16]}>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {enhancementExtensions} title = "Enhancement Extension"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {ratings} title = "Rating"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      <Col lg={5} xs={10} >
        <RadioBox
        list = {nailArts} title = "Nail Art"
          handleFilters = {filters => handleFilters(filters, "locations")}
          />
      </Col>
      </Row>
  </div>
      




  );
}

export default App;
