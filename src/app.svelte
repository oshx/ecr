<script>
  import routes from "./router/routes.config";
  import Router from "svelte-spa-router";

  export let name;
</script>

<h1>Hello {name}!</h1>
<Router {routes} />

<style>
  h1 {
    text-align: center;
  }
</style>
