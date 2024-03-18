<script>
  export let total = null;
  export let progress = 0;

  $: completed = progress === total;
</script>

{#if total}
  <aside>
    <div class:completed>
      {#if completed}
        <button type="submit">결과 보기</button>
      {:else}
        <strong>
          <i style={`width:${(progress / total) * 100}%`}></i>
          <span>{Math.round((progress / total) * 100)}%</span>
          <em>({progress}/{total})</em>
        </strong>
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
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    font-style: normal;
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
    transition: height .25s ease-out;
  }

  div.completed {
    top: 0;
    height: auto;
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
    background-color: rgba(33, 66, 99, 0.75);
    font-style: normal;
    font-weight: 400;
    transition: width 0.25s ease-out;
  }

  em {
    position: relative;
    font-style: normal;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
  }

  span {
    position: relative;
    font-style: normal;
    color: rgba(255, 255, 255, 0.75);
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
