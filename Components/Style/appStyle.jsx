import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C6E71",
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
    // flex: 3,
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
  }
});

export default styles;