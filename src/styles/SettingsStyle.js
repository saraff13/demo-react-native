import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Typography from '../utils/Typography';
import * as Spacing from '../utils/Spacing';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#202020',
  },
  main: {
    // borderWidth: 1,
    width: responsiveWidth(73),
    paddingRight: Spacing.SCALE_15,
  },

  leftColumn: {
    // borderWidth: 1,
    width: responsiveWidth(18),
    backgroundColor: '#3399FF',
  },
  IconWrap: {
    // borderWidth: 1,
    height: responsiveHeight(11),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    color: Colors.WHITE,
    fontSize: 35,
  },
  icon: {
    backgroundColor: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_28,
    borderRadius: 50,
    padding: 5,
  },
  specialIconWrap: {
    // borderWidth: 1,
    height: responsiveHeight(11),
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(25),
    borderRadius: 999,
    backgroundColor: '#3399FF',
  },
  specialIcon: {
    backgroundColor: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_20 * 2,
    borderRadius: 50,
    color: Colors.BLUE,
    marginLeft: 20,
    padding: 5,
  },

  appName: {
    color: Colors.WHITE,
    // borderWidth: 1,
    textAlign: 'right',
    marginBottom: responsiveHeight(7),
    marginTop: 20,
    fontSize: Typography.FONT_SIZE_18,
  },
  pageTitle: {
    color: 'lightgreen',
    fontSize: Typography.FONT_SIZE_30,
    marginBottom: responsiveHeight(1),
  },
  description: {
    paddingLeft: 10,
    color: Colors.WHITE,
  },
  batteryCircle: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderWidth: 2,
    borderColor: 'cyan',
    borderRadius: 150,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryPercent: {
    color: 'cyan',
    fontSize: 50,
  },
  description: {
    padding: 10,
    paddingLeft: 20,
    color: 'white',
    marginBottom: 20,
  },

  featuresBox: {
    backgroundColor: Colors.WHITE,
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  featuresIcon: {
    color: Colors.GREY,
    fontSize: 50,
  },
  featuresText: {
    color: Colors.GREY,
  },
});

export default styles;
