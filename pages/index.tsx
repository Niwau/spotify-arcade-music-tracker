import { spotify } from '../utils/spotify'
import styled from 'styled-components';

import React from 'react'

export default function Home() {

  const { client_id, response_type, redirect_uri, endpoint, scope } = spotify
  const url = `${endpoint}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`

  return (
    <React.Fragment>
      <Main>
        <blockquote>
          <h1><span>Spotify</span> Arcade Music Tracker</h1>
          <h2>Log in with your <span>Spotify Account</span> to see the songs that you most listened in the last 4 weeks.</h2>
          <h3>By <a target='_blank' rel="noreferrer" href="https://github.com/Niwau">Guilherme Ribeiro</a></h3>
        </blockquote>
        <blockquote>
         <h3><a href={url}>Press here to log in</a></h3>
         <h3><span id='credits'>CREDITS: 1</span></h3>
        </blockquote>
      </Main>
    </React.Fragment>
  )
}

const Main = styled.main`

  place-items: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 5rem 5rem 0 5rem;
  gap: 40rem;

  a {
    color: white;
  }

  h1 {
    font-size: 3rem;
    line-height: 150%;
  }

  h2 {
    font-size: 1.3rem;
    line-height: 150%;
  }

  h3 > a {
    text-decoration: none;
  }

  blockquote:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 3rem
  }

  blockquote:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #credits {
    animation-name: Blink;
    animation-duration: 1s;
    animation-timing-function: steps(2);
    animation-iteration-count: infinite;
  }

  @keyframes Blink {
    0% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }


`