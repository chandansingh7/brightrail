/** Copy-ready markup for alert catalog futuristic tiles (consumers import from `brightrail`). */
export const ALERT_VARIATION_SNIPPETS = {
  futuristicGlass: `<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-alert appearance="soft" status="info" size="md">
    <div brightrailAlertTitle>Glass channel</div>
    <div brightrailAlertMessage>Telemetry stream is stable across all nodes.</div>
  </brightrail-alert>
</div>`,

  futuristicNeon: `<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-alert appearance="filled" status="success" size="sm" [inverse]="true" [dismissible]="true">
    <div brightrailAlertTitle>Sync complete</div>
    <div brightrailAlertMessage>Replica cluster is online.</div>
  </brightrail-alert>
</div>`,

  futuristicCyber: `<div class="ff-future-cyber-frame">
  <span class="ff-future-cyber-corner ff-future-cyber-corner--tl" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--tr" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--bl" aria-hidden="true"></span>
  <span class="ff-future-cyber-corner ff-future-cyber-corner--br" aria-hidden="true"></span>
  <brightrail-alert appearance="outlined" status="warning" size="md">
    <div brightrailAlertTitle>Sector breach</div>
    <div brightrailAlertMessage>Authorize override to continue uplink.</div>
  </brightrail-alert>
</div>`,

  futuristicHolo: `<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-alert appearance="tonal" status="info" size="md" [dismissible]="true">
    <div brightrailAlertTitle>Holo briefing ready</div>
    <div brightrailAlertMessage>Mission timeline updated for crew review.</div>
  </brightrail-alert>
</div>`,
} as const;

export const ALERT_DOC_SECTION_COUNT = 9;
