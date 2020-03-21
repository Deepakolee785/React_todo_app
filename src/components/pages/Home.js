import React from 'react';
import { Row, Col } from 'reactstrap';
import CreateTodo from '../CreateTodo';
import { Todos } from '../Todos';

const Home = () => {
  return (
    <div>
      <Row>
        <Col md='4'>
          <CreateTodo />
        </Col>
        <Col md='7'>
          <Todos />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
