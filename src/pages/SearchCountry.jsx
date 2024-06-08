import { Container, CountryList, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        const countries = await fetchByRegion(query);
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const onSubmit = value => {
    setQuery(value);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
