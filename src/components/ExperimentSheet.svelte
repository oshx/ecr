<script>
  import { beforeUpdate, createEventDispatcher } from "svelte";
  import { QuestionList, ScoreLabelMap } from "../core/constants";

  export let answerList = [];
  export let readonly = false;
  export let vertical = false;
  export let message = null;

  let scrollTimer = 0;

  const dispatch = createEventDispatcher();

  function filterFalsy(value) {
    return !value;
  }

  function handleNextCenter() {
    const next = window.document.getElementById(
      "_" + answerList.findIndex(filterFalsy),
    );
    if (next === null) return;
    return window.document.getElementById("track").scrollTo({
      left: next.offsetLeft,
      behavior: "smooth",
    });
  }

  function handleScroll() {
    if (vertical) return;
    clearTimeout(scrollTimer);
    return (scrollTimer = setTimeout(handleNextCenter, 1000));
  }

  async function handleUpdate() {
    if (vertical) return;
    handleNextCenter();
  }

  const createChangeEventHandler = (index) => (changeEvent) => {
    if (readonly) return;
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
         class:track--vertical={vertical}
         class:track--readonly={readonly}
         on:scroll={handleScroll}>
      {#each QuestionList as question, index}
        <div
          id={`_${index}`}
          class="container"
          class:container--completed={answerList[index]}
        >
          <div class="card">
            <h2 class="title">
              <span class="title__prefix">
                <strong>{index + 1}</strong>/{QuestionList.length}
              </span>
              <strong class="title__main">{question}</strong>
            </h2>
            <div class="content">
              {#each Object.keys(ScoreLabelMap) as scoreKey}
                {#if !readonly || answerList[index] === scoreKey}
                  <label class="item">
                    <input
                      type="radio"
                      name={index}
                      on:change|preventDefault={createChangeEventHandler(index)}
                      value={scoreKey}
                      {readonly}
                      checked={answerList[index] === scoreKey}
                    />
                    <strong>
                      {ScoreLabelMap[scoreKey]}
                    </strong>
                    <em>{scoreKey}점</em>
                  </label>
                {/if}
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
    position: relative;
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

  .track.track--vertical {
    white-space: normal;
  }

  .track.track--readonly {
    -webkit-tap-highlight-color: transparent;
  }

  .container {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    background-color: #fff;
    transition: background-color 0.5s ease-out;
  }

  .container.container--completed {
    background-color: #ddd;
  }

  .track.track--vertical .container {
    display: block;
    width: auto;
    margin: 24px auto 0;
  }

  .track.track--readonly .container.container--completed {
    background-color: #eee;
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    color: inherit;
    text-align: left;
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
    margin: 4px;
    text-align: right;
    background-color: rgba(33, 66, 99, 0.1);
    border-radius: 8px;
    color: #999;
    user-select: none;
  }

  .title__prefix strong {
    color: #000;
  }

  .title__main {
    display: block;
    padding: 16px;
    font-weight: 900;
    word-break: keep-all;
  }

  .title__main::before {
    content: "\201c";
  }

  .title__main::after {
    content: "\201d";
  }

  .content {
    padding: 16px;
  }

  .item {
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 16px;
    word-break: keep-all;
    text-align: left;
    cursor: pointer;
  }

  .track.track--readonly .item {
    cursor: default;
  }

  .item input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }

  .item input[readonly] {
    -webkit-tap-highlight-color: transparent;
    cursor: default;
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
    vertical-align: baseline;
    padding-right: 8px;
    margin-right: 8px;
    font-size: 16px;
    font-weight: 400;
  }

  .item strong::before {
    content: "\2713";
    margin-right: 8px;
    display: inline-block;
    vertical-align: baseline;
    text-align: center;
    font-size: 24px;
    line-height: 1;
    color: #ccc;
  }

  .item strong::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 4px dashed rgba(33, 66, 99, 0.25);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .item em {
    position: relative;
    display: inline-block;
    vertical-align: baseline;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
  }

  .item em::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -4px -8px;
    border: 4px dashed rgba(33, 66, 99, 0.25);
    border-radius: 100%;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
</style>
