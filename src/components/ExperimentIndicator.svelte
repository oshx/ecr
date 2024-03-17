<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let total = null;
  export let progress = 0;
</script>

{#if total}
  <aside>
    <div>
      <strong>
        <i style={`width:${progress / total * 100}%`}></i>
        <span>{Math.round(progress / total * 100)}%</span>
        <em>({progress}/{total})</em>
      </strong>
      {#if progress === total}
        <button type="submit">결과 보기</button>
      {/if}
    </div>
  </aside>
{/if}

<style>
  aside {
    margin: 0;
    padding: 64px 0 0;
  }

  div {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 64px;
    background-color: rgba(0, 0, 0, .5);
    text-align: center;
    font-style: normal;
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
  }

  div::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
  }

  strong {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 1.4;
    white-space: normal;
  }

  i {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(33, 66, 99, .75);
    font-style: normal;
    font-weight: 400;
    transition: width .25s ease-out;
  }

  em {
    position: relative;
    font-style: normal;
    font-weight: 400;
    color: rgba(255, 255, 255, .5);
  }

  span {
    position: relative;
    font-style: normal;
    color: rgba(255, 255, 255, .75);
  }

  button {
    display: inline-block;
    vertical-align: middle;
  }
</style>
