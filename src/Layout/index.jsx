import Sidebar from './Sidebar'
import Header from './Header'

// bootstrap components
import { Row, Col, Container } from 'react-bootstrap'
import { ColCustomed } from './components/CustomStyling'

export default function Layout({children}) {
    return (
        <Row>
            <ColCustomed md={2}>
                <Sidebar />
            </ColCustomed>
            <ColCustomed paddingLeft='0' background='white'>
                <Header />
                <Container>
                    {children}
                </Container>
            </ColCustomed>
        </Row>
    )
}