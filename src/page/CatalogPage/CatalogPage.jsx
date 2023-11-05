import LoadMore from 'components/Button/LoadMore';
import CatalogList from 'components/CatalogList/CatalogList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog, paginationCatalog } from 'redux/operations';
import { selectCatalog } from 'redux/selectors';

const CatalogPage = () => {
  const catalog = useSelector(selectCatalog);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  const updateList = page => {
    dispatch(paginationCatalog(page));
  };

  const handleButton = () => {
    setPage(page + 1);
    updateList(page);
  };
  return (
    <div>
      <CatalogList data={catalog} />
      <LoadMore onClick={handleButton} />
    </div>
  );
};

export default CatalogPage;
