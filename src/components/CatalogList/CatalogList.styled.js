import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex-wrap: wrap;
  column-gap: 29px;
`;

export const StyledItem = styled.li`
  max-width: 264px;
  margin-bottom: 50px;
  object-fit: cover;
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const StyledFirstInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const StyledSpan = styled.span`
  color: #3470ff;
`;

export const StyledSecondInformation = styled.div`
height: 40px;
display: flex:
justify-content: center;
color: rgba(18, 20, 23, 0.50);
// font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
`;

export const StyledButton = styled.button`
  color: #fff;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  margin-top: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  border: #fff;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;
