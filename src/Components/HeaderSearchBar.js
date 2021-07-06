import React from 'react';

function HeaderSearchBar() {
  return (
    <div>
      <label htmlFor="search-input">
        <input
          type="text"
          id="search-input"
          data-testid="search-input"
          placeholder="digite aqui o termo da busca"
        />
      </label>
      <br />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="search-term"
          id="ingredient"
          data-testid="ingredient-search-radio"
          value="ingredient"
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="search-term"
          id="name"
          data-testid="name-search-radio"
          value="name"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          name="search-term"
          id="first-letter"
          data-testid="first-letter-search-radio"
          value="first-letter"
        />
        First Letter
      </label>
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}

export default HeaderSearchBar;
