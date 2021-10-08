import React, { useEffect, useState } from "react";
import TrackCardFavorite from "../components/TrackCardFavorite";
import Layout from "../Layout";
import { Row, Container } from "react-bootstrap";
import { setFavorite, } from "../utils/services";
import { Divider } from "../components/CustomStyling";
export default function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        let favorites = localStorage.getItem('favoriteSongs') && JSON.parse(localStorage.getItem('favoriteSongs'))
        favorites && setFavorites(favorites)
    }, [])
    return (
        <Layout>
            <Row xs={1} md={4} className="g-6" onClick={e => setFavorite(e, true)}>
                <React.Fragment>
                    {
                        (favorites || []).map((item = {}, idx) => (item && item.id) && <TrackCardFavorite item={item} key={`favorite-track-${idx}`} />)
                    }
                </React.Fragment>
            </Row>
            <Container>
                <Divider height='20px' background='white'/>
                {
                    favorites.length == 0 && <h4 style={{ textAlign: 'center' }}>You dont have any favorite songs yet!</h4>
                }
            </Container>
        </Layout >
    )
}