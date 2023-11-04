import { StyledHeader, StyledMain, StyledNav, StyledNavLink } from 'App.styled';
import { Loader } from 'components/Loader/Loader';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const CatalogPage = lazy(() => import('page/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('page/FavoritesPage/FavoritesPage'));

const App = () => {
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
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Suspense>
      </StyledMain>
    </>
  );
};

export default App;
