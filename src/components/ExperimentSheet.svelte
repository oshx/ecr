<script>
  import { beforeUpdate, createEventDispatcher } from "svelte";
  import { QuestionList, ScoreLabelMap } from "../core/constants";

  export let answerList = [];

  export let message = null;

  let scrollTimer = 0;

  const dispatch = createEventDispatcher();

  function handleNextCenter() {
    const next = answerList.findIndex(value => !value);
    if (!next) return;
    return window.document.getElementById("track").scrollTo({
      left: window.document.getElementById("_" + next).offsetLeft,
      behavior: "smooth",
    });
  }

  function handleScroll() {
    clearTimeout(scrollTimer);
    return scrollTimer = setTimeout(handleNextCenter, 500);
  }

  async function handleUpdate() {
    handleNextCenter();
  }

  const createChangeEventHandler = (index) => (changeEvent) => {
    dispatch("select", [index, changeEvent.currentTarget.value]);
  };

  beforeUpdate(handleUpdate);
</script>

<div class="root">
  {#if message}
    <h2>
      {message}
    </h2>
  {:else}
    <div id="track"
         class="track"
         on:scroll={handleScroll}>
      {#each QuestionList as question, index}
        <div
          id={`_${index}`}
          class="container">
          <div class="card"
               class:container--completed={answerList[index]}>
            <h2 class="title">
              <span class="title__prefix">{index + 1}
                /{QuestionList.length}</span>
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
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>

  .root {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .track {
    max-width: 100%;
    min-height: 100%;
    overflow: auto;
    white-space: nowrap;
    text-align: center;
    font-size: 0;
    line-height: 0;
  }

  .container {
    display: inline-block;
    width: 100%;
    vertical-align: top;
  }

  .container.container--middle {
    vertical-align: middle;
  }

  .card {
    max-width: 960px;
    margin: 0 auto;
    white-space: normal;
    line-height: 1.4;
    font-size: 14px;
    color: #000;
  }

  .title {
    display: block;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    color: inherit;
    text-align: left;
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
    text-align: right;
    background-color: rgba(33, 66, 99, .1);
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
    border: 4px solid rgba(0, 0, 0, .15);
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
    padding: 16px;
  }

  .item {
    position: relative;
    max-width: 480px;
    display: block;
    margin: 0 auto;
    padding: 16px;
    word-break: keep-all;
    text-align: left;
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

  .item input:checked + strong::before {
    color: #369;
  }

  .item input:checked + strong::after,
  .item input:checked ~ em::before {
    opacity: 1;
  }

  .item strong {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-right: 8px;
    margin-right: 8px;
    font-size: 16px;
    font-weight: 400;
  }

  .item strong::before {
    content: '\2713';
    margin-right: 8px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 24px;
    line-height: 1;
    color: #eee;
  }

  .item strong::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 4px dashed rgba(33, 66, 99, .25);
    opacity: 0;
    transition: opacity .25s ease;
  }

  .item em {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }

  .item em::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -4px -8px;
    border: 4px dashed rgba(33, 66, 99, .25);
    border-radius: 100%;
    opacity: 0;
    transition: opacity .25s ease;
  }
</style>
