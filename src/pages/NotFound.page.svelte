<script>
  import { href, link } from "~/src/router/helper";
  import { PATH_EXPERIMENT } from "~/src/router/routes.config";

  const startPath = href(PATH_EXPERIMENT);
</script>

<h1>잘못된 경로로 왔습니다!</h1>
<p>이 곳에서는 검사를 받거나 그 결과를 볼 수 있습니다.</p>
<p>아래 경로로 이동할 수 있습니다.</p>
<ul>
  <li>
    <a href={startPath} use:link>검사 시작</a>
  </li>
</ul>
