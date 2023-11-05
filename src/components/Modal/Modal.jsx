import {
  StyledFirstInformation,
  StyledSecondInformation,
  StyledSpan,
} from 'components/Modal/Modal.styled';
import {
  StyledModal,
  StyledBackdrop,
  StyledClose,
  StyledWrapperImg,
} from './Modal.styled';

const Modal = ({ data, onClick }) => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') onClick();
  });

  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledClose onClick={onClick}>&times;</StyledClose>
        <StyledWrapperImg>
          <img src={data.img} alt="" width={461} />
          <StyledFirstInformation>
            <p style={{ margin: 0, fontSize: 13 }}>
              {data.make} <StyledSpan>{data.model}</StyledSpan>, {data.year}
            </p>
          </StyledFirstInformation>
          <StyledSecondInformation>
            <p style={{ margin: 0 }}>
              {data.address.split(' ').slice(3, 5)} | {data.rentalCompany} |{' '}
              {data.type} | {data.make} | {data.mileage.toLocaleString('en-IN')}{' '}
              | {data.accessories[2]}
            </p>
          </StyledSecondInformation>
        </StyledWrapperImg>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
