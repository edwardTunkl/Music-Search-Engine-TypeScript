import { useEffect, useState, ChangeEvent, FormEvent  } from "react";
import { Container, FormControl, Button, InputGroup, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Song from "../typings/Song";

export default function SearchComponent() {
  const history = useHistory()
  const [query, setQuery] = useState<string>("Metal");
  const [music, setMusic] = useState<Song[]>([]);
  console.log("MUSIC STATE", music);
  console.log("QUERY", query)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    history.push('/')
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

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
      <div className="mt-5 container">
        <Container className="mt-5 container">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
            value={query}
            onChange={handleInput}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" type="submit">
              Search
            </Button>
          </InputGroup>
          </Form>
        </Container>
        <Container>

        </Container>
      </div>
    </div>
  );
}
