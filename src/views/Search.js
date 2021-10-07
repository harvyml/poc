import { useCallback } from "react";
import { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { fetchTrackByName } from "../utils/services";
export default function Search({ setMusic, keyword, setKeyword, page, setStartingKeyword }) {
    const fetchData = useCallback(async () => {
        const request = await fetchTrackByName({keyword, ...page})
        const {data} = request
        setMusic(data)
        setStartingKeyword(keyword)
    }, [keyword])

    function onSubmit (e){
        e.preventDefault()
        fetchData()
    }
    return (
        <Form onSubmit={onSubmit}>
            <Container>
                <Row>
                    <Col xs={12} md={11} lg={11}>
                        <Form.Control type="text" placeholder="Search" onChange={e => setKeyword(e.target.value)} />
                    </Col>
                    <Col xs={12} md={1} lg={1}>
                        <Button type='submit'>Search</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}