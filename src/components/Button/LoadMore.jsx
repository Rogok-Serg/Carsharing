import { StyledLoadMore } from 'components/Modal/Modal.styled';
import React from 'react';

const LoadMore = ({ onClick }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledLoadMore onClick={onClick} type="button">
        {' '}
        Load more
      </StyledLoadMore>
    </div>
  );
};

export default LoadMore;
