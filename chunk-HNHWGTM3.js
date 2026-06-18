import{a as g}from"./chunk-FJ7PM77H.js";import{a as u}from"./chunk-OYLXH3VV.js";import"./chunk-63ZAJDYR.js";import{e as f}from"./chunk-FBGATJ5M.js";import"./chunk-TX2IANRT.js";import"./chunk-573ITFZ2.js";import"./chunk-3SQNCDXW.js";import{Ca as s,Va as a,Wa as e,Xa as i,Ya as n,sb as l,ta as t,tb as c}from"./chunk-M22WAZLT.js";var b={coreCompact:`<brightrail-file-upload
  variant="compact"
  placeholder="Compact file picker"
  [showCloudIcon]="false"
  [showFileList]="false"
  [maxFileSizeMb]="10"
/>`,coreOutlined:`<brightrail-file-upload
  appearance="outlined"
  [showFileList]="false"
  [maxFileSizeMb]="10"
/>`,coreButton:`<brightrail-file-upload
  variant="button"
  buttonText="Upload"
  [showCloudIcon]="false"
  [showFileList]="false"
  [maxFileSizeMb]="10"
/>`,appearanceFilled:'<brightrail-file-upload appearance="filled" [showFileList]="false" [maxFileSizeMb]="10" />',appearanceOutlined:'<brightrail-file-upload appearance="outlined" [showFileList]="false" [maxFileSizeMb]="10" />',appearanceSoft:'<brightrail-file-upload appearance="soft" [showFileList]="false" [maxFileSizeMb]="10" />',sizeSm:'<brightrail-file-upload size="sm" [showFileList]="false" [maxFileSizeMb]="10" />',sizeMd:'<brightrail-file-upload size="md" [showFileList]="false" [maxFileSizeMb]="10" />',sizeLg:'<brightrail-file-upload size="lg" [showFileList]="false" [maxFileSizeMb]="10" />',sizeXl:'<brightrail-file-upload size="xl" [showFileList]="false" [maxFileSizeMb]="10" />',stateDefault:'<brightrail-file-upload state="default" [showFileList]="false" [maxFileSizeMb]="10" />',stateHover:'<brightrail-file-upload state="hover" [showFileList]="false" [maxFileSizeMb]="10" />',stateFocused:'<brightrail-file-upload state="focused" [showFileList]="false" [maxFileSizeMb]="10" />',stateDisabled:'<brightrail-file-upload state="disabled" [showFileList]="false" [maxFileSizeMb]="10" />',singleFile:`<brightrail-file-upload
  label="Upload one file"
  [multiple]="false"
  [maxFiles]="1"
  [maxFileSizeMb]="5"
  helperText="Uploads a single file with progress and status."
  [fileItems]="singleFileItems"
/>`,multiFile:`<brightrail-file-upload
  label="Requirements"
  [multiple]="true"
  [maxFiles]="4"
  [maxFileSizeMb]="10"
  helperText="Upload multiple files with individual progress."
  [fileItems]="multiFileItems"
/>`,dragDrop:`<brightrail-file-upload
  label="Drag file here"
  placeholder="Drag file here or click to browse."
  buttonText="Browse Files"
  accept=".pdf,.docx,.png,.jpg,.zip"
  [maxFileSizeMb]="5"
  helperText="Supports: PDF, DOCX, PNG, JPG, ZIP"
/>`,imagePreview:`<div class="fu-image-preview">
  <div class="fu-image-preview__frame"></div>
  <div class="fu-image-preview__meta">
    <strong>Avatar upload</strong>
    <span>JPG, PNG up to 5MB</span>
  </div>
</div>
<brightrail-file-upload
  label="Avatar upload"
  variant="button"
  buttonText="Upload image"
  [showCloudIcon]="false"
  [showFileList]="false"
  accept=".jpg,.png"
  [maxFileSizeMb]="5"
/>`,enterpriseDocument:`<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="document-submission"
  enterpriseSecondaryText="NDA_Agreement.pdf"
  helperText="Document submission"
  [showFileList]="false"
/>`,enterpriseTypeRestrictions:`<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="type-restrictions"
  enterpriseSecondaryText="Max file size: 25MB"
  helperText="File type restrictions"
  accept=".pdf,.docx,.xlsx,.pptx"
  [showFileList]="false"
/>`,enterpriseWithDescription:`<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="with-description"
  enterpriseSecondaryText="Add description (optional)..."
  helperText="Upload with description"
  [showFileList]="false"
  [fileItems]="descriptionFileItems"
/>`,enterpriseReplace:`<brightrail-file-upload
  surface="enterprise"
  enterprisePattern="replace-file"
  enterpriseSecondaryText="Current: old-report.pdf"
  helperText="Replace file"
  buttonText="Replace file"
  [showFileList]="false"
/>`,futuristicGlass:`<div class="fu-future fu-future--glass">
  <span>Choose file</span>
  <span>or drop here</span>
  <span>AI-powered upload \xB7 Secure \xB7 Fast</span>
</div>`};var h=`<brightrail-file-upload
  appearance="outlined"
  status="default"
  size="md"
  [multiple]="true"
  accept=".pdf,.png,.jpg"
  [maxFileSizeMb]="10"
  [showFileList]="true"
  [fileItems]="fileItems"
  (fileItemsChange)="fileItems = $event"
/>`;var d=class p{s=b;singleFileItems=[{id:"p",name:"Project-brief.pdf",sizeLabel:"2.4 MB",progress:100,status:"success"},{id:"s",name:"Screenshot.png",sizeLabel:"1.2 MB",progress:100,status:"error",actionLabel:"Retry"}];multiFileItems=[{id:"r",name:"requirements.docx",sizeLabel:"1.1 MB",progress:100,status:"success"},{id:"d",name:"design-system.sketch",sizeLabel:"4.3 MB",progress:42,status:"uploading"},{id:"e",name:"archive.zip",sizeLabel:"10.4 MB",progress:100,status:"error",actionLabel:"Retry"}];descriptionFileItems=[{id:"spec",name:"Technical specification.pdf",sizeLabel:"3.7 MB",progress:100,status:"success"}];static \u0275fac=function(o){return new(o||p)};static \u0275cmp=s({type:p,selectors:[["app-file-upload-variation-catalog"]],decls:101,vars:70,consts:[[1,"fuvc-block"],[1,"fuvc-block__h"],[1,"fuvc-grid"],["label","Compact file picker",3,"snippet"],["variant","compact","placeholder","Compact file picker",3,"showCloudIcon","showFileList","maxFileSizeMb"],["label","Outlined file picker",3,"snippet"],["appearance","outlined",3,"showFileList","maxFileSizeMb"],["label","Icon button upload",3,"snippet"],["variant","button","buttonText","Upload",3,"showCloudIcon","showFileList","maxFileSizeMb"],["label","Filled",3,"snippet"],["appearance","filled",3,"showFileList","maxFileSizeMb"],["label","Outlined",3,"snippet"],["label","Soft",3,"snippet"],["appearance","soft",3,"showFileList","maxFileSizeMb"],["label","Compact",3,"snippet"],["size","sm",3,"showFileList","maxFileSizeMb"],["label","Medium (default)",3,"snippet"],["size","md",3,"showFileList","maxFileSizeMb"],["label","Large",3,"snippet"],["size","lg",3,"showFileList","maxFileSizeMb"],["label","Extra large",3,"snippet"],["size","xl",3,"showFileList","maxFileSizeMb"],["label","Default",3,"snippet"],["state","default",3,"showFileList","maxFileSizeMb"],["label","Hover",3,"snippet"],["state","hover",3,"showFileList","maxFileSizeMb"],["label","Focus",3,"snippet"],["state","focused",3,"showFileList","maxFileSizeMb"],["label","Disabled",3,"snippet"],["state","disabled",3,"showFileList","maxFileSizeMb"],["label","Progress & status list",3,"snippet"],["label","Upload one file","helperText","Uploads a single file with progress and status.",3,"multiple","maxFiles","maxFileSizeMb","fileItems"],["label","Individual progress rows",3,"snippet"],["label","Requirements","helperText","Upload multiple files with individual progress.",3,"multiple","maxFiles","maxFileSizeMb","fileItems"],["label","Browse + drop zone",3,"snippet"],["label","Drag file here","placeholder","Drag file here or click to browse.","buttonText","Browse Files","accept",".pdf,.docx,.png,.jpg,.zip","helperText","Supports: PDF, DOCX, PNG, JPG, ZIP",3,"maxFileSizeMb"],["label","Avatar upload mock",3,"snippet"],[1,"fuvc-image-preview"],[1,"fuvc-image-preview__frame"],[1,"fuvc-image-preview__meta"],[1,"fuvc-image-preview__actions"],["type","button"],["type","button",1,"is-primary"],["label","Avatar upload","variant","button","buttonText","Upload image","accept",".jpg,.png",3,"showCloudIcon","showFileList","maxFileSizeMb"],[1,"fuvc-enterprise-grid"],["label","Document submission",3,"snippet"],["surface","enterprise","enterprisePattern","document-submission","enterpriseSecondaryText","NDA_Agreement.pdf","helperText","Document submission",3,"showFileList"],["label","Type restrictions",3,"snippet"],["surface","enterprise","enterprisePattern","type-restrictions","enterpriseSecondaryText","Max file size: 25MB","helperText","File type restrictions","accept",".pdf,.docx,.xlsx,.pptx",3,"showFileList"],["label","With description",3,"snippet"],["surface","enterprise","enterprisePattern","with-description","enterpriseSecondaryText","Add description (optional)...","helperText","Upload with description",3,"showFileList","fileItems"],["label","Replace file",3,"snippet"],["surface","enterprise","enterprisePattern","replace-file","enterpriseSecondaryText","Current: old-report.pdf","helperText","Replace file","buttonText","Replace file",3,"showFileList"],["label","AI-powered drop zone",3,"snippet"],[1,"fuvc-future","fuvc-future--glass"]],template:function(o,r){o&1&&(e(0,"section",0)(1,"h2",1),l(2,"1. Core upload types"),i(),e(3,"div",2)(4,"app-catalog-variation-tile",3),n(5,"brightrail-file-upload",4),i(),e(6,"app-catalog-variation-tile",5),n(7,"brightrail-file-upload",6),i(),e(8,"app-catalog-variation-tile",7),n(9,"brightrail-file-upload",8),i()()(),e(10,"section",0)(11,"h2",1),l(12,"2. Appearances"),i(),e(13,"div",2)(14,"app-catalog-variation-tile",9),n(15,"brightrail-file-upload",10),i(),e(16,"app-catalog-variation-tile",11),n(17,"brightrail-file-upload",6),i(),e(18,"app-catalog-variation-tile",12),n(19,"brightrail-file-upload",13),i()()(),e(20,"section",0)(21,"h2",1),l(22,"3. Sizes"),i(),e(23,"div",2)(24,"app-catalog-variation-tile",14),n(25,"brightrail-file-upload",15),i(),e(26,"app-catalog-variation-tile",16),n(27,"brightrail-file-upload",17),i(),e(28,"app-catalog-variation-tile",18),n(29,"brightrail-file-upload",19),i(),e(30,"app-catalog-variation-tile",20),n(31,"brightrail-file-upload",21),i()()(),e(32,"section",0)(33,"h2",1),l(34,"4. States"),i(),e(35,"div",2)(36,"app-catalog-variation-tile",22),n(37,"brightrail-file-upload",23),i(),e(38,"app-catalog-variation-tile",24),n(39,"brightrail-file-upload",25),i(),e(40,"app-catalog-variation-tile",26),n(41,"brightrail-file-upload",27),i(),e(42,"app-catalog-variation-tile",28),n(43,"brightrail-file-upload",29),i()()(),e(44,"section",0)(45,"h2",1),l(46,"5. Single file upload"),i(),e(47,"app-catalog-variation-tile",30),n(48,"brightrail-file-upload",31),i()(),e(49,"section",0)(50,"h2",1),l(51,"6. Multi-file upload"),i(),e(52,"app-catalog-variation-tile",32),n(53,"brightrail-file-upload",33),i()(),e(54,"section",0)(55,"h2",1),l(56,"7. Drag and drop"),i(),e(57,"app-catalog-variation-tile",34),n(58,"brightrail-file-upload",35),i()(),e(59,"section",0)(60,"h2",1),l(61,"8. Image upload / preview"),i(),e(62,"app-catalog-variation-tile",36)(63,"div",37),n(64,"div",38),e(65,"div",39)(66,"strong"),l(67,"Avatar upload"),i(),e(68,"span"),l(69,"JPG, PNG up to 5MB"),i(),e(70,"div",40)(71,"button",41),l(72,"Crop"),i(),e(73,"button",41),l(74,"Reset"),i(),e(75,"button",42),l(76,"Apply"),i()()()(),n(77,"brightrail-file-upload",43),i()(),e(78,"section",0)(79,"h2",1),l(80,"9. Enterprise patterns"),i(),e(81,"div",44)(82,"app-catalog-variation-tile",45),n(83,"brightrail-file-upload",46),i(),e(84,"app-catalog-variation-tile",47),n(85,"brightrail-file-upload",48),i(),e(86,"app-catalog-variation-tile",49),n(87,"brightrail-file-upload",50),i(),e(88,"app-catalog-variation-tile",51),n(89,"brightrail-file-upload",52),i()()(),e(90,"section",0)(91,"h2",1),l(92,"10. Futuristic upload designs"),i(),e(93,"app-catalog-variation-tile",53)(94,"div",54)(95,"span"),l(96,"Choose file"),i(),e(97,"span"),l(98,"or drop here"),i(),e(99,"span"),l(100,"AI-powered upload \xB7 Secure \xB7 Fast"),i()()()()),o&2&&(t(4),a("snippet",r.s.coreCompact),t(),a("showCloudIcon",!1)("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.coreOutlined),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.coreButton),t(),a("showCloudIcon",!1)("showFileList",!1)("maxFileSizeMb",10),t(5),a("snippet",r.s.appearanceFilled),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.appearanceOutlined),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.appearanceSoft),t(),a("showFileList",!1)("maxFileSizeMb",10),t(5),a("snippet",r.s.sizeSm),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.sizeMd),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.sizeLg),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.sizeXl),t(),a("showFileList",!1)("maxFileSizeMb",10),t(5),a("snippet",r.s.stateDefault),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.stateHover),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.stateFocused),t(),a("showFileList",!1)("maxFileSizeMb",10),t(),a("snippet",r.s.stateDisabled),t(),a("showFileList",!1)("maxFileSizeMb",10),t(4),a("snippet",r.s.singleFile),t(),a("multiple",!1)("maxFiles",1)("maxFileSizeMb",5)("fileItems",r.singleFileItems),t(4),a("snippet",r.s.multiFile),t(),a("multiple",!0)("maxFiles",4)("maxFileSizeMb",10)("fileItems",r.multiFileItems),t(4),a("snippet",r.s.dragDrop),t(),a("maxFileSizeMb",5),t(4),a("snippet",r.s.imagePreview),t(15),a("showCloudIcon",!1)("showFileList",!1)("maxFileSizeMb",5),t(5),a("snippet",r.s.enterpriseDocument),t(),a("showFileList",!1),t(),a("snippet",r.s.enterpriseTypeRestrictions),t(),a("showFileList",!1),t(),a("snippet",r.s.enterpriseWithDescription),t(),a("showFileList",!1)("fileItems",r.descriptionFileItems),t(),a("snippet",r.s.enterpriseReplace),t(),a("showFileList",!1),t(4),a("snippet",r.s.futuristicGlass))},dependencies:[u,g],styles:["[_nghost-%COMP%]{display:block}.fuvc-block[_ngcontent-%COMP%]{margin-bottom:1.35rem}.fuvc-block__h[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem;font-weight:700}.fuvc-grid[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fill,minmax(13rem,1fr))}.fuvc-enterprise-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:.65rem}.fuvc-image-preview[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(9rem,11rem);gap:.5rem;width:100%;margin-bottom:.5rem}.fuvc-image-preview__frame[_ngcontent-%COMP%]{border-radius:.5rem;min-height:5.5rem;border:1px solid var(--ff-border, #e2e8f0);background:linear-gradient(180deg,#1e40af66,#0f172a8c),radial-gradient(circle at 35% 15%,#dbeafe,#bfdbfe 28%,#1d4ed8)}.fuvc-image-preview__meta[_ngcontent-%COMP%]{display:grid;align-content:start;gap:.28rem;font-size:.72rem}.fuvc-image-preview__meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ff-muted, #64748b)}.fuvc-image-preview__actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.25rem}.fuvc-image-preview__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid var(--ff-border, #e2e8f0);background:var(--ff-surface, #fff);border-radius:.35rem;padding:.16rem .34rem;font-size:.65rem;cursor:pointer}.fuvc-image-preview__actions[_ngcontent-%COMP%]   .is-primary[_ngcontent-%COMP%]{border-color:#1d4ed8;background:#2563eb;color:#fff}.fuvc-future[_ngcontent-%COMP%]{width:100%;border:1px solid #c7d2fe;border-radius:999px;display:flex;flex-wrap:wrap;justify-content:center;gap:.45rem;padding:.55rem .75rem;font-size:.72rem}.fuvc-future--glass[_ngcontent-%COMP%]{background:linear-gradient(90deg,#eff6fff2,#f5f3fff2)}@media(width<=720px){.fuvc-image-preview[_ngcontent-%COMP%], .fuvc-enterprise-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var v=class p{htmlExamples=h;static \u0275fac=function(o){return new(o||p)};static \u0275cmp=s({type:p,selectors:[["app-file-upload-catalog-overview"]],decls:31,vars:1,consts:[[1,"cco"],[1,"cco-hero"],[1,"cco-hero__eyebrow"],[1,"cco-hero__links"],["routerLink","..",1,"cco-link"],["routerLink","/variations",1,"cco-link"],["aria-labelledby","cco-fu-html",1,"cco-code-block"],["id","cco-fu-html"],[1,"cco-code-block__hint"],[1,"cco-pre"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"header",1)(2,"p",2),l(3,"Brightrail \xB7 File upload \xB7 Variation catalog"),i(),e(4,"h1"),l(5,"File upload types & variations"),i(),e(6,"p"),l(7," Enterprise-grade upload patterns with fileItems progress demos, image preview mock, and enterprise grid tiles. Click any tile for "),e(8,"strong"),l(9,"View code"),i(),l(10,", then "),e(11,"strong"),l(12,"Copy code"),i(),l(13," (import from "),e(14,"code"),l(15,"brightrail"),i(),l(16,"). "),i(),e(17,"p",3)(18,"a",4),l(19,"\u2190 File upload playground (live settings)"),i(),e(20,"a",5),l(21,"All variation catalogs"),i()()(),n(22,"app-file-upload-variation-catalog"),e(23,"section",6)(24,"h2",7),l(25,"File upload HTML examples"),i(),e(26,"p",8),l(27,"Typical multi-file upload with file list and progress."),i(),e(28,"pre",9)(29,"code"),l(30),i()()()()),o&2&&(t(30),c(r.htmlExamples))},dependencies:[f,d],styles:["[_nghost-%COMP%]{flex:1 1 auto;min-height:0;overflow:auto}.cco[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.5rem}.cco-hero__eyebrow[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:.75rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ff-muted, #64748b)}.cco-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.cco-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 .5rem;color:var(--ff-muted, #64748b)}.cco-hero__links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem 1.25rem}.cco-link[_ngcontent-%COMP%]{color:var(--ff-accent, #2563eb);text-decoration:none;font-weight:600}.cco-code-block[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid var(--ff-border, #e2e8f0)}.cco-code-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;margin:0 0 .35rem}.cco-code-block__hint[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:.8125rem;color:var(--ff-muted, #64748b)}.cco-pre[_ngcontent-%COMP%]{margin:0;padding:.85rem;border-radius:.5rem;background:var(--ff-surface-muted, #f1f3f4);border:1px solid var(--ff-border, #e2e8f0);overflow:auto;font-size:.8rem}"],changeDetection:0})};export{v as FileUploadCatalogOverviewComponent};
