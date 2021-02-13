import React, { Component } from "react";
import { Modal,Button,Container, Row, Col} from "react-bootstrap";
import DateSchedule from './DateSchedule';


export default class Model extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
         {
           this.props.activity.map((text,index)=>{
             return(
               <Container key={index}>
                 <Row>
                 <Col>{text.start_time}</Col>
                 <Col>{text.end_time}</Col>
                 </Row>
               </Container>
             )
           })
         }
         <hr />
         <DateSchedule/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}