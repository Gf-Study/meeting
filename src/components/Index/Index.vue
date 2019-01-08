<template>
    <div class="in-box">
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
        <div class="meet-content" v-show='isShowtext' v-html='meetcontent'>
        </div>
        <div class="meet-btn right" @click="showToggle">
            <img src="../../assets/images/bottom.png" alt="" :class="[rotate?'rotate':'rotatenone']">
        </div>
        <div class="meet-sign center">
            <router-link to='Signin'>
                <img src="../../assets/images/sign.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                isShowtext: true,
                isShowimg: false,
                rotate: true,
                meetname: '', //会议名称
                meetcontent: '', //会议介绍
                background_pic: '', //图片
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
                        //console.log(res)
                        that.meetname = res.data.data.sign_name
                        that.meetcontent = res.data.data.description
                        that.background_pic = res.data.data.background_pic
                    })
            }
        },
        mounted: function() {
            this.GetData()
        }
    }
</script>

<style scoped>
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
    .meet-sign{
        width: 277px;
        height: 277px;
        margin: 30px auto;
    }
    .meet-sign img {
        animation:myfirst 10s infinite;
        -moz-animation:myfirst 10s infinite; /* Firefox */
        -webkit-animation:myfirst 10s infinite; /* Safari and Chrome */
        -o-animation:myfirst 10s infinite; /* Opera */
        -webkit-animation-direction:alternate;
        -moz-animation-direction:alternate;
        -o-animation-direction:alternate;
    }

    @keyframes myfirst {
        0% {
            width: 100%;
            height: 100%;
        }

        10% {
            width: 95%;
            height: 95%;
        }

        20% {
           width: 100%;
            height: 100%;
        }

        30% {
            width: 95%;
            height: 95%;
        }

        40% {
           width: 100%;
            height: 100%;
        }

        50% {
            width: 95%;
            height: 95%;
        }

        60% {
           width: 100%;
            height: 100%;
        }

        70% {
            width: 95%;
            height: 95%;
        }

        80% {
           width: 100%;
            height: 100%;
        }

        90% {
            width: 95%;
            height: 95%;
        }

        100% {
           width: 100%;
            height: 100%;
        }

        90% {
            width: 95%;
            height: 95%;
        }

        80% {
           width: 100%;
            height: 100%;
        }

        70% {
            width: 95%;
            height: 95%;
        }

        60% {
           width: 100%;
            height: 100%;
        }

        50% {
            width: 95%;
            height: 95%;
        }

        40% {
           width: 100%;
           height: 100%;
        }

        30% {
            width: 95%;
            height: 95%;
        }

        20% {
           width: 100%;
            height: 100%;
        }

        10% {
            width: 95%;
            height: 95%;
        }

        0% {
           width: 100%;
            height: 100%;
        }

    }
    
</style>
