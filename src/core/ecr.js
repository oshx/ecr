import { decode, encode } from "base62";
import {
  ANXIETY_THRESHOLD,
  AVOIDANCE_THRESHOLD,
  BackwardScoreList,
  ResultList,
  ScoreLabelMap,
  SEPARATOR,
  STEP_CHUNK,
} from "./constants";

const convertAnswerToChunk = (answerList, unit) =>
  Array(Math.ceil(answerList.length / unit))
    .fill(null)
    .map((_, index) => {
      console.debug();
      return Number(
        answerList
          .slice()
          .slice(index * unit, index * unit + unit)
          .join("")
      );
    });

const convertChunkToParam = (chunkList) =>
  chunkList.map((chunk) => encode(parseInt(chunk, 6))).join(SEPARATOR);

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

export const convertParamToScore = (param, unit = STEP_CHUNK) => {
  if (typeof param !== "string") {
    throw new TypeError("결과에 오류가 있습니다.");
  }
  return param
    .split(SEPARATOR)
    .map((chunk) => decode(chunk).toString(6))
    .join("")
    .split("");
};

export const convertScoreToResult = (scoreList) => {
  const reverseScoreList = Object.keys(ScoreLabelMap).reverse();
  const [avoidance, anxiety] = scoreList.reduce(
    (result, current, index) => {
      const target = index % 2 ? 0 : 1;
      if (BackwardScoreList.some((item) => item === index + 1)) {
        console.debug("reverse!!!", index);
      }
      const score = Number(
        BackwardScoreList.some((item) => item === index + 1)
          ? reverseScoreList[Number(current) - 1]
          : current
      );
      result[target] = result[target] + score;
      return result;
    },
    [0, 0]
  );
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
