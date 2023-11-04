import CatalogList from 'components/CatalogList/CatalogList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCatalog from 'redux/operations';
import { selectCatalog } from 'redux/selectors';

const CatalogPage = () => {
  const catalog = useSelector(selectCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  return (
    <div>
      <CatalogList data={catalog} />
    </div>
  );
};

export default CatalogPage;
