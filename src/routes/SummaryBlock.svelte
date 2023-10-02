<script lang="ts">
  interface EntryData {
    name: String,
    summary: String,
    declaration: String,
    description: String,
    more?: String
  }

  export let idDict: { [key: string]: string };
  export let group: EntryData[];
  export let groupName: String;
</script>

<div class="summary-block">
  <div class="summary-group">
    {groupName}
  </div>
  <div class="summary-list">
    {#each group as entry}
      <div class="summary-entry">
        <a href="#{idDict[entry.name]}"><code>{entry.name}</code> {entry.summary}</a>
      </div>
    {/each}
  </div>
</div>

<style>
  .summary-block {
    padding: 1em;
    width: 20em;
    text-align: center;
    box-shadow: 2px 2px 10px #00000060;
  }
  .summary-block:nth-child(3n+1) {
    background-color: #fbf8ff;
  }
  .summary-block:nth-child(3n+2) {
    background-color: #fff8fb;
  }
  .summary-block:nth-child(3n) {
    background-color: #fffbfb;
  }

  .summary-group {
    padding: 0 0 .4em;
    font-size: 1.8em;
  }
  .summary-entry {
    padding: 0 0 .2em;
  }
</style>
