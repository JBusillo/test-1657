<script>
  import { browser } from "$app/env";

  async function getjwt() {
    const r = await fetch("mytest/jwttest", { method: "GET" });
    const body = await r.json();
    return body;
  }

  let jwt;

  if (browser) {
    getjwt().then((body) => (jwt = body.jwt));
  }
</script>

<div>The JWT is: {jwt}</div>
