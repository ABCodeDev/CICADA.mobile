import { StyleSheet } from 'react-native'
import { Colors,Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    paddingTop: 0,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor: Colors.transparent
  },
  navbarPad: {
    width: Metrics.screenWidth,
    height: Metrics.navBarHeight,
    backgroundColor:Colors.background
  }
});
