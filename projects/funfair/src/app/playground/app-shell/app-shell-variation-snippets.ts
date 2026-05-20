/** Copy-ready markup for app-shell catalog tiles (import from `brightrail`). */
export const APP_SHELL_VARIATION_SNIPPETS = {
  coreFull: `<brightrail-app-shell>
  <brightrail-top-bar>
    <span brightrailTopBarStart>Acme</span>
    <span brightrailTopBarCenter>Dashboard</span>
    <span brightrailTopBarEnd>Help</span>
  </brightrail-top-bar>
  <brightrail-sidebar>
    <li><a href="#" aria-current="page">Overview</a></li>
    <li><a href="#">Projects</a></li>
  </brightrail-sidebar>
  <brightrail-page-header>
    <h1 brightrailPageTitle>Overview</h1>
    <p brightrailPageSubtitle>Workspace summary</p>
    <div brightrailPageHeaderActions>
      <button type="button">New project</button>
    </div>
  </brightrail-page-header>
  <p>Main content area</p>
</brightrail-app-shell>`,

  sidebarRight: `<brightrail-app-shell sidebarPosition="right">
  <brightrail-sidebar>
    <li><a href="#">Settings</a></li>
  </brightrail-sidebar>
  <p>Content with right sidebar</p>
</brightrail-app-shell>`,

  noSidebar: `<brightrail-app-shell [showSidebar]="false">
  <brightrail-top-bar>
    <span brightrailTopBarStart>Acme</span>
  </brightrail-top-bar>
  <p>Full-width content without sidebar</p>
</brightrail-app-shell>`,

  noTopBar: `<brightrail-app-shell [showTopBar]="false">
  <brightrail-sidebar>
    <li><a href="#">Home</a></li>
  </brightrail-sidebar>
  <p>Content without top bar</p>
</brightrail-app-shell>`,

  pageHeaderOnly: `<brightrail-app-shell [showSidebar]="false" [showTopBar]="false">
  <brightrail-page-header>
    <h1 brightrailPageTitle>Reports</h1>
    <p brightrailPageSubtitle>Q1 summary</p>
    <div brightrailPageHeaderActions>
      <button type="button">Export</button>
    </div>
  </brightrail-page-header>
  <p>Report table goes here</p>
</brightrail-app-shell>`,

  topBarSlots: `<brightrail-top-bar>
  <span brightrailTopBarStart>☰ Menu</span>
  <span brightrailTopBarCenter>Search workspace</span>
  <span brightrailTopBarEnd>
    <button type="button">Profile</button>
  </span>
</brightrail-top-bar>`,

  advancedCompact: `<brightrail-app-shell sidebarWidth="12rem" sidebarAriaLabel="Primary navigation">
  <brightrail-sidebar>
    <li><a href="#" class="br-sidebar__active">Inbox</a></li>
    <li><a href="#">Archive</a></li>
  </brightrail-sidebar>
  <brightrail-page-header [bordered]="false">
    <h1 brightrailPageTitle>Inbox</h1>
  </brightrail-page-header>
  <p>Compact shell for embedded admin panels</p>
</brightrail-app-shell>`,
} as const;

export const APP_SHELL_DOC_SECTION_COUNT = 6;

export const APP_SHELL_HTML_EXAMPLES = `<brightrail-app-shell>
  <brightrail-top-bar>
    <span brightrailTopBarStart>Brand</span>
    <span brightrailTopBarEnd>
      <button type="button">Sign out</button>
    </span>
  </brightrail-top-bar>
  <brightrail-sidebar>
    <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
  </brightrail-sidebar>
  <brightrail-page-header>
    <h1 brightrailPageTitle>Dashboard</h1>
    <p brightrailPageSubtitle>Welcome back</p>
  </brightrail-page-header>
  <router-outlet />
</brightrail-app-shell>`;
