import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
    elevation: 4,
    margin: 8,
    padding: 16,
  },
  image: {
    width: "100%",
    borderRadius: 2,
    height: 150,
    resizeMode: "cover",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 8,
  },
  data: {
    fontSize: 13,
    paddingBottom: 4,
    textAlign: "center",
  },
});

export default styles;