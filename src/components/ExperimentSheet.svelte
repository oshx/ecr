<script>
  import { beforeUpdate, createEventDispatcher } from "svelte";
  import { QuestionList, ScoreLabelMap } from "../core/constants";

  export let answerList = [];

  export let message = null;

  const dispatch = createEventDispatcher();

  async function handleUpdate() {
    return window.document
      .querySelector(
        `#experiment-card${answerList.findIndex((value) => !value)}`
      )
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  const createChangeEventHandler = (index) => (changeEvent) => {
    dispatch("select", [index, changeEvent.currentTarget.value]);
  };

  beforeUpdate(handleUpdate);
</script>

<div>
  {#if message}
    <h2>
      {message}
    </h2>
  {:else}
    {#each QuestionList as question, index}
      <div
        id={`experiment-card${index}`}
        class="card"
        class:card--completed={answerList[index]}
      >
        <h2 class="title">
          <span class="title__prefix">{index + 1}/{QuestionList.length}</span>
          <strong class="title__main">{question}</strong>
        </h2>
        <div class="content">
          {#each Object.keys(ScoreLabelMap) as scoreKey}
            <label class="item">
              <input
                type="radio"
                name={index}
                on:change|preventDefault={createChangeEventHandler(index)}
                value={scoreKey}
                checked={answerList[index] === scoreKey}
              />
              <strong>
                {ScoreLabelMap[scoreKey]}
              </strong>
              <em>{scoreKey}점</em>
            </label>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .card {
    display: block;
    margin: 24px auto 0;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1), inset 0 0 4px #fff;
    color: #000;
  }

  .card.card--completed {
    box-shadow: inset 0 0 4px rgba(0,0,0,0.25), 0 0 128px inset rgba(0, 0, 0, 0.1);
    color: rgba(0,0,0,.3);
  }

  .title {
    display: block;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    border-radius: 8px 8px 0 0;
    color: inherit;
    background-image: linear-gradient(90deg, transparent, rgba(33, 66, 99, 0.1));
  }

  .title::after {
    content: "";
    display: block;
    clear: both;
  }

  .title__prefix {
    float: right;
    font-size: 14px;
    font-weight: 400;
    padding: 4px 8px;
    border-radius: 4px 4px 0 0;
    text-align: right;
    background-color: rgba(33,66,99,.1);
    border-radius: 0 8px 0 8px;
  }
  .title__main {
    display: block;
    padding: 16px;
    font-weight: 900;
    word-break: keep-all;
  }

  .title__main::before,
  .title__main::after {
    content: "";
    display: inline-block;
    margin: 0 4px;
    border: 4px solid rgba(0,0,0,.15);
    width: 4px;
    height: 4px;
  }

  .title__main::before {
    border-right: 0;
    border-bottom: 0;
    vertical-align: text-top;
  }

  .title__main::after {
    border-top: 0;
    border-left: 0;
    vertical-align: text-bottom;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
  }

  .item {
    position: relative;
    display: flex;
    margin: 4px;
    padding: 8px 4px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    word-break: keep-all;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .item input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  .item strong::before {
    content: '\2713';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 48px;
    line-height: 1;
    color: rgba(66,99,196,.75);
    opacity: 0;
    transform: translateY(-15%);
    transition: transform .25s ease-out, opacity .1s linear;
  }

  .item input:checked + strong::before {
    opacity: 1;
    transform: translateY(0);
  }

  .item strong {
    font-size: 16px;
    font-weight: 400;
  }
  .item em {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }
</style>
