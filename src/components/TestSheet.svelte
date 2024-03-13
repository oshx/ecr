<script>
  import { ScoreLabelMap } from "../core/step";
  import { question } from "../core/ecr";
  import { beforeUpdate } from "svelte";

  export let step;

  let title = null;
  let sane = false;

  const fetchQuestion = async () => {
    title = null;
    sane = false;
    try {
      title = question(step);
      sane = true;
    } catch (error) {
      title = error.message;
      sane = false;
    }
  };
  beforeUpdate(fetchQuestion);
</script>

<h2>TestSheet</h2>
{#if sane}
  <h1>{title}</h1>
  {#each Object.keys(ScoreLabelMap) as scoreKey}
    {#if ScoreLabelMap[scoreKey]}
      <label>
        <input type="radio" name="score" value={scoreKey} />
        ({scoreKey}) {ScoreLabelMap[scoreKey]}
      </label>
    {/if}
  {/each}
{:else}
  <h1 style="color: red;">{title}</h1>
{/if}
