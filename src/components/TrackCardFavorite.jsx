import { Card, Row, Col, Button } from "react-bootstrap"
import { CustomDiv, Divider } from "./CustomStyling"
import Heart from '../assets/heart.svg'

const favoriteSongs = localStorage.getItem('favoriteSongs') && JSON.parse(localStorage.getItem('favoriteSongs'))

export default function TrackCardFavorite({ item = {} }) {
    const isSongFavorite = (favoriteSongs || []).find(song => song.id === item.id) ? "heart-fill" : ""
    return (
        <Col style={{ margin: "10px 0" }}>
            <Card>
                <Card.Img variant="top" src={item.album?.cover_big} />
                <Card.Body>
                    <Row>
                        <Col sm={12}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.artist?.name}
                            </Card.Text>
                        </Col>
                        <Col>
                            <CustomDiv width='100%' textAlign='right'>
                                <Button variant='light' item-id={item.id}><img src={Heart} item-id={item.id} className={isSongFavorite} /></Button>
                            </CustomDiv>
                        </Col>
                        <Divider height='15px' background='white' />
                        <a variant='light' href={`/panel/track/${item.id}`}>Details</a>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}