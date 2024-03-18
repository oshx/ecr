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

<div class="experiment-sheet">
  {#if message}
    <h2 class="experiment-sheet__title">
      {message}
    </h2>
  {:else}
    {#each QuestionList as question, index}
      <div
        id={`experiment-card${index}`}
        class="card experiment-sheet__card"
        class:card--completed={answerList[index]}
      >
        <h2 class="card__title">
          <span>[{index + 1}/{QuestionList.length}]</span>
          <strong>{question}</strong>
          <em>
            (
            {#if answerList[index]}
              {answerList[index]}
            {:else}
              &nbsp;
            {/if}
            )
          </em>
        </h2>
        <div class="selection">
          {#each Object.keys(ScoreLabelMap) as scoreKey}
            <label>
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
    margin: 16px auto 0;
    padding: 8px 16px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 1px 1px 4px #eee;
  }

  .card.card--completed {
    background-color: #eee;
    box-shadow: 0 0 4px #eee;
  }

  .selection {
    display: flex;
    align-items: stretch;
  }

  .selection label {
    position: relative;
    display: flex;
    justify-content: stretch;
    flex-direction: column;
    justify-self: stretch;
    flex-grow: 1;
  }

  .item {
    display: block;
    padding: 12px 8px;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
    white-space: normal;
    word-break: keep-all;
    color: #666;
  }

  .item--hidden {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
  }

  .card__title {
    font-size: 24px;
  }

  .experiment-sheet__title {
    color: #f00;
    font-size: 24px;
  }

  label {
    position: relative;
  }

  label,
  label * {
    cursor: pointer;
  }

  label::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }

  label span {
    display: inline-block;
    padding: 12px 8px;
    font-size: 16px;
    line-height: 1.4;
    vertical-align: middle;
    text-align: center;
    white-space: normal;
    word-break: keep-all;
    color: #666;
  }

  label span::before {
    content: "\2713";
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    opacity: 0;
    border-radius: 4px;
    transition: opacity 0.25s ease-out;
    font-size: 32px;
    line-height: 1.4;
  }

  label span::after {
    content: "";
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border: 1px dotted #999;
    border-radius: 4px;
  }

  label input:checked + span {
    background-color: #369;
    color: #aaa;
  }

  label input:checked + span::before {
    opacity: 1;
  }

  label input:checked + span::after {
    border-style: solid;
    border-color: #369;
  }

  label span strong {
    position: relative;
    display: block;
    font-style: normal;
  }

  label span em {
    position: relative;
    display: block;
    font-style: normal;
  }
</style>
