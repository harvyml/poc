import Layout from "../Layout";
import { CustomDiv, Divider } from "../components/CustomStyling";
import { fetchManyBy, setFavorite } from "../utils/services";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import TrackCard from "../components/TrackCard";
// svg loader
import Spinner from "../assets/spinner.svg";
import Search from "./Search";
import { useRouteMatch } from "react-router";

function Main() {
    const {path} = useRouteMatch()
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
    }, [page.startAt])


    function fetchMoreData() {
        setPage(current => {
            return { startAt: current.startAt + 20, limit: current.limit }
        })
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
                    {music.map((item, idx) => {
                        return item && <TrackCard item={item} key={`music-card-${idx}`} path={path}/>
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