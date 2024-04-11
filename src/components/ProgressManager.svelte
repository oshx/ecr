<script>
  export let total = null;
  export let progress = 0;

  $: completed = progress === total;
  $: percent = Math.round((progress / total) * 100, 1);
</script>

{#if total !== null}
  <div class="root">
    <div class="indicator" class:indicator--completed={completed}>
      {#if completed}
        <button type="submit">결과 보기</button>
      {:else}
        <strong>
          <i style={`width:${percent}%`}></i>
          <span>{percent}%</span>
        </strong>
      {/if}
    </div>
  </div>
{/if}

<style>
  @keyframes loop-background {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 320px 0;
    }
  }

  .root {
    position: relative;
    margin: 0;
    padding: 32px 0 0;
    user-select: none;
  }

  .indicator {
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.15);
    text-align: center;
    font-style: normal;
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
    transition: height 0.25s ease-out;
  }

  .indicator.indicator--completed {
    bottom: 0;
    height: auto;
    background-image: none;
    animation: none;
  }

  div::before {
    content: "";
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
    background-color: #fff;
    font-style: normal;
    font-weight: 400;
    background-image: linear-gradient(80deg, transparent 0, transparent 10%, rgba(0,0,0,.1) 20%, transparent 80%);
    background-size: 320px 100%;
    animation: loop-background 1s infinite linear;
    box-shadow: 0 0 1px rgba(0,0,0,.15);
    transition: width 0.25s ease-out;
  }

  span {
    position: relative;
    font-style: normal;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 3px #000;
  }

  button {
    position: relative;
    display: inline-block;
    padding: 8px 16px;
    font-size: 24px;
    line-height: 1.4;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-sizing: content-box;
    color: #fff;
    cursor: pointer;
  }
</style>
