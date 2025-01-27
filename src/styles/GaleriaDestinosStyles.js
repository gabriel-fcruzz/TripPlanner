import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#000",
  },
  darkTitle: {
    color: "#fff",
  },
  videoContainer: {
    width: screenWidth * 0.8,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  darkVideoContainer: {
    backgroundColor: "#1e1e1e",
  },
  thumbnail: {
    width: "100%",
    height: "80%",
  },
  watchText: {
    fontSize: 16,
    color: "#007BFF",
    marginTop: 10,
  },
  darkWatchText: {
    color: "#82b1ff",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default styles;
