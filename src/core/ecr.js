import { encode } from "base62";
import { SEPARATOR, STEP_CHUNK } from "./constants";

const convertAnswerToChunk = (answerList, unit = STEP_CHUNK) =>
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

export const convertAnswerToParam = (answerList) => {
  console.debug("convertAnswerToParam\n", answerList);
  if (!Array.isArray(answerList)) {
    throw new TypeError("응답 결과에 자료 유형 오류가 있습니다.");
  }
  if (answerList.some((answer) => !answer)) {
    throw new Error("응답이 완료되지 않았습니다.");
  }

  console.debug(
    "convertAnswerToParam\n",
    convertAnswerToChunk(answerList),
    convertChunkToParam(convertAnswerToChunk(answerList))
  );
};

export const convertParamToResult = () => {
  return "";
};
