import { StyledSearchbar } from './Searchbar.styled';
import { StyledSearchForm } from './Searchbar.styled';
import { StyledFormButton } from './Searchbar.styled';
import { StyledButtonLabel } from './Searchbar.styled';
import { StyledInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={onSubmit}>
        <StyledFormButton>
          <StyledButtonLabel />
        </StyledFormButton>

        <StyledInput
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
};
