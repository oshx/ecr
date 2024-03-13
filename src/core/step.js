import base62 from "base62";

export const ScoreLabelMap = {
  0: null,
  1: "전혀 그렇지 않다",
  2: "그렇지 않다",
  3: "보통 정도이다",
  4: "대체로 그렇다",
  5: "매우 그렇다",
};

export const encode = (value) =>
  (typeof value === "number" || typeof value === "string") &&
  !Number.isNaN(Number(value)) &&
  (value + "").length < 11
    ? `${base62.encode(parseInt(value, 6))}`
    : "";
export const decode = (value) => `${base62.decode(value).toString(6)}`;
