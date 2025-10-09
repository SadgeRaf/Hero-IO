import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';
import AnimLoading from '../../Components/Loading/Loading';

const Home = () => {
    const data = useLoaderData();
    if (!data) {
        return <AnimLoading></AnimLoading>
    }
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;