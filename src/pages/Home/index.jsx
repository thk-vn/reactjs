import { Row, Col } from 'react-bootstrap';
import TodoList from './TodoList';
import NotiList from './NotiList';

const Home = () => {
  return (
    <Row className="mt-3 mb-3">
      <Col xs={12} md={6} className="mb-3">
        <TodoList />
      </Col>
      <Col xs={12} md={6} className="mb-3">
        <NotiList />
      </Col>
    </Row> 
  );
}

export default Home;
