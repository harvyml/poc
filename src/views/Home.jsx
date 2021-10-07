import { useRouteMatch } from "react-router";
import Layout from "../Layout";
import { CustomDiv, Divider } from "../components/CustomStyling";
import { fetchManyBy } from "../utils/services";
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';

// svg loader
import Spinner from "../assets/spinner.svg";
import { NavLink } from "../components/CustomStyling";


function Main() {
    const { path } = useRouteMatch()
    const [music, setMusic] = useState([])
    const [page, setPage] = useState({
        startAt: 0,
        limit: 10
    })

    async function fetchData() {
        const request = await fetchManyBy({ keyword: 'arctic monkeys', startAt: page.startAt, limit: page.limit })
        const res = await request
        console.log(res)
        setMusic(current => current.concat(res.data))
    }

    useEffect(() => {
        setTimeout(fetchData, 1000)
    }, [page.startAt, page.limit])


    function fetchMoreData() {
        setPage(current => {
            return { startAt: current.startAt + 20, limit: current.limit + 20 }
        })
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={music.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={true}
                loader={
                    <CustomDiv textAlign='center' margin='20px auto' width='50px'>
                        <img src={Spinner} />
                    </CustomDiv>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }} className='text-muted'>
                        <b>Yay! That's all we have for now</b>
                    </p>
                }
            >
                <Row xs={1} md={4} className="g-6">
                    {music.map((item, idx) => {
                        console.log("item: ", item)
                        return (
                            <Col key={`music-card-${idx}`} style={{ margin: "10px 0", cursor: "pointer" }}>
                                <Card>
                                    <Card.Img variant="top" src={item.album.cover_big} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.artist.name}
                                        </Card.Text>


                                        <a href={`/panel/track/${item.id}`}>Details</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}

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