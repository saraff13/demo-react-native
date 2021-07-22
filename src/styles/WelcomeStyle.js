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
  welcomeText: {
    color: 'lightgreen',
    fontSize: Typography.FONT_SIZE_30,
    marginBottom: responsiveHeight(1),
  },
  welcomeMessage: {
    paddingLeft: 10,
    color: Colors.WHITE,
  },
  inputBox: {
    paddingLeft: 10,
    marginTop: responsiveHeight(3),
  },
  inputType: {
    color: Colors.WHITE,
  },
  dashForInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
  },

  checkIcon: {
    color: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    fontSize: Typography.FONT_SIZE_14,
    marginTop: responsiveHeight(72),
    marginLeft: responsiveWidth(23),
  },
  agreement: {
    padding: 10,
    color: Colors.WHITE,
    marginTop: responsiveHeight(3),
  },

  signup: {
    position: 'absolute',
    borderWidth: 1,
    width: responsiveWidth(84),
    padding: 15,
    fontSize: Typography.FONT_SIZE_26,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    borderRadius: 50,
    backgroundColor: 'cyan',
    color: Colors.WHITE,
    marginTop: responsiveHeight(80),
    textAlign: 'center',
    marginLeft: Spacing.SCALE_8,
  },
});

export default styles;
