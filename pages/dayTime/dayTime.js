// pages/dayTime/dayTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"",
    arry:[{time:"22:00",fz:"0"},{time:"23:00",fz:"0"}],
    sz:[{zzw:"早上",src:"../../assets/images/daytime/morning.png",con:"茶水/咖啡/酒精"},{zzw:"中午",src:"../../assets/images/daytime/evening.png",con:"茶水/咖啡/酒精"},{zzw:"晚上",src:"../../assets/images/daytime/nooning.png",con:"--"}],
    lock:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = new Date();
    var arry = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    console.log(time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日"+arry[time.getDay()]);
    this.setData({
      date:time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日"+arry[time.getDay()]
    })
  },
  subtract(event){
    this.data.arry[event.currentTarget.dataset.index].fz--;
    if(this.data.arry[event.currentTarget.dataset.index].fz<=0){
      this.data.arry[event.currentTarget.dataset.index].fz = 0;
    }
    this.setData({
      arry:this.data.arry
    })
  },
  add(event){
    this.data.arry[event.currentTarget.dataset.index].fz++;
    this.setData({
      arry:this.data.arry
    })
  },
  del(event){
    this.data.arry.splice(event.currentTarget.dataset.index,1);
    this.setData({
      arry:this.data.arry
    })
  },
  back(){
    wx.navigateTo({
      url:'/pages/dayBehavior/dayBehavior'
   })
  },
  addTime(){
    wx.navigateTo({
      url:'/pages/addtime/addtime'
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