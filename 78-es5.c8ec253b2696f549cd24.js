!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"6mPe":function(e,i,s){"use strict";s.r(i),s.d(i,"SidepanelExamplesModule",function(){return ee});var a,o,c,r,u,l,p,b,d,m,g,h,V=s("mN63"),U=s("QcoT"),x=s("fXoL"),f=s("8LU1"),I=["*"],v=((a=function e(){n(this,e)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=x.Jb({type:a,selectors:[["nx-sidepanel-header"]],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(x.lc(),x.kc(0))},styles:["[_nghost-%COMP%]{display:block;font-size:var(--sidepanel-header-font-size);line-height:var(--sidepanel-header-line-height);font-weight:var(--sidepanel-header-font-weight);letter-spacing:var(--sidepanel-header-letter-spacing)}"],changeDetection:0}),a),_=s("R0Ic"),C={sidepanelExpansion:Object(_.n)("sidepanelExpansion",[Object(_.k)("closed",Object(_.l)({transform:"translateX({{ transformX }})",boxShadow:"none",visibility:"hidden"}),{params:{transformX:"100%"}}),Object(_.k)("open",Object(_.l)({transform:"none",boxShadow:"*",visibility:"visible"})),Object(_.m)("closed => open",Object(_.e)(".4s cubic-bezier(0, 0, 0.1, 1)")),Object(_.m)("open-instant => closed, open => closed",Object(_.e)(".2s cubic-bezier(0.8, 0, 1, 1)"))])},q=s("cH1L"),y=function(e){return{transformX:e}},O=function(e,t){return{value:e,params:t}},P=["*"],M=["*",[["nx-sidepanel"]]],w=["*","nx-sidepanel"],k=((c=function(){function e(t,i,s,a){n(this,e),this._changeDetectorRef=t,this._elementRef=i,this._dir=s,this._wrapper=a,this._opened=!0,this.openedChange=new x.o,this._position="floating",this._appearance="dark",this._openState="open-instant",this._wrapper||console.warn("NxSidepanelComponent needs a wrapping NxSidepanelOuterContainerComponent to work as expected.")}return t(e,[{key:"opened",get:function(){return this._opened},set:function(e){var t;this._opened=Object(f.b)(e),this._setOpenState(this._opened),null===(t=this._wrapper)||void 0===t||t._update(),this._changeDetectorRef.markForCheck()}},{key:"position",get:function(){return this._position},set:function(e){var t;this._position=e,this._changeDetectorRef.markForCheck(),null===(t=this._wrapper)||void 0===t||t._update()}},{key:"appearance",get:function(){return this._appearance},set:function(e){this._appearance=e,this._changeDetectorRef.markForCheck()}},{key:"toggle",value:function(){this.opened=!this.opened,this.openedChange.emit(this._opened)}},{key:"open",value:function(){this.opened||this.toggle()}},{key:"close",value:function(){this.opened&&this.toggle()}},{key:"_getWidth",value:function(){return this._elementRef.nativeElement.offsetWidth}},{key:"_getOpenState",value:function(){return this._openState}},{key:"_setOpenState",value:function(e){"open-instant"===this._openState&&e||(this._openState=e?"open":"closed")}},{key:"dir",get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}}]),e}()).\u0275fac=function(e){return new(e||c)(x.Pb(x.h),x.Pb(x.l),x.Pb(q.c),x.Pb(S,8))},c.\u0275cmp=x.Jb({type:c,selectors:[["nx-sidepanel"]],contentQueries:function(e,t,n){var i;1&e&&x.Ib(n,v,1,x.l),2&e&&x.sc(i=x.dc())&&(t._header=i.first)},hostAttrs:["role","complementary"],hostVars:16,hostBindings:function(e,t){2&e&&(x.Fc("@sidepanelExpansion",x.rc(13,O,t._wrapper?t._getOpenState():"",x.qc(11,y,"rtl"===t.dir?"-100%":"100%"))),x.Hb("is-closed",!t.opened)("is-static","static"===t.position)("is-floating","floating"===t.position)("light","light"===t.appearance)("without-wrapper",!t._wrapper))},inputs:{opened:"opened",position:"position",appearance:"appearance"},outputs:{openedChange:"openedChange"},ngContentSelectors:P,decls:1,vars:0,template:function(e,t){1&e&&(x.lc(),x.kc(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:absolute;right:0;top:0;height:100%;overflow:hidden;background:var(--sidepanel-background-color)}[dir=rtl]   [_nghost-%COMP%]{right:auto;left:0}.is-floating[_nghost-%COMP%]{z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[_nghost-%COMP%]   .is-closed[_ngcontent-%COMP%]{transform:translateX(100%)}[dir=rtl]   [_nghost-%COMP%]   .is-closed[_ngcontent-%COMP%]{transform:translateX(-100%)}.light[_nghost-%COMP%]{background:var(--sidepanel-light-background-color);border-left:1px solid var(--sidepanel-light-border-color)}[dir=rtl]   .light[_nghost-%COMP%]{border-left:unset;border-right:1px solid var(--sidepanel-light-border-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border-left:1px solid windowText}[dir=rtl]   [_nghost-%COMP%]{border-left:none;border-right:1px solid windowText}}.without-wrapper.is-floating[_nghost-%COMP%]{position:fixed;right:0;z-index:1;box-shadow:var(--sidepanel-floating-shadow)}[dir=rtl]   .without-wrapper.is-floating[_nghost-%COMP%]{right:auto;left:0}.without-wrapper.is-static[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0}.without-wrapper.is-closed[_nghost-%COMP%]{display:none}"],data:{animation:[C.sidepanelExpansion]},changeDetection:0}),c),S=((o=function(){function e(t,i){var s=this;n(this,e),this._dir=t,this._changeDetectorRef=i,this._dir.change.subscribe(function(){s._changeDetectorRef.markForCheck()})}return t(e,[{key:"_update",value:function(){this._changeDetectorRef.markForCheck()}},{key:"dir",get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}},{key:"_getOpenState",value:function(){var e;return"static"===(null===(e=this._sidepanel)||void 0===e?void 0:e.position)?this._sidepanel._getOpenState():"closed"}},{key:"_getSidepanelWidth",value:function(){var e,t;return"static"===(null===(e=this._sidepanel)||void 0===e?void 0:e.position)&&(null===(t=this._sidepanel)||void 0===t?void 0:t.opened)?this._sidepanel._getWidth():0}}]),e}()).\u0275fac=function(e){return new(e||o)(x.Pb(q.c,8),x.Pb(x.h))},o.\u0275cmp=x.Jb({type:o,selectors:[["nx-sidepanel-outer-container"]],contentQueries:function(e,t,n){var i;1&e&&x.Ib(n,k,1),2&e&&x.sc(i=x.dc())&&(t._sidepanel=i.first)},ngContentSelectors:w,decls:3,vars:8,consts:[[1,"nx-sidepanel-outer-container__content"]],template:function(e,t){1&e&&(x.lc(M),x.Vb(0,"div",0),x.kc(1),x.Ub(),x.kc(2,1)),2&e&&(x.Dc("margin-right","ltr"===t.dir?t._getSidepanelWidth():0,"px")("margin-left","rtl"===t.dir?t._getSidepanelWidth():0,"px"),x.Hb("with-margin","open"===t._getOpenState())("without-margin","closed"===t._getOpenState()))},styles:["[_nghost-%COMP%]{position:relative;display:block;height:100%;overflow:hidden}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;height:100%;overflow:auto}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content.with-margin[_ngcontent-%COMP%]{transition-duration:.4s;transition-timing-function:cubic-bezier(0,0,.1,1);transition-property:margin-right}[dir=rtl]   [_nghost-%COMP%]   .nx-sidepanel-outer-container__content.with-margin[_ngcontent-%COMP%]{transition-property:margin-left}[_nghost-%COMP%]   .nx-sidepanel-outer-container__content.without-margin[_ngcontent-%COMP%]{transition-duration:.2s;transition-timing-function:cubic-bezier(.8,0,1,1);transition-property:margin-right}[dir=rtl]   [_nghost-%COMP%]   .nx-sidepanel-outer-container__content.without-margin[_ngcontent-%COMP%]{transition-property:margin-left}"],changeDetection:0}),o),D=["*"],A=((r=function e(){n(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=x.Jb({type:r,selectors:[["nx-sidepanel-content"]],hostAttrs:["tabindex","0"],ngContentSelectors:D,decls:1,vars:0,template:function(e,t){1&e&&(x.lc(),x.kc(0))},styles:["[_nghost-%COMP%]{display:block;overflow-y:scroll;height:100%}"],changeDetection:0}),r),L=s("u47x"),F=s("+vaC"),j=["nxSidepanelCloseButton",""],R=((u=function(){function e(t,i,s){n(this,e),this._sidepanel=t,this._focusMonitor=i,this._elementRef=s,this._focusMonitor.monitor(this._elementRef)}return t(e,[{key:"_toggle",value:function(){this._sidepanel.toggle()}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}}]),e}()).\u0275fac=function(e){return new(e||u)(x.Pb(k),x.Pb(L.g),x.Pb(x.l))},u.\u0275cmp=x.Jb({type:u,selectors:[["button","nxSidepanelCloseButton",""]],hostBindings:function(e,t){1&e&&x.cc("click",function(){return t._toggle()})},attrs:j,decls:1,vars:0,consts:[["name","close","size","s","aria-hidden","true"]],template:function(e,t){1&e&&x.Qb(0,"nx-icon",0)},directives:[F.a],styles:["[_nghost-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;padding:0;display:flex;align-items:center}[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:var(--sidepanel-close-icon-color)}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{color:buttonText}}.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]   nx-icon[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),u),N=s("gkbm"),B=s("ofXK"),J=((l=function e(){n(this,e)}).\u0275fac=function(e){return new(e||l)},l.\u0275mod=x.Nb({type:l}),l.\u0275inj=x.Mb({imports:[[B.c,V.c,N.b]]}),l),z=s("rU6a"),T=s("zB3U"),E=s("V3bl"),Q=s("3Pt+"),H=s("AgrE"),X=((d=function e(t,i){var s=this;n(this,e),this.viewportService=t,this._cdRef=i,this.opened=!0,this.isGreaterThanSmall=!0,this.viewportServiceSubscription=this.viewportService.min(T.b.BREAKPOINT_SMALL).subscribe(function(e){e!==s.isGreaterThanSmall&&(s.isGreaterThanSmall=e,e&&!s.opened?s.opened=!0:!e&&s.opened&&(s.opened=!1),s._cdRef.detectChanges())})}).\u0275fac=function(e){return new(e||d)(x.Pb(T.c),x.Pb(x.h))},d.\u0275cmp=x.Jb({type:d,selectors:[["sidepanel-floating-example"]],decls:91,vars:5,consts:[[1,"example-container"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],[1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(x.Vb(0,"nx-sidepanel-outer-container",0),x.Vb(1,"nx-radio-toggle",1),x.cc("ngModelChange",function(e){return t.opened=e}),x.Vb(2,"nx-radio-toggle-button",2),x.Ic(3,"Open"),x.Ub(),x.Vb(4,"nx-radio-toggle-button",2),x.Ic(5,"Close"),x.Ub(),x.Ub(),x.Vb(6,"p"),x.Ic(7),x.Ub(),x.Vb(8,"p"),x.Vb(9,"i"),x.Ic(10,"Here is some example content that can be scrolled."),x.Ub(),x.Ub(),x.Vb(11,"p"),x.Vb(12,"i"),x.Ic(13,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Ub(),x.Vb(14,"p"),x.Vb(15,"i"),x.Ic(16,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),x.Ub(),x.Ub(),x.Vb(17,"p"),x.Vb(18,"i"),x.Ic(19,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),x.Ub(),x.Ub(),x.Vb(20,"p"),x.Vb(21,"i"),x.Ic(22,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Ub(),x.Vb(23,"p"),x.Vb(24,"i"),x.Ic(25,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),x.Ub(),x.Ub(),x.Vb(26,"p"),x.Vb(27,"i"),x.Ic(28,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),x.Ub(),x.Ub(),x.Vb(29,"p"),x.Vb(30,"i"),x.Ic(31,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Ub(),x.Vb(32,"nx-sidepanel",3),x.cc("openedChange",function(e){return t.opened=e}),x.Vb(33,"nx-sidepanel-header"),x.Vb(34,"div",4),x.Ic(35," Sidepanel "),x.Qb(36,"button",5),x.Ub(),x.Ub(),x.Vb(37,"nx-sidepanel-content"),x.Vb(38,"div",6),x.Vb(39,"p",7),x.Ic(40,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(41,"p"),x.Ic(42,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(43,"p"),x.Ic(44,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(45,"p"),x.Ic(46,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(47,"p"),x.Ic(48,"Cras ornare tristique elit."),x.Ub(),x.Vb(49,"p"),x.Ic(50,"Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Vb(51,"p"),x.Ic(52,"Praesent placerat risus quis eros."),x.Ub(),x.Vb(53,"p"),x.Ic(54,"Fusce pellentesque suscipit nibh."),x.Ub(),x.Vb(55,"p"),x.Ic(56,"Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Vb(57,"p"),x.Ic(58,"Vestibulum commodo felis quis tortor."),x.Ub(),x.Vb(59,"p"),x.Ic(60,"Ut aliquam sollicitudin leo."),x.Ub(),x.Vb(61,"p"),x.Ic(62,"Cras iaculis ultricies nulla."),x.Ub(),x.Vb(63,"p"),x.Ic(64,"Donec quis dui at dolor tempor interdum."),x.Ub(),x.Vb(65,"p"),x.Ic(66,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(67,"p"),x.Ic(68,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(69,"p"),x.Ic(70,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(71,"p"),x.Ic(72,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(73,"p"),x.Ic(74,"Cras ornare tristique elit."),x.Ub(),x.Vb(75,"p"),x.Ic(76,"Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Vb(77,"p"),x.Ic(78,"Praesent placerat risus quis eros."),x.Ub(),x.Vb(79,"p"),x.Ic(80,"Fusce pellentesque suscipit nibh."),x.Ub(),x.Vb(81,"p"),x.Ic(82,"Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Vb(83,"p"),x.Ic(84,"Vestibulum commodo felis quis tortor."),x.Ub(),x.Vb(85,"p"),x.Ic(86,"Ut aliquam sollicitudin leo."),x.Ub(),x.Vb(87,"p"),x.Ic(88,"Cras iaculis ultricies nulla."),x.Ub(),x.Vb(89,"p"),x.Ic(90,"Donec quis dui at dolor tempor interdum."),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub()),2&e&&(x.Db(1),x.mc("ngModel",t.opened),x.Db(1),x.mc("nxValue",!0),x.Db(2),x.mc("nxValue",!1),x.Db(3),x.Kc("Opened: ",t.opened,""),x.Db(25),x.mc("opened",t.opened))},directives:[S,E.a,Q.p,Q.s,H.a,k,v,R,A],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.example-hint[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%]{vertical-align:bottom}"]}),d),K=((b=function e(){n(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=x.Jb({type:b,selectors:[["sidepanel-static-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(x.Vb(0,"nx-sidepanel-outer-container",0),x.Vb(1,"div",1),x.Vb(2,"nx-radio-toggle",2),x.cc("ngModelChange",function(e){return t.opened=e}),x.Vb(3,"nx-radio-toggle-button",3),x.Ic(4,"Open"),x.Ub(),x.Vb(5,"nx-radio-toggle-button",3),x.Ic(6,"Close"),x.Ub(),x.Ub(),x.Vb(7,"p"),x.Ic(8),x.Ub(),x.Vb(9,"p"),x.Vb(10,"i"),x.Ic(11,"Here is some example content that can be scrolled."),x.Ub(),x.Ub(),x.Vb(12,"p"),x.Vb(13,"i"),x.Ic(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Ub(),x.Vb(15,"p"),x.Vb(16,"i"),x.Ic(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),x.Ub(),x.Ub(),x.Vb(18,"p"),x.Vb(19,"i"),x.Ic(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),x.Ub(),x.Ub(),x.Vb(21,"p"),x.Vb(22,"i"),x.Ic(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Ub(),x.Vb(24,"p"),x.Vb(25,"i"),x.Ic(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),x.Ub(),x.Ub(),x.Vb(27,"p"),x.Vb(28,"i"),x.Ic(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),x.Ub(),x.Ub(),x.Vb(30,"p"),x.Vb(31,"i"),x.Ic(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Ub(),x.Ub(),x.Vb(33,"nx-sidepanel",4),x.cc("openedChange",function(e){return t.opened=e}),x.Vb(34,"nx-sidepanel-header"),x.Vb(35,"div",5),x.Ic(36," Sidepanel "),x.Qb(37,"button",6),x.Ub(),x.Ub(),x.Vb(38,"nx-sidepanel-content"),x.Vb(39,"div",7),x.Vb(40,"p",8),x.Ic(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(42,"p"),x.Ic(43,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(44,"p"),x.Ic(45,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(46,"p"),x.Ic(47,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(48,"p"),x.Ic(49,"Cras ornare tristique elit."),x.Ub(),x.Vb(50,"p"),x.Ic(51,"Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Vb(52,"p"),x.Ic(53,"Praesent placerat risus quis eros."),x.Ub(),x.Vb(54,"p"),x.Ic(55,"Fusce pellentesque suscipit nibh."),x.Ub(),x.Vb(56,"p"),x.Ic(57,"Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Vb(58,"p"),x.Ic(59,"Vestibulum commodo felis quis tortor."),x.Ub(),x.Vb(60,"p"),x.Ic(61,"Ut aliquam sollicitudin leo."),x.Ub(),x.Vb(62,"p"),x.Ic(63,"Cras iaculis ultricies nulla."),x.Ub(),x.Vb(64,"p"),x.Ic(65,"Donec quis dui at dolor tempor interdum."),x.Ub(),x.Vb(66,"p"),x.Ic(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(68,"p"),x.Ic(69,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(70,"p"),x.Ic(71,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(72,"p"),x.Ic(73,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(74,"p"),x.Ic(75,"Cras ornare tristique elit."),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub()),2&e&&(x.Db(2),x.mc("ngModel",t.opened),x.Db(1),x.mc("nxValue",!0),x.Db(2),x.mc("nxValue",!1),x.Db(3),x.Kc("Opened: ",t.opened,""),x.Db(25),x.mc("opened",t.opened))},directives:[S,E.a,Q.p,Q.s,H.a,k,v,R,A],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),b),W=((p=function e(){n(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=x.Jb({type:p,selectors:[["sidepanel-light-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static","appearance","light",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(x.Vb(0,"nx-sidepanel-outer-container",0),x.Vb(1,"div",1),x.Vb(2,"nx-radio-toggle",2),x.cc("ngModelChange",function(e){return t.opened=e}),x.Vb(3,"nx-radio-toggle-button",3),x.Ic(4,"Open"),x.Ub(),x.Vb(5,"nx-radio-toggle-button",3),x.Ic(6,"Close"),x.Ub(),x.Ub(),x.Vb(7,"p"),x.Ic(8),x.Ub(),x.Vb(9,"p"),x.Vb(10,"i"),x.Ic(11,"Here is some example content that can be scrolled."),x.Ub(),x.Ub(),x.Vb(12,"p"),x.Vb(13,"i"),x.Ic(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Ub(),x.Vb(15,"p"),x.Vb(16,"i"),x.Ic(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),x.Ub(),x.Ub(),x.Vb(18,"p"),x.Vb(19,"i"),x.Ic(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),x.Ub(),x.Ub(),x.Vb(21,"p"),x.Vb(22,"i"),x.Ic(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Ub(),x.Vb(24,"p"),x.Vb(25,"i"),x.Ic(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),x.Ub(),x.Ub(),x.Vb(27,"p"),x.Vb(28,"i"),x.Ic(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),x.Ub(),x.Ub(),x.Vb(30,"p"),x.Vb(31,"i"),x.Ic(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Ub(),x.Ub(),x.Vb(33,"nx-sidepanel",4),x.cc("openedChange",function(e){return t.opened=e}),x.Vb(34,"nx-sidepanel-header"),x.Vb(35,"div",5),x.Ic(36," Sidepanel "),x.Qb(37,"button",6),x.Ub(),x.Ub(),x.Vb(38,"nx-sidepanel-content"),x.Vb(39,"div",7),x.Vb(40,"p",8),x.Ic(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(42,"p"),x.Ic(43,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(44,"p"),x.Ic(45,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(46,"p"),x.Ic(47,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(48,"p"),x.Ic(49,"Cras ornare tristique elit."),x.Ub(),x.Vb(50,"p"),x.Ic(51,"Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Vb(52,"p"),x.Ic(53,"Praesent placerat risus quis eros."),x.Ub(),x.Vb(54,"p"),x.Ic(55,"Fusce pellentesque suscipit nibh."),x.Ub(),x.Vb(56,"p"),x.Ic(57,"Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Vb(58,"p"),x.Ic(59,"Vestibulum commodo felis quis tortor."),x.Ub(),x.Vb(60,"p"),x.Ic(61,"Ut aliquam sollicitudin leo."),x.Ub(),x.Vb(62,"p"),x.Ic(63,"Cras iaculis ultricies nulla."),x.Ub(),x.Vb(64,"p"),x.Ic(65,"Donec quis dui at dolor tempor interdum."),x.Ub(),x.Vb(66,"p"),x.Ic(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(68,"p"),x.Ic(69,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(70,"p"),x.Ic(71,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(72,"p"),x.Ic(73,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(74,"p"),x.Ic(75,"Cras ornare tristique elit."),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub()),2&e&&(x.Db(2),x.mc("ngModel",t.opened),x.Db(1),x.mc("nxValue",!0),x.Db(2),x.mc("nxValue",!1),x.Db(3),x.Kc("Opened: ",t.opened,""),x.Db(25),x.mc("opened",t.opened))},directives:[S,E.a,Q.p,Q.s,H.a,k,v,R,A],styles:[".example-container[_ngcontent-%COMP%]{height:400px;background-color:var(--ui-02)}.main-content[_ngcontent-%COMP%]{padding:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),p),G=s("BYLl"),Y=s("Rmhm"),Z=((h=function e(){n(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=x.Jb({type:h,selectors:[["sidepanel-with-tabs-example"]],decls:81,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],["appearance","expert","mobileAccordion","false"],["label","First tab"],["label","Second tab"],["nxCopytext","normal"]],template:function(e,t){1&e&&(x.Vb(0,"nx-sidepanel-outer-container",0),x.Vb(1,"div",1),x.Vb(2,"nx-radio-toggle",2),x.cc("ngModelChange",function(e){return t.opened=e}),x.Vb(3,"nx-radio-toggle-button",3),x.Ic(4,"Open"),x.Ub(),x.Vb(5,"nx-radio-toggle-button",3),x.Ic(6,"Close"),x.Ub(),x.Ub(),x.Vb(7,"p"),x.Ic(8),x.Ub(),x.Vb(9,"p"),x.Vb(10,"i"),x.Ic(11,"Here is some example content that can be scrolled."),x.Ub(),x.Ub(),x.Vb(12,"p"),x.Vb(13,"i"),x.Ic(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Ub(),x.Vb(15,"p"),x.Vb(16,"i"),x.Ic(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),x.Ub(),x.Ub(),x.Vb(18,"p"),x.Vb(19,"i"),x.Ic(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),x.Ub(),x.Ub(),x.Vb(21,"p"),x.Vb(22,"i"),x.Ic(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Ub(),x.Vb(24,"p"),x.Vb(25,"i"),x.Ic(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),x.Ub(),x.Ub(),x.Vb(27,"p"),x.Vb(28,"i"),x.Ic(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),x.Ub(),x.Ub(),x.Vb(30,"p"),x.Vb(31,"i"),x.Ic(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Ub(),x.Ub(),x.Vb(33,"nx-sidepanel",4),x.cc("openedChange",function(e){return t.opened=e}),x.Vb(34,"nx-sidepanel-header"),x.Vb(35,"div",5),x.Ic(36," Sidepanel "),x.Qb(37,"button",6),x.Ub(),x.Ub(),x.Vb(38,"nx-sidepanel-content"),x.Vb(39,"div",7),x.Vb(40,"nx-tab-group",8),x.Vb(41,"nx-tab",9),x.Vb(42,"p"),x.Ic(43,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(44,"p"),x.Ic(45,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(46,"p"),x.Ic(47,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(48,"p"),x.Ic(49,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(50,"p"),x.Ic(51,"Cras ornare tristique elit."),x.Ub(),x.Vb(52,"p"),x.Ic(53,"Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Vb(54,"p"),x.Ic(55,"Praesent placerat risus quis eros."),x.Ub(),x.Vb(56,"p"),x.Ic(57,"Fusce pellentesque suscipit nibh."),x.Ub(),x.Vb(58,"p"),x.Ic(59,"Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Vb(60,"p"),x.Ic(61,"Vestibulum commodo felis quis tortor."),x.Ub(),x.Vb(62,"p"),x.Ic(63,"Ut aliquam sollicitudin leo."),x.Ub(),x.Vb(64,"p"),x.Ic(65,"Cras iaculis ultricies nulla."),x.Ub(),x.Vb(66,"p"),x.Ic(67,"Donec quis dui at dolor tempor interdum."),x.Ub(),x.Vb(68,"p"),x.Ic(69,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(70,"p"),x.Ic(71,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(72,"p"),x.Ic(73,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(74,"p"),x.Ic(75,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(76,"p"),x.Ic(77,"Cras ornare tristique elit."),x.Ub(),x.Ub(),x.Vb(78,"nx-tab",10),x.Vb(79,"p",11),x.Ic(80," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo "),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub()),2&e&&(x.Db(2),x.mc("ngModel",t.opened),x.Db(1),x.mc("nxValue",!0),x.Db(2),x.mc("nxValue",!1),x.Db(3),x.Kc("Opened: ",t.opened,""),x.Db(25),x.mc("opened",t.opened))},directives:[S,E.a,Q.p,Q.s,H.a,k,v,R,A,G.a,Y.a],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:384px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 0}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}.my-sidepanel[_ngcontent-%COMP%]     nx-tab-header{position:-webkit-sticky;position:sticky;top:0;padding-top:24px;background:var(--sidepanel-background-color)}"]}),h),$=((g=function e(){n(this,e),this.opened=!0}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=x.Jb({type:g,selectors:[["sidepanel-dark-example"]],decls:76,vars:5,consts:[[1,"example-container"],[1,"main-content"],["nxStyle","small",3,"ngModel","ngModelChange"],[3,"nxValue"],["position","static",1,"my-sidepanel",3,"opened","openedChange"],[1,"my-sidepanel-header"],["nxSidepanelCloseButton","","aria-label","Close Sidepanel"],[1,"my-sidepanel-content"],[1,"nx-margin-top-0"]],template:function(e,t){1&e&&(x.Vb(0,"nx-sidepanel-outer-container",0),x.Vb(1,"div",1),x.Vb(2,"nx-radio-toggle",2),x.cc("ngModelChange",function(e){return t.opened=e}),x.Vb(3,"nx-radio-toggle-button",3),x.Ic(4,"Open"),x.Ub(),x.Vb(5,"nx-radio-toggle-button",3),x.Ic(6,"Close"),x.Ub(),x.Ub(),x.Vb(7,"p"),x.Ic(8),x.Ub(),x.Vb(9,"p"),x.Vb(10,"i"),x.Ic(11,"Here is some example content that can be scrolled."),x.Ub(),x.Ub(),x.Vb(12,"p"),x.Vb(13,"i"),x.Ic(14,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Ub(),x.Vb(15,"p"),x.Vb(16,"i"),x.Ic(17,"Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus. Aliquam tincidunt mauris eu risus."),x.Ub(),x.Ub(),x.Vb(18,"p"),x.Vb(19,"i"),x.Ic(20,"Vestibulum auctor dapibus neque. Vestibulum auctor dapibus neque."),x.Ub(),x.Ub(),x.Vb(21,"p"),x.Vb(22,"i"),x.Ic(23,"Vivamus vestibulum ntulla nec ante. Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Ub(),x.Vb(24,"p"),x.Vb(25,"i"),x.Ic(26,"Praesent placerat risus quis eros. Praesent placerat risus quis eros."),x.Ub(),x.Ub(),x.Vb(27,"p"),x.Vb(28,"i"),x.Ic(29,"Fusce pellentesque suscipit nibh. Fusce pellentesque suscipit nibh."),x.Ub(),x.Ub(),x.Vb(30,"p"),x.Vb(31,"i"),x.Ic(32,"Integer vitae libero ac risus egestas placerat. Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Ub(),x.Ub(),x.Vb(33,"nx-sidepanel",4),x.cc("openedChange",function(e){return t.opened=e}),x.Vb(34,"nx-sidepanel-header"),x.Vb(35,"div",5),x.Ic(36," Sidepanel "),x.Qb(37,"button",6),x.Ub(),x.Ub(),x.Vb(38,"nx-sidepanel-content"),x.Vb(39,"div",7),x.Vb(40,"p",8),x.Ic(41,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(42,"p"),x.Ic(43,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(44,"p"),x.Ic(45,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(46,"p"),x.Ic(47,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(48,"p"),x.Ic(49,"Cras ornare tristique elit."),x.Ub(),x.Vb(50,"p"),x.Ic(51,"Vivamus vestibulum ntulla nec ante."),x.Ub(),x.Vb(52,"p"),x.Ic(53,"Praesent placerat risus quis eros."),x.Ub(),x.Vb(54,"p"),x.Ic(55,"Fusce pellentesque suscipit nibh."),x.Ub(),x.Vb(56,"p"),x.Ic(57,"Integer vitae libero ac risus egestas placerat."),x.Ub(),x.Vb(58,"p"),x.Ic(59,"Vestibulum commodo felis quis tortor."),x.Ub(),x.Vb(60,"p"),x.Ic(61,"Ut aliquam sollicitudin leo."),x.Ub(),x.Vb(62,"p"),x.Ic(63,"Cras iaculis ultricies nulla."),x.Ub(),x.Vb(64,"p"),x.Ic(65,"Donec quis dui at dolor tempor interdum."),x.Ub(),x.Vb(66,"p"),x.Ic(67,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."),x.Ub(),x.Vb(68,"p"),x.Ic(69,"Aliquam tincidunt mauris eu risus."),x.Ub(),x.Vb(70,"p"),x.Ic(71,"Vestibulum auctor dapibus neque."),x.Ub(),x.Vb(72,"p"),x.Ic(73,"Nunc dignissim risus id metus."),x.Ub(),x.Vb(74,"p"),x.Ic(75,"Cras ornare tristique elit."),x.Ub(),x.Ub(),x.Ub(),x.Ub(),x.Ub()),2&e&&(x.Db(2),x.mc("ngModel",t.opened),x.Db(1),x.mc("nxValue",!0),x.Db(2),x.mc("nxValue",!1),x.Db(3),x.Kc("Opened: ",t.opened,""),x.Db(25),x.mc("opened",t.opened))},directives:[S,E.a,Q.p,Q.s,H.a,k,v,R,A],styles:[".example-container[_ngcontent-%COMP%]{height:400px}.main-content[_ngcontent-%COMP%]{padding-right:24px}.my-sidepanel[_ngcontent-%COMP%]{width:240px}.my-sidepanel-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:32px 32px 24px}.my-sidepanel-content[_ngcontent-%COMP%]{padding:0 32px 32px}"]}),g),ee=((m=function(){function e(){n(this,e)}return t(e,null,[{key:"components",value:function(){return{"sidepanel-floating":X,"sidepanel-static":K,"sidepanel-light":W,"sidepanel-with-tabs":Z,"sidepanel-dark":$}}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275mod=x.Nb({type:m}),m.\u0275inj=x.Mb({imports:[[J,U.a,Q.k,V.c,z.b]]}),m)}}])}();