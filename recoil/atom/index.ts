import { atom } from "recoil";

const questionArr = atom({
  key: "questionArr",
  default: [
    {
      id: 0,
      question: "1. 개발자의 별명은? (2자)",
      password: "털지",
    },
    {
      id: 1,
      question:
        "2. 고등학생때 먹을것을 좋아하던 친구들과 만든 모임 이름은? (2자)",
      password: "먹팸",
    },
    {
      id: 2,
      question:
        "3. 현재 이 모임의 첫 인생네컷을 찍은 날짜는? (20220701 형식으로 작성)",
      password: "20210606",
    },
  ],
});

export { questionArr };
