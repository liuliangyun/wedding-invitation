<template>
  <div class="wedding-invitation" :class="{ 'invitation-bounce':canOpen }">
    <div class="invitation-container" :class="{ 'invitation-down':isOpening }">
      <audio id="audio" :src="require('../music/you.mp3')" loop />
      <div class="invitation-cover">
        <div class="cover-content" :class="{'invitation-up':isOpening}">
          <div id="scroll-area" class="content-inside">
            <div id="scroll-content">
              <img class="content-inside-photo" src="../images/photo-new.jpeg" />
              <div v-html="INVITATION_TITLE" class="invitation-title"></div>

              <div class="invitation-content">
                <div class="invitation-content-title">我们的故事</div>
                <div style="margin: 20px 0; display: flex; align-items: center; justify-content: space-between;">
                  <img style="width: 65%;" src="../images/bridegroom-single.jpg" />
                  <div style="width: 32%;">
                    <div>❤️新郎❤️</div>
                    <div>张克毅</div>
                  </div>
                </div>
                <div style="margin: 20px 0; display: flex; align-items: center; justify-content: space-between;">
                  <div style="width: 32%;">
                    <div>❤️新娘❤️</div>
                    <div>柳靓云</div>
                  </div>
                  <img style="width: 65%;" src="../images/bride-single.jpg" />
                </div>
                <div style="margin: 20px 0;">
                  <div>相识7年 相恋6年</div>
                  <div>从同学到恋人</div>
                  <div>我们像彼此间的礼物</div>
                  <div>不断给对方快乐和惊喜</div>
                  <img style="width: 100%; margin: 20px 0;" src="../images/bride-bridegroom1.jpg" />
                  <div>最好的爱情大概就是</div>
                  <div>你在闹 他陪着你闹</div>
                  <div>爱情里越幼稚</div>
                  <div>就显得越甜蜜</div>
                </div>
                <div style="margin: 20px 0; display: flex; align-items: center; justify-content: space-between;">
                  <img style="width: 65%;" src="../images/bride-bridegroom2.jpg" />
                  <div style="width: 32%;">
                    <div>始于初见</div>
                    <div>陷于陪伴</div>
                    <div>终于白首</div>
                  </div>
                </div>
                <div style="margin: 20px 0; display: flex; align-items: center; justify-content: space-between;">
                  <div style="width: 32%;">
                    <div>我们决定</div>
                    <div>开启人生的</div>
                    <div>新篇章</div>
                  </div>
                  <img style="width: 65%;" src="../images/bride-bridegroom4.jpg" />
                </div>
                <div>
                  <div>让爱以夫妻之名延续</div>
                  <div>成为彼此生命中</div>
                  <div>最重要的那个人</div>
                  <div>从此</div>
                  <div>一屋 两人 三餐 四季</div>
                </div>
              </div>

              <div v-html="SCHEDULE" class="invitation-content"></div>

              <div class="invitation-content">
                <div class="invitation-content-title">婚礼倒计时</div>
                <div class="clock">
                  <div>
                    <span>{{remainTime.day}}</span>
                    <span>天</span>
                  </div>
                  <div>
                    <span>{{remainTime.hour}}</span>
                    <span>时</span>
                  </div>
                  <div>
                    <span>{{remainTime.minute}}</span>
                    <span>分</span>
                  </div>
                  <div>
                    <span>{{remainTime.second}}</span>
                    <span>秒</span>
                  </div>
                </div>
              </div>

              <div v-html="SAY_THANKS" class="invitation-content"></div>
            </div>

            <div class="content-inside-bless">
              <button @click="closeInvitation">关闭</button>
            </div>
          </div>
        </div>
        <div class="cover-inside-left" :class="{'opening':isOpening}"></div>
        <div class="cover-inside-right" :class="{'opening':isOpening}"></div>
        <img class="cover-inside-title" src="../images/title.jpeg" :class="{'invitation-flight':isOpening}" />
        <div v-if="name" :class="['cover-inside-person', {'invitation-flight':isOpening}]">
          送呈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name}}
        </div>
        <img class="cover-inside-seal" src="../images/seal.png" @click="openInvitation" :class="{'invitation-flight':isOpening}" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

