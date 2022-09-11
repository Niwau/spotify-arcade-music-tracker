import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import Head from "next/head"
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Spotify Arcade Music Tracker | Guilherme Ribeiro</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }

  body {
    background-color: black;
  }

  html {
    font-size: 10px;
    font-weight: 200;
    letter-spacing: 0.3rem;
    color: white;
    font-family: 'Press Start 2P', cursive;

    @media(max-width: 775px){
      font-size: 9px;
    }

    @media(max-width: 695px){
      font-size: 8.5px;
    }

    @media(max-width: 582px){
      font-size: 7px;
    }

    @media(max-width: 510px){
      font-size: 6.5px;
    }
    
    @media(max-width: 414px){
      font-size: 6px;
    }
  }

  span {
    color: #55D34A;
  }

`
