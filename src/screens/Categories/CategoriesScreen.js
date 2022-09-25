import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
// import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

import { showMessage, hideMessage } from "react-native-flash-message";

var j = '{"list": [{"id": 1, "name": "Compra Nfts", "type": "Ethereum"}, {"id": 2, "name": "Depositos trabajo", "type": "Bitcoin"}, {"id": 3, "name": "Testing API crypto", "type": "Litecoin"}, {"id": 4, "name": "Doge Wallet", "type": "Dogecoin"}]}'

import e from "../../../assets/wallets/Ethereum.png"
import b from "../../../assets/wallets/Bitcoin.png"
import l from "../../../assets/wallets/Litecoin.png"
import d from "../../../assets/wallets/Dogecoin.png"

var categories = [];

var fill_out = false;

const SERVER_IP = "http://192.168.4.10:8000";

export default function CategoriesScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {


    fetch(SERVER_IP+'/get/list', {
          method: 'GET',
        }).then( response => response.json() )
    .then(responseJSON => {

    if (fill_out == false) {
      var out = responseJSON.list;

      out.forEach(function(w) {

        var img = null;

        if (w.type == "Ethereum") {
          img = e;
        } else if (w.type == "Bitcoin") {
          img = b;
        } else if (w.type == "Litecoin") {
          img = l;
        } else {
          img = d;
        }

        categories.push({
          "name": w.name,
          "type": w.type,
          "id": w.id,
          "photo_url": img,
        })
      })

      fill_out = true;

    }

    });

    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = (item) => {

    fetch(SERVER_IP+'/get/id/', {
      method: 'POST',
      body: JSON.stringify({"id": item.id}),
    });

    showMessage({
      message: "Se mando request a blackbox.",
      type: "info",
    });

  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={item.photo_url} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{item.type}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}
