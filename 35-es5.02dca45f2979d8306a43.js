!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],i=!0,a=!1,o=void 0;try{for(var c,r=t[Symbol.iterator]();!(i=(c=r.next()).done)&&(e.push(c.value),!n||e.length!==n);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return e}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){if(t){if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function a(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/sJ9":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var i,a=e("fXoL"),o=((i=function t(){c(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=a.Nb({type:i}),i.\u0275inj=a.Mb({}),i);e("LktG")},"2TPx":function(t,e,i){"use strict";i.r(e),i.d(e,"NotificationExamplesModule",function(){return Z});var a,r,s,l,f,u,b,h,p=i("yjM7"),m=i("tyNb"),d=i("mN63"),x=i("WpJt"),g=i("fXoL"),y=((a=function t(){c(this,t)}).\u0275fac=function(t){return new(t||a)},a.\u0275mod=g.Nb({type:a}),a.\u0275inj=g.Mb({providers:[],imports:[[x.a,m.i]]}),a),v=i("IzEk"),k={direction:"bottom-start",fallbackOrientation:"vertical",autoFocus:!0,offset:8},w=((r=function(){function t(n,e,i){c(this,t),this._nxOverlay=n,this._element=e,this._triggerButton=i}return o(t,[{key:"notificationPanel",get:function(){return this._panelTemplate},set:function(t){this._panelTemplate=t}},{key:"open",value:function(){var t=this;if(!this._overlayRef){var n=Object.assign(Object.assign({},k),{triggerButton:this._triggerButton});this._overlayRef=this._nxOverlay.open(this._panelTemplate,this._element,n),this._overlayRef.afterClosed().pipe(Object(v.a)(1)).subscribe(function(){return t.close()})}}},{key:"close",value:function(){this._overlayRef&&(this._overlayRef.close(),this._overlayRef=null)}}]),t}()).\u0275fac=function(t){return new(t||r)(g.Pb(x.b),g.Pb(g.l),g.Pb(x.c,10))},r.\u0275dir=g.Kb({type:r,selectors:[["","nxNotificationPanelTriggerFor",""]],hostBindings:function(t,n){1&t&&g.cc("click",function(){return n.open()})},inputs:{notificationPanel:["nxNotificationPanelTriggerFor","notificationPanel"]}}),r),V=i("u47x"),_=i("VRyK"),U=i("8LU1"),P=i("XNiG"),I=[[["nx-notification-item-metadata"]],[["nx-notification-item-content"]],"*",[["nx-notification-item-actions"]]],M=["nx-notification-item-metadata","nx-notification-item-content","*","nx-notification-item-actions"],O=((s=function(){function t(n,e){c(this,t),this._elementRef=n,this._focusMonitor=e,this._read=!1,this._clickable=!0,this._hasFocus=!1,this.focused=new P.a,this._focusMonitor.monitor(this._elementRef)}return o(t,[{key:"read",get:function(){return this._read},set:function(t){this._read=Object(U.b)(t)}},{key:"clickable",get:function(){return this._clickable},set:function(t){this._clickable=Object(U.b)(t)}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"focus",value:function(t){void 0!==t||this._hasFocus||(this.focused.next(this),this._hasFocus=!0,this._focusMonitor.focusVia(this._elementRef,"keyboard")),this._hasFocus||(this._elementRef.nativeElement.focus(),this._hasFocus=!0)}},{key:"_blur",value:function(){this._hasFocus=!1}}]),t}()).\u0275fac=function(t){return new(t||s)(g.Pb(g.l),g.Pb(V.g))},s.\u0275cmp=g.Jb({type:s,selectors:[["nx-notification-panel-item"],["","nxNotificationPanelItem",""]],hostAttrs:["tabindex","0"],hostVars:4,hostBindings:function(t,n){1&t&&g.cc("focus",function(){return n.focus()})("blur",function(){return n._blur()}),2&t&&g.Hb("nx-notification-item--read",n.read)("nx-notification-item--clickable",n.clickable)},inputs:{read:"read",clickable:"clickable"},ngContentSelectors:M,decls:4,vars:0,template:function(t,n){1&t&&(g.lc(I),g.kc(0),g.kc(1,1),g.kc(2,2),g.kc(3,3))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:var(--notification-panel-item-unread-background-color);padding:16px 24px;margin:0 -24px}.nx-notification-item--read[_nghost-%COMP%]{background-color:var(--notification-panel-item-read-background-color)}[_nghost-%COMP%]:focus{outline:none}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-inset-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:inset 0 0 0 4px windowText,inset 0 0 0 6px background;border:4px solid CanvasText}}  nx-notification-item-metadata{font-size:14px;font-weight:400;line-height:20px;letter-spacing:.2px;margin-bottom:4px;display:flex;align-items:center}  nx-notification-item-actions,   nx-notification-item-content{font-size:16px;font-weight:400;line-height:24px}  nx-notification-item-actions{display:flex;justify-content:space-between;padding-top:8px}.nx-notification-item--clickable[_nghost-%COMP%]{cursor:pointer}.nx-notification-item--clickable[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-unread-hover-background-color)}.nx-notification-item--clickable[_nghost-%COMP%]:active{background-color:var(--notification-panel-item-unread-active-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-read-hover-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:active{background-color:var(-notification-panel-item-read-active-background-color)}"]}),s),N=["*"],C=((h=function(){function t(){c(this,t)}return o(t,[{key:"ngAfterContentInit",value:function(){this._initKeyManager()}},{key:"_initKeyManager",value:function(){var t=this;this._keyManager=new V.f(this.items).withVerticalOrientation().withHorizontalOrientation("ltr"),this.items.length>0&&Object(_.a).apply(void 0,n(this.items.map(function(t){return t.focused}))).subscribe(function(n){t._keyManager.updateActiveItem(n)})}},{key:"_handleKeydown",value:function(t){this._keyManager.onKeydown(t)}}]),t}()).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=g.Jb({type:h,selectors:[["nx-notification-panel"]],contentQueries:function(t,n,e){var i;1&t&&g.Ib(e,O,1),2&t&&g.sc(i=g.dc())&&(n.items=i)},viewQuery:function(t,n){var e;1&t&&g.Mc(g.O,1),2&t&&g.sc(e=g.dc())&&(n.templateRef=e.first)},hostVars:2,hostBindings:function(t,n){1&t&&g.cc("keydown",function(t){return n._handleKeydown(t)}),2&t&&g.Hb("nx-notification-panel",!0)},exportAs:["nxNotificationPanel"],ngContentSelectors:N,decls:1,vars:0,template:function(t,n){1&t&&(g.lc(),g.kc(0))},styles:["[_nghost-%COMP%]{padding:16px 24px;display:flex;flex-direction:column;background-color:var(--notification-panel-background-color);max-height:740px;height:100%;width:400px;overflow-y:auto;box-shadow:0 8px 24px rgba(65,65,65,.35);border-radius:8px}[_nghost-%COMP%]:focus{outline:none}  nx-notification-header{display:flex;justify-content:space-between;padding:16px 0 8px}  nx-notification-header:first-child{padding-top:0}"]}),h),j=((b=function t(){c(this,t)}).\u0275fac=function(t){return new(t||b)},b.\u0275dir=g.Kb({type:b,selectors:[["nx-notification-item-metadata"]]}),b),L=((u=function t(){c(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275dir=g.Kb({type:u,selectors:[["nx-notification-item-content"]]}),u),T=((f=function t(){c(this,t)}).\u0275fac=function(t){return new(t||f)},f.\u0275dir=g.Kb({type:f,selectors:[["nx-notification-item-actions"]]}),f),F=((l=function t(){c(this,t)}).\u0275fac=function(t){return new(t||l)},l.\u0275dir=g.Kb({type:l,selectors:[["nx-notification-header"]]}),l),z=i("SqJ0"),B=i("mi9N"),R=i("+vaC"),J=i("LktG"),A=i("bah2"),Q=i("JUL+");function S(t,n){1&t&&(g.Vb(0,"nx-notification-panel"),g.Vb(1,"nx-notification-header"),g.Vb(2,"h3",3),g.Ic(3,"Unread"),g.Ub(),g.Vb(4,"button",4),g.Ic(5,"Mark all as read "),g.Qb(6,"nx-icon",5),g.Ub(),g.Ub(),g.Vb(7,"a",6),g.Vb(8,"nx-notification-item-metadata"),g.Qb(9,"nx-icon",7),g.Ic(10,"File lock release \xb7 16:53 "),g.Ub(),g.Vb(11,"nx-notification-item-content"),g.Vb(12,"span",8),g.Ic(13,"The file you tried to edit (XY12345) is now available."),g.Ub(),g.Ub(),g.Vb(14,"nx-notification-item-actions"),g.Vb(15,"nx-link"),g.Vb(16,"a",9),g.Ic(17,"Edit file"),g.Ub(),g.Ub(),g.Vb(18,"button",10),g.Qb(19,"nx-icon",11),g.Ub(),g.Ub(),g.Ub(),g.Vb(20,"div",6),g.Vb(21,"nx-notification-item-metadata"),g.Qb(22,"nx-icon",12),g.Ic(23,"Callback \xb7 11:35 "),g.Ub(),g.Vb(24,"nx-notification-item-content",13),g.Vb(25,"span",8),g.Ic(26,"Please call back James Erwin at 15:00"),g.Ub(),g.Vb(27,"button",14),g.Qb(28,"nx-icon",11),g.Ub(),g.Ub(),g.Ub(),g.Vb(29,"nx-notification-header"),g.Vb(30,"h3",3),g.Ic(31,"Read"),g.Ub(),g.Ub(),g.Vb(32,"div",15),g.Vb(33,"nx-notification-item-metadata"),g.Ic(34,"Offers \xb7 Yesterday "),g.Ub(),g.Vb(35,"nx-notification-item-content"),g.Vb(36,"span",8),g.Ic(37,"Mary London"),g.Ub(),g.Ic(38," - Note created "),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.Db(7),g.Eb("href",null,g.Ac))}var K,E=((K=function t(){c(this,t)}).\u0275fac=function(t){return new(t||K)},K.\u0275cmp=g.Jb({type:K,selectors:[["notification-panel-actions-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","clickable","false"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["href","#file-link"],["nxPlainButton","small","type","button","title","Delete"],["name","trash-o","aria-hidden","true"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"inline-delete"],["nxPlainButton","small","type","button","title","Delete",1,""],["nxNotificationPanelItem","","read","","clickable","false"]],template:function(t,n){if(1&t&&(g.Vb(0,"button",0),g.Qb(1,"nx-icon",1),g.Ub(),g.Gc(2,S,39,1,"ng-template",null,2,g.Hc)),2&t){var e=g.tc(3);g.mc("nxNotificationPanelTriggerFor",e)}},directives:[B.a,w,R.a,C,F,J.a,A.a,O,j,L,T,Q.a],styles:[".inline-delete[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),K);function X(t,n){1&t&&(g.Vb(0,"nx-notification-panel"),g.Vb(1,"nx-notification-header"),g.Vb(2,"h3",3),g.Ic(3,"Unread"),g.Ub(),g.Vb(4,"button",4),g.Ic(5,"Mark all as read "),g.Qb(6,"nx-icon",5),g.Ub(),g.Ub(),g.Vb(7,"a",6),g.Vb(8,"nx-notification-item-metadata"),g.Ic(9,"Tasks \xb7 5 minutes ago "),g.Ub(),g.Vb(10,"nx-notification-item-content"),g.Vb(11,"span",7),g.Ic(12,"Frank Loyd"),g.Ub(),g.Ic(13," - created new offer "),g.Ub(),g.Ub(),g.Vb(14,"a",8),g.Vb(15,"nx-notification-item-metadata"),g.Ic(16,"Offers \xb7 11:45 "),g.Ub(),g.Vb(17,"nx-notification-item-content"),g.Vb(18,"span",7),g.Ic(19,"Susi M\xfcller"),g.Ub(),g.Ic(20," - Offer status has changed "),g.Ub(),g.Ub(),g.Vb(21,"nx-notification-header"),g.Vb(22,"h3",3),g.Ic(23,"Read"),g.Ub(),g.Ub(),g.Vb(24,"a",9),g.Vb(25,"nx-notification-item-metadata"),g.Ic(26,"Offers \xb7 Yesterday "),g.Ub(),g.Vb(27,"nx-notification-item-content"),g.Vb(28,"span",7),g.Ic(29,"Mary London"),g.Ub(),g.Ic(30," - Note created "),g.Ub(),g.Ub(),g.Ub())}var G,H=((G=function t(){c(this,t)}).\u0275fac=function(t){return new(t||G)},G.\u0275cmp=g.Jb({type:G,selectors:[["notification-panel-clickable-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","routerLink","#clickable-notification2"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(t,n){if(1&t&&(g.Vb(0,"button",0),g.Qb(1,"nx-icon",1),g.Ub(),g.Gc(2,X,31,0,"ng-template",null,2,g.Hc)),2&t){var e=g.tc(3);g.mc("nxNotificationPanelTriggerFor",e)}},directives:[B.a,w,R.a,C,F,J.a,A.a,m.h,O,j,L],styles:[""]}),G);function D(t,n){1&t&&(g.Vb(0,"nx-notification-panel"),g.Vb(1,"nx-notification-header"),g.Vb(2,"h3",3),g.Ic(3,"Unread"),g.Ub(),g.Vb(4,"button",4),g.Ic(5,"Mark all as read "),g.Qb(6,"nx-icon",5),g.Ub(),g.Ub(),g.Vb(7,"a",6),g.Vb(8,"nx-notification-item-metadata"),g.Qb(9,"nx-icon",7),g.Ic(10,"File lock release \xb7 16:53 "),g.Ub(),g.Vb(11,"nx-notification-item-content"),g.Vb(12,"span",8),g.Ic(13,"The file you tried to edit (XY12345) is now available."),g.Ub(),g.Ub(),g.Ub(),g.Vb(14,"a",9),g.Vb(15,"nx-notification-item-metadata"),g.Qb(16,"nx-icon",10),g.Ic(17,"Callback \xb7 11:35 "),g.Ub(),g.Vb(18,"nx-notification-item-content"),g.Vb(19,"span",8),g.Ic(20,"Please call back James Erwin at 15:00"),g.Ub(),g.Ub(),g.Ub(),g.Vb(21,"nx-notification-header"),g.Vb(22,"h3",3),g.Ic(23,"Read"),g.Ub(),g.Ub(),g.Vb(24,"div",11),g.Vb(25,"nx-notification-item-metadata"),g.Ic(26,"Offers \xb7 Yesterday "),g.Ub(),g.Vb(27,"nx-notification-item-content"),g.Vb(28,"span",8),g.Ic(29,"Mary London"),g.Ub(),g.Ic(30," - Note created "),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.Db(14),g.mc("routerLink",null))}var Y,q,W=((Y=function t(){c(this,t)}).\u0275fac=function(t){return new(t||Y)},Y.\u0275cmp=g.Jb({type:Y,selectors:[["notification-panel-mixed-example"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","clickable","false",3,"routerLink"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(t,n){if(1&t&&(g.Vb(0,"button",0),g.Qb(1,"nx-icon",1),g.Ub(),g.Gc(2,D,31,1,"ng-template",null,2,g.Hc)),2&t){var e=g.tc(3);g.mc("nxNotificationPanelTriggerFor",e)}},directives:[B.a,w,R.a,C,F,J.a,A.a,m.h,O,j,L,m.f],styles:[""]}),Y),$=i("ierq"),Z=((q=function(){function t(){c(this,t)}return o(t,null,[{key:"components",value:function(){return{"notification-panel-actions":E,"notification-panel-clickable":H,"notification-panel-mixed":W}}}]),t}()).\u0275fac=function(t){return new(t||q)},q.\u0275mod=g.Nb({type:q}),q.\u0275inj=g.Mb({imports:[[z.a,y,d.c,m.i,p.a,$.a]]}),q)},LktG:function(n,e,i){"use strict";i.d(e,"a",function(){return l});var a=i("fXoL"),r=["nxCopytext",""],s=["*"],l=function(){var n=function(){function n(){c(this,n),this.type="normal",this.negative=!1}return o(n,[{key:"classNames",get:function(){return this._classNames},set:function(n){if(this._classNames!==n){this._classNames=n;var e=t(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],i=void 0===e?null:e;this.type=i,this.negative=!!this._classNames.match(/negative/)}}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Jb({type:n,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,n){2&t&&a.Hb("nx-copy",!0)("nx-copy--small","small"===n.type)("nx-copy--medium","medium"===n.type)("nx-copy--normal","normal"===n.type)("nx-copy--large","large"===n.type)("nx-copy--negative",n.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:r,ngContentSelectors:s,decls:1,vars:0,template:function(t,n){1&t&&(a.lc(),a.kc(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),n}()},ierq:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var i=e("tgBs"),a=e("/sJ9"),o=e("eV8M"),r=e("gkbm"),s=e("ofXK"),l=e("3Pt+"),f=e("fXoL"),u=function(){var t=function t(){c(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f.Nb({type:t}),t.\u0275inj=f.Mb({imports:[[],s.c,l.k,l.v,r.b,o.a,a.a,i.a]}),t}()}}])}();