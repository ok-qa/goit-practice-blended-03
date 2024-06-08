import { Header } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() =>
  import('./pages/Home').then(module => ({ default: module.Home })),
);
const SearchCountry = lazy(() =>
  import('./pages/SearchCountry').then(module => ({
    default: module.SearchCountry,
  })),
);
const Country = lazy(() =>
  import('./pages/Country').then(module => ({
    default: module.Country,
  })),
);

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
          <Route path="*" element={<Navigate />} />
        </Routes>
      </Suspense>
    </>
  );
};
