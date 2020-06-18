// pages/addtime/addtime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    value:[],
    hours:[],
    fz:[],
    index1:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hours = [];
    var fz = [];
    for(var i = 0; i <= 23; i++){
      if(i<10){
        i = "0"+i;
      }
      hours.push(i)
    }
    for(var i = 0; i <= 59; i++){
      if(i<10){
        i = "0"+i;
      }
      fz.push(i)
    }
    this.setData({
      hours:hours,
      fz:fz
    })
  },
  bindChange(e) {
    console.log(e);
    this.setData({
      index1:e.detail.value
    })
    console.log(this.data.index1,this.data.value);
  },
  subtract(){
    console.log(this.data.num)
    var num = --this.data.num;
    if(num<=0){
      num=0;
    }
    this.setData({
      num:num
    })
  },
  add(){
    console.log(this.data.num)
    var num = ++this.data.num;
    this.setData({
      num:num
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