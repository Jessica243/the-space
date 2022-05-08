import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  title: {
    fontSize: 48,
    paddingTop: 20,
    paddingBottom: 20,
  },
  userInput: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  link: {
    fontSize: 12,
    textDecorationLine: 'underline',
    paddingTop: 5,
    paddingBottom: 5,
  },
  validationError: {
    fontSize: 12,
    color: 'red',
  },
  buttonRow: {
    flexDirection:"row",
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    width: "100%"
  }
});

export default appStyles;