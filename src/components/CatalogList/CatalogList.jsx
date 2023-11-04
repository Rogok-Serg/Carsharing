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

const CatalogList = ({ data }) => {
  return (
    <div>
      <StyledList>
        {data.map(
          ({
            model,
            make,
            img,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
            mileage,
            accessories,
          }) => {
            const adress = address.split(' ').slice(3, 5);
            const id = nanoid();
            return (
              <StyledItem key={id}>
                <div style={{ width: 274, height: 268, marginBottom: 14 }}>
                  <StyledImg
                    src={img}
                    alt=""
                    style={{ backgroundSize: 'cover' }}
                  />
                </div>
                <StyledFirstInformation>
                  <p style={{ margin: 0, fontSize: 13 }}>
                    {make} <StyledSpan>{model}</StyledSpan>, {year}
                  </p>
                  <p style={{ margin: 0 }}>{rentalPrice}</p>
                </StyledFirstInformation>
                <StyledSecondInformation>
                  <p style={{ margin: 0 }}>
                    {adress} | {rentalCompany} | {type} | {make} |{' '}
                    {mileage.toLocaleString('en-IN')} | {accessories[2]}
                  </p>
                </StyledSecondInformation>
                <StyledButton type="button">Learn more</StyledButton>
              </StyledItem>
            );
          }
        )}
      </StyledList>
    </div>
  );
};

export default CatalogList;
