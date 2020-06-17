// pages/adhereclockin/adhereclockin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList:[
            {"title":"不赖床",img:"不赖床"},
            {"title":"禁烟",img:"禁烟"},
            {"title":"不在床上想事情",img:"想事情"},
            {"title":"不强迫自己入睡",img:"强迫睡觉"},
            {"title":"打造舒适睡眠环境",img:"舒适环境"},
            {"title":"按时起床",img:"按时起床"},
            {"title":"规律锻炼",img:"规律锻炼"},
            {"title":"规律进食",img:"规律进食"},
            {"title":"戒酒",img:"戒酒"},
            {"title":"有困意再睡觉",img:"困意睡觉"},
            {"title":"睡觉前少喝水",img:"少喝水"},
            {"title":"少喝茶(咖啡)",img:"少喝茶"},
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