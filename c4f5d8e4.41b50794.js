(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{108:function(e,a,t){"use strict";var n=t(2),r=t(0),l=t.n(r),o=t(96),i=t(97),c=t(94),s=t(114),m=t(109),u=t(103),d=t(115),b=t(105),h=t(106),g=t(99),v=t(48),E=t.n(v),p=t(110),f=t(100);a.a=function(){var e,a,t=Object(c.a)(),v=t.siteConfig.themeConfig,w=v.navbar,N=(w=void 0===w?{}:w).title,k=void 0===N?"":N,_=w.items,O=void 0===_?[]:_,j=w.hideOnScroll,y=void 0!==j&&j,x=v.colorMode,C=(x=void 0===x?{}:x).disableSwitch,S=void 0!==C&&C,I=t.isClient,H=Object(r.useState)(!1),D=H[0],L=H[1],M=Object(r.useState)(!1),A=M[0],F=M[1],G=Object(u.a)(),T=G.isDarkTheme,B=G.setLightTheme,P=G.setDarkTheme,R=Object(d.a)(y),U=R.navbarRef,z=R.isNavbarVisible,V=Object(g.a)(),W=V.logoLink,J=V.logoLinkProps,q=V.logoImageUrl,K=V.logoAlt;Object(b.a)(D);var Q=Object(r.useCallback)((function(){L(!0)}),[L]),X=Object(r.useCallback)((function(){L(!1)}),[L]),Y=Object(r.useCallback)((function(e){return e.target.checked?P():B()}),[B,P]),Z=Object(h.a)();Object(r.useEffect)((function(){Z===h.b.desktop&&L(!1)}),[Z]);var $=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(O),ee=$.leftItems,ae=$.rightItems;return l.a.createElement("nav",{ref:U,className:Object(o.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":D},e[E.a.navbarHideable]=y,e[E.a.navbarHidden]=!z,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=O&&0!==O.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Q,onKeyDown:Q},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(i.a,Object(n.a)({className:"navbar__brand",to:W},J),null!=k&&l.a.createElement("strong",{className:Object(o.a)("navbar__title",(a={},a[E.a.hideLogoText]=A,a))},k))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},l.a.createElement("div",{className:E.a.searchBarMargin},l.a.createElement(s.a,{handleSearchBarToggle:F,isSearchBarExpanded:A})),ee.map((function(e,a){return l.a.createElement(p.a,Object(n.a)({},e,{key:a}))})),l.a.createElement("div",{className:"githubStarLink"},l.a.createElement(f.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),ae.map((function(e,a){return l.a.createElement(p.a,Object(n.a)({},e,{key:a}))})),!S&&l.a.createElement(m.a,{className:E.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:Y}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(i.a,Object(n.a)({className:"navbar__brand",onClick:X,to:W},J),null!=q&&l.a.createElement("img",{key:I,className:"navbar__logo",src:q,alt:K}),null!=k&&l.a.createElement("strong",{className:"navbar__title"},k)),!S&&D&&l.a.createElement(m.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:Y})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},O.map((function(e,a){return l.a.createElement(p.a,Object(n.a)({mobile:!0},e,{onClick:X,key:a}))})))))))}},112:function(e,a,t){"use strict";t(2),t(6);var n=t(0),r=t.n(n),l=t(96),o=t(97),i=t(94),c=t(95),s=(t(49),t(100));t(99);a.a=function(){var e=Object(i.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},m=(n.copyright,n.links,n.logo),u=void 0===m?{}:m,d=(Object(c.a)(u.src),Object(c.a)("/img/swmLogo.svg"));return t?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(o.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=d&&r.a.createElement("img",{className:"navbar__logo",src:d,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(s.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null}},81:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),l=t.n(r),o=t(127),i=t.n(o),c=t(107),s=t(97),m=t(94),u=t(95),d=t(82),b=t.n(d),h=[{title:l.a.createElement(l.a.Fragment,null,"Use platform native gesture recognizers"),description:l.a.createElement(l.a.Fragment,null,"With Gesture Handler touch stream handling happens on the UI thread and uses APIs native to each platform.")},{title:l.a.createElement(l.a.Fragment,null,"Works with Animated API"),description:l.a.createElement(l.a.Fragment,null,"Pass and process gesture specific data to React Native's Animated library and build smooth gesture based experiences with useNativeDriver flag.")},{title:l.a.createElement(l.a.Fragment,null,"Use cross platform components built with Gesture Handler"),description:l.a.createElement(l.a.Fragment,null,"Gesture Handler library ships with a set of components that aims to provide best possible interations such as SwipeableRow or Drawer. More components to come!")},{title:l.a.createElement(l.a.Fragment,null,"Available in Expo.io"),description:l.a.createElement(l.a.Fragment,null,"Gesture Handler is available for you to use with"," ",l.a.createElement("a",{href:"https://expo.io/"},"Expo")," and to play with on"," ",l.a.createElement("a",{href:"https://snack.expo.io/"},"Snack"),".")}];function g(e){var a=e.title,t=e.description;return l.a.createElement("div",{className:"col col--6 info-box"},l.a.createElement("h3",null,a),l.a.createElement("p",null,t))}function v(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return l.a.createElement("header",{className:i()("hero hero--secondary",b.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-hero"},l.a.createElement("div",{className:"col col--5 hero-content"},l.a.createElement("h1",{className:"hero__title"},a.title),l.a.createElement("p",{className:"hero__p"},a.tagline),l.a.createElement("div",{className:i()("hero-buttons",b.a.buttons)},l.a.createElement(s.a,{className:i()("button button--primary button--lg",b.a.getStarted),to:Object(u.a)("docs/")},"View Docs"))),l.a.createElement("div",{className:"col col--7 hero-image",style:{backgroundImage:"url(img/pinch-reworked.svg)"}}))))}function E(){return l.a.createElement("div",{className:"col col--12 section-boxes"},h&&h.length>0&&l.a.createElement("div",{className:"row box-container"},h.map((function(e,a){return l.a.createElement(g,Object(n.a)({key:a},e))}))))}a.default=function(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return l.a.createElement(c.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},l.a.createElement(v,null),l.a.createElement("main",null,l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row--box-section"},l.a.createElement(E,null)))),l.a.createElement("section",null,l.a.createElement("div",{className:"container container--center"},l.a.createElement("div",{className:"row row--center"},l.a.createElement("div",{className:"col col--7 text--center col--bottom-section"},l.a.createElement("h2",null,"Try it out"),l.a.createElement("p",null,"Check out the documentation and learn how to quickly get up and running with Gesture Handler. Take a look at our API guides to get familiarize with it."),l.a.createElement("p",null,"Try our showcase app or"," ",l.a.createElement("a",{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"},"get it here using Expo"),". Or just"," ",l.a.createElement(s.a,{to:Object(u.a)("docs/example/")},"go to this page")," ","to see how you can run it locally with React Native on both Android and iOS."),l.a.createElement("div",{className:"item screenshot-container"},l.a.createElement("img",{src:"gifs/sampleswipeable.gif",alt:"Gesture handler screenshot"}))))))))}}}]);