// components/week/week.js
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
    week:['周日','周一','周二','周三','周四','周五','周六'],
    rq:[],
    day:60*60*24*1000,
    index1:""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  attached(){
    var date = new Date();
    var rq1 = [];
    var j = date.getDay();
    for(var i = 0; i < this.data.week.length; i++){
      if(date.getDay()==i){
        rq1[i] = date.getDate()>=10?date.getDate():"0"+date.getDate();
        this.data.week[i] = "今日";
        this.setData({
          rq:rq1,
          week:this.data.week,
          index1:i
        })
      }else if(date.getDay()<i){
        j++;
        rq1[i] = new Date(date.getTime()+this.data.day*j).getDate()>=10?new Date(date.getTime()+this.data.day*j).getDate():"0"+new Date(date.getTime()+this.data.day*j).getDate();
      }else if(date.getDay()>i){
        rq1[i] = new Date(date.getTime()-(this.data.day*j)).getDate()>=10?new Date(date.getTime()-(this.data.day*j)).getDate():"0"+new Date(date.getTime()-(this.data.day*j)).getDate();
        j--;
      }
    }
    this.setData({
      rq:rq1
    })
  }
})
