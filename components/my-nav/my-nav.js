// components/my-nav/my-nav.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        bg:{
            type:String,
            value:""
        },
        backbtncolor:{
            type:String,
            value:"black"
        },
        isshowbackbtn:{
            type:Boolean,
            value:true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goback(){
            wx.navigateBack()
        }
    }
})
