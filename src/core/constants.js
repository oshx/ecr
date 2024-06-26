export const SERVICE_NAME = "성인애착유형 검사";

export const BackwardScoreList = [3, 15, 19, 22, 25, 27, 29, 31, 33];

export const ScoreLabelMap = {
  1: "전혀 그렇지 않다",
  2: "그렇지 않다",
  3: "보통 정도이다",
  4: "대체로 그렇다",
  5: "매우 그렇다",
};

export const ReverseScoreList = Object.keys(ScoreLabelMap).reverse();

export const QuestionList = [
  "내가 얼마나 호감을 가지고 있는지 상대방에게 보이고 싶지 않다",
  "나는 버림을 받는 것에 대해 걱정하는 편이다",
  "나는 다른 사람과 가까워지는 것이 매우 편안하다",
  "나는 다른 사람과의 관계에 대해 많이 걱정하는 편이다",
  "상대방이 막 나와 친해지려고 할 때 꺼려하는 나를 발견한다",
  "내가 다른 사람에게 관심을 가지는 만큼 그들이 나에게 관심을 가지지 않을까봐 걱정이다",
  "나는 다른 사람이 나와 매우 가까워지려 할 때 불편하다",
  "나는 나와 친한 사람을 잃을까봐 꽤 걱정이 된다",
  "나는 다른 사람에게 마음을 여는 것이 편안하지 못하다",
  "나는 종종 내가 상대방에게 호의를 보이는 만큼 상대방도 그렇게 해 주기를 바란다",
  "나는 상대방과 가까워지기를 원하지만 나는 생각을 바꾸어 그만둔다",
  "나는 상대방과 하나가 되길 원하기 때문에 사람들이 때때로 나에게서 멀어진다",
  "나는 다른 사람이 나와 너무 가까워졌을 때 예민해진다",
  "나는 혼자 남겨질까봐 걱정이다",
  "나는 다른 사람에게 내 생각과 감정을 이야기하는 것이 편안하다",
  "지나치게 친밀해지고자 하는 욕심 때문에 때로 사람들이 두려워하여 거리를 둔다",
  "나는 상대방과 너무 가까워지는 것을 피하려고 한다",
  "나는 상대방으로부터 사랑받고 있다는 것을 자주 확인받고 싶어한다",
  "나는 다른 사람과 가까워지는 것이 비교적 쉽다",
  "가끔 나는 다른 사람에게 더 많은 애정과 더 많은 헌신을 보여줄 것을 강요한다고 느낀다",
  "나는 다른 사람에게 의지하기가 어렵다",
  "나는 버림받는 것에 대해 때때로 걱정하지 않는다",
  "나는 다른 사람과 너무 가까워지는 것을 좋아하지 않는다",
  "만약 상대방이 나에게 관심을 보이지 않는다면 나는 화가난다",
  "나는 상대방에게 모든 것을 이야기한다",
  "상대방이 내가 원하는 만큼 가까워지는 것을 원치 않음을 안다",
  "나는 대개 다른 사람에게 내 문제와 고민을 상의한다",
  "내가 다른 사람과 교류가 없을 때 나는 다소 걱정스럽고 불안하다",
  "다른 사람에게 의지하는 것이 편안하다",
  "상대방이 내가 원하는 만큼 가까이에 있지 않을 때 실망하게 된다",
  "나는 상대방에게 위로, 조언, 또는 도움을 청하지 못한다",
  "내가 필요로 할 때 상대방이 거절한다면 실망하게 된다",
  "내가 필요로 할 때 상대방에게 의지한다면 도움이 된다",
  "상대방이 나에게 불만을 나타낼 때 나 자신이 정말 형편없게 느껴진다",
  "나는 위로와 확신을 비롯한 많은 일들을 상대방에게 의지한다",
  "상대방이 나를 떠나서 많은 시간을 보냈을 때 나는 불쾌하다",
];

export const ResultList = [
  {
    title: "안정 애착",
    content:
      "나는 비교적 쉽게 다른 사람과 정서적으로 가까워지는 편이다. 내가 남들에게 의지하거나 남들이 나에게 의지하는 것을 편안하게 느끼며, 혼자 지내거나 남들이 나를 받아들이지 않는다고 해서 불안해하지 않는다. 파트너와의 친밀감에 수용적이며 감정에 솔직하고 부정적 신호에 둔감하다. 그래서 이들은 사랑에 빠지면 상호의존, 헌신 및 신뢰를 가장 많이 보여주고 있다.",
  },
  {
    title: "불안정 양가적 저항 애착",
    content:
      "나는 남들과 정서적으로 완전히 친밀해지기를 원하지만, 남들은 내가 원하는 만큼 가까워지기를 꺼리는 것 같다. 누군가 친밀한 관계를 맺어야 안심이 되고 때때로 내가 남을 소중하게 생각하는 만큼 남들이 나를 소중하게 생각하지 않을까 봐 염려스럽다. 이들은 사랑에 빠지는 일이 쉽게 그리고 자주 일어난다고 말했지만, 사랑이 지속되지 않는다는 의견에도 동의했다.",
  },
  {
    title: "불안정 회피 애착",
    content:
      "남들과 가까운 정서적 관계를 맺지 않고 지내는 것이 편안하다. 독립심과 자기 충족감을 느끼는 것이 나에게는 매우 중요하고 남들에게 의지하거나 남들이 나에게 의지하는 것을 좋아하지 않는다. 무엇보다 나의 독립성이 중요하기 때문에 파트너에 대해 비판하는 행동이 자연스럽다. 주로 자신의 욕구 충족, 성공에 관심이 많다.",
  },
  {
    title: "불안정 혼란 애착",
    content:
      "나는 남들과 가까워지면 편하지 않다. 남들과 정서적으로 가까운 관계를 원하지만 그렇다고 남들을 신뢰하거나 남들에게 전적으로 의지하기가 어렵다. 상처가 두렵다.",
  },
];

export const AVOIDANCE_THRESHOLD = 42;

export const ANXIETY_THRESHOLD = 47;

export const STEP_BASE = 6;

export const STEP_CHUNK = 10;

export const SEPARATOR = "-";
