import { ImSearch } from 'react-icons/im';

import {
  StyledHeader,
  StyledForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onChange }) => {
  return (
    <StyledHeader>
      <StyledForm
        onSubmit={evt => {
          evt.preventDefault();
          onChange(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <SearchFormButton type="submit">
          <span>
            <ImSearch />
          </span>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
