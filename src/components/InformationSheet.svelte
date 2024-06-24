<script>
  import { QuestionList, ResultList } from "../core/constants";

  export let intro = false;
  export let block = !!intro;

  function handleClickStart() {
    if (intro) {
      block = false;
    }
  }
</script>

<div class="container" class:fullscreen={intro} class:hide={!block}>
  <div class="content">
    {#if intro}
      <h1 class="title">성인애착유형 검사</h1>
    {/if}
    <dl>
      <dt>성인애착유형 질문지란?</dt>
      <dd>
        성인애착유형 질문지(ECR;Experiences in Close Relationships)를 통해
        Brennan, Clark &amp; Shaver, 1998년에 애착유형과 분노표현 방식과의
        관계를 알아보기 위해 실시한 논문에 사용된 질문지입니다.
      </dd>
      <dd>
        총 {QuestionList.length}개 질문을 통해 검사를 하게 되며, {ResultList.length}개의
        유형으로 결과가 분류됩니다.
      </dd>
    </dl>
    {#if intro}
      <button on:click={handleClickStart}>검사시작</button>
    {/if}
  </div>
</div>

<style>
  @keyframes fade-out {
    0% {
      z-index: 1;
      opacity: 1;
    }

    99% {
      z-index: 1;
      opacity: 0;
    }

    100% {
      z-index: -1;
      opacity: 0;
    }
  }

  .container {
    margin: 24px auto 0;
    background-color: #ddd;
    user-select: none;
    text-align: center;
    white-space: nowrap;
    line-height: 0;
    font-size: 0;
  }

  .container::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .container.fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    background-image: linear-gradient(
      0deg,
      #fff 0,
      rgba(255, 255, 255, 0.85) 100%
    );
    background-color: transparent;
    font-size: 14px;
    line-height: 1.4;
    z-index: 100;
  }

  .container.hide {
    animation: fade-out 0.75s 1 ease;
    opacity: 0;
    z-index: -1;
  }

  .title {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -1px;
    background-color: rgba(0, 0, 0, 0.25);
    text-shadow: 0 0 3px rgba(255, 200, 50, 0.5),
    0 0 5px rgba(0, 0, 0, 0.9);
  }

  .content {
    display: inline-block;
    vertical-align: middle;
    padding: 16px;
    font-size: 20px;
    line-height: 1.4;
    white-space: normal;
  }

  .title,
  dl {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }

  dl {
    text-align: left;
    word-break: keep-all;
    letter-spacing: -1px;
    line-height: 1.4;
  }

  dt {
    margin: 0;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
  }

  dd {
    margin: 0;
    padding: 8px 24px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.85);
  }

  button {
    display: inline-block;
    margin: 48px auto 0;
    border: 0 none;
    border-bottom: 4px dashed rgba(255, 192, 0, 0.5);
    background: none transparent;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -1px;
    color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }

  .hide button {
    cursor: default;
    user-select: none;
  }
</style>
