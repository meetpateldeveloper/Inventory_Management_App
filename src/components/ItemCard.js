import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemCard = ({ data }) => {
  const handlePress = () => {

  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: data.imageURL,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardText}>
          <Text style={styles.titleFont}>{data.title}</Text>
          <Text>{data.quantity}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Icon name="edit" size={30} color="#008000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Icon name="trash" size={30} color="#008000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 90,
    marginTop: 5,
    display: "flex",
    flexDirection: "row", // Use row to align the image and the text horizontally
    justifyContent: "space-around",
    alignItems: "center", // Center the elements vertically
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // This property is for Android to show elevation
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardImage: {
    resizeMode: "contain", // Adjust the image to fit in the card
    width: "20%", // Adjust the width of the image
    height: "100%",
    marginRight: 10, // Add some margin to separate the image and the text
  },
  cardText: {
    display: "flex",
    flexDirection: "column", // Use column to align the title and the quantity vertically
    alignItems: "flex-start", // Align the text to the left
    justifyContent: "center", // Center the text vertically
  },
  button: {
    marginHorizontal: 5, // Add some margin to separate the buttons from the text and the edges
  },
  bold: {
    fontWeight: "800",
    fontSize: 15,
  },
  titleFont: {
    color: "#d30438",
    fontWeight: "800",
    fontSize: 15,
  },
  Text: {
    fontFamily: "Roboto-Bold",
  },
});
export default ItemCard;
