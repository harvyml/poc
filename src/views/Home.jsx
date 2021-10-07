import Layout from "../Layout";
import { CustomDiv, Divider, Flex } from "../components/CustomStyling";
import { fetchManyBy, setFavoriteSong } from "../utils/services";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';

// svg loader
import Spinner from "../assets/spinner.svg";
import Heart from '../assets/heart.svg'
import Search from "./Search";


function Main() {
    const [music, setMusic] = useState([])
    const [keyword, setKeyword] = useState('andres cepeda')
    const [startingKeyword, setStartingKeyword] = useState(keyword)
    const [page, setPage] = useState({
        startAt: 0,
        limit: 10
    })

    async function fetchData() {
        const request = await fetchManyBy({ keyword: keyword, startAt: page.startAt, limit: page.limit })
        const res = await request
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

    function setFavorite(e){
        const id = e.target.getAttribute('item-id')
        setFavoriteSong({id})
    }

    return (
        <div>
            <Search setMusic={setMusic} setKeyword={setKeyword} keyword={keyword} page={page} setStartingKeyword={setStartingKeyword} />
            <Divider height='50px' background='white' />
            <h3>Results for {startingKeyword}</h3>
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
                <Row xs={1} md={4} className="g-6" onClick={setFavorite}>
                    {music.map((item, idx) => (
                        <TrackCard item={item} key={`music-card-${idx}`} />
                    ))}

                </Row>
            </InfiniteScroll>
        </div>
    )

}

// ====== components ========
function TrackCard({ item = {} }) {
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
export default function Home() {
    return (
        <Layout>
            <Divider height='20px' background='white' />
            <Main />
        </Layout>
    )
}