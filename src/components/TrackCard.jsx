import { Card, Row, Col, Button } from "react-bootstrap"
import { CustomDiv } from "./CustomStyling"
import Heart from '../assets/heart.svg'

export default function TrackCard({ item = {} }) {
    return (
        <Col style={{ margin: "10px 0", cursor: "pointer" }}>
            <Card>
                <Card.Img variant="top" src={item.album?.cover_big} />
                <Card.Body>
                    <Row>
                        <Col sm={8}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.artist.name}
                            </Card.Text>
                        </Col>
                        <Col>
                            <CustomDiv width='100%' textAlign='right'>
                                <Button variant='light' item-id={item.id}><img src={Heart} item-id={item.id}/></Button>
                            </CustomDiv>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}