// pages/adhereclockin/adhereclockin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList:[
            {"title":"不赖床",img:"laichuang"},
            {"title":"禁烟",img:"jinyan"},
            {"title":"不在床上想事情",img:"xiangshi"},
            {"title":"不强迫自己入睡",img:"qiangshui"},
            {"title":"打造舒适睡眠环境",img:"huanjing"},
            {"title":"按时起床",img:"qichuang"},
            {"title":"规律锻炼",img:"duanlian"},
            {"title":"规律进食",img:"jinshi"},
            {"title":"戒酒",img:"jiejiu"},
            {"title":"有困意再睡觉",img:"kunyi"},
            {"title":"睡觉前少喝水",img:"heshui"},
            {"title":"少喝茶(咖啡)",img:"hecha"},
        ],
        currentIndex:0,
        clickIndex:0
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
    change(e){
        var index = e.detail.current;
        this.setData({
            currentIndex:index
        })
        
    },
    changeClick(e){
        var index = e.currentTarget.dataset.index
        this.setData({
            clickIndex:index
        })
    }
})