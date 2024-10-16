import { Row, Col } from 'react-bootstrap';
import TodoList from './TodoList';

const Home = () => {
  return (
    <>
      <Row className="mt-3 mb-3">
        <Col xs={12} md={6} className="mb-3">
          <TodoList />
        </Col>
        <Col xs={12} md={6} className="mb-3">
          <h3>State Manager (useContext)</h3>
        </Col>
      </Row> 
    </>  
  );
}

export default Home;
