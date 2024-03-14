import App from "./App.svelte";
import "./core/ecr";

const app = new App({
  target: window.document.body,
  props: {
    name: "svelte",
  },
});

export default app;
