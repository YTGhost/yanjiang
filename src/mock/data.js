export default {
  login1: () => ({
    code: 0,
    data: null,
    message: "successful",
  }),
  login2: () => ({
    code: 10001,
    data: null,
    message: "你已经投过票了",
  }),
  login3: () => ({
    code: 10002,
    data: null,
    message: "不在投票时间内",
  }),
  vote1: () => ({
    code: 0,
    data: null,
    message: "successful",
  }),
  vote2: () => ({
    code: 10001,
    data: null,
    message: "你已经投过票了",
  }),
  vote3: () => ({
    code: 10002,
    data: null,
    message: "不在投票时间内",
  }),
  vote_status1: () => ({
    code: 0,
    data: true,
    message: "successful",
  }),
  vote_status2: () => ({
    code: 0,
    data: false,
    message: "successful",
  }),
  vote_stop: () => ({
    code: 0,
    data: null,
    message: "successful",
  }),
  vote_overview: () => ({
    code: 0,
    message: "successful",
    data: [
      {
        candidate_id: 1,
        score: 1,
      },
      {
        candidate_id: 2,
        score: 2,
      },
      {
        candidate_id: 3,
        score: 3,
      },
      {
        candidate_id: 4,
        score: 5,
      },
      {
        candidate_id: 5,
        score: 6,
      },
      {
        candidate_id: 6,
        score: 7,
      },
      {
        candidate_id: 7,
        score: 8,
      },
      {
        candidate_id: 8,
        score: 10,
      },
    ],
  }),
  vote_detail: () => ({
    code: 0,
    message: "successful",
    data: {
      candidate_id: 0,
      branch_score: [
        {
          branch_id: 1,
          name: "张三",
          score: 1.0,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 1.0,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 1.0,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 1.0,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
        {
          branch_id: 1,
          name: "张三",
          score: 10,
        },
      ],
    },
  }),
};
