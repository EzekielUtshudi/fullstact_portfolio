import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: process.env.REACT__SANITYAPP__ID,
    dataset: "production",
    useCdn: true,
    apiVersion: '2022-11-15',
    token: process.env.REACT__APP__SANITY__TOKEN,
    // withCredentials: true,  
});