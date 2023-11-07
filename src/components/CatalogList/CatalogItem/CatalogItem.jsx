import {
  StyledBtnLike,
  StyledButton,
  StyledFirstInformation,
  StyledImg,
  StyledSecondInformation,
  StyledSpan,
} from '../CatalogList.styled';
import { addCar, removeCar } from 'redux/catalogReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';

const CatalogItem = ({ el, learnMore }) => {
  const carFavorite = useSelector(selectFavorite);

  const identicalCars = carFavorite.includes(el);

  const dispatch = useDispatch();

  const handleBtnLike = () => {
    if (identicalCars) {
      dispatch(removeCar(el));
      return;
    }
    dispatch(addCar(el));
  };

  const adress = el.address.split(' ').slice(3, 5);

  return (
    <div>
      <StyledBtnLike onClick={handleBtnLike} type="button">
        Like
      </StyledBtnLike>
      <div style={{ width: 274, height: 268, marginBottom: 14 }}>
        <StyledImg src={el.img} alt="" />
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
      <StyledButton onClick={() => learnMore(el)} type="button">
        Learn more
      </StyledButton>
    </div>
  );
};

export default CatalogItem;
