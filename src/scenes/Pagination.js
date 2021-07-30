import React, {Component} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../store/actions/PageAction';

class Pagination extends Component {
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    const {pageData} = this.props;
    if (!pageData) {
      this.props.getData({oldData: [], pageNo: 1});
      return;
    }
    // console.log(pageData.total_pages);
    const data = (pageData && pageData.data) || [];
    const currPageNo = (pageData && pageData.page) || 0;
    const nextPageNo = currPageNo + 1;
    if (nextPageNo <= pageData.total_pages)
      this.props.getData({oldData: data, pageNo: nextPageNo});
  };
  render() {
    const {pageData} = this.props;
    // if (pageData) console.log(pageData.data);
    return (
      <FlatList
        data={(pageData && pageData.data) || [1, 1, 1]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={() => this.fetchData()}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => this.fetchData()}
          />
        }
      />
    );
  }
}

const renderItem = item => {
  //   console.log(item);
  const {id, email} = item.item;
  return (
    <View style={[styles.eachItem]}>
      <Text>{id}</Text>
      <Text>{email}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  pageData: state.PageReducer.data,
});

export default connect(mapStateToProps, {getData})(Pagination);

const styles = StyleSheet.create({
  eachItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 40,
    marginVertical: 20,
  },
});
