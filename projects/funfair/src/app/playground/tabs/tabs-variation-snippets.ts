/** Copy-ready markup for tabs catalog tiles (consumers import from `brightrail`). */
export const TABS_VARIATION_SNIPPETS = {
  appearanceUnderline: `<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent>
      <p>Track profile details and recent updates.</p>
    </ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Owners and metadata.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Activity">
    <ng-template brightrailTabContent><p>Audit events.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  appearanceContained: `<brightrail-tabs appearance="contained" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Contained (default) tabs.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Secondary panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  appearancePill: `<brightrail-tabs appearance="pill" size="md">
  <brightrail-tab label="All" [active]="true">
    <ng-template brightrailTabContent><p>Filter: all items.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Active">
    <ng-template brightrailTabContent><p>Filter: active.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Archived">
    <ng-template brightrailTabContent><p>Filter: archived.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,

  orientationHorizontal: `<brightrail-tabs appearance="underline" orientation="horizontal" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Horizontal tab strip.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Settings">
    <ng-template brightrailTabContent><p>Settings panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  orientationVertical: `<brightrail-tabs appearance="underline" orientation="vertical" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Vertical navigation layout.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Members">
    <ng-template brightrailTabContent><p>Seat usage and roles.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Billing">
    <ng-template brightrailTabContent><p>Invoices and payment method.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,

  sizeSm: `<brightrail-tabs appearance="underline" size="sm">
  <brightrail-tab label="All" [active]="true">
    <ng-template brightrailTabContent><p>Compact density.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Open">
    <ng-template brightrailTabContent><p>Open items.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  sizeMd: `<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Medium (default) size.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Details panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  sizeLg: `<brightrail-tabs appearance="underline" size="lg">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Large triggers for touch targets.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Reports">
    <ng-template brightrailTabContent><p>Reports panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,

  iconOnlyCalendar: `<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" icon="calendar" [iconOnly]="true" [active]="true">
    <ng-template brightrailTabContent><p>Calendar view.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Search" icon="search" [iconOnly]="true">
    <ng-template brightrailTabContent><p>Search view.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="People" icon="user" [iconOnly]="true">
    <ng-template brightrailTabContent><p>People view.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  iconLabel: `<brightrail-tabs appearance="contained" size="md">
  <brightrail-tab label="Overview" icon="calendar" [active]="true">
    <ng-template brightrailTabContent><p>Icon + label tab.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Library" icon="copy">
    <ng-template brightrailTabContent><p>Library panel.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,

  badgeAlerts: `<brightrail-tabs appearance="pill" size="md">
  <brightrail-tab label="Inbox" [active]="true">
    <ng-template brightrailTabContent><p>Unread threads.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Alerts" [badge]="3">
    <ng-template brightrailTabContent><p>Three open alerts.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Messages" [badge]="12">
    <ng-template brightrailTabContent><p>Direct messages backlog.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  closable: `<brightrail-tabs appearance="underline" size="md">
  <brightrail-tab label="Overview" [active]="true" [closable]="true" (close)="onClose('Overview')">
    <ng-template brightrailTabContent><p>Closable document tab.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details" [closable]="true" (close)="onClose('Details')">
    <ng-template brightrailTabContent><p>Remove with the × affordance.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,

  scrollableStrip: `<brightrail-tabs appearance="underline" size="sm" [scrollable]="true">
  <!-- Repeat tabs for each segment in your data model -->
  <brightrail-tab label="Segment 1" [active]="true">
    <ng-template brightrailTabContent><p>Segment 1 content.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Segment 2">
    <ng-template brightrailTabContent><p>Segment 2 content.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
  verticalNav: `<brightrail-tabs appearance="underline" orientation="vertical" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent><p>Primary workspace snapshot.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Security">
    <ng-template brightrailTabContent><p>SSO and session policy.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`,
} as const;

export const TABS_DOC_SECTION_COUNT = 6;

export const TABS_HTML_EXAMPLES = `<brightrail-tabs appearance="underline" orientation="horizontal" size="md">
  <brightrail-tab label="Overview" [active]="true">
    <ng-template brightrailTabContent>
      <h3>Account overview</h3>
      <p>Track profile details, usage, and recent updates in one place.</p>
    </ng-template>
  </brightrail-tab>
  <brightrail-tab label="Details">
    <ng-template brightrailTabContent><p>Owners, tags, and membership.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Activity">
    <ng-template brightrailTabContent><p>Imports, exports, and audit events.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>

<brightrail-tabs appearance="pill" size="md" [scrollable]="true">
  <brightrail-tab label="Inbox" [badge]="3" [active]="true">
    <ng-template brightrailTabContent><p>Unread threads.</p></ng-template>
  </brightrail-tab>
  <brightrail-tab label="Alerts" [closable]="true" (close)="removeTab('Alerts')">
    <ng-template brightrailTabContent><p>Closable alert tab.</p></ng-template>
  </brightrail-tab>
</brightrail-tabs>`;
