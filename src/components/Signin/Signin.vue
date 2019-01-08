<template>
    <div class="Signin-box">
        <div class="banner">
            <img :src='this.apiUrl+background_pic' alt="">
        </div>
        <div class="meet-title clearfix">
            <img src="../../assets/images/left.png" alt="" class="fl">
            <span class="fl">会议名称</span>
        </div>
        <div class="meet-title-mian" v-html="meetname">
        </div>
        <div class="meet-title clearfix">
            <img src="../../assets/images/left.png" alt="" class="fl">
            <span class="fl">会议介绍</span>
        </div>
        <div class="meet-content" v-show="isShowtext" v-html="meetcontent">
        </div>
        <div class="meet-btn right" @click="showToggle()">
            <img src="../../assets/images/bottom.png" alt="" :class="[rotate?'rotate':'rotatenone']">
        </div>
        <!--表单-->
        <div class="sign-main">
            <div class="center">
                <img src="../../assets/images/signbg.png" alt="">
            </div>
            <form action="">
                <div>
                    <p>
                        <b class="red">*</b>
                        <span>姓名</span>
                    </p>
                    <input type="text" placeholder="请输入姓名" id="name" name="name" v-model="name">
                </div>
                <div>
                    <p>
                        <b class="red">*</b>
                        <span>单位名称</span>
                    </p>
                    <input type="text" placeholder="请输入单位名称" id="unit_name" name="unit_name" v-model="unit_name">
                </div>
                <div>
                    <p>
                        <b class="red">*</b>
                        <span>职位</span>
                    </p>
                    <input type="text" placeholder="请输入职位名称" id="position" name="position" v-model="position">
                </div>
                <div>
                    <p>
                        <b class="red">*</b>
                        <span>电话</span>
                    </p>
                    <input type="text" placeholder="请输入电话" id="phone" name="phone" v-model="phone">
                </div>
            </form>
            <div class="submit center">
                <img src="../../assets/images/submit.png" alt="" @click="Submit">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Signin',
        data() {
            return {
                isShowtext: true,
                isShowimg: false,
                rotate: true,
                meetname: '', //会议名称
                meetcontent: '', //会议介绍
                background_pic: '', //图片
                name: '', //姓名
                unit_name: '', //单位名称
                position: '', //职位
                phone: '' //电话
            };
        },
        methods: {
            showToggle: function() {
                this.isShowtext = !this.isShowtext;
                this.rotate = !this.rotate;
            },
            GetData() {
                var that = this;
                this.$axios.get(this.apiUrl + 'api/config', this.$qs.stringify({}))
                    .then(function(res) {
                        // console.log(res)
                        that.meetname = res.data.data.sign_name
                        that.meetcontent = res.data.data.description
                        that.background_pic = res.data.data.background_pic
                    })
            },
            Submit() {
                var that = this;
                var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                if (this.name === '') {
                    alert('请填写姓名');
                } else if (this.unit_name === '') {
                    alert('请填写单位名称');
                } else if (this.position === '') {
                    alert('请填写职位');
                } else if (this.phone === '') {
                    alert('请填写手机号');
                } else if (!reg.test(this.phone)) {
                    alert('手机格式不正确');
                } else {
                    this.$axios.post(this.apiUrl + 'api/sign', this.$qs.stringify({
                        name: that.name,
                        unit_name: that.unit_name,
                        position: that.position,
                        phone: that.phone
                    })).then(function(res) {
                        console.log(res)
                        if (res.data.code == '201') {
                            alert("数据提交成功")
                            that.$router.push({
                                path: 'success'
                            })
                        } else {
                            alert("信息提交失败")
                        }
                    })
                }
            }
        },
        mounted: function() {
            this.GetData()
        }
    }
</script>

<style>
    .rotatenone {}

    .rotate {
        transform: rotate(180deg);
    }

    .banner img {
        width: 100%;
    }

    .meet-title {
        padding: 20px 36px;
        font-size: 30px;
        color: #999999;
    }

    .meet-title img {
        width: 11px;
        height: 18px;
        margin: 15px 10px 0 0;
    }

    .meet-title-mian,
    .meet-content {
        font-size: 32px;
        color: #444444;
        padding: 20px 36px;
    }

    .meet-btn {
        padding: 20px 0;
    }

    .meet-btn img {
        width: 24px;
        height: 13px;
        padding: 18px 36px;
    }

    .sign-main {
        padding: 20px 36px;
    }

    .sign-main span {
        font-size: 30px;
        color: #999999;
    }

    .sign-main form {
        margin-top: 30px;
    }

    .sign-main img {
        width: 390px;
        height: 66px;
    }

    .sign-main form>div {
        padding: 20px 0;
    }

    .sign-main input {
        width: 96%;
        height: 60px;
        font-size: 28px;
        padding: 0 2%;
        margin-top: 20px;
        border: 0;
        border-bottom: 1px solid #E6E6E6;
    }

    .submit {
        margin-top: 80px;
    }

    .submit img {
        width: 522px;
        height: 102px;
    }
</style>
