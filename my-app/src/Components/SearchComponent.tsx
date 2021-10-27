import React from 'react'
import { useEffect, useState } from 'react'
import { Container, FormControl, Button, InputGroup } from 'react-bootstrap'


export default function SearchComponent() {

  const [query, setQuery] = useState<string>('Metal')

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=')
        if (response.ok) {
          let fetchedBooks: Book[] = await response.json()
          console.log(fetchedBooks)
          setBooks(fetchedBooks)
        }
      } catch (error) {}
    }
    fetchMusic()
  }, [])

  return (
    <div>
         <div className="mt-5 container">
      <Container className="mt-5 container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Container>
      </div>
    </div>
  )
}
