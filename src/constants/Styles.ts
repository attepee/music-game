import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: ((width < 768) ? "90%" : "30%"),
    alignItems: "center",
    justifyContent: "center"
  },
  linkButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 6,
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2ba0db",
    fontSize: 14,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  },
  titleText: {
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000"
  },
  gameButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  gameText : {
    textAlign: "center",
    margin: "auto",
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000",
    userSelect: "none"
  }
});