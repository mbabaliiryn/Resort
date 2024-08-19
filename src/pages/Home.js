import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from "../components/Services";
import FeatureRooms from "../components/FeatureRooms";
// import Button from "../components/StyledHero";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299" />
                <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Hero>
            <Services />
            <FeatureRooms/>
            {/* <Button>hello</Button> */}
        </>
    );
}
