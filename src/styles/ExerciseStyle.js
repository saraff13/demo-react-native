import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Typography from '../utils/Typography';
import * as Spacing from '../utils/Spacing';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },

  headerContainer: {
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 100,
  },
  header: {
    flexDirection: 'row',
    height: responsiveHeight(15),
    // borderWidth: 1,
    padding: Spacing.SCALE_6,
  },
  headerImage: {
    width: Spacing.SCALE_12,
    height: Spacing.SCALE_12,
    borderRadius: 50,
  },
  headerTitle: {
    // borderWidth: 1,
    paddingLeft: 15,
    paddingTop: 5,
  },
  wishingText: {
    color: Colors.GREY,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  userName: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  headerIcon: {
    // borderWidth: 1,
    alignSelf: 'center',
    flexGrow: 1,
    textAlign: 'right',
    fontSize: Typography.FONT_SIZE_20 * 2,
  },

  detailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: responsiveWidth(100),
    padding: Spacing.SCALE_6,
    paddingTop: 0,
  },
  detailLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: Colors.BLUE,
    borderRadius: 100,
    width: responsiveWidth(32),
    height: responsiveWidth(32),
  },
  walkIcon: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_20,
  },
  numberOfSteps: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_30,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  steps: {
    color: Colors.WHITE,
  },
  detailRight: {
    // borderWidth: 1,
    paddingRight: Spacing.SCALE_8,
    justifyContent: 'space-evenly',
  },
  durationBox: {
    // borderWidth: 1,
  },
  durationText: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  durationTimer: {
    fontSize: Typography.FONT_SIZE_26,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  energyBox: {
    // borderWidth: 1,
  },
  energyText: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  energySpent: {
    flexDirection: 'row',
  },
  energySpentNumber: {
    fontSize: 25,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  energySpentUnit: {
    alignSelf: 'flex-end',
    marginLeft: 5,
  },

  mapContainer: {
    flexDirection: 'column-reverse',
    flex: 1,
    borderWidth: 1,
  },
  map: {
    flex: 1,
  },

  pauseIconwrap: {
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    marginLeft: responsiveWidth(58),
    marginTop: responsiveHeight(32),
  },
  pauseIcon: {
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_30,
    backgroundColor: Colors.RED,
    borderRadius: 100,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  GPS: {
    backgroundColor: Colors.WHITE,
    margin: 30,
    position: 'absolute',
    fontSize: Typography.FONT_SIZE_16,
    padding: 15,
    borderRadius: 25,
  },
  GPSIcon: {
    color: Colors.BLUE,
    fontSize: Typography.FONT_SIZE_16,
  },

  zoomIcon: {
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    fontSize: Typography.FONT_SIZE_26,
    padding: 15,
    borderRadius: 100,
    margin: 30,
    marginLeft: responsiveWidth(75),
  },
});

export default styles;
