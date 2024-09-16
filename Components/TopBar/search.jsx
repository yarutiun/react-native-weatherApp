import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

const Search = ({ city, setCity, setSearchLatLong }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);
  
  const fetchData = async (searchCity) => {
    const GeocodingLink = `https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=5&language=en&format=json`;
    try {
      const response = await fetch(GeocodingLink);
      const result = await response.json();
      setData(result.results || []); // Adjust based on the actual response structure
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (city.length > 2) {
      fetchData(city);
    } else {
      setData([]);
    }
  }, [city]);

  useEffect(() => {
    if (city.length > 2) {
      const filteredCities = data.filter(item => item.name.toLowerCase().includes(city.toLowerCase()));
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  }, [data, city]);

  const handleTextChange = (text) => {
    setCity(text);
  };

  const selectCity = (selectedCity) => {
    setCity(selectedCity.name);
    setSuggestions([]);
    setSearchLatLong({ lat: selectedCity.latitude, long: selectedCity.longitude });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={city}
        onChangeText={handleTextChange}
        placeholder="Enter your city"
        placeholderTextColor="#000"
      />
      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer} pointerEvents="box-none">
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectCity(item)}>
                <View style={styles.suggestion}>
                  <Text style={styles.cityName}>{item.name}</Text>
                  <Text style={styles.regionCountry}>{item.admin1 || 'Region Not Available'}, {item.country || 'Country Not Available'}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    paddingVertical: 10,
    marginLeft: 50,
    position: 'relative',
  },
  searchInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  suggestionsContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 10,
    elevation: 10,
    maxHeight: 200,
  },
  suggestion: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cityName: {
    fontWeight: 'bold',
  },
  regionCountry: {
    color: '#555',
  },
});

export default Search;
