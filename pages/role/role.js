// pages/role/role.js
var roleData = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    allData: roleData.mtData().list,
    inputSearch: []
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false,
      inputSearch:[]
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    var val = e.detail.value;
    var searchResult = roleData.searchmtdataByName(val)||[];
    this.setData({
      inputVal: val,
      inputSearch: searchResult
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
})