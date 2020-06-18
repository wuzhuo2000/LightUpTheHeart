// components/day_con/day_con.js
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
    num:Number,
    biaoqing:[
      {src:"../../assets/images/daytime/bq1.png",py:"十分差"},
      {src:"../../assets/images/daytime/bq2.png",py:"较差"},
      {src:"../../assets/images/daytime/bq3.png",py:"正常"},
      {src:"../../assets/images/daytime/bq4.png",py:"比较好"},
      {src:"../../assets/images/daytime/bq5.png",py:"非常棒"}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pj(event){
      console.log(event);
      this.setData({
        num:event.currentTarget.dataset.index
      })
    }
  }
})
