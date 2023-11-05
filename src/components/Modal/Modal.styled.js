import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(46, 47, 66, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledModal = styled.div`
  position: absolute;
  width: 541px;
  height: 752px;
  top: 50%;
  left: 50%;
  padding: 15px 40px 40px 40px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.14);
  border-radius: 24px;
  background: #fff;
`;

export const StyledLoadMore = styled.button`
  border: none;
  background: none;
  color: #3470ff;
  margin-bottom: 100px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #0b44cd;
  }
`;

export const StyledClose = styled.button`
  position: absolute;
  border: none;
  background: none;
  top: 16px;
  right: 16px;
  font-size: 24px;
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: rgba(18, 20, 23, 0.1);
  }
`;

export const StyledWrapperImg = styled.div`
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: center;
`;

export const StyledFirstInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
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
