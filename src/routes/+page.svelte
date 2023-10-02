<script lang="ts">
  import Entry from "./Entry.svelte";
  import ScrollUp from "./ScrollUp.svelte";
  import SummaryBlock from "./SummaryBlock.svelte";
  import type { PageData } from './$types';

  import "./basic.css";

  export let data: PageData;

  let idDict: { [key: string]: string } = {};

  for (const key of Object.keys(data.list)) {
    const l = data.list[key];
    for (const i of l) {
      if (! Object.keys(idDict).includes(i.name)) {
        let idbase = "f-" + i.name.toLowerCase().replace("()", "");

        let id = idbase;
        for (let ix=0; Object.values(idDict).includes(id); ix++) {
          id = idbase + ix;
        }

        idDict[i.name] = id;
      }
    }
  }
</script>

<ScrollUp />

<h1>Sommaire</h1>

<SummaryBlock group={data.list.base} {idDict} groupName="base" />

<ul>
  {#each Object.keys(data.list) as entryGroupName}
    <li>Name of group here TODO
      <ul>
        {#each data.list[entryGroupName] as entry}
          <li><a href="#{idDict[entry.name]}"><code>{entry.name}</code> {entry.summary}</a></li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<h1>Lecture</h1>
<div>
  {#each data.list.base as entry}
    <Entry
      name={entry.name}
      declaration={entry.declaration}
      description={entry.description}
      more={entry.more}
      id={idDict[entry.name]}
    />
  {/each}
</div>

<h1>Entiers</h1>
<div>
  {#each data.list.entier as entry}
    <Entry
      name={entry.name}
      declaration={entry.declaration}
      description={entry.description}
      more={entry.more}
      id={idDict[entry.name]}
    />
  {/each}
</div>

<h1>Manipulation des Strings</h1>
<div>
  {#each data.list.strs as entry}
    <Entry
      name={entry.name}
      declaration={entry.declaration}
      description={entry.description}
      more={entry.more}
      id={idDict[entry.name]}
    />
  {/each}
</div>

<h1>Autres fonctions</h1>
<div>
  {#each data.list.plus as entry}
    <Entry
      name={entry.name}
      declaration={entry.declaration}
      description={entry.description}
      more={entry.more}
      id={idDict[entry.name]}
    />
  {/each}
</div>

<style>
  h1 {
    margin-left: 1em;
  }
</style>
