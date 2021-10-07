import React from 'react'
import { QueryClientProvider, useQuery, QueryClient } from "react-query";
import { useParams } from "react-router";
import { CustomDiv } from '../components/CustomStyling';
import Layout from "../Layout";
import { fetchTrackBy } from "../utils/services";
// assets
import Spinner from "../assets/spinner.svg";

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
function TrackInfo() {
    let { id } = useParams()
    const { isLoading, error, data: track } = useQuery('track', () => fetchTrackBy({ id }))
    if(isLoading){
        return (
        <CustomDiv>
            <img src={Spinner}/>
        </CustomDiv>
        )
    }else if(error){
        <h1 style={{textAlign: "center"}}>An error occured</h1>
    }

    return <h1>{track.title}</h1>
}