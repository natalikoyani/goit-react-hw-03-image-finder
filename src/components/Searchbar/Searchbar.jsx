import { StyledSearchbar } from './Searchbar.styled';
import { StyledSearchForm } from './Searchbar.styled';
import { StyledFormButton } from './Searchbar.styled';
import { StyledButtonLabel } from './Searchbar.styled';
import { StyledInput } from './Searchbar.styled';
import { IoSearchOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <StyledSearchForm
        onSubmit={evt => {
          evt.preventDefault();
          const inputValue = evt.target.elements.input.value
            .trim()
            .replace(' ', '+')
            .toLowerCase();
          onSubmit(inputValue);
        }}
      >
        <StyledFormButton>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <IoSearchOutline>
                <StyledButtonLabel />
              </IoSearchOutline>
            </div>
          </IconContext.Provider>
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
