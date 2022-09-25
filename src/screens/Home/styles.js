import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,

  mainText: RecipeCard.homeText,
  mainTextContainer: RecipeCard.homeTextContainer,

  subText: RecipeCard.subText,

  startBtn: RecipeCard.startBtn,
  startBtnContainer: RecipeCard.startBtnContainer,

});

export default styles;
