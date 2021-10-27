interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}
interface Album {
  id: number
  title: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  tracklist: string
  type: string
}

interface Song {
  id: number;
  title: string;
  duration: number;
  rank: number;
  artist: Artist
  album: Album
}

export default Song;
