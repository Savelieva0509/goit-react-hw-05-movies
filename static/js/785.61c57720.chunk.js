"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{197:function(e,t,n){n.d(t,{Cm:function(){return s},Hg:function(){return i},TW:function(){return u},hG:function(){return o},qF:function(){return c}});var r=n(388),a="946436ca4073577028dd0f99867a7b5f",i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a))},c=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=1"))},o=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US"))},u=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},785:function(e,t,n){n.r(t);var r=n(439),a=n(204),i=n(791),c=n(689),o=n(197),u=n(184);t.default=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],h=(0,i.useState)(!1),f=(0,r.Z)(h,2),p=f[0],l=f[1],d=(0,c.UO)().movieId,g=(0,i.useState)(null),m=(0,r.Z)(g,1)[0];if((0,i.useEffect)((function(){try{l(!0),(0,o.Cm)(d).finally((function(){return l(!1)})).then((function(e){s(e.data.results)}))}catch(e){m(e),l(!1)}}),[m,d]),n)return(0,u.jsxs)(u.Fragment,{children:[p&&(0,u.jsx)(a.Z,{}),n.length>0?(0,u.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Author:",n]}),(0,u.jsxs)("p",{children:[" ",r]})]},t)}))}):(0,u.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=785.61c57720.chunk.js.map