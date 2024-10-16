import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const MasterLayout = ({ children }) => {
  return (
    <>
      <Header />
        <Container>
          {children}
        </Container>
      <Footer />
    </>
  );
}

export default MasterLayout;
