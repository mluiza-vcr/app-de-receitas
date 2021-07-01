import React from 'react';
import { Form, Button } from 'react-bootstrap';

function SearchBar() {
  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search Recipe"
          data-testid="search-input"
        />
        <Form.Check
          type="radio"
          label="Ingrediente"
          data-testid="ingredient-search-radio"
        />
        <Form.Check
          type="radio"
          label="Nome"
          data-testid="name-search-radio"
        />
        <Form.Check
          type="radio"
          label="Primeira Letra"
          data-testid="first-letter-search-radio"
        />
      </Form.Group>
      <Button
        variant="outline-danger"
        data-testid="exec-search-btn"
      >
        Busca
      </Button>
    </div>
  );
}

export default SearchBar;
