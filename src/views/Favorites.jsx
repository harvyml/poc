import { useEffect, useState } from "react";
import TrackCard from "../components/TrackCard";
import Layout from "../Layout";
import { Row } from "react-bootstrap";

export default function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        let favorites = localStorage.getItem('favoriteSongs') && JSON.parse(localStorage.getItem('favoriteSongs'))
        favorites && setFavorites(favorites)
    }, [])
    return (
        <Layout>
            <Row xs={1} md={4} className="g-6">
                {
                    favorites.map((item, idx) => <TrackCard item={item} key={`favorite-track-${idx}`} />)
                }
            </Row>
        </Layout>
    )
}