import Layout from "../Layout";
import { CustomDiv, Divider, Layer } from "../components/CustomStyling";
import { fetchBy } from "../utils/services";
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';

// svg loader
import Spinner from "../assets/spinner.svg";
function Main() {
    const [state, setState] = useState({
        data: []
    })
    const [page, setPage] = useState({
        startAt: 0,
        limit: 10
    })

    async function fetchData() {
        const request = await fetchBy({ keyword: 'arctic monkeys', startAt: page.startAt, limit: page.limit })
        const res = await request
        setState(res)
    }

    useEffect(() => {
        setTimeout(fetchData, 1000)
    }, [page.startAt, page.limit])

    useEffect(() => {
        console.log(state)
    }, [state])


    function fetchMoreData() {
        setPage(current => {
            return { startAt: current.startAt + 20, limit: current.limit + 20 }
        })
    }
    return (
        <div>
            <InfiniteScroll
                dataLength={state.data.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={true}
                loader={    
                    <CustomDiv textAlign='center' margin='20px auto' width='50px'>
                        <img src={Spinner}/>
                    </CustomDiv>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }} className='text-muted'>
                        <b>Yay! That's all we have for now</b>
                    </p>
                }
            >
                <Row xs={1} md={4} className="g-6">

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
            </InfiniteScroll>
        </div>
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