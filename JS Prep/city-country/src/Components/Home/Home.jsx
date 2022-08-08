import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataCities } from '../../Redux/Cities/action';
import { getDataCountries } from '../../Redux/Countries/action';

function Home() {
  const dispatch = useDispatch();
  const {cities} = useSelector(store => store.cities);
  const {countries} = useSelector(store => store.countries);
  React.useEffect(() => {
    dispatch(getDataCities());
    dispatch(getDataCountries());
  },[dispatch]);

  return (
    <div>
      Home
    </div>
  )
}

export default Home
