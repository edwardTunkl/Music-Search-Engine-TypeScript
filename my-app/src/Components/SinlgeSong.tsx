import Song from "../typings/Song";
interface SingleSongProps {
  music: Song[];
}

export default function SingleSong({ music }: SingleSongProps) {
  console.log("MUSIC SINGLESONG",music)
  return (
    <>
        {music.map((m, index) => ( 
          <tr key={m.id}>
            <td>{index} </td>
            <td>{m.artist.name} </td>
            <td>{m.title} </td>
            <td>{m.album.title} </td>
            <td>{m.duration} </td>
          </tr>
        ))}
    
    </>
  );
}
