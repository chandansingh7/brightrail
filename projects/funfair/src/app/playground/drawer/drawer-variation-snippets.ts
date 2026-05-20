/** Copy-ready markup for drawer catalog tiles (consumers import from `brightrail`). */
export const DRAWER_VARIATION_SNIPPETS = {
  coreNavigation: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="left"
  size="narrow"
  mode="dismissible"
  [showBackdrop]="false"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Projects</div>
    <div brightrailDrawerSubtitle>Quick links and team navigation.</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- nav links --></brightrail-drawer-body>
</brightrail-drawer>`,
  coreSettings: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="right"
  size="wide"
  mode="modal"
  backdropStyle="blur"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Workspace settings</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- settings form --></brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="primary" size="sm">Apply</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`,
  coreDetailInspector: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="right"
  size="narrow"
  mode="dismissible"
  [showBackdrop]="false"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Detail inspector</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- metadata --></brightrail-drawer-body>
</brightrail-drawer>`,
  coreBottomSheet: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="bottom"
  size="full"
  mode="modal"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Quick actions</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- action list --></brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Confirm</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`,
  placementLeft: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="left" size="narrow" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Left panel</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,
  placementRight: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="medium" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Right panel</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,
  placementBottom: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="bottom" size="medium" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Bottom sheet</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,
  placementTop: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="top" size="medium" mode="modal">
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Top panel</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- content --></brightrail-drawer-body>
</brightrail-drawer>`,
  placementLeftClosed: `<brightrail-drawer [isOpen]="false" [contain]="true" placement="left" size="narrow" mode="modal">
  <!-- closed preview within a contained shell -->
</brightrail-drawer>`,
  sizeNarrow: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="narrow" mode="modal">
  <!-- 320px -->
</brightrail-drawer>`,
  sizeMedium: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="medium" mode="modal">
  <!-- 480px -->
</brightrail-drawer>`,
  sizeWide: `<brightrail-drawer [isOpen]="true" [contain]="true" placement="right" size="wide" mode="modal">
  <!-- 720px -->
</brightrail-drawer>`,
  modeModalDim: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="dim"
>
  <!-- page dimmed, drawer blocks interaction -->
</brightrail-drawer>`,
  modeModalBlur: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="blur"
>
  <!-- blurred backdrop -->
</brightrail-drawer>`,
  modeModalGlass: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="glass"
>
  <!-- glass overlay -->
</brightrail-drawer>`,
  modeDismissible: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="dismissible"
  [showBackdrop]="false"
>
  <!-- page stays interactive -->
</brightrail-drawer>`,
  modePersistent: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  mode="persistent"
  [showBackdrop]="false"
>
  <!-- always visible, no overlay -->
</brightrail-drawer>`,
  surfaceDefault: `<brightrail-drawer [isOpen]="true" [contain]="true" surface="default">
  <!-- standard panel surface -->
</brightrail-drawer>`,
  surfaceGlass: `<brightrail-drawer [isOpen]="true" [contain]="true" surface="glass" backdropStyle="glass">
  <!-- glassmorphism panel -->
</brightrail-drawer>`,
  surfaceGradient: `<brightrail-drawer [isOpen]="true" [contain]="true" surface="gradient" backdropStyle="blur">
  <!-- gradient accent edge -->
</brightrail-drawer>`,
  surfaceAi: `<brightrail-drawer [isOpen]="true" [contain]="true" surface="ai" backdropStyle="glass">
  <!-- AI command shell -->
</brightrail-drawer>`,
  exampleMarkup: `<brightrail-drawer
  [isOpen]="true"
  [contain]="true"
  placement="right"
  size="medium"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="glass"
  surface="gradient"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Edit project details</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body>
    <p>Use this baseline markup and tune placement, size, mode, overlay, and surface for your app.</p>
  </brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Save changes</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`,

  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="medium"
    mode="modal"
    surface="glass"
    backdropStyle="glass"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>Glass panel</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- glass drawer content --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,
  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="wide"
    mode="modal"
    surface="ai"
    backdropStyle="glass"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>AI command center</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- neon AI shell --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,
  futuristicCyber: `<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="medium"
    mode="modal"
    surface="ai"
    backdropStyle="glass"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>Cyber inspector</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- cyber drawer content --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,
  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-drawer
    [isOpen]="true"
    [contain]="true"
    placement="right"
    size="medium"
    mode="modal"
    surface="gradient"
    backdropStyle="blur"
  >
    <brightrail-drawer-header [showCloseButton]="true">
      <div brightrailDrawerTitle>Holo settings</div>
    </brightrail-drawer-header>
    <brightrail-drawer-body><!-- holo drawer content --></brightrail-drawer-body>
  </brightrail-drawer>
</div>`,
} as const;

export const DRAWER_DOC_SECTION_COUNT = 7;

export const DRAWER_HTML_EXAMPLES = `<brightrail-drawer
  [isOpen]="drawerOpen()"
  [contain]="true"
  placement="right"
  size="medium"
  mode="modal"
  [showBackdrop]="true"
  backdropStyle="dim"
  (backdropDismiss)="drawerOpen.set(false)"
  (closed)="drawerOpen.set(false)"
>
  <brightrail-drawer-header [showCloseButton]="true">
    <div brightrailDrawerTitle>Edit project details</div>
  </brightrail-drawer-header>
  <brightrail-drawer-body><!-- drawer content --></brightrail-drawer-body>
  <brightrail-drawer-footer>
    <brightrail-button variant="outline" size="sm">Cancel</brightrail-button>
    <brightrail-button variant="primary" size="sm">Save changes</brightrail-button>
  </brightrail-drawer-footer>
</brightrail-drawer>`;
