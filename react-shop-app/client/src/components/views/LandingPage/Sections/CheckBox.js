import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';
import { Icon, Col, Card, Row } from "antd";
const { Panel } = Collapse


function CheckBox(props) {
    const renderCheckboxLists = () => props.list && props.list.map((value,index) => (
      <React.Fragment key ={index}>
          <Checkbox 
          onChange = {()=>handleToggle(value.id)}
          type = "checkbox"
          checked = {Checked.indexOf(value.id) === -1 ? false : true}
          />
          <span>{value.name}</span>
          </React.Fragment>
          )
  )
  const [Checked, setChecked] = useState([])
  const handleToggle = (value) => {
     const currentIndex =Checked.indexOf(value);
     const newChecked = [...Checked]
     if (currentIndex === -1) {
       newChecked.push(value)
     } else {
       newChecked.splice(currentIndex,1)
     }
     setChecked(newChecked);
     props.handleFilters(newChecked)
  }

    return (
        <div>
        <Collapse defaultActiveKey = {['0']} >
            <Panel header = {props.title} key = "1">
            {renderCheckboxLists()}
            </Panel>
        
        </Collapse>
    </div>
    )
}

export default CheckBox