const WEDDING_TIME = moment('2022-01-01 16:30:00')

const INVITATION_TITLE = `
  <div>✿ 柳靓云 & 张克毅 ✿</div>
  <div>我们结婚啦！</div>
  <div>诚邀您参加我们的婚礼</div>
  <div style="text-decoration: underline; margin-top: 5px;">景德镇市罗曼园酒店</div>
  <div style="text-decoration: underline;">2022.01.01</div>
  <div style="text-decoration: underline;">我们不见不散</div>
`

const SCHEDULE = `
  <div class="invitation-content-title">婚礼流程</div>
  <ul>
    <li>16:30 ~ 17:30 &nbsp; 宾客签到</li>
    <li>18:00 ~ 18:30 &nbsp; 婚礼仪式</li>
    <li>18:30 ~ 20:00 &nbsp; 宴会开始</li>
  </ul>
`

const SAY_THANKS = `
  <div class="invitation-content-title">写在最后</div>
  <div>这是一场人生为数不多的相聚</div>
  <div>是千里迢迢的奔赴</div>
  <div>是不计得失的支持</div>
  <div>感谢您抽出宝贵的时间</div>
  <div>为我们共同庆祝这特别的一天</div>
  <div>感恩有你的支持</div>
  <div>也非常荣幸能与您分享我们的爱情</div>
  <div>愿看到这段文字的你们</div>
  <div>平安喜乐 一生顺遂</div>
`

export default {
  props: ['canOpen'],
  data() {
    return {
      isOpening: false,
      INVITATION_TITLE,
      SCHEDULE,
      SAY_THANKS,
      rollTimer: null,
      clockTimer: null,
      remainTime: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      }
    }
  },
  computed: {
    name() {
      return this.$route.query.name
    }
  },
  methods: {
    // 打开邀请函
    openInvitation(){
      this.isOpening = true
      this.autoScroll('scroll-area', 'scroll-content')
      this.computeRemainTime()
      this.audioAutoPlay()
    },
    closeInvitation() {
      this.isOpening = false
      this.clearRollTimer()
      this.clearClockTimer()
      setTimeout(() => {
        this.$emit('onClose')
      }, 660)
      this.audioStopPlay()
    },
    clearRollTimer() {
      console.log('clear roll timer')
      clearInterval(this.rollTimer)
      this.rollTimer = null
    },
    clearClockTimer() {
      clearInterval(this.clockTimer)
      this.clockTimer = null
    },
    setRollTimer(id) {
      console.log('set roll timer')
      this.rollTimer = setInterval(function () {
        // 获取当前滚动条高度，以25ms / 3.5px的速度滚动
        let current = document.getElementById(id).scrollTop
        document.getElementById(id).scrollTop = current + 1
      }, 50)
    },
    setClockTimer() {
      this.clockTimer = setInterval(() => {
        const duration = moment.duration(WEDDING_TIME.diff(moment()))
        this.remainTime = {
          day: Math.floor(duration.asDays()) >= 0 ? Math.floor(duration.asDays()) : 0,
          hour: duration.hours() >= 0 ? duration.hours() : 0,
          minute: duration.minutes() >= 0 ? duration.minutes() : 0,
          second: duration.seconds() >= 0 ? duration.seconds() : 0,
        }
      }, 1000)
    },
    // 自动滚动
    autoScroll(id, contentId) {
      document.getElementById(id).scrollTop = 0
      document.getElementById(contentId).onclick = () => {
        if (this.rollTimer) {
          this.clearRollTimer()
        } else {
          this.setRollTimer(id)
        }
      }

      this.setRollTimer(id)
    },
    computeRemainTime() {
      if (WEDDING_TIME.isAfter(moment())) {
        this.setClockTimer()
      }
    },
    audioAutoPlay() {
      const audio = document.getElementById('audio')
      audio.play()
    },
    audioStopPlay() {
      const audio = document.getElementById('audio')
      audio.currentTime = 0
      audio.pause()
    }
  },
}
</script>

