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
      <brightrail-button variant="primary" size="sm">New project</brightrail-button>
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
      <brightrail-button variant="outline" size="sm">Export</brightrail-button>
    </div>
  </brightrail-page-header>
  <p>Report table goes here</p>
</brightrail-app-shell>`,

  topBarSlots: `<brightrail-top-bar>
  <span brightrailTopBarStart>☰ Menu</span>
  <span brightrailTopBarCenter>Search workspace</span>
  <span brightrailTopBarEnd>
    <brightrail-button variant="ghost" size="sm">Profile</brightrail-button>
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

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-app-shell sidebarWidth="10rem" [showTopBar]="false">
    <brightrail-sidebar>
      <li><a href="#" aria-current="page">Ops</a></li>
      <li><a href="#">Systems</a></li>
    </brightrail-sidebar>
    <p>Glass command surface</p>
  </brightrail-app-shell>
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-app-shell sidebarWidth="10rem" [showTopBar]="false">
    <brightrail-sidebar>
      <li><a href="#" class="br-sidebar__active">Live</a></li>
      <li><a href="#">Alerts</a></li>
    </brightrail-sidebar>
    <p>Neon operations deck</p>
  </brightrail-app-shell>
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-app-shell [showSidebar]="false" [showTopBar]="false">
    <brightrail-page-header [bordered]="false">
      <h1 brightrailPageTitle>Grid</h1>
    </brightrail-page-header>
    <p>Cyber control panel</p>
  </brightrail-app-shell>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-app-shell sidebarPosition="right" sidebarWidth="9rem" [showTopBar]="false">
    <brightrail-sidebar>
      <li><a href="#">Alpha</a></li>
      <li><a href="#">Beta</a></li>
    </brightrail-sidebar>
    <p>Holo workspace</p>
  </brightrail-app-shell>
</div>`,
} as const;

export const APP_SHELL_DOC_SECTION_COUNT = 7;

export const APP_SHELL_HTML_EXAMPLES = `<brightrail-app-shell>
  <brightrail-top-bar>
    <span brightrailTopBarStart>Brand</span>
    <span brightrailTopBarEnd>
      <brightrail-button variant="ghost" size="sm">Sign out</brightrail-button>
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
