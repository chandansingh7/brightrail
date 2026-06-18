var r=["Email is required","Password must be at least 8 characters"],i=[{field:"email",message:"Enter a valid email address"},{field:"password",message:"Include a number and symbol"}],e={coreStrings:`<brightrail-validation-summary
  [errors]="['Email is required', 'Password must be at least 8 characters']"
/>`,withTitle:`<brightrail-validation-summary
  title="Please fix the following errors:"
  [errors]="errors"
/>`,fieldErrors:`<brightrail-validation-summary
  [errors]="[
    { field: 'email', message: 'Enter a valid email address' },
    { field: 'password', message: 'Include a number and symbol' }
  ]"
/>`,singleError:`<brightrail-validation-summary
  [errors]="['You must accept the terms']"
/>`,manyErrors:`<brightrail-validation-summary
  title="Unable to submit the form"
  [errors]="manyErrors"
/>`,customTitle:`<brightrail-validation-summary
  title="Review your profile details"
  [errors]="profileErrors"
  ariaLabel="Profile validation errors"
/>`,hiddenWhenEmpty:`<!-- Renders nothing when errors array is empty -->
<brightrail-validation-summary [errors]="[]" />`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-validation-summary
    title="Calibration required"
    [errors]="fieldErrors"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-validation-summary
    title="Signal integrity"
    [errors]="['Uplink unstable', 'Checksum mismatch']"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-validation-summary
    title="Security review"
    [errors]="[
      { field: 'token', message: 'Rotate API token' },
      { field: 'scope', message: 'Restrict permissions' }
    ]"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-validation-summary
    title="Mission checklist"
    [errors]="manyErrors"
  />
</div>`};var a=`<brightrail-validation-summary
  title="Please fix the following errors:"
  [errors]="formErrors"
/>

<!-- formErrors: BrightrailValidationSummaryError[] -->
{ field: 'email', message: 'Enter a valid email address' }`;export{r as a,i as b,e as c,a as d};
