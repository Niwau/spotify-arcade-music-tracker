type spotifyType = {
    client_id: string,
    response_type: 'token',
    redirect_uri: process.env.URL
    endpoint: 'https://accounts.spotify.com/authorize'
    scope: string
}

export const spotify : spotifyType = {
    client_id: process.env.CLIENT_ID,
    response_type: 'token',
    redirect_uri: 'https://spotify-arcade-music-tracker.vercel.app/tracks',
    endpoint: 'https://accounts.spotify.com/authorize',
    scope: 'user-top-read'
}