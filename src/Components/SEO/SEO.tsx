import React from "react";
import {Helmet} from "react-helmet-async";

const SEO=()=>{
    return <Helmet>
        <meta charSet="utf-8" />
        <title>AGILE DREAMERS</title>
        <link rel="canonical" href="https://agiledreamers.com/" />
        <meta name="description" content="B2B matching platform" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta property="og:url" content="https://agiledreamers.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="AGILE DREAMERS"/>
        <meta property="og:description" content="B2B matching platform"/>
        <meta property="og:image" content="https://agiledreamers.com/logo1200x630.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="agiledreamers.com"/>
        <meta property="twitter:url" content="https://agiledreamers.com/"/>
        <meta name="twitter:title" content="AGILE DREAMERS"/>
        <meta name="twitter:description" content="B2B matching platform"/>
        <meta name="twitter:image" content="https://agiledreamers.com/logo1200x630.png"/>
    </Helmet>
}

export default SEO