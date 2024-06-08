import { Container, CountryInfo, Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();
  const [currentCountry, setCurrentCountry] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const currentCountry = await fetchCountry(countryId);
        setCurrentCountry(currentCountry);
      } catch (error) {
        console.error('error', error);
      }
    };
    getData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo {...currentCountry} />
      </Container>
    </Section>
  );
};
