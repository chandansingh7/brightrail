import{Ca as c,Jb as g,Ma as f,Nb as d,Oa as n,Pa as l,Qa as b,Sa as _,Ta as h,Ya as a,Za as o,eb as s,rb as m,sb as u,ta as t,tb as p}from"./chunk-GSG23AZM.js";function E(e,i){if(e&1&&(a(0,"p",1),m(1),o()),e&2){let r=s(2);t(),u(r.title())}}function C(e,i){if(e&1&&(a(0,"span",4),m(1),o()),e&2){let r=s().$implicit;t(),p("",r.field,":")}}function x(e,i){if(e&1&&(a(0,"li",3),n(1,C,2,1,"span",4),a(2,"span",5),m(3),o()()),e&2){let r=i.$implicit;t(),l(r.field?1:-1),t(2),u(r.message)}}function S(e,i){if(e&1&&(a(0,"div",0),n(1,E,2,1,"p",1),a(2,"ul",2),_(3,x,4,2,"li",3,b),o()()),e&2){let r=s();f("aria-label",r.ariaLabel()),t(),l(r.title().trim().length>0?1:-1),t(2),h(r.normalizedErrors())}}var v=class e{errors=d([]);title=d("Please fix the following errors:");ariaLabel=d("Validation errors");normalizedErrors=g(()=>this.errors().map(i=>typeof i=="string"?{message:i.trim(),field:void 0}:{message:i.message?.trim()??"",field:i.field?.trim()||void 0}).filter(i=>i.message.length>0));hasErrors=g(()=>this.normalizedErrors().length>0);static \u0275fac=function(r){return new(r||e)};static \u0275cmp=c({type:e,selectors:[["brightrail-validation-summary"]],inputs:{errors:[1,"errors"],title:[1,"title"],ariaLabel:[1,"ariaLabel"]},decls:1,vars:1,consts:[["role","alert","aria-live","assertive",1,"br-val-sum"],[1,"br-val-sum__title"],[1,"br-val-sum__list"],[1,"br-val-sum__item"],[1,"br-val-sum__field"],[1,"br-val-sum__message"]],template:function(r,y){r&1&&n(0,S,5,2,"div",0),r&2&&l(y.hasErrors()?0:-1)},styles:["[_nghost-%COMP%]{max-width:100%;box-sizing:border-box;min-width:0;display:block}.br-val-sum[_ngcontent-%COMP%]{padding:.75rem .9rem;border:1px solid color-mix(in srgb,#d93025 35%,#e8eaed);border-radius:var(--br-radius-sm, .375rem);background:color-mix(in srgb,#d93025 8%,#fff)}.br-val-sum__title[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:.875rem;font-weight:650;color:var(--br-color-danger, #d93025)}.br-val-sum__list[_ngcontent-%COMP%]{margin:0;padding-left:1.15rem}.br-val-sum__item[_ngcontent-%COMP%]{font-size:.8125rem;line-height:1.4;color:var(--br-color-text, #3c4043)}.br-val-sum__item[_ngcontent-%COMP%] + .br-val-sum__item[_ngcontent-%COMP%]{margin-top:.2rem}.br-val-sum__field[_ngcontent-%COMP%]{font-weight:600;margin-right:.25rem}.br-val-sum__message[_ngcontent-%COMP%]{color:var(--br-color-text-strong, #202124)}"],changeDetection:0})};var D=["Email is required","Password must be at least 8 characters"],T=[{field:"email",message:"Enter a valid email address"},{field:"password",message:"Include a number and symbol"}],N={coreStrings:`<brightrail-validation-summary
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
</div>`};var w=`<brightrail-validation-summary
  title="Please fix the following errors:"
  [errors]="formErrors"
/>

<!-- formErrors: BrightrailValidationSummaryError[] -->
{ field: 'email', message: 'Enter a valid email address' }`;export{v as a,D as b,T as c,N as d,w as e};
