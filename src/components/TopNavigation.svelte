<script>
  import {href, link} from "../router/helper";
  import {PATH_HOME} from "../router/routes.config";
</script>

<h1 title="ECR Test">
  <a href={href(PATH_HOME)} use:link>
    성인애착유형 검사
  </a>
</h1>

<style>
  h1 {
    font-size: 24px;
  }
  h1 a {
    text-decoration: none;
    cursor: pointer;
  }
  h1 a:hover,
  h1 a:focus,
  h1 a:active {
    text-decoration: underline;
  }
</style>
