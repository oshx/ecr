<script>
  import { beforeUpdate } from "svelte";
  import { decode } from "../core/step";

  export let params;
  let valid = false;

  const generateResult = async () => {
    const param = params.result;
    if (!param || typeof param !== "string") {
      valid = false;
      return;
    }
    const answerList = param.split('-');
    answerList.reduce((result, current) => {
      console.log(current);
      const answer = decode(current).split('');
      result = result.concat(answer);
      return result;
    }, []);
    console.log(answerList.reduce((result, current) => {
      const answer = decode(current).split('');
      result = result.concat(answer);
      return result;
    }, []));
  };

  beforeUpdate(generateResult);
</script>

<h1>Result {JSON.stringify(params)}</h1>
