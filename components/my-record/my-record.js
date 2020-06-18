// components/my-record/my-record.js
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
    time: '22:00',
    time1: '待记录',
    time2: '待记录',
    time3: '待记录',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindTimeChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        time: e.detail.value
      })
    },
    bindTimeChange1: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        time1: e.detail.value
      })
    },
    bindTimeChange2: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        time2: e.detail.value
      })
    },
    bindTimeChange3: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        time3: e.detail.value
      })
    },
  }
})
