
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
    counter:5,
    counter1:0,
    minusStatus: 'disabled'  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    decrement(){
      var counter = this.data.counter;  
      if (counter > 0) {  
          counter --;  
      } 
      var minusStatus = counter <= 1 ? 'disabled' : 'normal';  
      this.setData({  
          counter: counter,  
          minusStatus: minusStatus  
      });  
    },
    increment(){
      var counter = this.data.counter;  
      counter ++;  
      var minusStatus = counter < 1 ? 'disabled' : 'normal';  
      this.setData({  
          counter: counter,  
          minusStatus: minusStatus  
      });  
    },
    decrement1(){
      var counter1 = this.data.counter1;  
      if (counter1 > 0) {  
          counter1 --;  
      } 
      var minusStatus = counter1 <= 1 ? 'disabled' : 'normal';  
      this.setData({  
          counter1: counter1,  
          minusStatus: minusStatus  
      });  
    },
    increment1(){
      var counter1 = this.data.counter1;  
      counter1 ++;  
      var minusStatus = counter1 < 1 ? 'disabled' : 'normal';  
      this.setData({  
          counter1: counter1,  
          minusStatus: minusStatus  
      });  
    }
  }
})
