<script>
  import {href, link} from "../router/helper";
  import {PATH_HOME, PATH_STEP} from "../router/routes.config";
</script>

<h1>잘못된 경로로 왔습니다!</h1>
<p>이 곳에서는 ECR검사를 받거나 그 결과를 볼 수 있습니다.</p>
<p>아래 경로로 이동할 수 있습니다.</p>
<ul>
  <li>
    <a href={href(PATH_HOME)} use:link>첫 화면</a>
  </li>
  <li>
    <a href={href(PATH_STEP, {step: 1})} use:link>검사 시작</a>
  </li>
</ul>
