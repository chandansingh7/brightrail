import{Ga as D,Mb as A,Nb as f,Qa as v,Qb as E,Rb as c,Sa as u,Sb as F,Ta as g,U as s,V as p,W as P,Wa as y,X as k,Xa as I,ab as l,bb as m,cb as B,eb as x,fa as C,fb as O,ga as M,gb as S,hb as b,ib as d,pb as T,qb as N,ta as w,tb as L,ua as a,vb as _,wb as h}from"./chunk-K6TWHCOD.js";function q(o,t){let e=t.trim().toLowerCase();return e?o.filter(n=>n.disabled?!1:[n.label,n.group??"",n.shortcut??"",...n.keywords??[]].join(" ").toLowerCase().includes(e)):o.filter(n=>!n.disabled)}function V(o){let t=new Map;for(let n of o){let i=n.group?.trim()||"",r=t.get(i)??[];r.push(n),t.set(i,r)}return[...t.entries()].sort(([n],[i])=>n?i?n.localeCompare(i):-1:1).map(([n,i])=>({group:n,items:i}))}var W=["queryInput"],z=(o,t)=>t.group,R=(o,t)=>t.id;function j(o,t){if(o&1&&(l(0,"li",11),_(1),m()),o&2){let e=d(2);a(),h(e.emptyLabel())}}function Q(o,t){if(o&1&&(l(0,"li",12),_(1),m()),o&2){let e=d().$implicit;a(),h(e.group)}}function G(o,t){if(o&1&&(l(0,"kbd",16),_(1),m()),o&2){let e=d().$implicit;a(),h(e.shortcut)}}function K(o,t){if(o&1){let e=x();l(0,"li",13)(1,"button",14),b("click",function(){let i=s(e).$implicit,r=d(3);return p(r.selectItem(i))})("mouseenter",function(){let i=s(e).$implicit,r=d(3);return p(r.setActiveId(i.id))}),l(2,"span",15),_(3),m(),u(4,G,2,1,"kbd",16),m()()}if(o&2){let e=t.$implicit,n=d(3);a(),L("br-cmd-palette__option--active",n.isActive(e.id)),O("id",n.optionId(e.id))("disabled",e.disabled),a(2),h(e.label),a(),g(e.shortcut?4:-1)}}function U(o,t){if(o&1&&(u(0,Q,2,1,"li",12),y(1,K,5,6,"li",13,R)),o&2){let e=t.$implicit;g(e.group?0:-1),a(),I(e.items)}}function J(o,t){if(o&1){let e=x();l(0,"div",1)(1,"button",2),b("click",function(){s(e);let i=d();return p(i.onBackdropClick())}),m(),l(2,"div",3),b("keydown",function(i){s(e);let r=d();return p(r.onDialogKeydown(i))}),l(3,"div",4)(4,"span",5),P(),l(5,"svg",6),B(6,"circle",7)(7,"path",8),m()(),k(),l(8,"input",9,0),b("input",function(i){s(e);let r=d();return p(r.onQueryInput(i))}),m()(),l(10,"ul",10),u(11,j,2,1,"li",11),y(12,U,3,1,null,null,z),m()()()}if(o&2){let e=d();a(2),v("aria-label",e.ariaLabel()),a(6),O("placeholder",e.placeholder())("value",e.query()),a(2),v("aria-activedescendant",e.activeDescendantId()),a(),g(e.groupedItems().length===0?11:-1),a(),I(e.groupedItems())}}var H=class o{isOpen=c(!1);commands=c([]);placeholder=c("Search commands\u2026");emptyLabel=c("No matching commands");ariaLabel=c("Command palette");closeOnEscape=c(!0);closeOnBackdrop=c(!0);commandSelect=E();closed=E();queryInput=F("queryInput");query=C("");activeId=C(null);filteredItems=f(()=>q(this.commands(),this.query()));groupedItems=f(()=>V(this.filteredItems()));flatFilteredIds=f(()=>this.filteredItems().map(t=>t.id));activeDescendantId=f(()=>{let t=this.activeId();return t?this.optionId(t):null});constructor(){M(()=>{let t=this.isOpen(),e=this.flatFilteredIds();A(()=>{if(!t){this.query.set(""),this.activeId.set(null);return}if(!e.length){this.activeId.set(null);return}let n=this.activeId();(!n||!e.includes(n))&&this.activeId.set(e[0]),queueMicrotask(()=>this.queryInput()?.nativeElement.focus())})})}optionId(t){return`br-cmd-${t}`}isActive(t){return this.activeId()===t}setActiveId(t){this.activeId.set(t)}onQueryInput(t){let e=t.target.value;this.query.set(e);let n=this.flatFilteredIds();this.activeId.set(n[0]??null)}onBackdropClick(){this.closeOnBackdrop()&&this.closed.emit()}onDialogKeydown(t){let e=this.flatFilteredIds(),n=this.activeId(),i=n?e.indexOf(n):-1;switch(t.key){case"ArrowDown":{if(t.preventDefault(),!e.length)return;let r=i<e.length-1?i+1:0;this.activeId.set(e[r]);break}case"ArrowUp":{if(t.preventDefault(),!e.length)return;let r=i>0?i-1:e.length-1;this.activeId.set(e[r]);break}case"Enter":{t.preventDefault();let r=this.filteredItems().find($=>$.id===n);r&&this.selectItem(r);break}case"Escape":{if(!this.closeOnEscape())return;t.preventDefault(),t.stopPropagation(),this.closed.emit();break}default:break}}onDocumentEscape(t){!this.isOpen()||!this.closeOnEscape()||(t.preventDefault(),t.stopPropagation(),this.closed.emit())}selectItem(t){t.disabled||this.commandSelect.emit(t)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=D({type:o,selectors:[["brightrail-command-palette"]],viewQuery:function(e,n){e&1&&T(n.queryInput,W,5),e&2&&N()},hostBindings:function(e,n){e&1&&S("keydown.escape",function(r){return n.onDocumentEscape(r)},w)},inputs:{isOpen:[1,"isOpen"],commands:[1,"commands"],placeholder:[1,"placeholder"],emptyLabel:[1,"emptyLabel"],ariaLabel:[1,"ariaLabel"],closeOnEscape:[1,"closeOnEscape"],closeOnBackdrop:[1,"closeOnBackdrop"]},outputs:{commandSelect:"commandSelect",closed:"closed"},decls:1,vars:1,consts:[["queryInput",""],["role","presentation",1,"br-cmd-palette-root"],["type","button","tabindex","-1","aria-label","Close command palette",1,"br-cmd-palette__backdrop",3,"click"],["role","dialog","aria-modal","true",1,"br-cmd-palette",3,"keydown"],[1,"br-cmd-palette__search"],["aria-hidden","true",1,"br-cmd-palette__search-icon"],["viewBox","0 0 16 16","width","1em","height","1em"],["cx","7","cy","7","r","4.25","stroke","currentColor","stroke-width","1.5","fill","none"],["d","M10.2 10.2 14 14","stroke","currentColor","stroke-width","1.5","stroke-linecap","round"],["type","search","autocomplete","off","spellcheck","false",1,"br-cmd-palette__input",3,"input","placeholder","value"],["role","listbox",1,"br-cmd-palette__list"],["role","presentation",1,"br-cmd-palette__empty"],["role","presentation",1,"br-cmd-palette__group-label"],["role","presentation"],["type","button","role","option",1,"br-cmd-palette__option",3,"click","mouseenter","id","disabled"],[1,"br-cmd-palette__option-label"],[1,"br-cmd-palette__shortcut"]],template:function(e,n){e&1&&u(0,J,14,5,"div",1),e&2&&g(n.isOpen()?0:-1)},styles:[".br-cmd-palette-root[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;display:grid;place-items:start center;padding:10vh 1rem 1rem}.br-cmd-palette__backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;border:none;background:#20212473;cursor:default;padding:0}.br-cmd-palette[_ngcontent-%COMP%]{position:relative;inline-size:min(34rem,100%);border-radius:var(--br-radius-md, .625rem);border:1px solid var(--br-color-border, #e8eaed);background:var(--br-color-surface, #fff);box-shadow:0 18px 48px #3c404338;overflow:hidden}.br-cmd-palette__search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;padding:.85rem 1rem;border-block-end:1px solid var(--br-color-border, #e8eaed)}.br-cmd-palette__search-icon[_ngcontent-%COMP%]{color:#5f6368;display:inline-flex}.br-cmd-palette__input[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:none;background:transparent;font:inherit;font-size:1rem;color:#202124;outline:none}.br-cmd-palette__input[_ngcontent-%COMP%]::placeholder{color:#9aa0a6}.br-cmd-palette__list[_ngcontent-%COMP%]{margin:0;padding:.4rem;list-style:none;max-block-size:min(24rem,50vh);overflow:auto}.br-cmd-palette__group-label[_ngcontent-%COMP%]{padding:.45rem .65rem .25rem;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#5f6368}.br-cmd-palette__empty[_ngcontent-%COMP%]{padding:1rem .75rem;color:#5f6368;font-size:.9rem}.br-cmd-palette__option[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.75rem;width:100%;border:none;border-radius:var(--br-radius-sm, .375rem);background:transparent;color:#202124;font:inherit;font-size:.92rem;text-align:start;padding:.55rem .65rem;cursor:pointer}.br-cmd-palette__option[_ngcontent-%COMP%]:hover:not(:disabled), .br-cmd-palette__option--active[_ngcontent-%COMP%]{background:#0062ff14;color:var(--br-color-primary, #0062ff)}.br-cmd-palette__option[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(0,98,255,.35);outline-offset:1px}.br-cmd-palette__option[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.br-cmd-palette__shortcut[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.75rem;color:#5f6368;border:1px solid var(--br-color-border, #e8eaed);border-radius:.35rem;padding:.1rem .35rem;background:var(--br-color-surface-muted, #f1f3f4)}"],changeDetection:0})};var le=[{id:"new",label:"New document",group:"File",shortcut:"\u2318N"},{id:"open",label:"Open\u2026",group:"File",shortcut:"\u2318O"},{id:"save",label:"Save",group:"File",shortcut:"\u2318S"},{id:"settings",label:"Settings",group:"App",shortcut:"\u2318,"},{id:"help",label:"Help center",group:"App"}],de=[{id:"goto-dashboard",label:"Go to Dashboard",group:"Navigation"},{id:"goto-projects",label:"Go to Projects",group:"Navigation"},{id:"invite",label:"Invite teammate",group:"Actions"},{id:"export",label:"Export CSV",group:"Actions",shortcut:"\u2318E"}],me=[{id:"publish",label:"Publish changes",group:"Workflow"},{id:"rollback",label:"Rollback (admin only)",group:"Workflow",disabled:!0},{id:"archive",label:"Archive project",group:"Workflow",disabled:!0}],ce={coreOpen:`<button type="button" (click)="paletteOpen.set(true)">Open palette</button>
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
</div>`};var se=`<brightrail-command-palette
  [isOpen]="isOpen()"
  [commands]="commands"
  placeholder="Search commands\u2026"
  (commandSelect)="runCommand($event)"
  (closed)="isOpen.set(false)"
/>

<!-- commands: BrightrailCommandPaletteItem[] -->
{ id: 'save', label: 'Save', group: 'File', shortcut: '\u2318S' }`;export{H as a,le as b,de as c,me as d,ce as e,se as f};
