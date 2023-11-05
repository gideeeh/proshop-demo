import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <> {/* Fragment */}
        <Header />
        <main className='py-3'> {/* Padding y axis */}
            <Container>
                <Outlet />
                 {/* supposed to have homescreen here but removed for routing purposes */}
            </Container>
        </main>
        <Footer />
    </>
  )
}

export default App