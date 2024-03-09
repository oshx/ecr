<script>
  import { ScoreLabelMap } from "../core/step";
  import { question } from "../core/ecr";

  export let params;

  $: saneStep = true;
  $: step = params.step || 0;
  $: title = (() => {
    try {
      return question(step - 1);
    } catch(error) {
      saneStep = false;
      return error.message;
    }
  })();
</script>



{#if saneStep}
<h1>{title}</h1>
{JSON.stringify(params)}
<div>Current Step: {step}</div>
{#each Object.keys(ScoreLabelMap) as scoreKey}
  <label>
    <input type="radio" name="score" value={scoreKey} />
    ({scoreKey}) {ScoreLabelMap[scoreKey]}
  </label>
{/each}
{:else}
{title}
{/if}
