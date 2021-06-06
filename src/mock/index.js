import Mock from "mockjs";
import data from "./data";

Mock.mock(/\/login/, "post", data.login1());
Mock.mock(/\/vote/, "post", data.vote2());
Mock.mock(/\/vote_status/, "get", data.vote_status1());
Mock.mock(/\/vote_stop/, "get", data.vote_stop());
Mock.mock(/\/vote_overview/, "get", data.vote_overview());
Mock.mock(
  "https://speech.gointo.icu/vote_detail?candidate_id=8",
  "get",
  data.vote_detail()
);
