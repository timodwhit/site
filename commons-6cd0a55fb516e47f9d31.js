(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=function(e){e.siteTitle;return a.a.createElement("header",{id:"site-header"},a.a.createElement("div",{id:"logo"},a.a.createElement(o.Link,{to:"/"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1594.31 566.62"},a.a.createElement("defs",null),a.a.createElement("g",{id:"logo","data-name":"Logo with Name"},a.a.createElement("rect",{class:"logo--primary",x:"43.34",y:"40",width:"550",height:"495.78"}),a.a.createElement("g",{id:"logo-square"},a.a.createElement("polygon",{class:"logo--secondary",points:"503.38 48.45 563.38 48.45 383.38 518.45 323.38 518.45 503.38 48.45"}),a.a.createElement("path",{class:"logo--secondary",d:"M155,85.74V216.92l51.3.7L221.21,257l-66.2.86V417.28c0,36.65,10.39,57.42,40.32,57.42,5,0,9.57-.24,13.65-.62L372.57,48.7l60.13-.12-180,469.85-45.39,0s-22.3.29-26,.29c-25.05,0-45.21-7.94-58-22.6-15.27-15.88-20.77-42.15-20.77-77V257.84H56.66V216.92h45.82L101.21,85.74Z"})),a.a.createElement("g",{id:"logo-name"},a.a.createElement("path",{class:"logo--primary",d:"M656.62,94.82h-53V68h135.3V94.82h-53V267.63H656.62Z"}),a.a.createElement("path",{class:"logo--primary",d:"M763.34,68h29.28V267.63H763.34Z"}),a.a.createElement("path",{class:"logo--primary",d:"M812.76,68h33.07l55.44,130.12L955.65,68h27.69V267.63H954.06V143.13h-.66L912.93,239H888.52l-40.47-95.88h-.53v124.5H812.76Z"}),a.a.createElement("path",{class:"logo--primary",d:"M606.37,318.37h30.89l30.37,141.92h.53l37.53-141.92h21.22L764.3,460.29h.53l30.51-141.92h30.89L778,518H753.43L716.56,374H716L679,518h-24.4Z"}),a.a.createElement("path",{class:"logo--primary",d:"M924.58,430.77h-76.7V518H818.61V318.37h29.27V404h76.7V318.37h29.28V518H924.58Z"}),a.a.createElement("path",{class:"logo--primary",d:"M973.34,318.37h29.28V518H973.34Z"}),a.a.createElement("path",{class:"logo--primary",d:"M1071,345.19h-53V318.37h135.3v26.82h-53V518H1071Z"}),a.a.createElement("path",{class:"logo--primary",d:"M1144.09,318.37h27.59l87.57,141.92h.53V318.37h29.28V518h-27.73l-87.44-141.92h-.53V518h-29.27Z"}),a.a.createElement("path",{class:"logo--primary",d:"M1309.09,318.37h123.53v28.47h-94.26V404h80.46v26.81h-80.46v58.76h94.26V518H1309.09Z"}),a.a.createElement("path",{class:"logo--primary",d:"M1471.54,435.87l-58.2-117.5h31l41,88.57,41-88.57h31l-58.23,117.48V518h-27.63Z"})))))),a.a.createElement("div",{className:"header-nav"},a.a.createElement("ul",{className:"nav-ul"},a.a.createElement("li",{className:"nav-li"},a.a.createElement(o.Link,{className:"li-link",to:"/blog"},"Blog")),a.a.createElement("li",{className:"nav-li"},a.a.createElement(o.Link,{className:"li-link",to:"/about"},"About")))))};i.defaultProps={siteTitle:""};var c=i;t.a=function(e){var t=e.children,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{siteTitle:r.site.siteMetadata.title}),a.a.createElement("main",null,t))}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],i[l[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));var n,a,o,i,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),f=r("bmMU"),p=r.n(f),d=r("q1tI"),h=r.n(d),m=r("YVoz"),y=r.n(m),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",A="href",O="http-equiv",C="innerHTML",S="itemprop",j="name",L="property",k="rel",M="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",V="encodeSpecialCharacters",H="onChangeClientState",R="titleTemplate",q=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=G(e,T.TITLE),r=G(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,I);return t||n||void 0},W=function(e){return G(e,H)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,n),ue(T.HTML,a),ce(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,o),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[x[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[h.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Z(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=x[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Z(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(g,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,u,n),style:pe(T.STYLE,l,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},he=s()((function(e){return{baseTag:Q([A,P],e),bodyAttributes:J(b,e),defer:G(e,N),encode:G(e,V),htmlAttributes:J(g,e),linkTags:$(T.LINK,[k,A],e),metaTags:$(T.META,[j,w,O,L,S],e),noscriptTags:$(T.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:$(T.SCRIPT,[M,C],e),styleTags:$(T.STYLE,[E],e),title:K(e),titleAttributes:J(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),me=(a=he,i=o=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},o)});case T.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(z(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz");function c(e){var t=e.description,r=e.lang,n=e.meta,c=e.title,u=Object(i.useStaticQuery)("712016698").site,l=t||u.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=commons-6cd0a55fb516e47f9d31.js.map