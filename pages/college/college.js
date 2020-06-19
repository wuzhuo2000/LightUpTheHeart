// pages/college/college.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbo:[],
    currentIndex: 0,
    data:25,
    time:2300,
    cardList: [ ],
    showModal: false,
    name:"cc"
  },
  swiperChange: function (e) {
    let {current} = e.detail;
    this.setData({
      currentIndex: current
    })
  },
  showDialogBtn: function () {
    var that = this
    that.setData({
      showModal: true
    })
  },
  /**
  * 弹出框蒙层截断touchmove事件
  */
  preventTouchMove: function () {
  },
  /**
    * 隐藏模态对话框
    */
  hideModal: function () {
    var that = this
    that.setData({
      showModal: false
    });
  },
  onConfirm:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success:(res) => {
        // console.log(res.data)
        this.setData({
          lunbo:res.data.message
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

  }
})