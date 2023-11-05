import { nanoid } from '@reduxjs/toolkit';
import {
  StyledImg,
  StyledItem,
  StyledList,
  StyledFirstInformation,
  StyledSpan,
  StyledSecondInformation,
  StyledButton,
} from './CatalogList.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const CatalogList = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalCar, setModalCar] = useState(null);

  const handelButtonLearnMore = el => {
    setModalCar(el);
    setIsOpen(true);
  };

  const hendelCloseButton = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && <Modal onClick={hendelCloseButton} data={modalCar} />}
      <StyledList>
        {data.map(el => {
          const adress = el.address.split(' ').slice(3, 5);
          const id = nanoid();
          return (
            <StyledItem key={id}>
              <div style={{ width: 274, height: 268, marginBottom: 14 }}>
                <StyledImg
                  src={el.img}
                  alt=""
                  style={{ backgroundSize: 'cover' }}
                />
              </div>
              <StyledFirstInformation>
                <p style={{ margin: 0, fontSize: 13 }}>
                  {el.make} <StyledSpan>{el.model}</StyledSpan>, {el.year}
                </p>
                <p style={{ margin: 0 }}>{el.rentalPrice}</p>
              </StyledFirstInformation>
              <StyledSecondInformation>
                <p style={{ margin: 0 }}>
                  {adress} | {el.rentalCompany} | {el.type} | {el.make} |{' '}
                  {el.mileage.toLocaleString('en-IN')} | {el.accessories[2]}
                </p>
              </StyledSecondInformation>
              <StyledButton
                onClick={() => handelButtonLearnMore(el)}
                type="button"
              >
                Learn more
              </StyledButton>
            </StyledItem>
          );
        })}
      </StyledList>
    </div>
  );
};

export default CatalogList;
