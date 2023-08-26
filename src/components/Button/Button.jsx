import { StyledButtonLoadMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <StyledButtonLoadMore type="button" onClick={onClick}>
      Load more
    </StyledButtonLoadMore>
  );
};
