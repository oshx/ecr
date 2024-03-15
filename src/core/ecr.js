import { QuestionList, ScoreList, STEP_CHUNK } from "./constants";

export const question = (index, chunk = STEP_CHUNK) => {
  if (
    Number.isNaN(Number(index)) ||
    index < 0 ||
    index > QuestionList.length - 1 ||
    !QuestionList[index]
  ) {
    throw new TypeError("문항 번호가 잘못되었습니다.");
  }
  if (Number.isNaN(Number(chunk)) || !Number.isInteger(chunk) || chunk < 0) {
    throw new TypeError("문제 요청 수가 잘못되었습니다.");
  }
  return QuestionList.slice(index, index + chunk);
};

export const score = (index, value) => {
  if (
    Number.isNaN(Number(index)) ||
    index < 0 ||
    index > QuestionList.length - 1 ||
    !QuestionList[index]
  ) {
    throw new TypeError("문항 번호가 잘못되었습니다.");
  }
  if (Number.isNaN(Number(value)) || !ScoreList.includes(value)) {
    throw new TypeError("문항에 선택한 값이 잘못되었습니다.");
  }
};

export const generateResult = () => {
  return "";
};
