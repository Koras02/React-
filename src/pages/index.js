import React, {useState} from 'react'
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
} from '../components/InfoSection/Data';

  
return (
        <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTow} />
        <InfoSection {...homeObjThree} />
        </>
    );

export default Home;
