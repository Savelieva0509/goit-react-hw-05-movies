"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{197:function(t,e,n){n.d(e,{Cm:function(){return s},Hg:function(){return o},TW:function(){return u},hG:function(){return i},qF:function(){return c}});var a=n(388),r="946436ca4073577028dd0f99867a7b5f",o=function(){var t=a.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r));return console.log(t),t},c=function(t){return a.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(t,"&page=1"))},i=function(t){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r,"&language=en-US"))},u=function(t){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r,"&language=en-US"))},s=function(t){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))}},478:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(87),r=n(689),o="MovieList_link__CKaf2",c=n(184),i=function(t){var e=t.movies,n=(0,r.TH)();return console.log(n.state),(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title;return(0,c.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:n},className:o,children:r},e)}))})}},290:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var a=n(439),r=n(791),o=n(478),c=n(197),i=n(204),u="Home_title__L087v",s="Home_container__w+u63",f=n(184);var l=function(){var t=(0,r.useState)([]),e=(0,a.Z)(t,2),n=e[0],l=e[1],g=(0,r.useState)(!1),h=(0,a.Z)(g,2),m=h[0],v=h[1],d=(0,r.useState)(null),p=(0,a.Z)(d,1)[0];return(0,r.useEffect)((function(){try{v(!0),(0,c.Hg)().finally((function(){return v(!1)})).then((function(t){l(t.data.results)}))}catch(t){p(t),v(!1)}}),[p]),(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("h1",{className:u,children:"Trending today"}),m&&(0,f.jsx)(i.Z,{}),n&&(0,f.jsx)(o.Z,{movies:n})]})}}}]);
//# sourceMappingURL=290.e71a56c7.chunk.js.map