import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FormControl, Button, InputGroup, Form, Table } from "react-bootstrap";
import { useHistory } from "react-router";
import "../search.css";
import SingleSong from "./SinlgeSong";
import Song from "../typings/Song";

export default function SearchComponent() {
  const history = useHistory();
  const [query, setQuery] = useState<string>("Metal");
  const [music, setMusic] = useState<Song[]>([]);

  console.log("MUSIC STATE", music);
  console.log("QUERY", query);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push("/");
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
        );
        if (response.ok) {
          let results = await response.json();
          let resultsData = results.data;
          console.log(results);
          setMusic(resultsData);
        }
      } catch (error) {}
    };
    fetchMusic();
  }, [query]);

  return (
    <div>
      <div id="search-container" className="mt-5">
        <div id="search-form" className="mb-5">

        <Form  onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              value={query}
              onChange={handleInput}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-warning" id="button-addon2" type="submit">
              Search
            </Button>
          </InputGroup>
        </Form>
        </div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr id="table-head">
              <th>#</th>
              <th>Artist</th>
              <th>Song</th>
              <th>Album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <SingleSong music={music} />
          </tbody>
        </Table>
      </div>
    </div>
  );
}
