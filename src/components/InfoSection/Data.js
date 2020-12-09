import Image from '../../image/download.jpg';
import Image2 from '../../image/download2.jpg';
import Image3 from '../../image/download3.jpg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headLine: 'where are You From',
    description: 'Im From Califonia',
    buttonLable: 'Get started',
    imgStart:true,
    img: Image,
    alt:'Rapper',
    dark:false, 
    primary:ture,
    darkText:false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'Who?',
    headLine:'He is Rapper?',
    description:'Yes',
    buttonLable:'Get started',
    imgStart:true,
    img:Image2,
    alt:'hipHop',
    dark:false,
    primary:true,
    darkText:false,
};

export const homeObjThree ={
    id:'signup',
    lighBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'who?',
    headeLine:'He is American?',
    description:'Yes',
    buttonLable:'Get started',
    imgStart:true,
    img:Image3,
    alt:'rapper',
    dark:true,
    primary:true,
    darkText:false,
}