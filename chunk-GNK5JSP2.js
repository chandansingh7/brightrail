import{a as q}from"./chunk-4NKTPLZV.js";import{a as V}from"./chunk-BUGLMEU6.js";import{Ca as S,Ib as k,Jb as f,Ma as y,Mb as M,Nb as s,Oa as g,Ob as F,Pa as b,S as w,Sa as x,Ta as I,Ua as O,Va as l,Wa as c,X as m,Xa as T,Y as p,Z as E,_ as D,ab as P,cb as u,eb as d,ha as C,ia as v,lb as N,mb as A,pb as L,rb as _,sa as B,sb as h,ta as a}from"./chunk-GSG23AZM.js";function $(o,t){let e=t.trim().toLowerCase();return e?o.filter(n=>n.disabled?!1:[n.label,n.group??"",n.shortcut??"",...n.keywords??[]].join(" ").toLowerCase().includes(e)):o.filter(n=>!n.disabled)}function H(o){let t=new Map;for(let n of o){let i=n.group?.trim()||"",r=t.get(i)??[];r.push(n),t.set(i,r)}return[...t.entries()].sort(([n],[i])=>n?i?n.localeCompare(i):-1:1).map(([n,i])=>({group:n,items:i}))}var j=["queryInput"],R=(o,t)=>t.group,Q=(o,t)=>t.id;function G(o,t){if(o&1&&(l(0,"li",11),_(1),c()),o&2){let e=d(2);a(),h(e.emptyLabel())}}function K(o,t){if(o&1&&(l(0,"li",12),_(1),c()),o&2){let e=d().$implicit;a(),h(e.group)}}function U(o,t){if(o&1&&(l(0,"kbd",16),_(1),c()),o&2){let e=d().$implicit;a(),h(e.shortcut)}}function J(o,t){if(o&1){let e=P();l(0,"li",13)(1,"button",14),u("click",function(){let i=m(e).$implicit,r=d(3);return p(r.selectItem(i))})("mouseenter",function(){let i=m(e).$implicit,r=d(3);return p(r.setActiveId(i.id))}),l(2,"span",15),_(3),c(),g(4,U,2,1,"kbd",16),c()()}if(o&2){let e=t.$implicit,n=d(3);a(),L("br-cmd-palette__option--active",n.isActive(e.id)),O("id",n.optionId(e.id))("disabled",e.disabled),a(2),h(e.label),a(),b(e.shortcut?4:-1)}}function X(o,t){if(o&1&&(g(0,K,2,1,"li",12),x(1,J,5,6,"li",13,Q)),o&2){let e=t.$implicit;b(e.group?0:-1),a(),I(e.items)}}function Y(o,t){if(o&1){let e=P();l(0,"div",1)(1,"button",2),u("click",function(){m(e);let i=d();return p(i.onBackdropClick())}),c(),l(2,"div",3),u("keydown",function(i){m(e);let r=d();return p(r.onDialogKeydown(i))}),l(3,"div",4)(4,"span",5),E(),l(5,"svg",6),T(6,"circle",7)(7,"path",8),c()(),D(),l(8,"input",9,0),u("input",function(i){m(e);let r=d();return p(r.onQueryInput(i))}),c()(),l(10,"ul",10),g(11,G,2,1,"li",11),x(12,X,3,1,null,null,R),c()()()}if(o&2){let e=d();a(2),y("aria-label",e.ariaLabel()),a(6),O("placeholder",e.placeholder())("value",e.query()),a(2),y("aria-activedescendant",e.activeDescendantId()),a(),b(e.groupedItems().length===0?11:-1),a(),I(e.groupedItems())}}var W=class o{announcer=w(q);isOpen=s(!1);commands=s([]);placeholder=s("Search commands\u2026");emptyLabel=s("No matching commands");ariaLabel=s("Command palette");closeOnEscape=s(!0);closeOnBackdrop=s(!0);commandSelect=M();closed=M();queryInput=F("queryInput");query=C("");activeId=C(null);filteredItems=f(()=>$(this.commands(),this.query()));groupedItems=f(()=>H(this.filteredItems()));flatFilteredIds=f(()=>this.filteredItems().map(t=>t.id));activeDescendantId=f(()=>{let t=this.activeId();return t?this.optionId(t):null});constructor(){v(()=>{let t=this.isOpen(),e=this.flatFilteredIds();k(()=>{if(!t){this.query.set(""),this.activeId.set(null);return}if(!e.length){this.activeId.set(null);return}let n=this.activeId();(!n||!e.includes(n))&&this.activeId.set(e[0]),queueMicrotask(()=>this.queryInput()?.nativeElement.focus())})}),v(()=>{if(!this.isOpen())return;let t=this.query().trim(),e=this.filteredItems().length;k(()=>{if(!t)return;let n=e===0?this.emptyLabel():`${e} ${e===1?"result":"results"}`;this.announcer.announce(n,"polite")})})}optionId(t){return`br-cmd-${t}`}isActive(t){return this.activeId()===t}setActiveId(t){this.activeId.set(t)}onQueryInput(t){let e=t.target.value;this.query.set(e);let n=this.flatFilteredIds();this.activeId.set(n[0]??null)}onBackdropClick(){this.closeOnBackdrop()&&this.closed.emit()}onDialogKeydown(t){let e=this.flatFilteredIds(),n=this.activeId(),i=n?e.indexOf(n):-1;switch(t.key){case"ArrowDown":{if(t.preventDefault(),!e.length)return;let r=i<e.length-1?i+1:0;this.activeId.set(e[r]);break}case"ArrowUp":{if(t.preventDefault(),!e.length)return;let r=i>0?i-1:e.length-1;this.activeId.set(e[r]);break}case"Enter":{t.preventDefault();let r=this.filteredItems().find(z=>z.id===n);r&&this.selectItem(r);break}case"Escape":{if(!this.closeOnEscape())return;t.preventDefault(),t.stopPropagation(),this.closed.emit();break}default:break}}onDocumentEscape(t){!this.isOpen()||!this.closeOnEscape()||(t.preventDefault(),t.stopPropagation(),this.closed.emit())}selectItem(t){t.disabled||this.commandSelect.emit(t)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=S({type:o,selectors:[["brightrail-command-palette"]],viewQuery:function(e,n){e&1&&N(n.queryInput,j,5),e&2&&A()},hostBindings:function(e,n){e&1&&u("keydown.escape",function(r){return n.onDocumentEscape(r)},B)},inputs:{isOpen:[1,"isOpen"],commands:[1,"commands"],placeholder:[1,"placeholder"],emptyLabel:[1,"emptyLabel"],ariaLabel:[1,"ariaLabel"],closeOnEscape:[1,"closeOnEscape"],closeOnBackdrop:[1,"closeOnBackdrop"]},outputs:{commandSelect:"commandSelect",closed:"closed"},decls:1,vars:1,consts:[["queryInput",""],["role","presentation",1,"br-cmd-palette-root"],["type","button","tabindex","-1","aria-label","Close command palette",1,"br-cmd-palette__backdrop",3,"click"],["role","dialog","aria-modal","true","brightrailFocusTrap","","brightrailFocusTrapAutoCapture","",1,"br-cmd-palette",3,"keydown"],[1,"br-cmd-palette__search"],["aria-hidden","true",1,"br-cmd-palette__search-icon"],["viewBox","0 0 16 16","width","1em","height","1em"],["cx","7","cy","7","r","4.25","stroke","currentColor","stroke-width","1.5","fill","none"],["d","M10.2 10.2 14 14","stroke","currentColor","stroke-width","1.5","stroke-linecap","round"],["type","search","autocomplete","off","spellcheck","false",1,"br-cmd-palette__input",3,"input","placeholder","value"],["role","listbox",1,"br-cmd-palette__list"],["role","presentation",1,"br-cmd-palette__empty"],["role","presentation",1,"br-cmd-palette__group-label"],["role","presentation"],["type","button","role","option",1,"br-cmd-palette__option",3,"click","mouseenter","id","disabled"],[1,"br-cmd-palette__option-label"],[1,"br-cmd-palette__shortcut"]],template:function(e,n){e&1&&g(0,Y,14,5,"div",1),e&2&&b(n.isOpen()?0:-1)},dependencies:[V],styles:[".br-cmd-palette-root[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;display:grid;place-items:start center;padding:10vh 1rem 1rem}.br-cmd-palette__backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;border:none;background:#20212473;cursor:default;padding:0}.br-cmd-palette[_ngcontent-%COMP%]{position:relative;inline-size:min(34rem,100%);border-radius:var(--br-radius-md, .625rem);border:1px solid var(--br-color-border, #e8eaed);background:var(--br-color-surface, #fff);box-shadow:0 18px 48px #3c404338;overflow:hidden}.br-cmd-palette__search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;padding:.85rem 1rem;border-block-end:1px solid var(--br-color-border, #e8eaed)}.br-cmd-palette__search-icon[_ngcontent-%COMP%]{color:#5f6368;display:inline-flex}.br-cmd-palette__input[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:none;background:transparent;font:inherit;font-size:1rem;color:#202124;outline:none}.br-cmd-palette__input[_ngcontent-%COMP%]::placeholder{color:#9aa0a6}.br-cmd-palette__list[_ngcontent-%COMP%]{margin:0;padding:.4rem;list-style:none;max-block-size:min(24rem,50vh);overflow:auto}.br-cmd-palette__group-label[_ngcontent-%COMP%]{padding:.45rem .65rem .25rem;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#5f6368}.br-cmd-palette__empty[_ngcontent-%COMP%]{padding:1rem .75rem;color:#5f6368;font-size:.9rem}.br-cmd-palette__option[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem;width:100%;border:none;border-radius:var(--br-radius-sm, .375rem);background:transparent;color:#202124;font:inherit;font-size:.92rem;text-align:start;padding:.55rem .65rem;cursor:pointer}.br-cmd-palette__option[_ngcontent-%COMP%]:hover:not(:disabled), .br-cmd-palette__option--active[_ngcontent-%COMP%]{background:#0062ff14;color:var(--br-color-primary, #0062ff)}.br-cmd-palette__option[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(0,98,255,.35);outline-offset:1px}.br-cmd-palette__option[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.br-cmd-palette__shortcut[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.75rem;color:#5f6368;border:1px solid var(--br-color-border, #e8eaed);border-radius:.35rem;padding:.1rem .35rem;background:var(--br-color-surface-muted, #f1f3f4)}@media(width<=520px){.br-cmd-palette-root[_ngcontent-%COMP%]{padding-top:4vh}}@media(width<=720px){.br-cmd-palette__option[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.35rem}.br-cmd-palette__shortcut[_ngcontent-%COMP%]{align-self:flex-start}}"],changeDetection:0})};var me=[{id:"new",label:"New document",group:"File",shortcut:"\u2318N"},{id:"open",label:"Open\u2026",group:"File",shortcut:"\u2318O"},{id:"save",label:"Save",group:"File",shortcut:"\u2318S"},{id:"settings",label:"Settings",group:"App",shortcut:"\u2318,"},{id:"help",label:"Help center",group:"App"}],pe=[{id:"goto-dashboard",label:"Go to Dashboard",group:"Navigation"},{id:"goto-projects",label:"Go to Projects",group:"Navigation"},{id:"invite",label:"Invite teammate",group:"Actions"},{id:"export",label:"Export CSV",group:"Actions",shortcut:"\u2318E"}],ue=[{id:"publish",label:"Publish changes",group:"Workflow"},{id:"rollback",label:"Rollback (admin only)",group:"Workflow",disabled:!0},{id:"archive",label:"Archive project",group:"Workflow",disabled:!0}],ge={coreOpen:`<button type="button" (click)="paletteOpen.set(true)">Open palette</button>
<brightrail-command-palette
  [isOpen]="paletteOpen()"
  [commands]="commands"
  placeholder="Search commands\u2026"
  (commandSelect)="onCommand($event)"
  (closed)="paletteOpen.set(false)"
/>`,coreClosed:`<brightrail-command-palette
  [isOpen]="false"
  [commands]="commands"
/>`,groupedCommands:`<brightrail-command-palette
  [isOpen]="true"
  [commands]="groupedCommands"
  placeholder="Jump to\u2026"
/>`,withShortcuts:`<brightrail-command-palette
  [isOpen]="true"
  [commands]="commandsWithShortcuts"
/>`,emptyQuery:`<brightrail-command-palette
  [isOpen]="true"
  [commands]="[]"
  emptyLabel="No matching commands"
/>`,disabledItems:`<brightrail-command-palette
  [isOpen]="true"
  [commands]="commandsWithDisabled"
/>`,advancedKeywords:`<brightrail-command-palette
  [isOpen]="paletteOpen()"
  [commands]="commands"
  placeholder="Type to filter by label or keyword\u2026"
  ariaLabel="Workspace command palette"
  [closeOnEscape]="true"
  [closeOnBackdrop]="true"
/>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-command-palette
    [isOpen]="true"
    [commands]="commands"
    placeholder="Search commands\u2026"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-command-palette
    [isOpen]="true"
    [commands]="groupedCommands"
    placeholder="Jump to\u2026"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-command-palette
    [isOpen]="true"
    [commands]="commands"
    placeholder="Type to filter\u2026"
    ariaLabel="Workspace command palette"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-command-palette
    [isOpen]="true"
    [commands]="commandsWithShortcuts"
    placeholder="Run command\u2026"
  />
</div>`};var be=`<brightrail-command-palette
  [isOpen]="isOpen()"
  [commands]="commands"
  placeholder="Search commands\u2026"
  (commandSelect)="runCommand($event)"
  (closed)="isOpen.set(false)"
/>

<!-- commands: BrightrailCommandPaletteItem[] -->
{ id: 'save', label: 'Save', group: 'File', shortcut: '\u2318S' }`;export{W as a,me as b,pe as c,ue as d,ge as e,be as f};
