// pages/day/day.js
import * as echarts from '../../components/ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width:width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
  //定义图标的标题和颜色
    title: {
      text: '今日访问量',
      left: 'center'
    },
    color: ["#37A2DA"],
    //定义你图标的线的类型种类
    legend: {
    data: ['A'],
    top: 50,
    left: 'center',
    backgroundColor: 'red',
    z: 100
    },
    grid: {
    containLabel: true
  },
  //当你选中数据时的提示框
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    //	x轴
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一', '二', '三', '四', '五', '六', '日', '一', '二', '三'],//x轴数据
      // x轴的字体样式
      axisLabel: {
        show: true,
        textStyle: {
          color: '#000',
          fontSize: '14',
        }
      },
      // 控制网格线是否显示
      splitLine: {
        show: true,
        //  改变轴线颜色
        lineStyle: {
          // 使用深浅的间隔色
          color: ['#aaaaaa']
        }
      },
      // x轴的颜色和宽度
      axisLine: {
        lineStyle: {
          color: '#000',
          width: 1,   //这里是坐标轴的宽度,可以去掉
        }
      }
      // show: false //是否显示坐标
    },
    yAxis: {
      x: 'center',
      type: 'value',
      //网格线
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [15, 2, 30, 16, 10, 17, 15, 22, 27, 9]
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
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