import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  viewContainer: {
    flexDirection: "row",
    paddingHorizontal: "5%", 
  },
  search: {
    // position: "absolute", 
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "100%",
  },
  footer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    fontSize: '40px',
    marginBottom: '100%',
    flexGrow: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  when: {
    marginBottom: 20,
    fontSize: 30,
  },
  where: {
    fontSize: 20,
  },
  weatherItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  curTemp: {
    fontSize: 40,
    color: "orange",
  },
  curWeather: {
    fontSize: 40,
    color: "orange",
    marginTop: 10,
  },
  curWind: {
    fontSize: 40,
    flex: 2,
    color: "orange",
  },
  a: {
    marginTop: '20%',
  },
  scrollView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    paddingVertical: 10,  // Add vertical padding for better centering
  },
  weatherItem: {
    alignItems: 'center',
    justifyContent: 'center',  // Centers items vertically
    paddingVertical: 5,        // Reduce vertical padding to remove extra space
    paddingHorizontal: 10,     // Keep some horizontal padding
    marginHorizontal: 5,       // Reduce the gap between items
    borderRadius: 10,
  },
  hour: {
    color: 'white',
    fontSize: 16,
    marginBottom: 3,           // Reduce bottom margin
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 3,           // Reduce margin to tighten the layout
  },
  temp: {
    color: '#FFA500',           // Orange color for temperature
    fontSize: 22,
    marginVertical: 5,          // Reduce the vertical margin to decrease empty space
  },
  windContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wind: {
    color: 'white',
    fontSize: 20,               // Adjust font size for better fit
  },
  desc: {
    color: 'white',
    fontSize: 16,               // Adjust description font size
    marginBottom: 5,            // Tidy up space between elements
  },
  emoji: {
    fontSize: 30,               // Adjust emoji size if needed
  },
  windIcon: {
    width: 20,
    height: 20,
    marginRight: 5,              // Add some margin to separate icon from text
  },
  emojiIcon: {
    fontSize: 45,               // Adjust emoji size if needed
  },
  max: {
    color: '#e74c3c',
  },
  min: {
    color: '#043c61',
  }
});

export default styles;