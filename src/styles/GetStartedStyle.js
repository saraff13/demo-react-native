import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Typography from '../utils/Typography';
import * as Spacing from '../utils/Spacing';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#B4CFEA',
    // borderWidth: 1,
    padding: Spacing.SCALE_10,
    paddingHorizontal: Spacing.SCALE_15,
  },
  main: {
    alignSelf: 'flex-end',
  },
  headline: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: 45,
    // borderWidth: 1,
  },
  description: {
    // borderWidth: 1,
    fontSize: Typography.FONT_SIZE_18,
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(5),
  },
  startButton: {
    // borderWidth: 1,
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    padding: 20,
    paddingLeft: 32,
  },
  empty: {
    position: 'absolute',
    borderRadius: 100,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    backgroundColor: Colors.WHITE,
    marginTop: responsiveHeight(30),
    marginLeft: Spacing.SCALE_2,
  },
  image: {
    position: 'absolute',
    height: responsiveHeight(40),
    width: responsiveWidth(70),
    marginLeft: Spacing.SCALE_15,
    borderBottomLeftRadius: 999,
    borderBottomRightRadius: 999,
  },
});

export default styles;
