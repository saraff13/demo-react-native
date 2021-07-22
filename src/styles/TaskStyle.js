import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Typography from '../utils/Typography';
import * as Spacing from '../utils/Spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1916A5',
    padding: Spacing.SCALE_10,
    paddingHorizontal: Spacing.SCALE_7,
    paddingTop: Spacing.SCALE_5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  dashboardIcon: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_26,
  },
  image: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },

  nameBox: {
    marginTop: responsiveHeight(2),
    // borderWidth: 1,
    height: responsiveHeight(12),
    justifyContent: 'center',
    paddingHorizontal: Spacing.SCALE_2,
  },
  name: {
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: 35,
  },
  pendingTasks: {
    color: '#A0AFC5',
    fontSize: Typography.FONT_SIZE_16,
  },

  taskBox: {
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 20,
    height: responsiveHeight(14),
    backgroundColor: '#4D56B9',
    paddingHorizontal: Spacing.SCALE_4,
    marginTop: responsiveHeight(2),
  },
  taskName: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_18,
  },
  taskMembers: {
    color: '#A0AFC5',
  },
  taskBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskMembersImage: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    marginTop: 5,
  },
  Now: {
    color: '#A0AFC5',
  },

  monthlyReview: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(9),
    paddingHorizontal: Spacing.SCALE_2,
    marginTop: responsiveHeight(1),
  },
  monthlyReviewText: {
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_20,
  },
  calendarIcon: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_20,
    backgroundColor: 'cyan',
    padding: 7,
    borderRadius: 50,
  },

  detailBox: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    height: responsiveHeight(39),
  },
  leftDetailBox: {
    // borderWidth: 1,
  },
  rightDetailBox: {
    // borderWidth: 1,
  },
  largeDetailBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: '#4D56B9',
    width: responsiveWidth(39),
    height: responsiveWidth(39),
    margin: responsiveWidth(2),
    borderRadius: 15,
  },
  smallDetailBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: '#4D56B9',
    height: responsiveWidth(23),
    margin: Spacing.SCALE_2,
    borderRadius: 15,
  },
  numberOfTasks: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_26,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  statusOfTasks: {
    color: '#A0AFC5',
  },

  tabIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'space-around',
    height: responsiveHeight(7),
    marginTop: responsiveHeight(1),
  },
  eachTabIcon: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_26,
  },
});

export default styles;
