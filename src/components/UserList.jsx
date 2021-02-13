import React, { Component } from 'react';
import data from '../data/data.json';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import Modal from './Model';

var newData=data.members;

export default class UserList extends Component {
constructor(props){
  super(props);
  this.state={
    isModalShow:false
  }
}

render() {
  let addModalClose=()=>this.setState({isModalShow:false});
    return (
      <ul>
        {
          newData.map((text)=>{
           return(
             <div className="box" key={text.id}>
            <Router><Link to="#" onClick={()=>this.setState({isModalShow:true})} className="name" >{text.real_name}</Link> </Router>
             <span className="tz">{text.tz}</span>
             <Modal  show={this.state.isModalShow} activity={text.activity_periods}  onHide={addModalClose}/>
             </div>
           )
            
          })
        }
      </ul>
    )
  }
}

