// pages/day/day.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circlesize:200,
    // tab 切换
    tabArr: {
      curHdIndex: 1,
      curBdIndex: 1
    },
  },
  //tab切换
  tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
    console.log(obj);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 获取系统信息
     wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          // 25:顶部控制切换的view高度
          contentHeight:res.windowHeight-25
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
    // //  tab切换
    // swichNav: function( e ) {
    //   var that = this;
    //   if( this.data.currentTab === e.target.dataset.current ) {
    //       return false;
    //   } else {
    //       that.setData( {
    //           currentTab: e.target.dataset.current
    //       })
    //   }
    // },
    // bindChange: function( e ) {
    //   var that = this;
    //   that.setData( { currentTab: e.detail.current });
    // },
    // toChange: function() {
    //   let that = this;
    //   that.setData({
    //       isShow: !that.data.isShow
    //   })
    // },
})