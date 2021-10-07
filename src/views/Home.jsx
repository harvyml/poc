import Layout from "../Layout";
import { Divider } from "../components/CustomStyling";
import { fetchBy } from "../utils/services";
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function Main() {
    const [state, setState] = useState({
        data: []
    })
    const [page, setPage] = useState({
        startAt: 0,
        limit: 10
    })
    useEffect(() => {
        async function fetchData() {
            const request = await fetchBy({ keyword: 'arctic monkeys', startAt: page.startAt, limit: page.limit })
            const res = await request
            setState(res)
        }

        fetchData()
    }, [page.limit, page.startAt])

    useEffect(() => {
        console.log(state)
    }, [state])


    return (
        <React.Fragment>
            <Row xs={1} md={2} className="g-4">
                {state.data.map((item, idx) => (
                    <Col key={`music-card-${idx}`}>
                        <Card>
                            <Card.Img variant="top" src={item.album.cover_big} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.artist.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )

}

// ====== components ========
export default function Home() {
    return (
        <Layout>
            <Divider height='20px' background='white' />
            <Main />
        </Layout>
    )
}


function MusicCard({ header, title, children }) {
    return (
        <Card
            bg='dark'
            text='light'
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {/* {children}  */}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}