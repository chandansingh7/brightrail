/** Copy-ready markup for table catalog tiles (consumers import from `brightrail`). */
export const TABLE_VARIATION_SNIPPETS = {
  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-table
    variant="bordered"
    density="compact"
    [data]="rows"
    [columns]="columns"
    ariaLabel="Metrics table"
  />
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-table
    variant="striped"
    density="compact"
    [data]="rows"
    [columns]="columns"
    ariaLabel="Live feed table"
  />
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-table
    variant="basic"
    density="compact"
    [data]="rows"
    [columns]="columns"
    [sorting]="true"
    ariaLabel="Node registry"
  />
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-table
    variant="bordered"
    density="medium"
    [data]="rows"
    [columns]="columns"
    [loading]="false"
    ariaLabel="Mission roster"
  />
</div>`,
} as const;

export const TABLE_DOC_SECTION_COUNT = 9;
