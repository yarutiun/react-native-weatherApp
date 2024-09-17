import * as Location from 'expo-location';
import { getCurrentWeather } from './getCurrentWeather';

const getPermissions = async ({ setLatLong, setCity }) => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  
  if (status !== 'granted') {
    setLatLong({ lat: 'Permission to access location was denied', long: 'Please enable access in settings' });
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  
  setLatLong({ lat: latitude, long: longitude });
  
  // Reverse geocoding to get location name
  let reverseGeocode = await Location.reverseGeocodeAsync({
    latitude,
    longitude,
  });

  // Extracting location name (city, region, or country based on available data)
  if (reverseGeocode.length > 0) {
    let place = reverseGeocode[0];
    let locationName = `${place.city} ${place.region} ${place.country}`;
    setCity(locationName); // Set location name using state or whatever method you prefer
  } else {
    setCity('Unknown location');
  }
};

export default getPermissions;
