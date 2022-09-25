import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, Button } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

import { showMessage, hideMessage } from "react-native-flash-message";

import {NetworkInfo} from 'react-native-network-info';

// <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />

const SERVER_IP = "http://192.168.4.10:8000";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
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

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.mainTextContainer} >

      <Text style={styles.mainText}> Bienvenido {"\n"}al futuro del{"\n"}  metaverso </Text>

      <Text style={styles.subText}> "Blackbox" </Text>

      <TouchableHighlight onPress={() => {

        fetch(SERVER_IP+'/register/', {
          method: 'POST',
          body: JSON.stringify({})
        }).then( response => response.json() )
        .then( responseJSON => {

          console.log(responseJSON)

          fetch(SERVER_IP+'/confirmation/', {
            method: 'POST',
            body: JSON.stringify(responseJSON) //here
          })
          .then( response => response.json() )
          .then( responseJSON => {
              if (responseJSON.error == "Invalid operation. Register again") {
                console.log("No enviaste")

              showMessage({
                message: "No se pudo conectar al blackbox.",
                type: "danger",
              });

              } else if (responseJSON.error == "You need the USB to register") {

              showMessage({
                message: "Llave masestra no conectada al blackbox.",
                type: "danger",
              });

              }
              else if (responseJSON.success == true) {

                showMessage({
                  message: "Conectado a blackbox :)",
                  type: "success",
                });

                navigation.navigate("Wallets & IDs");

              }
          })
          .catch(error => {
            console.log("error: ", error)

            showMessage({
              message: "No se pudo conectar al blackbox :(",
              type: "danger",
            });

          });

        }).catch(error => {

            showMessage({
              message: "No se pudo conectar al blackbox :(",
              type: "danger",
            });

        });

         }} style={styles.startBtnContainer}>
        <Text style={styles.startBtn}> Conectar... </Text>
      </TouchableHighlight>

    </View>
  );
}

