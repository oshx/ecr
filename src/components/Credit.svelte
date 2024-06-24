<div class="container">
  <cite>&copy; <a href="mailto:oshxios@gmail.com?subject=ecr">오디</a> 제공</cite>
  <div class="container__subtext">
    동기 제공
    <address>예깅</address>
  </div>
</div>

<style>
  div, cite, address, a {
    font-style: normal;
    font-weight: 400;
  }

  a {
    color: #369;
  }

  .container {
    position: relative;
    margin: 32px auto 0;
    padding: 16px 0;
    border-top: 1px solid #ddd;
    text-align: center;
    cursor: default;
    user-select: none;
  }

  cite {
    display: block;
  }

  .container__subtext {
    position: relative;
    display: inline-block;
    margin: 24px auto 16px;
    padding: 8px 16px;
    background-color: #ddd;
    color: #666;
    border-radius: 8px;
    font-size: 12px;
  }

  .container__subtext::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    margin: 0 0 0 -8px;
    border: 8px solid transparent;
    border-bottom-color: #ddd;
  }

  address {
    display: inline;
    color: #333;
  }

</style>