<style lang="less">
  .wedding-invitation{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    padding-top: 60px;
    z-index: 4;
    transform: scale(0.05);
    -webkit-transform: scale(0.05);
    opacity: 0;
    transition: transform 0.8s cubic-bezier(.26,1.84,.39,.61), opacity 0.5s linear;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(.26,1.84,.39,.61), opacity 0.5s linear;
    background-size: 100%;
    overflow: hidden;
    &.invitation-bounce{
      opacity: 1;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    .invitation-container{
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
      -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
      &.invitation-down{
        transform: translateY(20px);
        -webkit-transform: translateY(20px);
      }
      .invitation-cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #D65047;
        border-radius: 10px;
        perspective: 500px;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15);
        .cover-content{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 10px 20px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
          -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
          &.invitation-up{
            transform: translateY(-60px);
            -webkit-transform: translateY(-60px);
          }
          .content-inside{
            height: 100%;
            padding: 20px;
            color: #a9895d;
            background-color: #FFF1DE;
            text-align: center;
            overflow: auto;
            .content-inside-photo{
              width: 100%;
              margin-bottom: 10px;
              padding: 5px;
              border: 1px solid #f7debb;
            }
            .content-inside-bless{
              margin-top: 20px;
              button{
                width: 100%;
                height: 35px;
                color: #a9895d;
                background: #f7debb;
                border: none;
                border-radius: 20px;
                outline: none;
              }
            }
          }
        }
        .cover-inside-left{
          position: absolute;
          left: 0;
          top: 0;
          width: 70%;
          height: 100%;
          border-radius: 10px;
          background-color: #D65047;
          box-shadow: 5px 0 10px rgba(0,0,0,0.2);
          z-index: 6;
          transform-origin: 0 50%;
          -webkit-transform-origin: 0 50%;
          &.opening{
            transform: rotate3d(0,1,0,-140deg);
            -webkit-transform: rotate3d(0,1,0,-140deg);
          }
        }
        .cover-inside-right{
          position: absolute;
          right: 0;
          top: 0;
          width: 40%;
          height: 100%;
          border-radius: 10px;
          background-color: #D65047;
          box-shadow: -5px 0 10px rgba(0,0,0,0.2);
          z-index: 5;
          transform-origin: 100% 50%;
          -webkit-transform-origin: 100% 50%;
          &.opening{
            transform: rotate3d(0,1,0,140deg);
            -webkit-transform: rotate3d(0,1,0,140deg);
          }
        }
        .cover-inside-seal{
          left: 70%;
          bottom: 100px;
          width: 80px;
          height: 80px;
          margin-left: -40px;
          transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%;
        }
        .cover-inside-title {
          left: 15%;
          top: 10%;
          width: 35%;
          height: 45%;
        }
        .cover-inside-person {
          font-size: 30px;
          font-variant-east-asian: traditional;
          color: #ead6ac;
          top: 5%;
          right: 5%;
          height: 45%;
          writing-mode: vertical-rl;
          writing-mode: tb-rl;
        }

        .cover-inside-seal, .cover-inside-title, .cover-inside-person {
          position: absolute;
          z-index: 7;

          &.invitation-flight{
            display: none;
          }
        }

        .invitation-title {
          font-weight: bold;
          line-height: 26px;
          padding-bottom: 30px;
          border-bottom: 1px solid #f7debb;
        }
        .invitation-content {
          line-height: 26px;
          padding: 30px 0;
          border-bottom: 1px solid #f7debb;
          &-title {
            font-size: 20px;
            font-weight: bolder;
            margin-bottom: 20px;
            color: darkred;
          }
          .clock {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            color: white;
            line-height: 20px;

            & > div {
              width: 20%;
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: #5d5d5d;
              padding: 10px 0;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
</style>
