import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },

  homeText: {
    marginTop: '8%',
    fontSize: '68px',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  homeTextContainer: {
    justifyContent: 'left',
    alignItems: 'center',
  },

  subText: {

    marginTop: '8%',
    fontSize: '48px',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'

  },

  startBtn: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },

  startBtnContainer: {
    marginTop: '30%',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8 
  }

});
