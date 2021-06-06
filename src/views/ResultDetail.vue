<template>
  <div class="root" id="root" :class="{ adapt: isAdapt }">
    <div class="avatarContainer">
      <img class="avatar" />
      <div class="name">{{ candidateId2Name[id] }}</div>
    </div>
    <div class="container" id="container">
      <div class="leftItem"></div>
      <div class="rightItem"></div>
      <div class="group">
        <div class="header">
          <p class="branch">所属支部</p>
          <p class="name">评委姓名</p>
          <p class="score">评分</p>
        </div>
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :class="{ first: index === 0 }"
        >
          <p class="branch">{{ branchId2Name[item.branch_id] }}</p>
          <p class="name">{{ item.name }}</p>
          <p class="score">{{ item.score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { branchId2Name, candidateId2Name } from "../constants/list.js";
import { API } from "../constants/api";

export default {
  name: "ResultDetail",
  data() {
    return {
      id: 0,
      list: [],
      branchId2Name: branchId2Name,
      candidateId2Name: candidateId2Name,
      isAdapt: false,
    };
  },
  async created() {
    this.id = this.$route.query.id;
    const { data: res } = await this.$http.get(API.vote_detail, {
      params: {
        candidate_id: this.id,
      },
    });
    if (!res.code) {
      this.list = res.data.branch_score;
      this.$nextTick(() => {
        let offsetHeight = document.getElementById("root").offsetHeight;
        let clientHeight = document.documentElement.clientHeight;
        this.isAdapt = offsetHeight < clientHeight;
      });
    }
  },
};
</script>

<style scoped lang="less">
.root {
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 110px;
  background: #9d1c1c;
  .avatarContainer {
    width: 224px;
    height: 224px;
    background: #fff8dc;
    margin: 26px auto 0;
    z-index: 999;
    border-radius: 50%;
    position: relative;
    .avatar {
      width: 148px;
      height: 148px;
      margin: 29px auto 0;
      content: url("../assets/img1.png");
      @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
        content: url("../assets/img1@2x.png");
      }
    }

    .name {
      width: 207px;
      height: 59px;
      background: #b92323;
      border-radius: 4px;
      margin: -7px auto 0;
      color: #ffffff;
      font-weight: 600;
      font-size: 36px;
      text-align: center;
      line-height: 59px;
    }
  }
  .container {
    position: relative;
    overflow: hidden;
    width: 694px;
    min-height: 783px;
    margin: -121px auto 0;
    border-radius: 8px;
    background: #ffffff;
    z-index: 0;

    .leftItem {
      width: 57px;
      height: 48px;
      background: #9d1c1c;
      position: absolute;
      left: 201px;
      top: 95px;

      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: -1px;
        border-top: 24px solid transparent;
        border-left: 14px solid #ffffff;
        border-bottom: 24px solid transparent;
      }
    }

    .rightItem {
      width: 57px;
      height: 48px;
      background: #9d1c1c;
      position: absolute;
      right: 197px;
      top: 95px;

      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        right: -1px;
        border-top: 24px solid transparent;
        border-right: 14px solid #ffffff;
        border-bottom: 24px solid transparent;
      }
    }

    .group {
      width: 656px;
      margin: 195px auto 61px;

      .header {
        width: 656px;
        height: 75px;
        background: #fffbeb;
        border-radius: 8px;
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;

        .branch {
          font-size: 24px;
          width: 96px;
          font-weight: 400;
          color: #9d1c1c;
          margin-right: 131px;
          white-space: nowrap;
        }
        .name {
          font-size: 24px;
          width: 96px;
          font-weight: 400;
          color: #9d1c1c;
          margin-right: 123px;
          white-space: nowrap;
        }
        .score {
          font-size: 24px;
          width: 48px;
          font-weight: 400;
          color: #9d1c1c;
          white-space: nowrap;
        }
      }

      .item {
        width: 656px;
        height: 90px;
        border-top: 1px solid #ffcbcb;
        background: #fffbeb;
        border-radius: 8px;
        position: relative;
        display: flex;
        align-content: center;
        justify-content: space-between;

        .branch {
          width: 130px;
          font-size: 26px;
          font-weight: 400;
          color: #232323;
          margin-left: 60px;
          white-space: nowrap;
        }
        .name {
          color: #232323;
          font-size: 26px;
          font-weight: 400;
          white-space: nowrap;
        }
        .score {
          color: #c12020;
          font-weight: 700;
          font-size: 30px;
          width: 40px;
          margin-right: 89px;
          white-space: nowrap;
        }
      }

      .special {
        height: 155px;
      }
    }
  }
}
.adapt {
  position: absolute;
}
</style>
