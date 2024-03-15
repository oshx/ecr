<script>
  import {beforeUpdate, createEventDispatcher} from "svelte";
  import {ScoreLabelMap} from "../core/constants"
  import {question} from "../core/ecr";

  export let step;

  let list = [];
  let message = null;

  const fetchQuestion = async () => {
    list = [];
    message = null;
    try {
      list = question(((step - 1) * 10));
      console.log(step, (step - 1) * 10, list);
    } catch (error) {
      message = error.message;
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
  {#each list as item, index}
    <h3 class="test-sheet__title">{item}</h3>
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
