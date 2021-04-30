import React, { useState } from 'react';
import { useEffect } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

import { css } from "@emotion/core";
import { PuffLoader } from 'react-spinners';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Feedback = () => {
    const [review , setReview] = useState([])
    useEffect(() => {
        fetch('https://fierce-beyond-80883.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
    return (
        <section style={{padding:'50px'}}>
            <div className="w-75 m-auto">
            <div className='container'>
                <h1 className='my-5 text-center'>Clients <span style={{color: '#8facd6'}}> Feedback</span></h1>
            </div>
                <div className="row">
                    {
                        review.length === 0 &&
                        <PuffLoader
                            css={override}
                            size={150}
                            color={"#0f3057"}
                        />
                    }
                    {
                      review.map(feed => <FeedbackCard key={review._id} feed={feed} ></FeedbackCard>)  
                    }
                </div>
            </div>
            
            
        </section>
    );
};

export default Feedback;