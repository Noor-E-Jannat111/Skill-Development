import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';

import { css } from "@emotion/core";
import { RingLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Services = () => {
    const [getService , setGetService] = useState([])
    useEffect(()=>{
        fetch("https://fierce-beyond-80883.herokuapp.com/getService")
        .then(res => res.json())
        .then(data => {
            setGetService(data)
        })
    }, [])
    return (
        <section style={{padding : '70px 0'}}>
            <div className="container">
                <div>
                    <h2 className='text-center my-5'>Skill Development 
                        <span style={{color:'#8facd6'}}> Course </span>
                     </h2>
                     <div className='row'>
                    {
                        getService.length === 0 &&
                        <RingLoader
                            css={override}
                            size={150}
                            color={"#0f3057"}
                        />
                    }

                        {
                            getService.map(service => <ServiceCard key={Math.random()} 
                            service={service}></ServiceCard>)
                        }
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Services;