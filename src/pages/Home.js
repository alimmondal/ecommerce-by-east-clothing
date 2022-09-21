import React from 'react';
import Cardscg from '../components/Cardscg';
import { Helmet } from "react-helmet";
import ProductsC from '../components/ProductsC';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>CLOTHING</title>
        </Helmet>
             <div>
                <Slider/>
                 <div className="cards">
                         <Cardscg title='Women'/>
                         <Cardscg title='Men'/>
                         <Cardscg title='Accessoires'/>                
                 </div>
                 {/* <CgDiv/> */}
                <ProductsC/> 
        </div>
        </>
    );
};

export default Home;