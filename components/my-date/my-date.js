// components/calendarWeek/index.js
var utils = require('./utils.js');
var util = require("./util.js");
Component({
 /**
 * 组件的属性列表
 */
 properties: {
 
 },
 /**
 * 组件的初始数据
 */
 data: {
 valtime: 8,
 dateList: [], // 日历数据数组
 swiperCurrent: 0, // 日历轮播正处在哪个索引位置
 dateCurrent: new Date(), // 正选择的当前日期
 dateCurrentStr: '', // 正选择日期的 id
 dateMonth: '1月', // 正显示的月份
 time: '22:00',
 time1: '待记录',
 time2: '待记录',
 time3: '待记录',
 dateList: [],
  yrars:[],
  hours: [],
  minutes: [],
  date: {},
  hour: {},
  minute: {},
  todayhour: "",
  todayminutes: "",
 },
 ready: function () {
  var that = this;
  var today = utils.formatTime2(new Date());
  this.setData({
  today,
  });
  var d = new Date();
  this.initDate(-5, 2, d); // 日历组件程序 -4左表示过去4周 右1表示过去一周
  let dateList = this.getDates(7);
  const date = new Date()
  const hours = []
  const minutes = ['00', '30']
  var todayMinutes = parseInt(date.getMinutes());
  var todayhour = (todayMinutes >= 30 ? (date.getHours() + 1) : date.getHours());//当前时
  var newtodayMinutes = todayMinutes < 30 ? '30' : '00';//当前分
  for (let i = 1; i <= 23; i++) {
    hours.push(i)
  }
  this.setData({
    dateList: dateList,
    hours: hours,
    minutes: minutes,
    todayhour: todayhour,
    todayminutes: newtodayMinutes
  })
  var selected = dateList[0].year + "-" + dateList[0].newdates + "\t" + ((todayhour >= 10) ? todayhour : ("0" + todayhour)) + ":" + newtodayMinutes;
  var myEventDetail = {
    selected: selected,
  }
  this.triggerEvent('bindSelect', myEventDetail);
 },
 /**
 * 组件的方法列表
 */
 methods: {

 onShow: function (e) {
 wx.getSystemInfo({
 success: (res) => {
 this.setData({
 windowHeight: res.windowHeight,
 windowWidth: res.windowWidth,
 });
 }
 });
 },
 
 // 日历组件部分
 // ----------------------------
 initDate(left, right, d) {
 var month = utils.addZero(d.getMonth() + 1),
 year = utils.addZero(d.getFullYear()),
 day = utils.addZero(d.getDate());
 for (var i = left; i <= right; i++) {
 this.updateDate(utils.DateAddDay(d, i * 7));//多少天之后的
 }
  
 this.setData({
 swiperCurrent: 5,
 dateCurrent: d,
 dateCurrentStr: d.getFullYear() + '-' + month + '-' + day,
 dateMonth: month + '月',
 dateYear: year + '年',
 dateDay: day + '日',
 dateCurrentStr: year + "-" + month + "-" + day,
 });
 },
 // 获取这周从周日到周六的日期
 calculateDate(_date) {
 var first = utils.FirstDayInThisWeek(_date);
 var d = {
 'month': first.getMonth() + 1,
 'days': [],
 
 };
 for (var i = 0; i < 7; i++) {
 var dd = utils.DateAddDay(first, i);
 var day = utils.addZero(dd.getDate()),
 year = utils.addZero(dd.getFullYear()),
 month = utils.addZero(dd.getMonth() + 1);
 
 
 }
 return d;
 },
 // 更新日期数组数据
 updateDate(_date, atBefore) {
 var week = this.calculateDate(_date);
 if (atBefore) {
 this.setData({
 dateList: [week].concat(this.data.dateList),
 });
 } else {
 this.setData({
 dateList: this.data.dateList.concat(week),
 });
 }
 
 },
 
 
 

 
 getDates: function (days, todate = this.getCurrentMonthFirst()) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = util.dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
},

//获取当前时间
getCurrentMonthFirst: function () {
  var date = new Date();
  var todate = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  return todate;
}
 },
})