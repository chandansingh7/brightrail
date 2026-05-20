import{Ga as E,Mb as M,Nb as F,Qa as c,Qb as p,Rb as s,Sa as P,Ta as B,U as u,V as _,W as T,Wa as k,Xa as O,a as N,ab as d,b as S,bb as b,cb as f,eb as x,fa as m,fb as v,ga as y,hb as C,ib as o,sb as w,tb as g,ua as l,vb as D,xb as L}from"./chunk-K6TWHCOD.js";function R(n){let t=new Set,e=r=>{for(let i of r)i.expanded&&t.add(i.id),i.children?.length&&e(i.children)};return e(n),t}function I(n,t,e=0){let r=[];for(let i of n){let a=(i.children?.length??0)>0;r.push(S(N({},i),{depth:e,hasChildren:a})),a&&t.has(i.id)&&r.push(...I(i.children,t,e+1))}return r}var A=(n,t)=>t.id;function $(n,t){if(n&1){let e=x();d(0,"button",7),C("click",function(i){u(e);let a=o().$implicit,h=o();return _(h.onToggle(i,a))}),d(1,"span",8),T(),d(2,"svg",9),f(3,"path",10),b()()()}if(n&2){let e=o().$implicit,r=o();v("disabled",e.disabled),c("aria-label",(r.isExpanded(e.id)?"Collapse":"Expand")+" "+e.label),l(),g("br-tree__chevron--expanded",r.isExpanded(e.id))}}function j(n,t){n&1&&f(0,"span",5)}function z(n,t){if(n&1){let e=x();d(0,"li",2)(1,"div",3),P(2,$,4,4,"button",4)(3,j,1,0,"span",5),d(4,"button",6),C("click",function(i){let a=u(e).$implicit,h=o();return _(h.onSelect(i,a))}),D(5),b()()()}if(n&2){let e=t.$implicit,r=o();w("padding-inline-start",r.indent(e.depth)),c("aria-expanded",e.hasChildren?r.isExpanded(e.id):null)("aria-selected",r.selectionEnabled()?r.isSelected(e.id):null)("aria-disabled",e.disabled?!0:null),l(),g("br-tree__row--selected",r.isSelected(e.id)),l(),B(e.hasChildren?2:3),l(2),g("br-tree__label-btn--disabled",e.disabled),v("disabled",e.disabled||!r.selectionEnabled()),l(),L(" ",e.label," ")}}var V=class n{nodes=s([]);selectionMode=s("single");selectedId=s(null);ariaLabel=s(void 0);levelIndent=s("1.25rem");selectedIdChange=p();nodeSelect=p();expandedIdsChange=p();expandedIdSet=m(new Set);activeSelectedId=m(null);expandedPrimed=!1;visibleNodes=F(()=>I(this.nodes(),this.expandedIdSet()));constructor(){y(()=>{let t=this.nodes(),e=this.selectedId();M(()=>this.activeSelectedId.set(e)),!this.expandedPrimed&&t.length>0&&M(()=>{this.expandedIdSet.set(R(t)),this.expandedPrimed=!0})})}selectionEnabled(){return this.selectionMode()==="single"}isExpanded(t){return this.expandedIdSet().has(t)}isSelected(t){return this.activeSelectedId()===t}getSelectedId(){return this.activeSelectedId()}indent(t){return t<=0?"0":`calc(${t} * ${this.levelIndent()})`}onToggle(t,e){if(t.stopPropagation(),e.disabled||!e.hasChildren)return;let r=new Set(this.expandedIdSet());r.has(e.id)?r.delete(e.id):r.add(e.id),this.expandedIdSet.set(r),this.expandedIdsChange.emit(new Set(r))}onSelect(t,e){t.stopPropagation(),!(e.disabled||!this.selectionEnabled())&&(this.activeSelectedId.set(e.id),this.selectedIdChange.emit(e.id),this.nodeSelect.emit(e))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=E({type:n,selectors:[["brightrail-tree"]],hostAttrs:["role","tree",1,"br-tree"],inputs:{nodes:[1,"nodes"],selectionMode:[1,"selectionMode"],selectedId:[1,"selectedId"],ariaLabel:[1,"ariaLabel"],levelIndent:[1,"levelIndent"]},outputs:{selectedIdChange:"selectedIdChange",nodeSelect:"nodeSelect",expandedIdsChange:"expandedIdsChange"},decls:3,vars:1,consts:[["role","group",1,"br-tree__list"],["role","treeitem",1,"br-tree__item",3,"padding-inline-start"],["role","treeitem",1,"br-tree__item"],[1,"br-tree__row"],["type","button",1,"br-tree__toggle",3,"disabled"],["aria-hidden","true",1,"br-tree__toggle-spacer"],["type","button",1,"br-tree__label-btn",3,"click","disabled"],["type","button",1,"br-tree__toggle",3,"click","disabled"],["aria-hidden","true",1,"br-tree__chevron"],["viewBox","0 0 16 16","width","1em","height","1em"],["d","M6 4l4 4-4 4","stroke","currentColor","stroke-width","1.75","fill","none","stroke-linecap","round","stroke-linejoin","round"]],template:function(e,r){e&1&&(d(0,"ul",0),k(1,z,6,12,"li",1,A),b()),e&2&&(c("aria-label",r.ariaLabel()||null),l(),O(r.visibleNodes()))},styles:["[_nghost-%COMP%]{display:block}.br-tree__list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.br-tree__list--nested[_ngcontent-%COMP%]{margin-block-start:.15rem}.br-tree__item[_ngcontent-%COMP%]{margin:0;padding:0}.br-tree__row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.15rem;min-block-size:2rem;border-radius:var(--br-radius-sm, .375rem)}.br-tree__row--selected[_ngcontent-%COMP%]{background:#0062ff14}.br-tree__row[_ngcontent-%COMP%]:hover:not(:has(.br-tree__label-btn--disabled)){background:var(--br-color-surface-muted, #f1f3f4)}.br-tree__toggle[_ngcontent-%COMP%], .br-tree__toggle-spacer[_ngcontent-%COMP%]{inline-size:1.75rem;block-size:1.75rem;flex:0 0 auto}.br-tree__toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:var(--br-radius-sm, .375rem);background:transparent;color:#5f6368;cursor:pointer;padding:0}.br-tree__toggle[_ngcontent-%COMP%]:hover:not(:disabled){background:#3c404314;color:#202124}.br-tree__toggle[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(0,98,255,.35);outline-offset:1px}.br-tree__toggle[_ngcontent-%COMP%]:disabled{opacity:.45;cursor:not-allowed}.br-tree__chevron[_ngcontent-%COMP%]{display:inline-flex;transition:transform .15s ease}.br-tree__chevron--expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.br-tree__label-btn[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:none;background:transparent;text-align:start;font:inherit;font-size:.9rem;color:#202124;cursor:pointer;padding:.35rem .5rem;border-radius:var(--br-radius-sm, .375rem)}.br-tree__label-btn[_ngcontent-%COMP%]:hover:not(:disabled){color:var(--br-color-primary, #0062ff)}.br-tree__label-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(0,98,255,.35);outline-offset:1px}.br-tree__label-btn--disabled[_ngcontent-%COMP%], .br-tree__label-btn[_ngcontent-%COMP%]:disabled{color:#9aa0a6;cursor:not-allowed}.br-tree__row--selected[_ngcontent-%COMP%]   .br-tree__label-btn[_ngcontent-%COMP%]{color:var(--br-color-primary, #0062ff);font-weight:600}"],changeDetection:0})};var Y=[{id:"workspace",label:"Workspace",expanded:!0,children:[{id:"projects",label:"Projects",expanded:!0,children:[{id:"alpha",label:"Alpha rollout"},{id:"beta",label:"Beta queue"}]},{id:"settings",label:"Settings"}]}],Z=[{id:"src",label:"src",expanded:!0,children:[{id:"app",label:"app.component.ts"},{id:"main",label:"main.ts"}]},{id:"readme",label:"README.md"}],ee=[{id:"org",label:"Acme Corp",expanded:!0,children:[{id:"eng",label:"Engineering",expanded:!0,children:[{id:"platform",label:"Platform"},{id:"product",label:"Product"}]},{id:"sales",label:"Sales"}]}],te={coreWorkspace:`<brightrail-tree
  [nodes]="workspaceNodes"
  selectionMode="single"
  [selectedId]="'alpha'"
/>`,coreFiles:`<brightrail-tree
  [nodes]="fileNodes"
  selectionMode="single"
  [selectedId]="'app'"
/>`,coreFlat:`<brightrail-tree
  [nodes]="[{ id: 'inbox', label: 'Inbox' }, { id: 'sent', label: 'Sent' }]"
  selectionMode="single"
  [selectedId]="'inbox'"
/>`,selectionSingle:`<brightrail-tree
  [nodes]="nodes"
  selectionMode="single"
  [selectedId]="selectedId"
  (selectedIdChange)="selectedId = $event"
/>`,selectionNone:`<brightrail-tree
  [nodes]="nodes"
  selectionMode="none"
/>`,expandedDefault:`<brightrail-tree
  [nodes]="[{ id: 'a', label: 'Expanded parent', expanded: true, children: [{ id: 'b', label: 'Child' }] }]"
  selectionMode="none"
/>`,expandedCollapsed:`<brightrail-tree
  [nodes]="[{ id: 'a', label: 'Collapsed parent', expanded: false, children: [{ id: 'b', label: 'Child' }] }]"
  selectionMode="none"
/>`,disabledNode:`<brightrail-tree
  [nodes]="[
    { id: 'ok', label: 'Available' },
    { id: 'locked', label: 'Locked', disabled: true }
  ]"
  selectionMode="single"
  [selectedId]="'ok'"
/>`,disabledBranch:`<brightrail-tree
  [nodes]="[
    { id: 'parent', label: 'Parent', disabled: true, children: [{ id: 'child', label: 'Child' }] }
  ]"
  selectionMode="none"
/>`,enterpriseNav:`<brightrail-tree
  ariaLabel="Primary navigation"
  [nodes]="navNodes"
  selectionMode="single"
  [selectedId]="activeRouteId"
/>`,enterpriseOrg:`<brightrail-tree
  [nodes]="orgNodes"
  selectionMode="single"
  [selectedId]="'platform'"
/>`,advancedDeep:`<brightrail-tree
  [nodes]="deepNodes"
  selectionMode="single"
  levelIndent="1.5rem"
/>`,advancedMultiBranch:`<span class="trco-split">
  <brightrail-tree [nodes]="leftNodes" selectionMode="single" [selectedId]="'docs'" />
  <brightrail-tree [nodes]="rightNodes" selectionMode="single" [selectedId]="'queue'" />
</span>`,futuristicGlass:`<div class="ff-future-shell ff-future-shell--glass">
  <brightrail-tree
    ariaLabel="Workspace"
    [nodes]="workspaceNodes"
    selectionMode="single"
    [selectedId]="'projects'"
  />
</div>`,futuristicNeon:`<div class="ff-future-shell ff-future-shell--neon">
  <brightrail-tree
    ariaLabel="Systems"
    [nodes]="fileNodes"
    selectionMode="single"
    [selectedId]="'app'"
  />
</div>`,futuristicCyber:`<div class="ff-future-shell ff-future-shell--cyber">
  <brightrail-tree
    ariaLabel="Network"
    [nodes]="orgNodes"
    selectionMode="single"
    [selectedId]="'platform'"
  />
</div>`,futuristicHolo:`<div class="ff-future-shell ff-future-shell--holo">
  <brightrail-tree
    ariaLabel="Lanes"
    [nodes]="flatNodes"
    selectionMode="single"
    [selectedId]="'inbox'"
  />
</div>`};var re=`<brightrail-tree
  [nodes]="nodes"
  selectionMode="single"
  [selectedId]="selectedId"
  (selectedIdChange)="onSelect($event)"
/>

<brightrail-tree
  [nodes]="nodes"
  selectionMode="none"
  ariaLabel="File explorer"
/>`;export{V as a,Y as b,Z as c,ee as d,te as e,re as f};
