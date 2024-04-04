import { decode, encode } from "base62";
import {
  ANXIETY_THRESHOLD,
  AVOIDANCE_THRESHOLD,
  BackwardScoreList,
  QuestionList,
  ResultList,
  ReverseScoreList,
  SEPARATOR,
  STEP_BASE,
  STEP_CHUNK,
} from "./constants";

const convertAnswerToChunk = (answerList, unit) =>
  Array(Math.ceil(answerList.length / unit))
    .fill(null)
    .map((_, index) =>
      Number(
        answerList
          .slice()
          .slice(index * unit, index * unit + unit)
          .join("")
      )
    );

const convertChunkToParam = (chunkList) =>
  chunkList.map((chunk) => encode(parseInt(chunk, STEP_BASE))).join(SEPARATOR);

const reduceScoreList = (result, current, index) => {
  const target = index % 2 ? 0 : 1;
  const score = Number(
    BackwardScoreList.some((item) => item === index + 1)
      ? ReverseScoreList[Number(current) - 1]
      : current
  );
  result[target] = result[target] + score;
  return result;
};

export const convertAnswerToParam = (answerList, unit = STEP_CHUNK) => {
  console.debug("convertAnswerToParam\n", answerList);
  if (!Array.isArray(answerList)) {
    throw new TypeError("응답 결과에 자료 유형 오류가 있습니다.");
  }
  if (answerList.some((answer) => !answer)) {
    throw new Error("응답이 완료되지 않았습니다.");
  }
  return convertChunkToParam(convertAnswerToChunk(answerList, unit));
};

export const convertParamToScore = (param) => {
  if (typeof param !== "string") {
    throw new TypeError("점수를 보여줄 결과가 없습니다.");
  }
  const scoreList = param
    .split(SEPARATOR)
    .map((chunk) => decode(chunk).toString(STEP_BASE))
    .join("")
    .split("");
  if (
    scoreList.some((value) => value === 0) ||
    scoreList.length !== QuestionList.length
  ) {
    throw new Error("답변 수가 일치하지 않습니다.");
  }
  return scoreList;
};

export const convertScoreToResult = (scoreList) => {
  const [avoidance, anxiety] = scoreList.reduce(reduceScoreList, [0, 0]);
  const [case1, case2, case3, case4] = ResultList;
  if (avoidance < AVOIDANCE_THRESHOLD) {
    if (anxiety < ANXIETY_THRESHOLD) {
      return case1;
    }
    return case2;
  }
  if (anxiety < ANXIETY_THRESHOLD) {
    return case3;
  }
  return case4;
};
