<script>
  import { link } from "svelte-spa-router";
  import { href } from "../router/helper";
  import { PATH_RESULT, PATH_STEP } from "../router/routes.config";

  const resultPath = href(PATH_RESULT, { result: 15 });
  const stepPath = href(PATH_STEP, { step: 1, answers: 2 });
</script>

<main>
  <h1>성인애착유형 검사</h1>
</main>
<a href={resultPath} use:link>결과로 이동</a>
<a href={stepPath} use:link>검사하러 이동</a>
