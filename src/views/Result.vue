<template>
  <div class="root">
    <div class="list">
      <div class="itemGroup" v-for="(item, index) in dataList" :key="item.candidate_id">
        <div class="item" :class="{ first: index === 0 }">
          <img class="avatar" />
          <p class="name">{{ candidateId2Name[item.candidate_id] }}</p>
          <p class="scoreDes">平均分：</p>
          <p class="score">{{ item.score }}</p>
          <p class="text" v-on:click="toDetail(item.candidate_id)">评分明细</p>
          <div class="arrow" v-on:click="toDetail(item.candidate_id)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { candidateId2Name } from "../constants/list";
import { API } from "../constants/api";
export default {
  name: "Result",
  data() {
    return {
      dataList: [],
      candidateId2Name: candidateId2Name,
    };
  },
  async created() {
    const { data: res } = await this.$http.get(API.vote_overview);
    if (!res.code) {
      this.dataList = res.data;
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/resultDetail",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.root {
  height: 100%;
  width: 100%;
  background: #9d1c1c;
  padding-top: 74px;
  padding-bottom: 16px;
  position: absolute;
  .list {
    .itemGroup {
      .item {
        width: 666px;
        height: 108px;
        background: #ffffff;
        border-radius: 6px;
        margin: 54px auto 0;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .avatar {
          width: 148px;
          height: 148px;
          margin-left: 13px;
          margin-bottom: 44px;
          content: url("../assets/img1.png");
          @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
            content: url("../assets/img1@2x.png");
          }
        }
        .name {
          font-size: 30px;
          width: 120px;
          font-weight: 400;
          margin-left: 38px;
          color: #232323;
          white-space: nowrap;
        }
        .scoreDes {
          font-size: 24px;
          font-weight: 400;
          margin-left: 20px;
          color: #9d1c1c;
          white-space: nowrap;
        }
        .score {
          width: 50px;
          font-size: 42px;
          font-weight: 500;
          margin-left: -10px;
          margin-right: 15px;
          color: #9d1c1c;
        }
        .text {
          margin-left: 25px;
          margin-right: 20px;
          width: 96px;
          font-size: 24px;
          height: 33px;
          line-height: 33px;
          color: #9d1c1c;
          font-weight: 400;
          white-space: nowrap;
        }
        .arrow {
          width: 12px;
          height: 12px;
          border-top: 5px solid #9d1c1c;
          border-right: 5px solid #9d1c1c;
          transform: rotate(45deg);
        }
      }
      .first {
        margin-top: 0;
      }
    }
  }
}
</style>
