<script>
  import routes from "./router/routes.config";
  import Router from "svelte-spa-router";
</script>

<Router {routes} />

<style>
:global(html, body) {
  font-size: 16px;
  line-height: 1.4;
}

:global(h1, h2, h3, h4, h5, h6) {
  font-style: normal;
  font-weight: 400;
}
</style>
