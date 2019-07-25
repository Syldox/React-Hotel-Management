import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        
            <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at AED2099">
                <Link to="rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
            </Hero>

    )
}


