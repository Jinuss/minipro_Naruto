//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    appName: '火影忍者●人物志',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://jinuss.github.io/blog/jinus/role/scroll1.jpg',
      'https://jinuss.github.io/blog/jinus/role/scroll2.jpg',
      'https://jinuss.github.io/blog/jinus/role/scroll3.jpg'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
  },
  gotoChild: function(e) {
    var target = e.currentTarget.id;
    var toUrl = "../" + target + "/" + target;
    // console.log(target);
    wx.navigateTo({
      url: toUrl,
    })
  }
})