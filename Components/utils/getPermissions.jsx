import * as Location from 'expo-location';
import { getCurrentWeather } from './getCurrentWeather';

const getPermissions = async ({setLatLong}) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setLatLong({lat: 'Permission to access location was denied', long: 'Please enable access in settings'});
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLatLong({ lat: location.coords.latitude, long: location.coords.longitude });
  };

  export default getPermissions;