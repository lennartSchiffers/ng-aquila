(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{uH0y:function(n,e,t){"use strict";t.r(e),t.d(e,"MenuExamplesModule",function(){return $});var o=t("ofXK"),i=t("tyNb"),a=t("tZT5"),c=t("mN63"),r=t("8LU1"),l=t("fXoL");function s(n,e){1&n&&(l.Vb(0,"div",1),l.kc(1),l.Ub())}const u=["*"];let d=(()=>{class n{constructor(n){this._changeDetectorRef=n,this._open=!1}set open(n){const e=Object(r.b)(n);e!==this._open&&(this._open=e,this._changeDetectorRef.markForCheck())}get open(){return this._open}toggle(){this.open=!this.open}}return n.\u0275fac=function(e){return new(e||n)(l.Pb(l.h))},n.\u0275cmp=l.Jb({type:n,selectors:[["nx-menu"]],hostVars:1,hostBindings:function(n,e){2&n&&l.Eb("aria-expanded",e.open)},inputs:{open:"open"},ngContentSelectors:u,decls:1,vars:1,consts:[["class","nx-menu__wrapper",4,"ngIf"],[1,"nx-menu__wrapper"]],template:function(n,e){1&n&&(l.lc(),l.Gc(0,s,2,0,"div",0)),2&n&&l.mc("ngIf",e.open)},directives:[o.q],styles:[".nx-menu[_nghost-%COMP%]{display:block}.nx-menu__wrapper[_ngcontent-%COMP%]{position:fixed;top:60px;left:0;right:0;bottom:0;z-index:1;overflow:auto;background:var(--menu-background-color)}  .nx-menu__link{display:block;padding:12px 0;font-size:18px;line-height:24px;outline:none}  .nx-menu__link+.nx-menu__link{margin-top:8px}  .nx-menu__link.cdk-keyboard-focused{box-shadow:var(--focus-box-shadow);border-radius:4px;outline:none}@media screen and (-ms-high-contrast:active){  .nx-menu__link.cdk-keyboard-focused{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}  .nx-menu__item.nx-menu__item--large,   .nx-menu__item.nx-menu__item--small{padding:24px;border-bottom:1px solid var(--menu-item-border-color)}@media screen and (-ms-high-contrast:active){  .nx-menu__item.nx-menu__item--large,   .nx-menu__item.nx-menu__item--small{border-bottom-color:windowText}}  .nx-menu__item.nx-menu__item--large{padding-left:64px}[dir=rtl][_nghost-%COMP%]     .nx-menu__item.nx-menu__item--large, [dir=rtl]   [_nghost-%COMP%]     .nx-menu__item.nx-menu__item--large{padding-right:64px;padding-left:0}@media screen and (-ms-high-contrast:active){  .nx-menu__link{text-decoration:none}}"],changeDetection:0}),n})();var b=t("u47x");let p=(()=>{class n{constructor(n,e){this._elementRef=n,this._focusMonitor=e,this._focusMonitor.monitor(this._elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return n.\u0275fac=function(e){return new(e||n)(l.Pb(l.l),l.Pb(b.g))},n.\u0275dir=l.Kb({type:n,selectors:[["a","nxMenuLink",""]],hostAttrs:[1,"nx-menu__link"]}),n})(),x=(()=>{class n{constructor(){this._size="s"}set size(n){this._size="l"===n?"l":"s"}get size(){return this._size}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=l.Kb({type:n,selectors:[["","nxMenuItem",""]],hostAttrs:[1,"nx-menu__item"],hostVars:4,hostBindings:function(n,e){2&n&&l.Hb("nx-menu__item--small","s"===e.size)("nx-menu__item--large","l"===e.size)},inputs:{size:["nxMenuItem","size"]}}),n})();var m=t("+vaC");const h=["nxMenuButton",""];function g(n,e){1&n&&l.Qb(0,"nx-icon",2)}const _=[[["","nxMenuButtonIcon",""]],"*"],f=["[nxMenuButtonIcon]","*"];let O=(()=>{class n{constructor(n,e,t){this._changeDetectorRef=n,this._focusMonitor=e,this._elementRef=t,this._expandable=!1,this._expanded=!1,this._type="root",this._focusMonitor.monitor(this._elementRef)}set expandable(n){this._expandable=Object(r.b)(n),this._changeDetectorRef.markForCheck()}get expandable(){return this._expandable}set expanded(n){this._expanded=Object(r.b)(n),this._changeDetectorRef.markForCheck()}get expanded(){return this._expanded}set type(n){"root"!==n&&"nested"!==n||(this._type=n,this._changeDetectorRef.markForCheck())}get type(){return this._type}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}}return n.\u0275fac=function(e){return new(e||n)(l.Pb(l.h),l.Pb(b.g),l.Pb(l.l))},n.\u0275cmp=l.Jb({type:n,selectors:[["","nxMenuButton",""]],hostAttrs:[1,"nx-menu-button"],hostVars:8,hostBindings:function(n,e){2&n&&l.Hb("is-expanded",e.expandable&&e.expanded)("is-expandable",e.expandable)("nx-menu-button--nested","nested"===e.type)("nx-menu-button--root","root"===e.type)},inputs:{expandable:"expandable",expanded:"expanded",type:["nxType","type"]},attrs:h,ngContentSelectors:f,decls:4,vars:1,consts:[[1,"nx-menu-button__label"],["class","nx-menu-button__expand-icon","name","chevron-down",4,"ngIf"],["name","chevron-down",1,"nx-menu-button__expand-icon"]],template:function(n,e){1&n&&(l.lc(_),l.kc(0),l.Vb(1,"span",0),l.kc(2,1),l.Ub(),l.Gc(3,g,1,0,"nx-icon",1)),2&n&&(l.Db(3),l.mc("ngIf",e.expandable))},directives:[o.q,m.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background:var(--menu-button-background-color);color:var(--menu-button-text-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:none;border:none;margin:0;cursor:pointer;line-height:24px;font-weight:400;font-size:18px;width:100%;transition:all .2s ease,padding none 0;text-decoration:none;padding:24px}[_nghost-%COMP%]:hover{background:var(--menu-button-hover-background-color)}.is-expanded[_nghost-%COMP%]{font-weight:700;background:var(--menu-button-expanded-background-color);color:var(--menu-button-expanded-text-color);border-color:var(--menu-button-expanded-border-color)}.is-expanded[_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}.nx-menu-button--nested[_nghost-%COMP%]{background:var(--menu-button-nested-background-color)}.nx-menu-button--nested.is-expanded[_nghost-%COMP%]{background:var(--menu-button-nested-expanded-background-color);border-color:var(--menu-button-nested-expanded-border-color);color:var(--menu-button-nested-expanded-color)}[_nghost-%COMP%]::-moz-focus-inner{border:0}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow);border-radius:8px;border:none}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px windowText,inset 0 0 0 6px background;border:4px solid CanvasText}}.nx-menu-button__expand-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;transition:all .2s ease;transform:rotate(0);width:16px;height:24px;margin-right:8px;flex:0 0 auto;font-size:24px}[dir=rtl][_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-menu-button__expand-icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}.nx-menu-button__label[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 auto;text-align:left;line-height:1;padding:4px 0}[dir=rtl][_nghost-%COMP%]   .nx-menu-button__label[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-menu-button__label[_ngcontent-%COMP%]{text-align:right}  .nx-menu-button__icon{margin-right:16px;height:24px;font-weight:400;flex:0 0 auto}[dir=rtl][_nghost-%COMP%]     .nx-menu-button__icon, [dir=rtl]   [_nghost-%COMP%]     .nx-menu-button__icon{margin-right:0;margin-left:16px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%], .is-expanded[_nghost-%COMP%], .nx-menu-button--nested[_nghost-%COMP%], .nx-menu-button--nested.is-expanded[_nghost-%COMP%]{-ms-high-contrast-adjust:none;color:buttonText;background-color:buttonFace}.nx-menu-button--nested.is-expanded[_nghost-%COMP%]:hover, [_nghost-%COMP%]:hover{background-color:highlight;color:highlightText;border-bottom-color:windowText}}"],changeDetection:0}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=l.Kb({type:n,selectors:[["","nxMenuButtonIcon",""]],hostAttrs:[1,"nx-menu-button__icon"]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Nb({type:n}),n.\u0275inj=l.Mb({imports:[[o.c,c.c]]}),n})();var k=t("gkbm"),v=t("bah2"),C=t("xb55"),w=t("TV94"),P=t("LTpZ"),I=t("AViP"),D=t("EjbI");function T(n,e){if(1&n&&(l.Vb(0,"nx-tree-node",7),l.Vb(1,"a",8),l.Ic(2),l.Ub(),l.Ub()),2&n){const n=e.$implicit;l.Db(1),l.mc("queryParams",n.query),l.Db(1),l.Kc(" ",n.label," ")}}function q(n,e){if(1&n&&l.Qb(0,"nx-icon",11),2&n){const n=l.gc().$implicit;l.mc("name",n.icon)}}function V(n,e){if(1&n&&(l.Vb(0,"nx-tree-node"),l.Vb(1,"button",9),l.Gc(2,q,1,1,"nx-icon",10),l.Ic(3),l.Ub(),l.Ub()),2&n){const n=e.$implicit,t=l.gc();l.Db(1),l.mc("nxMenuItem",n.icon?"s":"l")("expanded",t._treeControl.isExpanded(n))("nxType",0===n.level?"root":"nested"),l.Db(1),l.mc("ngIf",n.icon),l.Db(1),l.Kc(" ",n.label," ")}}let U=(()=>{class n{constructor(){this.navigationData=[{label:"Option 1",icon:"file",children:[{label:"Option 1.1",children:[{label:"Option 1.2.1",query:{a:"1.1.1"}},{label:"Option 1.1.2",query:{a:"1.1.2"}},{label:"Option 1.1.3",query:{a:"1.1.3"}}]},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",query:{a:"1.2.3"}}]},{label:"Option 1.3",children:[{label:"Option 1.3.1",query:{a:"1.3.1"}},{label:"Option 1.3.2",query:{a:"1.3.2"}},{label:"Option 1.3.3",query:{a:"1.3.3"}}]}]},{label:"Option 2",icon:"user-o",children:[{label:"Option 2.1",children:[{label:"Option 2.2.1",query:{a:"2.1.1"}},{label:"Option 2.1.2",query:{a:"2.1.2"}},{label:"Option 2.1.3",query:{a:"2.1.3"}}]},{label:"Option 2.2",children:[{label:"Option 2.2.1",query:{a:"2.2.1"}},{label:"Option 2.2.2",query:{a:"2.2.2"}},{label:"Option 2.2.3",query:{a:"2.2.3"}}]},{label:"Option 2.3",children:[{label:"Option 2.3.1",query:{a:"2.3.1"}},{label:"Option 2.3.2",query:{a:"2.3.2"}},{label:"Option 2.3.3",query:{a:"2.3.3"}}]}]},{label:"Option 3",icon:"user-o",children:[{label:"Option 3.1",query:{a:"3.1"}},{label:"Option 3.2",query:{a:"3.2"}},{label:"Option 3.3",query:{a:"3.3"}}]}],this._hasChild=(n,e)=>e.expandable,this._isLink=(n,e)=>e.query,this._treeControl=new a.a,this._dataSource=new a.b(this._treeControl,this.navigationData)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Jb({type:n,selectors:[["menu-example"]],decls:9,vars:4,consts:[["nxPlainButton","","aria-label","open menu",3,"click"],["name","bars"],["menu",""],[3,"dataSource","treeControl"],["nxMenuItem","l",4,"nxTreeNodeDef","nxTreeNodeDefWhen"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxButton","","type","button",1,"close-menu",3,"click"],["nxMenuItem","l"],["nxMenuLink","","nxTreeNodeActionItem","","routerLink","./",3,"queryParams"],["nxMenuButton","","nxTreeNodeToggle","","nxTreeNodeActionItem","","expandable","","type","button",3,"nxMenuItem","expanded","nxType"],["nxMenuButtonIcon","","size","s",3,"name",4,"ngIf"],["nxMenuButtonIcon","","size","s",3,"name"]],template:function(n,e){if(1&n){const n=l.Wb();l.Vb(0,"button",0),l.cc("click",function(){return l.xc(n),l.tc(3).toggle()}),l.Qb(1,"nx-icon",1),l.Ub(),l.Vb(2,"nx-menu",null,2),l.Vb(4,"nx-tree",3),l.Gc(5,T,3,2,"nx-tree-node",4),l.Gc(6,V,4,5,"nx-tree-node",5),l.Ub(),l.Vb(7,"button",6),l.cc("click",function(){return l.xc(n),l.tc(3).toggle()}),l.Ic(8,"close menu"),l.Ub(),l.Ub()}2&n&&(l.Db(4),l.mc("dataSource",e._dataSource)("treeControl",e._treeControl),l.Db(1),l.mc("nxTreeNodeDefWhen",e._isLink),l.Db(1),l.mc("nxTreeNodeDefWhen",e._hasChild))},directives:[v.a,m.a,d,C.a,w.b,P.a,w.a,x,p,i.h,I.a,O,D.a,o.q,y],styles:[".close-menu[_ngcontent-%COMP%]{margin:64px 24px}"]}),n})(),B=(()=>{class n{constructor(){this.primaryExpanded=!1,this.secondaryExpanded=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Jb({type:n,selectors:[["menu-button-example"]],decls:10,vars:2,consts:[["nxMenuButton","","nxType","root","type","button"],["name","file","size","s","nxMenuButtonIcon",""],["nxMenuButton","","nxType","root","expandable","","type","button",3,"expanded","click"],["nxMenuButton","","nxType","nested","type","button"],["nxMenuButton","","nxType","nested","expandable","","type","button",3,"expanded","click"]],template:function(n,e){1&n&&(l.Vb(0,"button",0),l.Qb(1,"nx-icon",1),l.Ic(2," Option 1 (root level)\n"),l.Ub(),l.Vb(3,"button",2),l.cc("click",function(){return e.primaryExpanded=!e.primaryExpanded}),l.Qb(4,"nx-icon",1),l.Ic(5," Option 2 (root level, expandable)\n"),l.Ub(),l.Vb(6,"button",3),l.Ic(7," Option 2.1 (nested level)\n"),l.Ub(),l.Vb(8,"button",4),l.cc("click",function(){return e.secondaryExpanded=!e.secondaryExpanded}),l.Ic(9," Option 2.2 (nested level, expandable)\n"),l.Ub()),2&n&&(l.Db(3),l.mc("expanded",e.primaryExpanded),l.Db(5),l.mc("expanded",e.secondaryExpanded))},directives:[O,m.a,y],styles:["[_nghost-%COMP%]{display:block}"]}),n})();function z(n,e){if(1&n&&(l.Vb(0,"a",5),l.Ic(1),l.Ub()),2&n){const n=e.$implicit;l.Db(1),l.Jc(n.label)}}function F(n,e){if(1&n&&(l.Vb(0,"div",3),l.Gc(1,z,2,1,"a",4),l.Ub()),2&n){const n=l.gc().$implicit;l.Db(1),l.mc("ngForOf",n.children)}}function j(n,e){if(1&n){const n=l.Wb();l.Tb(0),l.Vb(1,"button",1),l.cc("click",function(){l.xc(n);const t=e.$implicit;return l.gc().onClick(t)}),l.Ic(2),l.Ub(),l.Gc(3,F,2,1,"div",2),l.Sb()}if(2&n){const n=e.$implicit;l.Db(1),l.mc("expandable",!!n.children)("expanded",n.expanded),l.Db(1),l.Kc(" ",n.label," "),l.Db(1),l.mc("ngIf",n.children&&n.expanded)}}let L=(()=>{class n{constructor(){this.menuData=[{label:"Option 1",expanded:!1,children:[{label:"Option 1.1"},{label:"Option 1.2"},{label:"Option 1.3"}]},{label:"Option 2",expanded:!1,children:[{label:"Option 2.1"},{label:"Option 2.2"},{label:"Option 2.3"}]},{label:"Option 3"}]}onClick(n){n.expanded=!n.expanded}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Jb({type:n,selectors:[["menu-item-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["nxMenuButton","","nxType","root","nxMenuItem","","type","button",3,"expandable","expanded","click"],["nxMenuItem","",4,"ngIf"],["nxMenuItem",""],["nxMenuLink","","href","javascript:void(0)",4,"ngFor","ngForOf"],["nxMenuLink","","href","javascript:void(0)"]],template:function(n,e){1&n&&l.Gc(0,j,4,4,"ng-container",0),2&n&&l.mc("ngForOf",e.menuData)},directives:[o.p,O,x,o.q,p],styles:["[_nghost-%COMP%]{display:block}"]}),n})();function N(n,e){if(1&n&&(l.Vb(0,"a",6),l.Ic(1),l.Ub()),2&n){const n=e.$implicit;l.Db(1),l.Jc(n.label)}}function E(n,e){if(1&n&&(l.Vb(0,"div",4),l.Gc(1,N,2,1,"a",5),l.Ub()),2&n){const n=l.gc().$implicit;l.Db(1),l.mc("ngForOf",n.children)}}function R(n,e){if(1&n){const n=l.Wb();l.Tb(0),l.Vb(1,"button",1),l.cc("click",function(){l.xc(n);const t=e.$implicit;return l.gc().onClick(t)}),l.Qb(2,"nx-icon",2),l.Ic(3),l.Ub(),l.Gc(4,E,2,1,"div",3),l.Sb()}if(2&n){const n=e.$implicit;l.Db(1),l.mc("expandable",!!n.children)("expanded",n.expanded),l.Db(1),l.mc("name",n.icon),l.Db(1),l.Kc(" ",n.label," "),l.Db(1),l.mc("ngIf",n.children&&n.expanded)}}let G=(()=>{class n{constructor(){this.menuData=[{label:"Option 1",expanded:!1,icon:"file",children:[{label:"Option 1.1"},{label:"Option 1.2"},{label:"Option 1.3"}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1"},{label:"Option 2.2"},{label:"Option 2.3"}]},{label:"Option 3",icon:"user-o"}]}onClick(n){n.expanded=!n.expanded}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Jb({type:n,selectors:[["menu-item-with-icons-example"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["nxMenuButton","","nxType","root","nxMenuItem","","type","button",3,"expandable","expanded","click"],["nxMenuButtonIcon","","size","s",3,"name"],["nxMenuItem","l",4,"ngIf"],["nxMenuItem","l"],["nxMenuLink","","href","javascript:void(0)",4,"ngFor","ngForOf"],["nxMenuLink","","href","javascript:void(0)"]],template:function(n,e){1&n&&l.Gc(0,R,5,5,"ng-container",0),2&n&&l.mc("ngForOf",e.menuData)},directives:[o.p,O,x,m.a,y,o.q,p],styles:["[_nghost-%COMP%]{display:block}"]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Jb({type:n,selectors:[["menu-link-example"]],decls:6,vars:0,consts:[["nxMenuLink","","href","javascript:void(0)"]],template:function(n,e){1&n&&(l.Vb(0,"a",0),l.Ic(1,"Menu link A"),l.Ub(),l.Vb(2,"a",0),l.Ic(3,"Menu link B"),l.Ub(),l.Vb(4,"a",0),l.Ic(5,"Menu link C"),l.Ub())},directives:[p],styles:["[_nghost-%COMP%]{display:block}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-top:32px}"]}),n})(),$=(()=>{class n{static components(){return{menu:U,"menu-button":B,"menu-item":L,"menu-item-with-icons":G,"menu-link":J}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Nb({type:n}),n.\u0275inj=l.Mb({imports:[[k.b,M,c.c,a.c,i.i,o.c]]}),n})()}}]);