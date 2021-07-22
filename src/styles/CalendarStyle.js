import {StyleSheet} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import * as Typography from '../utils/Typography';
import * as Spacing from '../utils/Spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4CFEA',
    paddingHorizontal: Spacing.SCALE_7,
    paddingVertical: responsiveHeight(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  backIcon: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_26,
    borderWidth: 0.4,
    padding: 7,
    borderRadius: 10,
  },
  image: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },

  monthSlider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(4),
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
  currentMonth: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_26,
  },

  flatList: {
    height: responsiveHeight(18),
  },
  dateWrap: {
    // borderWidth: 1,
    height: responsiveHeight(15),
    width: responsiveHeight(11),
    marginRight: responsiveHeight(2),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  date: {
    color: '#1916A5',
    fontSize: Typography.FONT_SIZE_26,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },

  ongoingText: {
    fontSize: Typography.FONT_SIZE_26,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginBottom: 10,
  },
  ongoingContainer: {
    flexDirection: 'row',
    height: responsiveHeight(100),
  },
  timeContainer: {
    // borderWidth: 1,
    width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  time: {},

  taskContainer: {
    flexGrow: 1,
  },

  redLineWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    marginTop: responsiveHeight(2),
  },
  currentTime: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: Colors.RED,
    marginLeft: 10,
  },
  currentTimeIcon: {
    color: Colors.RED,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 5,
    fontSize: 10,
  },

  taskBox: {
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 20,
    height: responsiveHeight(13),
    backgroundColor: '#4D56B9',
    paddingHorizontal: Spacing.SCALE_4,
    marginTop: responsiveHeight(2),
    marginLeft: 10,
  },
  taskName: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.WHITE,
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
});

export default styles;
