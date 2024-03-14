import {STEP_CHUNK} from "./constants";

export const BackwardScoreList = [
    3, 15, 19, 22, 25, 27, 29, 31, 33,
];

export const ScoreList = [1, 2, 3, 4, 5];

export const QuestionType = {
    EVASION: 0,
    ANXIETY: 1,
}

export const QuestionList = [
    '내가 얼마나 호감을 가지고 있는지 상대방에게 보이고 싶지 않다',
    '나는 버림을 받는 것에 대해 걱정하는 편이다',
    '나는 다른 사람과 가까워지는 것이 매우 편안하다',
    '나는 다른 사람과의 관계에 대해 많이 걱정하는 편이다',
    '상대방이 막 나와 친해지려고 할 때 꺼려하는 나를 발견한다',
    '내가 다른 사람에게 관심을 가지는 만큼 그들이 나에게 관심을 가지지 않을까봐 걱정이다',
    '나는 다른 사람이 나와 배우 가까워지려 할 때 불편하다',
    '나는 나와 친한 사람을 잃을까봐 꽤 걱정이 된다',
    '나는 다른 사람에게 마음을 여는 것이 편안하지 못하다',
    '나는 종종 내가 상대방에게 호의를 보이는 만큼 상대방도 그렇게 해 주기를 바란다',
    '나는 상대방과 가까워지기를 원하지만 나는 생각을 바꾸어 그만둔다',
    '나는 상대방과 하나가 되길 원하기 때문에 사람들이 때때로 나에게서 멀어진다',
    '나는 다른 사람이 나와 너무 가까워졌을 때 예민해진다',
    '나는 혼자 남겨질까봐 걱정이다',
    '나는 다른 사람에게 내 생각과 감정을 이야기하는 것이 편안하다',
    '지나치게 친밀해지고자 하는 욕심 때문에 때로 사람들이 두려워하여 거리를 둔다',
    '나는 상대방과 너무 가까워지는 것을 피하려고 한다',
    '나는 상대방으로부터 사랑받고 있다는 것을 자주 확인받고 싶어한다',
    '나는 다른 사람과 가까워지는 것이 비교적 쉽다',
    '가끔 나는 다른 사람에게 더 많은 애정과 더 많은 헌신을 보여줄 것을 강요한다고 느낀다',
    '나는 다른 사람에게 의지하기가 어렵다',
    '나는 버림받는 것에 대해 때때로 걱정하지 않는다',
    '나는 다른 사람과 너무 가까워지는 것을 좋아하지 않는다',
    '만약 상대방이 나에게 관심을 보이지 않는다면 나는 화가난다',
    '나는 상대방에게 모든 것을 이야기한다',
    '상대방이 내가 원하는 만큼 가까워지는 것을 원치 않음을 안다',
    '나는 대개 다른 사람에게 내 문제와 고민을 상의한다',
    '내가 다른 사람과 교류가 없을 때 나는 다소 걱정스럽고 불안하다',
    '다른 사람에게 의지하는 것이 편안하다',
    '상대방이 내가 원하는 만큼 가까이에 있지 않을 때 실망하게 된다',
    '나는 상대방에게 위로, 조언, 또는 도움을 청하지 못한다',
    '내가 필요로 할 때 상대방이 거절한다면 실망하게 된다',
    '내가 필요로 할 때 상대방에게 의지한다면 도움이 된다',
    '상대방이 나에게 불만을 나타낼 때 나 자신이 정말 형편없게 느껴진다',
    '나는 위로와 확신을 비롯한 많은 일들을 상대방에게 의지한다',
    '상대방이 나를 떠나서 많은 시간을 보냈을 때 나는 불쾌하다',
];

export const question = (index, chunk = STEP_CHUNK) => {
    if (Number.isNaN(Number(index)) ||
        index < 0 ||
        index > QuestionList.length - 1 ||
        !QuestionList[index]) {
        throw new TypeError('문항 번호가 잘못되었습니다.')
    }
    if (Number.isNaN(Number(chunk)) || !Number.isInteger(chunk) || chunk < 0) {
        throw new TypeError('문제 요청 수가 잘못되었습니다.')
    }
    return QuestionList.slice(index, index + chunk);
};

export const score = (index, value) => {
    if (Number.isNaN(Number(index)) ||
        index < 0 ||
        index > QuestionList.length - 1 ||
        !QuestionList[index]) {
        throw new TypeError('문항 번호가 잘못되었습니다.')
    }
    if (Number.isNaN(Number(value)) ||
        !ScoreList.includes(value)
    ) {
        throw new TypeError('문항에 선택한 값이 잘못되었습니다.')
    }
};

export const generateResult = () => {
    return '';
};
