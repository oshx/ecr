<script>
  import { createEventDispatcher } from "svelte";

  export let message = null;
  const dispatch = createEventDispatcher();

  function handleResolve() {
    dispatch("resolve");
  }
</script>

{#if message}
  <label>
    <span>
      <button on:click={handleResolve}>!</button>
      <strong>{message}</strong>
    </span>
  </label>
{/if}

<style>
  label {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    white-space: nowrap;
    font-size: 0;
    line-height: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  label::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    font-size: 24px;
    line-height: 1.4;
    text-align: center;
    white-space: normal;
    vertical-align: middle;
  }
  button {
    display: inline-block;
    min-width: 24px;
    font-size: 24px;
    line-height: 24px;
    padding: 4px;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #f00;
    color: #fff;
    box-sizing: content-box;
  }
</style>
