<script lang="ts">
  export let name: string;
  export let declaration: string;
  export let description: string;
  export let more: string|undefined = undefined;
  export let id: string;
</script>

<div {id} class="entry-point">
  <a href="#{id}"><h2><code>{name}</code></h2></a>

  <div class="inside">
    <code>{declaration}</code>
    <p>{@html description}</p>
    {#if more != undefined}
      {@html more}
    {/if}
  </div>
</div>

<style>
.entry-point:nth-child(3n+1) {
  background-color: #fbf8ff;
}
.entry-point:nth-child(3n+2) {
  background-color: #fff8fb;
}
.entry-point:nth-child(3n) {
  background-color: #fffbfb;
}

.entry-point {
  padding: 1em;
  margin: 1em 0.5em 0;
}

.entry-point h2 {
  margin-top: 0;
  font-size: 1.8em;
}

.entry-point h2 code {
  color: #f60366;
}

.inside {
  border-left: 8px solid rgba(27, 31, 35, .05);
  padding: 0.8em;
  vertical-align: middle;
}

.inside :last-child {
  margin-bottom: 0;
}
</style>
