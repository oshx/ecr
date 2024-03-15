<script>
  import {beforeUpdate, createEventDispatcher} from "svelte";
  import {ScoreLabelMap, QuestionList} from "../core/constants"

  export let step;

  let list = [];
  let message = null;

  const fetchQuestion = async () => {
    list = [];
    message = null;
    try {
    } catch (error) {
    }
  };

  const dispatch = createEventDispatcher();

  const createChangeEventHandler = (index) => (changeEvent) => {
    dispatch('select', [index, changeEvent.currentTarget.value]);
  };
  beforeUpdate(fetchQuestion);
</script>

<h2>TestSheet</h2>
{#if message}
  <h3 class="test-sheet__title test-sheet__title--error">{message}</h3>
{:else}
  {#each QuestionList as question, index}
    <h3 class="test-sheet__title">{question}</h3>
    {#each Object.keys(ScoreLabelMap) as scoreKey}
      <label>
        <input type="radio" name={index}
               on:change={createChangeEventHandler(index)} value={scoreKey}/>
        <span>
          {ScoreLabelMap[scoreKey]}
        </span>
        <span>({scoreKey})</span>
      </label>
    {/each}
  {/each}
{/if}

<style>
  .test-sheet__title {
    font-size: 24px;
  }

  .test-sheet__title.test-sheet__title--error {
    color: #f00;
  }
</style>
