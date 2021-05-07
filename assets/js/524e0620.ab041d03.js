(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(101)),i={title:"Alert Tab",sidebar_label:"Alert Tab",slug:"alert-tab"},s={unversionedId:"alert-tab",id:"alert-tab",isDocsHomePage:!1,title:"Alert Tab",description:"The bar across the top is known as the alert bar or alert tab. It's used on the homepage and inside index pages. And it's been commonly used on both PAG and RTA as more of a content area, not just as traditional alerts. Two things must be done to publish updates:",source:"@site/docs/alert-tab.md",sourceDirName:".",slug:"/alert-tab",permalink:"/docs/alert-tab",editUrl:"https://codesandbox.io/s/pagwebdocs-6pv2u?file=/docs/alert-tab.md",version:"current",sidebar_label:"Alert Tab",frontMatter:{title:"Alert Tab",sidebar_label:"Alert Tab",slug:"alert-tab"},sidebar:"someSidebar",previous:{title:"Hooks & Elements",permalink:"/docs/hooks-elements"},next:{title:"Web Change Order Form",permalink:"/docs/request-form"}},l=[{value:"Activate the hook",id:"activate-the-hook",children:[]},{value:"Update the content",id:"update-the-content",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The bar across the top is known as the alert bar or alert tab. It's used on the homepage and inside index pages. And it's been commonly used on both PAG and RTA as more of a content area, not just as traditional alerts. Two things must be done to publish updates:"),Object(o.b)("h3",{id:"activate-the-hook"},"Activate the hook"),Object(o.b)("p",null,"The tab on all PAG/RTA sites is published using a ",Object(o.b)("a",{parentName:"p",href:"/docs/hooks-elements"},"hook/element"),". In the WP admin, navigate to ",Object(o.b)("em",{parentName:"p"},"Appearance > Elements"),", then find the Alert Tab hook. For the hook to be live, the Status needs to be Published and Visibility set to Public. Use that same workflow to deactivate or unpublish the hook."),Object(o.b)("h3",{id:"update-the-content"},"Update the content"),Object(o.b)("p",null,"Hooks are fine with standard HTML/CSS. Hooks can also run shortcodes and PHP, but you need to specify that capability with a checkbox. "),Object(o.b)("p",null,"NOTE: Each hook also has a area on the admin page to set the display rules for where it appears. You can select placements for the hook to appear or not appear on individual pages/posts, specific page/post types, specific categories of pages/posts, etc. So for example: The alert tab for the PAG homepage will have just the homepage specified in the display rules.  Breadcrumbs also appear via hook and are set to appear on all pages except the calendar page and homepage. These rules should already be in place and shouldn't require any action if it's just a content update."))}p.isMDXComponent=!0}}]);