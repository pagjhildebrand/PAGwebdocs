(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return r?a.a.createElement(h,c(c({ref:t},d),{},{components:r})):a.a.createElement(h,c({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},155:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/WPadminblank-95c600df3fe92e446ed089da064c8a1d.png"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(101)),i={title:"Create and edit Posts",sidebar_label:"Create & edit Posts",slug:"post-prod"},c={unversionedId:"post-prod",id:"post-prod",isDocsHomePage:!1,title:"Create and edit Posts",description:"Posts are the default WordPress content vehicle, unlike Pages - which are index/landing pages that lead to deeper content. Posts are that deeper content. The WP admin internace contains key fields that define the content such as hed, summary/excerpt, featured images & video, plus enhanced data (categories, tags, etc.).",source:"@site/docs/post-prod.md",sourceDirName:".",slug:"/post-prod",permalink:"/docs/post-prod",editUrl:"https://codesandbox.io/s/pagwebdocs-6pv2u?file=/docs/post-prod.md",version:"current",sidebar_label:"Create & edit Posts",frontMatter:{title:"Create and edit Posts",sidebar_label:"Create & edit Posts",slug:"post-prod"},sidebar:"someSidebar",previous:{title:"Event Workflow",permalink:"/docs/"},next:{title:"Add videos to Posts",permalink:"/docs/video-prod"}},s=[{value:"Required fields",id:"required-fields",children:[{value:"A) Title",id:"a-title",children:[]},{value:"B) Body",id:"b-body",children:[]},{value:"C) Excerpt",id:"c-excerpt",children:[]},{value:"D) Status",id:"d-status",children:[]},{value:"E) Category",id:"e-category",children:[]},{value:"F) Tags",id:"f-tags",children:[]},{value:"G) Featured image",id:"g-featured-image",children:[]}]}],d={toc:s};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Posts are the default WordPress content vehicle, unlike Pages - which are index/landing pages that lead to deeper content. Posts ",Object(o.b)("em",{parentName:"p"},"are")," that deeper content. The WP admin internace contains key fields that define the content such as hed, summary/excerpt, featured images & video, plus enhanced data (categories, tags, etc.)."),Object(o.b)("h2",{id:"required-fields"},"Required fields"),Object(o.b)("h3",{id:"a-title"},"A) Title"),Object(o.b)("p",null,"This is the hed field. This also translates directly into the slug, which populates the permalink."),Object(o.b)("h3",{id:"b-body"},"B) Body"),Object(o.b)("p",null,"Body text can be input using WYSIWYG or text view option. HTML can be added using the text option."),Object(o.b)("h3",{id:"c-excerpt"},"C) Excerpt"),Object(o.b)("p",null,"This is the summary blurb in case you want to customize. Otherwise it will just use the first 160 characters of the body text. The obvious example of when you'd want to write a custom excerpt is when your article begins with table data, like in the RTA Status Report."),Object(o.b)("p",null,"NOTE: This option may not be visible for all users by default. If you don't see it in the post admin window, open the Screen Options dropdown at the top right of the page and check the Excerpt box."),Object(o.b)("h3",{id:"d-status"},"D) Status"),Object(o.b)("p",null,"Article status, live date, and public/private specifications go here."),Object(o.b)("h3",{id:"e-category"},"E) Category"),Object(o.b)("p",null,"You can have one or multiple categories. The first one you select will be the 'primary' but you can change that as needed."),Object(o.b)("h3",{id:"f-tags"},"F) Tags"),Object(o.b)("p",null,"Adds keyword context at a more granular level than the categories."),Object(o.b)("h3",{id:"g-featured-image"},"G) Featured image"),Object(o.b)("p",null,"Exactly what it says. Upload new or choose from the library."),Object(o.b)("p",null,"Featured Video workflow is detailed ",Object(o.b)("a",{parentName:"p",href:"/docs/video-prod"},"here")),Object(o.b)("p",null,Object(o.b)("img",{alt:"WP admin",src:r(155).default})))}l.isMDXComponent=!0}}]);