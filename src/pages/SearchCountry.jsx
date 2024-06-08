import {
  Container,
  CountryList,
  SearchForm,
  Heading,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        const countries = await fetchByRegion(query);
        setCountries(countries);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [query]);

  const onSubmit = value => {
    setQuery(value);
    setError(null);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
        {error && <Heading title={error} />}
      </Container>
    </Section>
  );
};
