<script>
    import { ScoreLabelMap } from "../core/step";
    import { question } from "../core/ecr";
    import {beforeUpdate, onMount} from "svelte";

    export let step;

    let title = null;
    let blocked = false;

    const fetchQuestion = async () => {
        title = null;
        blocked = false;
        try {
            title = question(step);
            blocked = false;
        } catch (error) {
            title = error.message;
            blocked = true;
        }
    };
    beforeUpdate(fetchQuestion);
</script>

<h2>TestSheet</h2>
{#if blocked}
    <h1 style="color: red;">{title}</h1>
{:else}
    <h1>{title}</h1>
    {#each Object.keys(ScoreLabelMap) as scoreKey}
        <label>
            <input type="radio" name="score" value={scoreKey} />
            ({scoreKey}) {ScoreLabelMap[scoreKey]}
        </label>
    {/each}
{/if}
