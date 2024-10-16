import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import { AppProvider } from '../../context/AppContext';

const MasterLayout = ({ children }) => {
  return (
    <AppProvider>
      <Header />
        <Container>
          {children}
        </Container>
      <Footer />
    </AppProvider>
  );
}

export default MasterLayout;
