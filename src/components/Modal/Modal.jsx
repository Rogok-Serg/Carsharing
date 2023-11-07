import {
  StyledDescription,
  StyledFirstInformation,
  StyledSecondInformation,
  StyledSpan,
  StyledModal,
  StyledBackdrop,
  StyledClose,
  StyledWrapperImg,
  StyledFunctionalities,
  StyledSpanWrapper,
  StyledRental,
  StyledButton,
} from './Modal.styled';

const Modal = ({ data, onClick }) => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') onClick();
  });

  return (
    <StyledBackdrop>
      <StyledModal className="modal">
        <StyledClose onClick={onClick}>&times;</StyledClose>
        <StyledWrapperImg>
          <img src={data.img} alt="" width={461} />
        </StyledWrapperImg>
        <StyledFirstInformation>
          <p style={{ margin: 0, fontSize: 18 }}>
            {data.make} <StyledSpan>{data.model}</StyledSpan>, {data.year}
          </p>
        </StyledFirstInformation>
        <StyledSecondInformation>
          <p style={{ margin: 0 }}>
            {data.address.split(' ').slice(3, 5)} | Year: {data.year} | Type:{' '}
            {data.type} <br /> Fuel Consumption: {data.fuelConsumption} | |
            Engine Size: {data.engineSize}
          </p>
          <StyledDescription>{data.description}</StyledDescription>
          <StyledFunctionalities>
            Accessories and functionalities:
            <br />
            <StyledSpanWrapper>
              {data.functionalities[0]} | {data.functionalities[1]} |{' '}
              {data.functionalities[2]}
            </StyledSpanWrapper>
          </StyledFunctionalities>
          <StyledFunctionalities>
            Rental Conditions:
            <br />
            <StyledSpanWrapper>{data.rentalConditions}</StyledSpanWrapper>
          </StyledFunctionalities>
          <StyledRental>
            <p>{data.rentalCompany}</p>
            <p>{data.rentalPrice}</p>
            <p>{data.mileage.toLocaleString('en-IN')}</p>
          </StyledRental>
          <StyledButton>Rental car</StyledButton>
        </StyledSecondInformation>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
