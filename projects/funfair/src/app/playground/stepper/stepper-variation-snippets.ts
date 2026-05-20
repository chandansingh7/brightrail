/** Copy-ready markup for stepper catalog tiles (consumers import from `brightrail`). */
export const STEPPER_VARIATION_SNIPPETS = {
  coreLinear: `<brightrail-stepper [currentStep]="0">
  <brightrail-step label="Account" />
  <brightrail-step label="Profile" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`,
  coreProgress: `<brightrail-stepper stepStyle="progress" [currentStep]="1">
  <brightrail-step label="Upload" />
  <brightrail-step label="Process" />
  <brightrail-step label="Complete" />
</brightrail-stepper>`,
  coreNumbered: `<brightrail-stepper stepStyle="numbered" [currentStep]="0">
  <brightrail-step label="Step one" />
  <brightrail-step label="Step two" />
  <brightrail-step label="Step three" />
</brightrail-stepper>`,
  orientHorizontal: `<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Review" />
</brightrail-stepper>`,
  orientVertical: `<brightrail-stepper orientation="vertical" [currentStep]="1">
  <brightrail-step label="Details" description="Enter your information" />
  <brightrail-step label="Shipping" description="Choose shipping method" />
  <brightrail-step label="Payment" description="Add payment details" />
  <brightrail-step label="Review" description="Confirm and place order" />
</brightrail-stepper>`,
  sizeDefault: `<brightrail-stepper [currentStep]="0">
  <brightrail-step label=" " />
  <brightrail-step label=" " />
  <brightrail-step label=" " />
</brightrail-stepper>`,
  sizeCompact: `<!-- Compact: --br-stepper-node-size: 1.65rem on host -->
<brightrail-stepper [currentStep]="1">
  <brightrail-step label=" " />
  <brightrail-step label=" " />
  <brightrail-step label=" " />
</brightrail-stepper>`,
  sizeSmall: `<!-- Small: --br-stepper-node-size: 1.35rem on host -->
<brightrail-stepper [currentStep]="2">
  <brightrail-step label=" " />
  <brightrail-step label=" " />
  <brightrail-step label=" " />
</brightrail-stepper>`,
  stateCompleted: `<brightrail-stepper [currentStep]="2">
  <brightrail-step label=" " status="completed" />
  <brightrail-step label=" " status="completed" />
  <brightrail-step label=" " status="inactive" />
</brightrail-stepper>`,
  stateCurrent: `<brightrail-stepper [currentStep]="1">
  <brightrail-step label=" " status="completed" />
  <brightrail-step label=" " status="current" />
  <brightrail-step label=" " status="pending" />
</brightrail-stepper>`,
  stateErrorDisabled: `<brightrail-stepper [currentStep]="0">
  <brightrail-step label=" " status="inactive" />
  <brightrail-step label=" " status="error" />
  <brightrail-step label=" " status="disabled" />
</brightrail-stepper>`,
  labelsBelow: `<brightrail-stepper labelPlacement="below" [currentStep]="0">
  <brightrail-step label="Details" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Review" />
</brightrail-stepper>`,
  labelsTop: `<brightrail-stepper labelPlacement="top" [currentStep]="1">
  <brightrail-step label="Details" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Review" />
</brightrail-stepper>`,
  labelsAlternatingVertical: `<brightrail-stepper orientation="vertical" [currentStep]="0">
  <brightrail-step label="Details" description="Enter your information" />
  <brightrail-step label="Shipping" description="Choose shipping method" />
  <brightrail-step label="Review" description="Confirm and place order" />
</brightrail-stepper>`,
  workflowOnboarding: `<brightrail-stepper stepStyle="progress" [currentStep]="1">
  <brightrail-step label="Welcome" />
  <brightrail-step label="Profile" />
  <brightrail-step label="Preferences" />
  <brightrail-step label="Finish" />
</brightrail-stepper>`,
  workflowCheckout: `<brightrail-stepper stepStyle="progress" [currentStep]="2">
  <brightrail-step label="Cart" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`,
  workflowApproval: `<brightrail-stepper stepStyle="progress" [currentStep]="3">
  <brightrail-step label="Submit" />
  <brightrail-step label="Review" />
  <brightrail-step label="Approve" />
  <brightrail-step label="Complete" />
</brightrail-stepper>`,
  formMultiStep: `<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Account" />
  <brightrail-step label="Address" />
  <brightrail-step label="Details" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`,
  formWizardValidation: `<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Basics" status="completed" />
  <brightrail-step label="Settings" status="current" />
  <brightrail-step label="Review" status="pending" />
</brightrail-stepper>`,
  futuristicGlowing: `<brightrail-stepper [currentStep]="1" connectorGap="2px">
  <brightrail-step label="Discover" />
  <brightrail-step label="Configure" />
  <brightrail-step label="Preview" />
  <brightrail-step label="Launch" />
</brightrail-stepper>`,
  futuristicPill: `<brightrail-stepper [currentStep]="1" stepStyle="progress" connectorGap="0.2rem">
  <brightrail-step label="Plan" />
  <brightrail-step label="Build" />
  <brightrail-step label="Test" />
  <brightrail-step label="Deploy" />
</brightrail-stepper>`,
  futuristicMinimalLine: `<brightrail-stepper [currentStep]="1" connectorGap="0">
  <brightrail-step label="Start" />
  <brightrail-step label="Configure" />
  <brightrail-step label="Review" />
  <brightrail-step label="Done" />
</brightrail-stepper>`,
} as const;

export const STEPPER_DOC_SECTION_COUNT = 9;

export const STEPPER_HTML_EXAMPLES = `<brightrail-stepper [currentStep]="1">
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Review" />
</brightrail-stepper>

<brightrail-stepper stepStyle="progress" [currentStep]="2" ariaLabel="Checkout">
  <brightrail-step label="Cart" />
  <brightrail-step label="Shipping" />
  <brightrail-step label="Payment" />
  <brightrail-step label="Confirm" />
</brightrail-stepper>`;
