(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var i=o[c];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue3_messages/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"02b0":function(e,t,o){},"0bc2":function(e,t,o){"use strict";o("96b7")},1690:function(e,t,o){},"26ea":function(e,t,o){},"3b94":function(e,t,o){},4740:function(e,t,o){"use strict";o("26ea")},5029:function(e,t,o){},5056:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("d3b7"),o("159b"),o("b0c0");var n=o("7a23"),s={class:"app"};function r(e,t,o,r,a,c){var i=Object(n["C"])("navbar"),u=Object(n["C"])("router-view");return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(i),Object(n["h"])("div",s,[Object(n["j"])(u)])],64)}var a={style:{float:"right"}};function c(e,t,o,s,r,c){return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["h"])("ul",null,[Object(n["h"])("li",null,[Object(n["h"])("a",{class:"active",onClick:t[0]||(t[0]=function(t){return e.$router.push("/")})},"Home")]),Object(n["h"])("li",null,[Object(n["h"])("a",{onClick:t[1]||(t[1]=function(t){return e.$router.push("/posts")})},"Posts")]),Object(n["h"])("li",null,[Object(n["h"])("a",{onClick:t[2]||(t[2]=function(t){return e.$router.push("/store")})},"PostsWithStore")]),Object(n["h"])("li",null,[Object(n["h"])("a",{onClick:t[3]||(t[3]=function(t){return e.$router.push("/composition")})},"CompositionAPI")]),Object(n["h"])("li",a,[Object(n["h"])("a",{onClick:t[4]||(t[4]=function(t){return e.$router.push("/about")})},"About")])])])}var i={},u=(o("4740"),o("d959")),l=o.n(u);const p=l()(i,[["render",c],["__scopeId","data-v-2c945cde"]]);var d=p,b={components:{Navbar:d}};const f=l()(b,[["render",r]]);var j=f,O=o("6c02"),m=Object(n["h"])("h3",null,"Welcome!",-1),h=[m];function v(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("div",null,h)}var g={};const P=l()(g,[["render",v]]);var y=P,_={class:"app__btns"},S=Object(n["i"])(" Создать пост "),C={key:1},w={ref:"observer"},V={key:2};function k(e,t,o,s,r,a){var c=Object(n["C"])("my-button"),i=Object(n["C"])("my-input"),u=Object(n["C"])("my-select"),l=Object(n["C"])("post-form"),p=Object(n["C"])("my-dialog"),d=Object(n["C"])("post-list"),b=Object(n["C"])("my-pages");return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["h"])("div",_,[Object(n["j"])(c,{onClick:a.showDialog,class:"create-post__btn"},{default:Object(n["I"])((function(){return[S]})),_:1},8,["onClick"]),Object(n["j"])(i,{modelValue:r.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.searchQuery=e}),class:"search-input",placeholder:"Search"},null,8,["modelValue"]),Object(n["j"])(u,{modelValue:r.selectedPostsPresentation,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.selectedPostsPresentation=e}),options:r.postsPresentationOptions},null,8,["modelValue","options"]),Object(n["j"])(u,{modelValue:r.selectedSort,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.selectedSort=e}),options:r.sortOptions},null,8,["modelValue","options"])]),Object(n["j"])(p,{show:r.dialogVisible,"onUpdate:show":t[3]||(t[3]=function(e){return r.dialogVisible=e})},{default:Object(n["I"])((function(){return[Object(n["j"])(l,{onCreatePost:a.createPost},null,8,["onCreatePost"])]})),_:1},8,["show"]),r.isPostsLoading?(Object(n["u"])(),Object(n["g"])("div",C,"Идет загрузка...")):(Object(n["u"])(),Object(n["e"])(d,{key:0,posts:a.sortedAndSearchedPosts,onRemovePost:a.removePost},null,8,["posts","onRemovePost"])),Object(n["h"])("div",w,null,512),"pagination"===r.selectedPostsPresentation||""===r.selectedPostsPresentation?(Object(n["u"])(),Object(n["g"])("div",V,[Object(n["j"])(b,{pageNumber:r.pageNumber,"onUpdate:pageNumber":t[4]||(t[4]=function(e){return r.pageNumber=e}),totalPages:r.totalPages},null,8,["pageNumber","totalPages"])])):Object(n["f"])("",!0)])}var N=o("2909"),x=o("1da1"),I=(o("96cf"),o("4de4"),o("99af"),o("4e82"),o("caad"),o("2532"),o("bc3a")),L=o.n(I),M=function(e){return Object(n["x"])("data-v-aacc0dae"),e=e(),Object(n["v"])(),e},Q={key:0},U=M((function(){return Object(n["h"])("h3",null,"Список сообщений",-1)})),R={key:1};function D(e,t,o,s,r,a){var c=Object(n["C"])("post-item");return o.posts.length>0?(Object(n["u"])(),Object(n["g"])("div",Q,[U,Object(n["j"])(n["b"],{name:"post-list"},{default:Object(n["I"])((function(){return[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(o.posts,(function(e){return Object(n["u"])(),Object(n["e"])(c,{post:e,key:e.id,onRemovePost:a.removePost},null,8,["post","onRemovePost"])})),128))]})),_:1})])):(Object(n["u"])(),Object(n["g"])("h3",R," Список сообщений пуст "))}var $=function(e){return Object(n["x"])("data-v-17225f77"),e=e(),Object(n["v"])(),e},A={class:"post"},z=$((function(){return Object(n["h"])("strong",null,"ID:",-1)})),F=$((function(){return Object(n["h"])("strong",null,"Название:",-1)})),E=$((function(){return Object(n["h"])("strong",null,"Описание:",-1)})),B={class:"post__btns"},T=Object(n["i"])("Открыть"),J=Object(n["i"])("Удалить");function q(e,t,o,s,r,a){var c=Object(n["C"])("my-button");return Object(n["u"])(),Object(n["g"])("div",A,[Object(n["h"])("div",null,[Object(n["h"])("div",null,[z,Object(n["i"])(" "+Object(n["F"])(o.post.id),1)]),Object(n["h"])("div",null,[F,Object(n["i"])(" "+Object(n["F"])(o.post.title),1)]),Object(n["h"])("div",null,[E,Object(n["i"])(" "+Object(n["F"])(o.post.body),1)])]),Object(n["h"])("div",B,[Object(n["j"])(c,{class:"post-btn",onClick:t[0]||(t[0]=function(t){return e.$router.push("/posts/".concat(o.post.id))})},{default:Object(n["I"])((function(){return[T]})),_:1}),Object(n["j"])(c,{class:"post-btn",onClick:a.removePost},{default:Object(n["I"])((function(){return[J]})),_:1},8,["onClick"])])])}var H={props:{post:{type:Object,required:!0}},methods:{removePost:function(){this.$emit("removePost",this.post)}}};o("96c0");const K=l()(H,[["render",q],["__scopeId","data-v-17225f77"]]);var W=K,G={components:{PostItem:W},props:{posts:{required:!0,type:Array}},methods:{removePost:function(e){this.$emit("removePost",e)}}};o("c8e7");const X=l()(G,[["render",D],["__scopeId","data-v-aacc0dae"]]);var Y=X,Z=function(e){return Object(n["x"])("data-v-5c5a8b76"),e=e(),Object(n["v"])(),e},ee=Z((function(){return Object(n["h"])("h3",null,"Создание поста",-1)})),te=Object(n["i"])(" Создать ");function oe(e,t,o,s,r,a){var c=Object(n["C"])("my-input"),i=Object(n["C"])("my-button"),u=Object(n["D"])("focus");return Object(n["u"])(),Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["K"])((function(){}),["prevent"]))},[ee,Object(n["J"])(Object(n["j"])(c,{modelValue:r.post.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.post.title=e}),type:"text",placeholder:"Название",class:"dialog-input"},null,8,["modelValue"]),[[u]]),Object(n["j"])(c,{modelValue:r.post.body,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.post.body=e}),type:"text",placeholder:"Описание",class:"dialog-input"},null,8,["modelValue"]),Object(n["j"])(i,{onClick:a.createPost,class:"form__btn"},{default:Object(n["I"])((function(){return[te]})),_:1},8,["onClick"])],32)}var ne={data:function(){return{post:{title:"",body:""}}},methods:{createPost:function(){this.post.id=Date.now(),this.$emit("createPost",this.post),this.post={title:"",body:""}}}};o("a67e");const se=l()(ne,[["render",oe],["__scopeId","data-v-5c5a8b76"]]);var re=se;function ae(e,t,o,s,r,a){return o.show?(Object(n["u"])(),Object(n["g"])("div",{key:0,onClick:t[1]||(t[1]=function(){return a.hideDialog&&a.hideDialog.apply(a,arguments)}),class:"dialog"},[Object(n["h"])("div",{onClick:t[0]||(t[0]=Object(n["K"])((function(){}),["stop"])),class:"dialog__content"},[Object(n["B"])(e.$slots,"default",{},void 0,!0)])])):Object(n["f"])("",!0)}var ce={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(){this.$emit("update:show",!1)}}};o("a2ca");const ie=l()(ce,[["render",ae],["__scopeId","data-v-71e593ad"]]);var ue=ie,le={class:"btn"};function pe(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("button",le,[Object(n["B"])(e.$slots,"default",{},void 0,!0)])}var de={name:"my-button"};o("b33f");const be=l()(de,[["render",pe],["__scopeId","data-v-e8f8386e"]]);var fe=be,je=["value"],Oe=["value","disabled"];function me(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("select",{value:o.modelValue,onChange:t[0]||(t[0]=function(){return a.changeOption&&a.changeOption.apply(a,arguments)})},[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(o.options,(function(e){return Object(n["u"])(),Object(n["g"])("option",{key:e.value,value:e.value,disabled:e.disabled},Object(n["F"])(e.name),9,Oe)})),128))],40,je)}var he={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}},defaultValue:{type:String}},methods:{changeOption:function(e){this.$emit("update:modelValue",e.target.value)}}};const ve=l()(he,[["render",me]]);var ge=ve,Pe=["value"];function ye(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("input",{value:o.modelValue,onInput:t[0]||(t[0]=function(){return a.updateInput&&a.updateInput.apply(a,arguments)}),type:"text",class:"input"},null,40,Pe)}o("a9e3");var _e={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput:function(e){this.$emit("update:modelValue",e.target.value)}}};o("9946");const Se=l()(_e,[["render",ye],["__scopeId","data-v-171b41c3"]]);var Ce=Se,we={class:"page-wrapper"},Ve=["onClick"];function ke(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("div",we,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(o.totalPages,(function(e){return Object(n["u"])(),Object(n["g"])("div",{key:e,class:Object(n["p"])(["page",{"current-page":o.pageNumber===e}]),onClick:function(t){return a.changePage(e)}},Object(n["F"])(e),11,Ve)})),128))])}var Ne={name:"my-pages",props:{pageNumber:{type:Number},totalPages:{type:Number}},methods:{changePage:function(e){this.$emit("update:pageNumber",e)}}};o("0bc2");const xe=l()(Ne,[["render",ke],["__scopeId","data-v-2ae8e8ea"]]);var Ie=xe,Le={components:{MyPages:Ie,MyInput:Ce,MySelect:ge,MyButton:fe,MyDialog:ue,PostList:Y,PostForm:re},data:function(){return{posts:[],dialogVisible:!1,isPostsLoading:!0,selectedSort:"selected",selectedPostsPresentation:"pagination",searchQuery:"",pageLimit:10,pageNumber:1,totalPages:0,sortOptions:[{value:"selected",name:"Сортировка",disabled:!0},{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}],postsPresentationOptions:[{value:"pagination",name:"Пагинация"},{value:"infiniteScroll",name:"Бесконечная прокрутка"}]}},methods:{createPost:function(e){this.posts.push(e),this.dialogVisible=!1},removePost:function(e){this.posts=this.posts.filter((function(t){return t.id!==e.id}))},showDialog:function(){this.dialogVisible=!0},fetchPosts:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isPostsLoading=!0,t.next=4,L.a.get("https://jsonplaceholder.typicode.com/posts?",{params:{_limit:e.pageLimit,_page:e.pageNumber}});case 4:o=t.sent,e.totalPages=Math.ceil(o.headers["x-total-count"]/e.pageLimit),e.posts=o.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),alert("Error");case 12:return t.prev=12,e.isPostsLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},loadMorePosts:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.pageNumber+=1,t.next=4,L.a.get("https://jsonplaceholder.typicode.com/posts?",{params:{_limit:e.pageLimit,_page:e.pageNumber}});case 4:o=t.sent,e.totalPages=Math.ceil(o.headers["x-total-count"]/e.pageLimit),e.posts=[].concat(Object(N["a"])(e.posts),Object(N["a"])(o.data)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),alert("Error");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},computed:{sortedPosts:function(){var e=this;return Object(N["a"])(this.posts).sort((function(t,o){var n;return null===(n=t[e.selectedSort])||void 0===n?void 0:n.localeCompare(o[e.selectedSort])}))},sortedAndSearchedPosts:function(){var e=this;return""===this.searchQuery?this.sortedPosts:this.sortedPosts.filter((function(t){return t.title.toLowerCase().includes(e.searchQuery.toLowerCase())}))}},watch:{pageNumber:function(){"pagination"===this.selectedPostsPresentation&&this.fetchPosts()}},mounted:function(){var e=this;this.fetchPosts();var t={rootMargin:"0px",threshold:1},o=function(t){t[0].isIntersecting&&e.pageNumber<e.totalPages&&"infiniteScroll"===e.selectedPostsPresentation&&e.loadMorePosts()},n=new IntersectionObserver(o,t);n.observe(this.$refs.observer)}};o("a0b9");const Me=l()(Le,[["render",k],["__scopeId","data-v-77cefc3e"]]);var Qe=Me,Ue=Object(n["h"])("h3",null,"This site is about Vue 3",-1),Re=[Ue];function De(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("div",null,Re)}var $e={};const Ae=l()($e,[["render",De]]);var ze=Ae;function Fe(e,t,o,s,r,a){return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["h"])("h3",null,"Это страница поста с ID = "+Object(n["F"])(e.$route.params.id),1)])}var Ee={};const Be=l()(Ee,[["render",Fe]]);var Te=Be,Je={class:"app__btns"},qe=Object(n["i"])(" Создать пост "),He={key:1},Ke={ref:"observer"},We={key:2};function Ge(e,t,o,s,r,a){var c=Object(n["C"])("my-button"),i=Object(n["C"])("my-input"),u=Object(n["C"])("my-select"),l=Object(n["C"])("post-form"),p=Object(n["C"])("my-dialog"),d=Object(n["C"])("post-list"),b=Object(n["C"])("my-pages");return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["h"])("div",Je,[Object(n["j"])(c,{onClick:a.showDialog,class:"create-post__btn"},{default:Object(n["I"])((function(){return[qe]})),_:1},8,["onClick"]),Object(n["j"])(i,{modelValue:e.searchQuery,"onUpdate:modelValue":e.setSearchQuery,class:"search-input",placeholder:"Search"},null,8,["modelValue","onUpdate:modelValue"]),Object(n["j"])(u,{modelValue:e.selectedPostsPresentation,"onUpdate:modelValue":e.setSelectedPostsPresentation,options:e.postsPresentationOptions},null,8,["modelValue","onUpdate:modelValue","options"]),Object(n["j"])(u,{modelValue:e.selectedSort,"onUpdate:modelValue":e.setSelectedSort,options:e.sortOptions},null,8,["modelValue","onUpdate:modelValue","options"])]),Object(n["j"])(p,{show:r.dialogVisible,"onUpdate:show":t[0]||(t[0]=function(e){return r.dialogVisible=e})},{default:Object(n["I"])((function(){return[Object(n["j"])(l,{onCreatePost:a.createPost},null,8,["onCreatePost"])]})),_:1},8,["show"]),e.isPostsLoading?(Object(n["u"])(),Object(n["g"])("div",He,"Идет загрузка...")):(Object(n["u"])(),Object(n["e"])(d,{key:0,posts:e.sortedAndSearchedPosts,onRemovePost:a.removePost},null,8,["posts","onRemovePost"])),Object(n["h"])("div",Ke,null,512),"pagination"===e.selectedPostsPresentation||""===e.selectedPostsPresentation?(Object(n["u"])(),Object(n["g"])("div",We,[Object(n["j"])(b,{pageNumber:e.pageNumber,"onUpdate:pageNumber":e.setPageNumber,totalPages:e.totalPages},null,8,["pageNumber","onUpdate:pageNumber","totalPages"])])):Object(n["f"])("",!0)])}var Xe=o("5530"),Ye=o("5502"),Ze={components:{MyPages:Ie,MyInput:Ce,MySelect:ge,MyButton:fe,MyDialog:ue,PostList:Y,PostForm:re},data:function(){return{dialogVisible:!1}},methods:Object(Xe["a"])(Object(Xe["a"])(Object(Xe["a"])({},Object(Ye["d"])({setPageNumber:"post/setPageNumber",setSearchQuery:"post/setSearchQuery",setSelectedPostsPresentation:"post/setSelectedPostsPresentation",setSelectedSort:"post/setSelectedSort"})),Object(Ye["b"])({fetchPosts:"post/fetchPosts",loadMorePosts:"post/loadMorePosts"})),{},{createPost:function(e){this.posts.push(e),this.dialogVisible=!1},removePost:function(e){this.posts=this.posts.filter((function(t){return t.id!==e.id}))},showDialog:function(){this.dialogVisible=!0}}),computed:Object(Xe["a"])(Object(Xe["a"])({},Object(Ye["e"])({posts:function(e){return e.post.posts},isPostsLoading:function(e){return e.post.isPostsLoading},selectedSort:function(e){return e.post.selectedSort},selectedPostsPresentation:function(e){return e.post.selectedPostsPresentation},searchQuery:function(e){return e.post.searchQuery},pageLimit:function(e){return e.post.pageLimit},pageNumber:function(e){return e.post.pageNumber},totalPages:function(e){return e.post.totalPages},sortOptions:function(e){return e.post.sortOptions},postsPresentationOptions:function(e){return e.post.postsPresentationOptions}})),Object(Ye["c"])({sortedPosts:"post/sortedPosts",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})),watch:{pageNumber:function(){"pagination"===this.selectedPostsPresentation&&this.fetchPosts()}},mounted:function(){var e=this;this.fetchPosts();var t={rootMargin:"0px",threshold:1},o=function(t){t[0].isIntersecting&&e.pageNumber<e.totalPages&&"infiniteScroll"===e.selectedPostsPresentation&&e.loadMorePosts()},n=new IntersectionObserver(o,t);n.observe(this.$refs.observer)}};o("6bd8");const et=l()(Ze,[["render",Ge],["__scopeId","data-v-ce362c1e"]]);var tt=et,ot={class:"app__btns"},nt=Object(n["i"])(" Создать пост "),st={key:1},rt={ref:"observerVar"},at={key:2};function ct(e,t,o,s,r,a){var c=Object(n["C"])("my-button"),i=Object(n["C"])("my-input"),u=Object(n["C"])("my-select"),l=Object(n["C"])("post-form"),p=Object(n["C"])("my-dialog"),d=Object(n["C"])("post-list"),b=Object(n["C"])("my-pages");return Object(n["u"])(),Object(n["g"])("div",null,[Object(n["h"])("div",ot,[Object(n["j"])(c,{onClick:s.showDialog,class:"create-post__btn"},{default:Object(n["I"])((function(){return[nt]})),_:1},8,["onClick"]),Object(n["j"])(i,{modelValue:s.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.searchQuery=e}),class:"search-input",placeholder:"Search"},null,8,["modelValue"]),Object(n["j"])(u,{modelValue:s.selectedPostsPresentation,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.selectedPostsPresentation=e}),options:s.postsPresentationOptions},null,8,["modelValue","options"]),Object(n["j"])(u,{modelValue:s.selectedSort,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.selectedSort=e}),options:s.sortOptions},null,8,["modelValue","options"])]),Object(n["j"])(p,{show:s.dialogVisible,"onUpdate:show":t[3]||(t[3]=function(e){return s.dialogVisible=e})},{default:Object(n["I"])((function(){return[Object(n["j"])(l,{onCreatePost:s.createPost},null,8,["onCreatePost"])]})),_:1},8,["show"]),s.isPostsLoading?(Object(n["u"])(),Object(n["g"])("div",st,"Идет загрузка...")):(Object(n["u"])(),Object(n["e"])(d,{key:0,posts:s.sortedAndSearchedPosts,onRemovePost:s.removePost},null,8,["posts","onRemovePost"])),Object(n["h"])("div",rt,null,512),"pagination"===s.selectedPostsPresentation||""===s.selectedPostsPresentation?(Object(n["u"])(),Object(n["g"])("div",at,[Object(n["j"])(b,{pageNumber:s.pageNumber,"onUpdate:pageNumber":t[4]||(t[4]=function(e){return s.pageNumber=e}),totalPages:s.totalPages},null,8,["pageNumber","totalPages"])])):Object(n["f"])("",!0)])}function it(e,t){var o=Object(n["z"])([]),s=Object(n["z"])(0),r=Object(n["z"])(!0),a=function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,r.value=!0,n.next=4,L.a.get("https://jsonplaceholder.typicode.com/posts?",{params:{_limit:e,_page:t.value}});case 4:a=n.sent,s.value=Math.ceil(a.headers["x-total-count"]/e),o.value=a.data,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),alert("Error");case 12:return n.prev=12,r.value=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return Object(n["s"])(a),{posts:o,isPostsLoading:r,totalPages:s,fetching:a}}function ut(e){var t=Object(n["z"])("selected"),o=Object(n["c"])((function(){return Object(N["a"])(e.value).sort((function(e,o){var n;return null===(n=e[t.value])||void 0===n?void 0:n.localeCompare(o[t.value])}))}));return{selectedSort:t,sortedPosts:o}}function lt(e){var t=Object(n["z"])(""),o=Object(n["c"])((function(){return e.value.filter((function(e){return e.title.toLowerCase().includes(t.value.toLowerCase())}))}));return{searchQuery:t,sortedAndSearchedPosts:o}}function pt(e,t,o,n){var s=function(){var s=Object(x["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t.value+=1,s.next=4,L.a.get("https://jsonplaceholder.typicode.com/posts?",{params:{_limit:e,_page:t.value}});case 4:r=s.sent,n.value=Math.ceil(r.headers["x-total-count"]/e),o.value=[].concat(Object(N["a"])(o.value),Object(N["a"])(r.data)),s.next=12;break;case 9:s.prev=9,s.t0=s["catch"](0),alert("Error");case 12:case"end":return s.stop()}}),s,null,[[0,9]])})));return function(){return s.apply(this,arguments)}}();return{fetchingMorePosts:s}}function dt(e,t,o,n,s){var r=function(){var r={rootMargin:"0px",threshold:1},a=function(n){n[0].isIntersecting&&e.value<t.value&&"infiniteScroll"===o.value&&(console.log("scroll func"),s())},c=new IntersectionObserver(a,r);c.observe(n.value)};return{infiniteScrollDown:r}}var bt={components:{MyPages:Ie,MyInput:Ce,MySelect:ge,MyButton:fe,MyDialog:ue,PostList:Y,PostForm:re},setup:function(){var e=Object(n["z"])(!1),t=10,o=Object(n["z"])(1),s=Object(n["z"])("pagination"),r=Object(n["z"])(null),a=Object(n["z"])([{value:"selected",name:"Сортировка",disabled:!0},{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]),c=Object(n["z"])([{value:"pagination",name:"Пагинация"},{value:"infiniteScroll",name:"Бесконечная прокрутка"}]),i=it(t,o),u=i.posts,l=i.isPostsLoading,p=i.totalPages,d=i.fetching,b=ut(u),f=b.selectedSort,j=b.sortedPosts,O=lt(j),m=O.searchQuery,h=O.sortedAndSearchedPosts,v=pt(t,o,u,p),g=v.fetchingMorePosts,P=dt(o,p,s,r,g),y=P.infiniteScrollDown,_=function(){e.value=!0},S=function(t){u.value.push(t),e.value=!1},C=function(e){u.value=u.value.filter((function(t){return t.id!==e.id}))};return Object(n["H"])(o,(function(){"pagination"===s.value&&d()})),Object(n["s"])(y),{posts:u,dialogVisible:e,totalPages:p,isPostsLoading:l,sortedPosts:j,selectedSort:f,searchQuery:m,sortedAndSearchedPosts:h,pageNumber:o,selectedPostsPresentation:s,sortOptions:a,postsPresentationOptions:c,showDialog:_,createPost:S,removePost:C,fetchingMorePosts:g,observerVar:r}}};o("b7d5");const ft=l()(bt,[["render",ct],["__scopeId","data-v-0ed83ed8"]]);var jt=ft,Ot=[{path:"/",component:y},{path:"/posts",component:Qe},{path:"/about",component:ze},{path:"/posts/:id",component:Te},{path:"/store",component:tt},{path:"/composition",component:jt}],mt=Object(O["a"])({history:Object(O["b"])("/vue3_messages/"),routes:Ot}),ht=mt,vt={state:function(){return{posts:[],isPostsLoading:!0,selectedSort:"selected",selectedPostsPresentation:"pagination",searchQuery:"",pageLimit:10,pageNumber:1,totalPages:0,sortOptions:[{value:"selected",name:"Сортировка",disabled:!0},{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}],postsPresentationOptions:[{value:"pagination",name:"Пагинация"},{value:"infiniteScroll",name:"Бесконечная прокрутка"}]}},getters:{sortedPosts:function(e){return Object(N["a"])(e.posts).sort((function(t,o){var n;return null===(n=t[e.selectedSort])||void 0===n?void 0:n.localeCompare(o[e.selectedSort])}))},sortedAndSearchedPosts:function(e,t){return""===e.searchQuery?t.sortedPosts:t.sortedPosts.filter((function(t){return t.title.toLowerCase().includes(e.searchQuery.toLowerCase())}))}},mutations:{setPosts:function(e,t){e.posts=t},setPostsLoading:function(e,t){e.isPostsLoading=t},setSelectedSort:function(e,t){e.selectedSort=t},setSelectedPostsPresentation:function(e,t){e.selectedPostsPresentation=t},setSearchQuery:function(e,t){e.searchQuery=t},setPageNumber:function(e,t){e.pageNumber=t},setTotalPages:function(e,t){e.totalPages=t}},actions:{fetchPosts:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.state,n=e.commit,t.prev=1,n("setPostsLoading",!0),t.next=5,L.a.get("https://jsonplaceholder.typicode.com/posts?",{params:{_limit:o.pageLimit,_page:o.pageNumber}});case 5:s=t.sent,n("setTotalPages",Math.ceil(s.headers["x-total-count"]/o.pageLimit)),n("setPosts",s.data),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),alert("Error");case 13:return t.prev=13,n("setPostsLoading",!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},loadMorePosts:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.state,n=e.commit,t.prev=1,n("setPageNumber",o.pageNumber+1),t.next=5,L.a.get("https://jsonplaceholder.typicode.com/posts?",{params:{_limit:o.pageLimit,_page:o.pageNumber}});case 5:s=t.sent,n("setTotalPages",Math.ceil(s.headers["x-total-count"]/o.pageLimit)),n("setPosts",[].concat(Object(N["a"])(o.posts),Object(N["a"])(s.data))),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),alert("Error");case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},namespaced:!0},gt=Object(Ye["a"])({modules:{post:vt}}),Pt=(o("6308"),[fe,Ce,ue,ge,Ie]),yt={mounted:function(e){e.focus()},name:"focus"},_t=[yt],St=Object(n["d"])(j);Pt.forEach((function(e){return St.component(e.name,e)})),_t.forEach((function(e){return St.directive(e.name,e)})),St.use(gt).use(ht).mount("#app")},"5da2":function(e,t,o){},6308:function(e,t,o){},"6bd8":function(e,t,o){"use strict";o("3b94")},7217:function(e,t,o){},"96b7":function(e,t,o){},"96c0":function(e,t,o){"use strict";o("5056")},9946:function(e,t,o){"use strict";o("5029")},"9ca6":function(e,t,o){},a0b9:function(e,t,o){"use strict";o("7217")},a2ca:function(e,t,o){"use strict";o("5da2")},a67e:function(e,t,o){"use strict";o("eab9")},b33f:function(e,t,o){"use strict";o("1690")},b7d5:function(e,t,o){"use strict";o("9ca6")},c8e7:function(e,t,o){"use strict";o("02b0")},eab9:function(e,t,o){}});
//# sourceMappingURL=app.7f896717.js.map