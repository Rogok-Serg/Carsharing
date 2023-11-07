import { StyledItem, StyledList } from './CatalogList.styled';

import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import CatalogItem from './CatalogItem/CatalogItem';

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
          return (
            <StyledItem key={el.id}>
              <CatalogItem learnMore={handelButtonLearnMore} el={el} />
            </StyledItem>
          );
        })}
      </StyledList>
    </div>
  );
};

export default CatalogList;
