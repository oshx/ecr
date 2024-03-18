<script>
  import { beforeUpdate, createEventDispatcher } from "svelte";
  import { QuestionList, ScoreLabelMap } from "../core/constants";

  export let answerList = [];

  let message = null;

  const onUpdate = async () => {};

  const dispatch = createEventDispatcher();

  const createChangeEventHandler = (index) => (changeEvent) => {
    dispatch("select", [index, changeEvent.currentTarget.value]);
  };
  beforeUpdate(onUpdate);
</script>

<section class="experiment-sheet">
  {#if message}
    <h2 class="experiment-sheet__title experiment-sheet__title--error">
      {message}
    </h2>
  {:else}
    {#each QuestionList as question, index}
      <h2 class="experiment-sheet__title">{question}</h2>
      <div class="experiment-sheet__answer">
        {#each Object.keys(ScoreLabelMap) as scoreKey}
          <label>
            <input
              type="radio"
              name={index}
              on:change={createChangeEventHandler(index)}
              value={scoreKey}
              checked={answerList[index] === scoreKey}
            />
            <span>
              <strong>
                {ScoreLabelMap[scoreKey]}
              </strong>
              <em>{scoreKey}점</em>
            </span>
          </label>
        {/each}
      </div>
    {/each}
  {/if}
</section>

<style>
  .experiment-sheet {
    display: block;
  }

  .experiment-sheet__title {
    font-size: 24px;
  }

  .experiment-sheet__title.experiment-sheet__title--error {
    color: #f00;
  }

  .experiment-sheet__answer {
    display: flex;
  }

  .experiment-sheet__answer label {
    position: relative;
    display: block;
    flex: 1;
    white-space: nowrap;
    text-align: center;
    font-size: 0;
    line-height: 0;
  }

  .experiment-sheet__answer label,
  .experiment-sheet__answer label * {
    cursor: pointer;
  }

  .experiment-sheet__answer label::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }

  .experiment-sheet__answer label input {
    position: absolute;
    opacity: 0;
  }

  .experiment-sheet__answer label span {
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

  .experiment-sheet__answer label span::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    border-radius: 4px;
    background-color: #eee;
    transition: opacity 0.25s ease-out;
    box-shadow: inset 0 0 8px 8px #369;
  }

  .experiment-sheet__answer label span::after {
    content: "";
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border: 1px dotted #999;
    border-radius: 4px;
  }

  .experiment-sheet__answer label input:checked + span {
    color: #369;
  }

  .experiment-sheet__answer label input:checked + span::before {
    opacity: 1;
  }

  .experiment-sheet__answer label input:checked + span::after {
    border-style: solid;
    border-color: #369;
  }

  .experiment-sheet__answer label span strong {
    position: relative;
    display: block;
    font-style: normal;
  }

  .experiment-sheet__answer label span em {
    position: relative;
    display: block;
    font-style: normal;
  }
</style>
