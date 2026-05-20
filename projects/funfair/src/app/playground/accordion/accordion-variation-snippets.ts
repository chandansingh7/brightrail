/** Copy-ready markup for accordion catalog tiles (import from `brightrail`). */
export const ACCORDION_VARIATION_SNIPPETS = {
  appearanceStandard: `<brightrail-accordion appearance="standard" size="md" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Standard"><p>Standard surface.</p></brightrail-accordion-item>
  <brightrail-accordion-item title="Second"><p>Another row.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  appearanceBordered: `<brightrail-accordion appearance="bordered" size="md" [defaultExpandedIndex]="null">
  <brightrail-accordion-item title="Bordered"><p>Contained border.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  appearanceSubtle: `<brightrail-accordion appearance="subtle" size="md" [defaultExpandedIndex]="null">
  <brightrail-accordion-item title="Subtle"><p>Lighter chrome.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  appearanceCompact: `<brightrail-accordion appearance="compact" size="sm" [defaultExpandedIndex]="null">
  <brightrail-accordion-item title="Compact"><p>Dense spacing.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  sizeSm: `<brightrail-accordion appearance="standard" size="sm" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Small"><p>Small header density.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  sizeMd: `<brightrail-accordion appearance="standard" size="md" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Medium"><p>Default size.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  sizeLg: `<brightrail-accordion appearance="standard" size="lg" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Large"><p>Large targets.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  expandSingle: `<brightrail-accordion expandMode="single" size="md" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Single A"><p>Only one open.</p></brightrail-accordion-item>
  <brightrail-accordion-item title="Single B"><p>Opens then closes other.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  expandMulti: `<brightrail-accordion expandMode="multi" size="md" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Multi A"><p>Both can stay open.</p></brightrail-accordion-item>
  <brightrail-accordion-item title="Multi B"><p>Independent panels.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  iconLeft: `<brightrail-accordion iconPosition="left" size="md" [defaultExpandedIndex]="null">
  <brightrail-accordion-item title="Chevron left"><p>Icon leads.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  iconRight: `<brightrail-accordion iconPosition="right" size="md" [defaultExpandedIndex]="null">
  <brightrail-accordion-item title="Chevron right"><p>Icon trails.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  enterpriseFaq: `<brightrail-accordion size="md" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="FAQ" icon="info"><p>Answers and help.</p></brightrail-accordion-item>
  <brightrail-accordion-item title="Settings" icon="edit"><p>Preferences.</p></brightrail-accordion-item>
  <brightrail-accordion-item title="Alerts" icon="warning"><p>Notifications.</p></brightrail-accordion-item>
</brightrail-accordion>`,
  advancedBadge: `<brightrail-accordion-item title="Queue" icon="info" badgeColor="danger" [badgeText]="12">
  <p>Badges for counts.</p>
</brightrail-accordion-item>`,
  advancedHeaderActions: `<brightrail-accordion-item title="Members">
  <span class="br-acc-header-actions"><button type="button">Add user</button></span>
  <p>Actions in the header row.</p>
</brightrail-accordion-item>`,
  advancedCombined: `<brightrail-accordion size="md" [defaultExpandedIndex]="0">
  <brightrail-accordion-item title="Queue" icon="info" badgeColor="danger" [badgeText]="12">
    <p>Badges for counts.</p>
  </brightrail-accordion-item>
  <brightrail-accordion-item title="Members">
    <span class="br-acc-header-actions"><button type="button">Add user</button></span>
    <p>Actions in the header row.</p>
  </brightrail-accordion-item>
</brightrail-accordion>`,
} as const;

export const ACCORDION_DOC_SECTION_COUNT = 6;
