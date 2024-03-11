<script>
  import { link } from "svelte-spa-router";
  import { href } from "../router/helper";
  import { PATH_RESULT, PATH_STEP } from "../router/routes.config";
</script>

<main>
  <h1>성인애착유형 검사</h1>
</main>
<a href={href(PATH_RESULT, { result: 15 })} use:link>결과로 이동</a>
<a href={href(PATH_STEP, { step: 1, answers: 2 })} use:link>Step1</a>
<a href={href(PATH_STEP, { step: 36 })} use:link>Step36</a>
<a href={href(PATH_STEP, { step: 37 })} use:link>Step37</a>
