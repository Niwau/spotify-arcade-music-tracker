import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export default function Tracks() {

  const router = useRouter()
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ data, setData ] = useState([])

  useEffect(() => {
    if(router.isReady){
      const token = router.asPath.split('=')[1].split('&')[0]
      const Fetch = async (token : string) => {
        const json = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10', {
          method: 'GET',
          headers: {'Authorization': 'Bearer ' + token}
        })
        const response = await json.json()
        setData(response.items)
        setIsLoaded(true)
      }
      Fetch(token)
    }
  }, [])

  const tracks = data.map((track, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{track['name'] + ' | ' + track['artists'][0]['name']}</td>
      <td>{track['duration_ms']}</td>
    </tr>
  ))
  
  return (
    <Main>
      <h1>Scoreboard</h1>
      <table>
        <thead>
          <tr><td>Rank</td><td>Name</td><td>Score</td></tr>
        </thead>
        <tbody>
          {tracks}
        </tbody>
      </table>
      <h3><span id='credits'>CREDITS: 0</span></h3>
    </Main>
  )
}

const Main = styled.main`

  padding: 5rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1f;
  gap: 10rem;
  place-items: center;

  h3 {
    font-size: 1rem;
  }

  h1 {
    font-size: 4rem;
  }
  
  td {
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
  }

  thead {
    font-size: 1.3rem;

  }

  tbody > tr {

  }

  tbody > tr:first-child {
    color: #55D34A;
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

`;