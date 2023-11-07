import { StyledHeader, StyledMain, StyledNav, StyledNavLink } from 'App.styled';
import { Loader } from 'components/Loader/Loader';
import { lazy, useCallback, useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCatalog } from 'redux/operations';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const CatalogPage = lazy(() => import('page/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('page/FavoritesPage/FavoritesPage'));

const App = () => {
  const dispatch = useDispatch();

  const getCars = useCallback(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Suspense>
      </StyledMain>
    </>
  );
};

export default App;
