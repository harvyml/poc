import React from 'react'
import { QueryClientProvider, useQuery, QueryClient } from "react-query";
import { useParams } from "react-router";
import { CustomDiv, Divider } from '../components/CustomStyling';
import Layout from "../Layout";
import { fetchTrackById } from "../utils/services";
// assets
import Spinner from "../assets/spinner.svg";
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const queryClient = new QueryClient()
export default function Track() {
    return (
        <Layout>
            <QueryClientProvider client={queryClient}>
                <TrackInfo />
            </QueryClientProvider>
        </Layout>
    )

}


// components 
const Img = styled.img`
    width: 100%;
    max-height: 400px;
`
function TrackInfo() {
    let { id } = useParams()
    const { isLoading, error, data: track } = useQuery('track', () => fetchTrackById({ id }))
    if (isLoading) {
        return (
            <CustomDiv>
                <img src={Spinner} />
            </CustomDiv>
        )
    } else if (error) {
        <h1 style={{ textAlign: "center" }}>An error occured</h1>
    }

    return (
        <React.Fragment>
            <Divider height='20px' background='white' />
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <Img src={track.album.cover_big} />
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <h4>{track.title}</h4>
                    <Divider background='white' height='20px'/>
                    <div>
                        <p>Track by {track.artist.name}</p>
                        <p>Explicit content: {track.explicit_content_lyrics === 1 ? "yes" : 'No'}</p>
                        <p>Duration: <span className='text-muted'>{track.duration} secs</span></p>
                        <p>
                            {track.contributors.map((contributor, idx) => {
                                // if its the last item or the list only has one item then dont add a coma
                                const coma = (track.contributors.length - 1 === idx) || (track.contributors.length === 1) ? "" : ', ' 
                                return (
                                    <span>
                                        <a className='text-muted' href={contributor.link} key={`contributor-${idx}`}>{contributor.name}</a>{coma}
                                    </span>
                                )
                            })}
                        </p>
                        <p><a href={track.link}>Listen to the track</a></p>
                        <p><a href={track.album.link}>Check out the full album {track.album.title}</a></p>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}