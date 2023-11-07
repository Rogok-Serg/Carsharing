import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';

const FavoritesPage = () => {
  const carFavorite = useSelector(selectFavorite);

  return (
    <div>
      <h1>Welcome to Favorites</h1>
      <CatalogList data={carFavorite} />
    </div>
  );
};

export default FavoritesPage;
