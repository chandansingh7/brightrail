import{Ca as O,Ib as I,Jb as K,Ma as b,Mb as _,Nb as c,Oa as D,Pa as L,S as B,Sa as A,Ta as F,X as g,Y as u,Ya as a,Z as k,Za as p,_a as m,a as E,ab as x,b as S,bb as v,cb as $,db as C,eb as d,ha as h,ia as w,ma as P,ob as R,pb as f,rb as V,ta as l,tb as H}from"./chunk-GSG23AZM.js";function j(o){let t=new Set,e=r=>{for(let n of r)n.expanded&&t.add(n.id),n.children?.length&&e(n.children)};return e(o),t}function M(o,t,e=0){let r=[];for(let n of o){let i=(n.children?.length??0)>0;r.push(S(E({},n),{depth:e,hasChildren:i})),i&&t.has(n.id)&&r.push(...M(n.children,t,e+1))}return r}function z(o){switch(o){case"ArrowDown":return"next";case"ArrowUp":return"prev";case"ArrowRight":return"expand";case"ArrowLeft":return"collapse";case"Home":return"first";case"End":return"last";case"Enter":case" ":return"activate";default:return"none"}}function N(o,t,e){return e<=0?-1:Math.max(0,Math.min(o+t,e-1))}var G=(o,t)=>t.id;function U(o,t){if(o&1){let e=x();a(0,"button",7),C("click",function(n){g(e);let i=d().$implicit,s=d();return u(s.onToggle(n,i))}),a(1,"span",8),k(),a(2,"svg",9),m(3,"path",10),p()()()}if(o&2){let e=d().$implicit,r=d();v("disabled",e.disabled),b("aria-label",(r.isExpanded(e.id)?"Collapse":"Expand")+" "+e.label),l(),f("br-tree__chevron--expanded",r.isExpanded(e.id))}}function X(o,t){o&1&&m(0,"span",5)}function J(o,t){if(o&1){let e=x();a(0,"li",2)(1,"div",3),D(2,U,4,4,"button",4)(3,X,1,0,"span",5),a(4,"button",6),C("focus",function(){let n=g(e).$index,i=d();return u(i.focusedNodeIndex.set(n))})("click",function(n){let i=g(e).$implicit,s=d();return u(s.onSelect(n,i))}),V(5),p()()()}if(o&2){let e=t.$implicit,r=t.$index,n=d();R("padding-inline-start",n.indent(e.depth)),b("aria-expanded",e.hasChildren?n.isExpanded(e.id):null)("aria-selected",n.selectionEnabled()?n.isSelected(e.id):null)("aria-disabled",e.disabled?!0:null),l(),f("br-tree__row--selected",n.isSelected(e.id)),l(),L(e.hasChildren?2:3),l(2),f("br-tree__label-btn--disabled",e.disabled),v("disabled",e.disabled||!n.selectionEnabled()),b("data-tree-focus-index",r)("tabindex",n.isFocused(r)?0:-1),l(),H(" ",e.label," ")}}var q=class o{host=B(P);nodes=c([]);selectionMode=c("single");selectedId=c(null);ariaLabel=c(void 0);levelIndent=c("1.25rem");selectedIdChange=_();nodeSelect=_();expandedIdsChange=_();expandedIdSet=h(new Set);activeSelectedId=h(null);focusedNodeIndex=h(0);expandedPrimed=!1;visibleNodes=K(()=>M(this.nodes(),this.expandedIdSet()));constructor(){w(()=>{let t=this.nodes(),e=this.selectedId();I(()=>this.activeSelectedId.set(e)),!this.expandedPrimed&&t.length>0&&I(()=>{this.expandedIdSet.set(j(t)),this.expandedPrimed=!0})})}selectionEnabled(){return this.selectionMode()==="single"}isExpanded(t){return this.expandedIdSet().has(t)}isSelected(t){return this.activeSelectedId()===t}getSelectedId(){return this.activeSelectedId()}indent(t){return t<=0?"0":`calc(${t} * ${this.levelIndent()})`}isFocused(t){return this.focusedNodeIndex()===t}onToggle(t,e){if(t.stopPropagation(),e.disabled||!e.hasChildren)return;let r=new Set(this.expandedIdSet());r.has(e.id)?r.delete(e.id):r.add(e.id),this.expandedIdSet.set(r),this.expandedIdsChange.emit(new Set(r))}onSelect(t,e){t.stopPropagation(),!(e.disabled||!this.selectionEnabled())&&(this.activeSelectedId.set(e.id),this.selectedIdChange.emit(e.id),this.nodeSelect.emit(e))}onTreeKeydown(t){let e=this.visibleNodes();if(!e.length)return;let r=z(t.key);if(r==="none")return;t.preventDefault();let n=this.focusedNodeIndex(),i=e[n];if(i){switch(r){case"next":this.focusedNodeIndex.set(N(n,1,e.length));break;case"prev":this.focusedNodeIndex.set(N(n,-1,e.length));break;case"first":this.focusedNodeIndex.set(0);break;case"last":this.focusedNodeIndex.set(e.length-1);break;case"expand":i.hasChildren&&!this.isExpanded(i.id)?this.onToggle(t,i):i.hasChildren&&this.focusedNodeIndex.set(Math.min(n+1,e.length-1));break;case"collapse":if(i.hasChildren&&this.isExpanded(i.id))this.onToggle(t,i);else if(i.depth>0){let s=e.findIndex((T,y)=>y<n&&T.depth===i.depth-1&&e.slice(y+1,n+1).every(W=>W.depth>T.depth));s>=0&&this.focusedNodeIndex.set(s)}break;case"activate":i.hasChildren?this.onToggle(t,i):this.onSelect(t,i);break;default:break}queueMicrotask(()=>this.focusActiveNodeButton())}}focusActiveNodeButton(){let t=this.focusedNodeIndex();this.host.nativeElement.querySelector(`[data-tree-focus-index="${t}"]`)?.focus()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=O({type:o,selectors:[["brightrail-tree"]],hostAttrs:["role","tree","tabindex","0",1,"br-tree"],hostBindings:function(e,r){e&1&&$("keydown",function(i){return r.onTreeKeydown(i)})},inputs:{nodes:[1,"nodes"],selectionMode:[1,"selectionMode"],selectedId:[1,"selectedId"],ariaLabel:[1,"ariaLabel"],levelIndent:[1,"levelIndent"]},outputs:{selectedIdChange:"selectedIdChange",nodeSelect:"nodeSelect",expandedIdsChange:"expandedIdsChange"},decls:3,vars:1,consts:[["role","group",1,"br-tree__list"],["role","treeitem",1,"br-tree__item",3,"padding-inline-start"],["role","treeitem",1,"br-tree__item"],[1,"br-tree__row"],["type","button",1,"br-tree__toggle",3,"disabled"],["aria-hidden","true",1,"br-tree__toggle-spacer"],["type","button",1,"br-tree__label-btn",3,"focus","click","disabled"],["type","button",1,"br-tree__toggle",3,"click","disabled"],["aria-hidden","true",1,"br-tree__chevron"],["viewBox","0 0 16 16","width","1em","height","1em"],["d","M6 4l4 4-4 4","stroke","currentColor","stroke-width","1.75","fill","none","stroke-linecap","round","stroke-linejoin","round"]],template:function(e,r){e&1&&(a(0,"ul",0),A(1,J,6,14,"li",1,G),p()),e&2&&(b("aria-label",r.ariaLabel()||null),l(),F(r.visibleNodes()))},styles:["[_nghost-%COMP%]{max-width:100%;box-sizing:border-box;min-width:0;display:block}.br-tree__list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.br-tree__list--nested[_ngcontent-%COMP%]{margin-block-start:.15rem}.br-tree__item[_ngcontent-%COMP%]{margin:0;padding:0}.br-tree__row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.15rem;min-block-size:2rem;border-radius:var(--br-radius-sm, .375rem)}.br-tree__row--selected[_ngcontent-%COMP%]{background:#0062ff14}.br-tree__row[_ngcontent-%COMP%]:hover:not(:has(.br-tree__label-btn--disabled)){background:var(--br-color-surface-muted, #f1f3f4)}.br-tree__toggle[_ngcontent-%COMP%], .br-tree__toggle-spacer[_ngcontent-%COMP%]{inline-size:1.75rem;block-size:1.75rem;flex:0 0 auto}.br-tree__toggle[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:var(--br-radius-sm, .375rem);background:transparent;color:#5f6368;cursor:pointer;padding:0}.br-tree__toggle[_ngcontent-%COMP%]:hover:not(:disabled){background:#3c404314;color:#202124}.br-tree__toggle[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(0,98,255,.35);outline-offset:1px}.br-tree__toggle[_ngcontent-%COMP%]:disabled{opacity:.45;cursor:not-allowed}.br-tree__chevron[_ngcontent-%COMP%]{display:inline-flex;transition:transform .15s ease}.br-tree__chevron--expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}.br-tree__label-btn[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:none;background:transparent;text-align:start;font:inherit;font-size:.9rem;color:#202124;cursor:pointer;padding:.35rem .5rem;border-radius:var(--br-radius-sm, .375rem)}.br-tree__label-btn[_ngcontent-%COMP%]:hover:not(:disabled){color:var(--br-color-primary, #0062ff)}.br-tree__label-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid rgba(0,98,255,.35);outline-offset:1px}.br-tree__label-btn--disabled[_ngcontent-%COMP%], .br-tree__label-btn[_ngcontent-%COMP%]:disabled{color:#9aa0a6;cursor:not-allowed}.br-tree__row--selected[_ngcontent-%COMP%]   .br-tree__label-btn[_ngcontent-%COMP%]{color:var(--br-color-primary, #0062ff);font-weight:600}"],changeDetection:0})};var se=[{id:"workspace",label:"Workspace",expanded:!0,children:[{id:"projects",label:"Projects",expanded:!0,children:[{id:"alpha",label:"Alpha rollout"},{id:"beta",label:"Beta queue"}]},{id:"settings",label:"Settings"}]}],ce=[{id:"src",label:"src",expanded:!0,children:[{id:"app",label:"app.component.ts"},{id:"main",label:"main.ts"}]},{id:"readme",label:"README.md"}],be=[{id:"org",label:"Acme Corp",expanded:!0,children:[{id:"eng",label:"Engineering",expanded:!0,children:[{id:"platform",label:"Platform"},{id:"product",label:"Product"}]},{id:"sales",label:"Sales"}]}],ge={coreWorkspace:`<brightrail-tree
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
</div>`};var ue=`<brightrail-tree
  [nodes]="nodes"
  selectionMode="single"
  [selectedId]="selectedId"
  (selectedIdChange)="onSelect($event)"
/>

<brightrail-tree
  [nodes]="nodes"
  selectionMode="none"
  ariaLabel="File explorer"
/>`;export{q as a,se as b,ce as c,be as d,ge as e,ue as f};
