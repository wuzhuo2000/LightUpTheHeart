// pages/coursesCon/coursesCon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    state:true,
    currentTime:"00:00",
    duration:"00:00",
    jd:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  play(){
    console.log(this.videoContext)
    if(this.data.state){
      this.videoContext.play();
    }else{
      this.videoContext.pause();
    }
    this.setData({
      state:!this.data.state
    })
  },
  bc(e){
    var fz = Math.floor(e.detail.duration/60)>=10?Math.floor(e.detail.duration/60):("0"+Math.floor(e.detail.duration/60));
    var mm = Math.floor(e.detail.duration%60)>=10?Math.floor(e.detail.duration%60):("0"+Math.floor(e.detail.duration%60));
    var jd = Math.floor(e.detail.currentTime);
    if(jd<10){
      jd = "00:0"+jd;
    }else if(jd>59){
      var hh = Math.floor(jd/60);
      if(hh<10){
        hh = "0"+hh;
      }
      var ms = (Math.floor(jd%60))>=10?(Math.floor(jd%60)):"0"+(Math.floor(jd%60))
      jd = hh+":"+ms;
    }else{
      jd = "00:"+jd
    }
    this.data.currentTime = jd;
    this.data.duration = fz+":"+mm;
    console.log(e.detail.currentTime/e.detail.duration*100)
    this.setData({
      currentTime:this.data.currentTime,
      duration:this.data.duration,
      jd:e.detail.currentTime/e.detail.duration*100+"%"
    })
  },
  end(){
    this.setData({
      state:true
    })
  },
  touch(e){
    console.log(e);
    var touch = e.touches[0];
    var pageY = touch.pageY;
    console.log(pageY);
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