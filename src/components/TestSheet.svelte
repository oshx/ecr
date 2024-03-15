<script>
  import {beforeUpdate} from "svelte";
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
  beforeUpdate(fetchQuestion);
</script>

<h2>TestSheet</h2>
{#if message}
  <h1 style="color: red;">{message}</h1>
{:else}
  {#each list as item}
    <h1>{item}</h1>
    {#each Object.keys(ScoreLabelMap) as scoreKey}
      <label>
        <input type="radio" name="score" value={scoreKey}/>
        ({scoreKey}) {ScoreLabelMap[scoreKey]}
      </label>
    {/each}
  {/each}
{/if}
