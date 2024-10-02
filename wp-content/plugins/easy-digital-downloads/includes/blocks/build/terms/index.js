(()=>{"use strict";var e,o={874:(e,o,a)=>{const l=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.components,s=window.wp.serverSideRender;var i=a.n(s);const d=window.wp.blockEditor,c=[{value:"none",label:(0,n.__)("None","easy-digital-downloads")},{value:"center",label:(0,n.__)("Center","easy-digital-downloads")},{value:"left",label:(0,n.__)("Left","easy-digital-downloads")},{value:"right",label:(0,n.__)("Right","easy-digital-downloads")}],m=[{value:"ASC",label:(0,n.__)("Ascending","easy-digital-downloads")},{value:"DESC",label:(0,n.__)("Descending","easy-digital-downloads")}],g=[{value:"thumbnail",label:(0,n.__)("Thumbnail","easy-digital-downloads")},{value:"medium",label:(0,n.__)("Medium","easy-digital-downloads")},{value:"large",label:(0,n.__)("Large","easy-digital-downloads")}],w=[{value:"download_category",label:(0,n.__)("Download Categories","easy-digital-downloads")},{value:"download_tag",label:(0,n.__)("Download Tags","easy-digital-downloads")}],h=JSON.parse('{"u2":"edd/terms","qv":"category"}'),u={button:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"})),cart:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})),products:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})),"yes-alt":(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})),download:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"edd-blocks__icon-downloads"},(0,t.createElement)("path",{fillRule:"evenodd",d:"M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z",clipRule:"evenodd"})),unlock:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})),"editor-table":(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"})),money:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"})),id:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})),category:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"edd-blocks__icon"},(0,t.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}))};var v;(0,l.registerBlockType)(h.u2,{icon:(v=h.qv,u[v]),edit:function(e){let{attributes:o,setAttributes:a}=e;const l=e=>o=>a({[e]:o}),s=[{value:"count",label:(0,n.__)("Count","easy-digital-downloads")},{value:"id",label:(0,n.__)("ID","easy-digital-downloads")},{value:"name",label:(0,n.__)("Name","easy-digital-downloads")},{value:"slug",label:(0,n.__)("Slug","easy-digital-downloads")}];return(0,t.createElement)("div",(0,d.useBlockProps)(),(0,t.createElement)(d.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Term Block Settings","easy-digital-downloads")},(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Select Taxonomy","easy-digital-downloads"),value:o.taxonomy,options:w,onChange:l("taxonomy")}),(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Order By","easy-digital-downloads"),value:o.orderby,options:s,onChange:l("orderby")}),(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Order","easy-digital-downloads"),value:o.order,options:m,onChange:l("order")}),(0,t.createElement)(r.RangeControl,{label:(0,n.__)("Number of Columns","easy-digital-downloads"),value:o.columns,onChange:l("columns"),min:1,max:6}),(0,t.createElement)(r.ToggleControl,{label:(0,n.__)("Show Empty Categories","easy-digital-downloads"),checked:!!o.show_empty,onChange:l("show_empty")})),(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Individual Term Settings","easy-digital-downloads"),initialOpen:!1},(0,t.createElement)(r.ToggleControl,{label:(0,n.__)("Show Title","easy-digital-downloads"),checked:!!o.title,onChange:l("title")}),(0,t.createElement)(r.ToggleControl,{label:(0,n.__)("Show Thumbnails","easy-digital-downloads"),checked:!!o.thumbnails,onChange:l("thumbnails")}),!!o.thumbnails&&(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Image Size","easy-digital-downloads"),value:o.image_size,options:g,onChange:l("image_size")}),!!o.thumbnails&&(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Image Alignment","easy-digital-downloads"),value:o.image_alignment,options:c,onChange:l("image_alignment")}),(0,t.createElement)(r.ToggleControl,{label:(0,n.__)("Show Description","easy-digital-downloads"),checked:!!o.description,onChange:l("description")}),(0,t.createElement)(r.ToggleControl,{label:(0,n.__)("Show Count","easy-digital-downloads"),checked:!!o.count,onChange:l("count")}))),(0,t.createElement)(r.Disabled,null,(0,t.createElement)(i(),{block:"edd/terms",attributes:{...o}})))}})}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,l),n.exports}l.m=o,e=[],l.O=(o,a,t,n)=>{if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],t=e[c][1],n=e[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&n||r>=n)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(s=!1,n<r&&(r=n));if(s){e.splice(c--,1);var d=t();void 0!==d&&(o=d)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,t,n]},l.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return l.d(o,{a:o}),o},l.d=(e,o)=>{for(var a in o)l.o(o,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={996:0,699:0};l.O.j=o=>0===e[o];var o=(o,a)=>{var t,n,r=a[0],s=a[1],i=a[2],d=0;if(r.some((o=>0!==e[o]))){for(t in s)l.o(s,t)&&(l.m[t]=s[t]);if(i)var c=i(l)}for(o&&o(a);d<r.length;d++)n=r[d],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(c)},a=self.webpackChunkedd_blocks=self.webpackChunkedd_blocks||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))})();var t=l.O(void 0,[699],(()=>l(874)));t=l.O(t)})();