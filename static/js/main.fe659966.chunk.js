(this.webpackJsonpwykreslanka=this.webpackJsonpwykreslanka||[]).push([[0],{13:function(e){e.exports=JSON.parse('["racjonalny","spinacz","bestia","wytrzyma\u0142o\u015b\u0107","pch\u0142a","pranie","wodorosty","blizna","krewetki","medal","jedzenie","cecha","worek","koktajl","atrakcyjny","guzik","\u017co\u0142\u0105dek","oszo\u0142omienie","g\u0142owa","bomba","zagadka","op\u0142ata","zdj\u0119cie","hydraulik","opieku\u0144czy","docenienie","raj","wilk","zarz\u0105dzanie","naturalny","kompetentny","ko\u015bci\xf3\u0142","szlauch","operatywny","pasja","ogrodnik","kukurydza","naw\xf3z","ucieczka","duma","w\u0105\u017c","rondel","wiecz\xf3r","koszula","walka","o\u015bmiornica","grzyb","rachunek","\u0142\u0105ka","bar","krytyk","gol","z\u0142odziej","zderzenie","muzyka","materac","gondola","ziemniaki","oprogramowanie","banda\u017c","wi\u015bnia","gwiazdy","korona","szachy","rado\u015b\u0107","kolarstwo","korzy\u015b\u0107","herold","clown","boks","p\u0142acz","rze\u017anik","spe\u0142nienie","sportowiec","orkiestra","zdyscyplinowany","kierowca","bankier","szczoteczka","sekcja","ksi\u0105\u017cka","fili\u017canka","autobus","fakt","deszczowy","biznesman","gorycz","tornado","miech","bieda","tydzie\u0144","krab","list","test","strumie\u0144","akta","kredyt","korek","radar","wyspecjalizowany","wysypka","jele\u0144","zainteresowanie","kompozytor","referendum","nagroda","lista","aromat","stra\u017cak","gniazdo","jako\u015b\u0107","szampan","szermierka","marmur","lekarz","z\u0105b","serwis","koronacja","plaster","uszy","lasso","cyrk","zysk","pogoda","m\u017cawka","pracownik","tron","frustracja","\u015bliniak","kto\u015b","oddech","serdeczno\u015b\u0107","decyzja","akceptacja","\u015brodek","szaleniec","temperatura","porcelana","ster","rozs\u0105dek","cmentarz","rak","\u017cyczliwy","aktorka","biskup","ci\u0119\u017car\xf3wka","t\u0142um","pi\u0142ka","bezpo\u015bredni","ojciec","przystojny","piosenka","droga","\u017c\xf3\u0142ty","bia\u0142y","perkal","zatoka","kaktus","akcja","nacisk","sprawiedliwo\u015b\u0107","teleskop","kszta\u0142t","bogaty","nudny","karuzela","butik","inteligentny","biurko","wybawca","przyjemno\u015b\u0107","jarmu\u017c","trwoga","basen","teren","piramida","drut","zegarmistrz","siedzenie","kret","irytacja","\u015bmieci","suchy","artyleria","rozs\u0105dny","w\xf3z","tramwaj","namiot","kuchnia","kelnerka","pok\xf3j","laska","rzetelny","bilard","pa\u0142ac","atak","kot","podeszwa","szczypce","czas","d\u0142uto","pochmurny","kara","stolarz","mila","bochenek","sufit","dywan","migrena","wiersz","tytu\u0142","rozwi\u0105zanie","emerytura","kamie\u0144","sanie","telefon","b\u0142\u0105d","miara","pomys\u0142","cyklon","apetyt","\u015bwiat","sok","k\u0142\xf3dka","malarz","bak\u0142a\u017can","parada","parkometr","\u017ar\xf3d\u0142o","barometr","przyn\u0119ta","akwarium","lokator","\u015bliwka","\u017c\xf3\u0142w","spokojny","biznes","badania","pop\u0142och","lizak","lampa","saneczkarstwo","naczynie","winogrono","kciuki","flamaster","rybak","zaj\u0105c","rower","nauczycielka","bocian","ksi\u0119\u017cyc","pisarz","przyjaciel","podr\xf3\u017c","papier","stokrotka","t\u0119cza","szko\u0142a","st\xf3\u0142","sukces","pirat","szczeniak","stadion"]')},19:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),o=t(12),i=t.n(o),u=(t(19),t(3)),s=t(2),l=t(36),d=t(5),j=t(13),k=function(e,n){return Object(u.a)(Array(e)).map((function(e){return Array(n).fill(null)}))},f={right:[0,1],left:[0,-1],up:[-1,0],down:[1,0],rightdown:[1,1],rightup:[-1,1],leftdown:[1,-1],leftup:[-1,-1]},b=function(e){return e.sort((function(){return Math.random()-Math.random()})).slice(0,1)[0]},m=function(e,n,t){var a=t.length,r=[e];return Array(a-1).fill(n).reduce((function(e,n){return[].concat(Object(u.a)(e),[h(e.slice(-1)[0],n)])}),r)},h=function(e,n){return[e[0]+n[0],e[1]+n[1]]},z=function(e,n,t){return n.forEach((function(n,a){var r=e.charAt(a);t=p(n,r,t)})),t},p=function(e,n,t){var a=v(t);return a[e[0]][e[1]]=n,a},y=function(e,n,t){for(var a=0;a<n.length;a++){var r=e.charAt(a),c=n[a];if(O(c,t))return!1;if(w(c,r,t))return!1}return!0},O=function(e,n){return e[0]<0||e[0]>n.length-1||(e[1]<0||e[1]>n[0].length-1)},w=function(e,n,t){var a=g(e,t);return!!a&&a!==n},g=function(e,n){return n[e[0]][e[1]]},v=function(e){return e.map((function(e){return Object(u.a)(e)}))},x=function(e){var n=Object.keys(e);return e[n[Math.floor(Math.random()*n.length)]]},M=function(e,n){var t=function(e,n){return Math.floor(Math.random()*(n-e)+e)};return[t(0,e),t(0,n)]},S=[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,261,263,281,322,324,243,347,378,380],N=function(e){e=v(e);for(var n=0;n<e.length;n++)for(var t=0;t<e[0].length;t++)e[n][t]||(e[n][t]=String.fromCharCode(S[Math.floor(Math.random()*S.length)]));return e},C=function(){return window.matchMedia("(hover: none) and (pointer: coarse)").matches},E=t(8),T=t.n(E),I=function(e){var n=e.grid,t=e.onReset,r=e.cellSelected,c=e.cellMarked,o=e.onMouseDown,i=e.onMouseUp,u=e.onMouseOver,s=e.onTouchStart,l=e.onTouchEnd,d=e.onTouchMove;return Object(a.jsxs)("div",{className:"grid",children:[Object(a.jsx)("div",{className:"toolbar",children:Object(a.jsx)("a",{className:"btn red",href:"#reset",onClick:function(e){e.preventDefault(),t()},children:"Od nowa"})}),Object(a.jsx)("div",{children:n.map((function(e,n){return Object(a.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(a.jsx)("div",{className:T()("cell",{selected:r([n,t]),marked:c([n,t])}),"data-x":n,"data-y":t,onMouseDown:function(){return!C()&&o(n,t)},onMouseUp:function(){return!C()&&i(n,t)},onMouseOver:function(){return!C()&&u(n,t)},onTouchStart:function(e){return C()&&s(n,t)},onTouchEnd:function(){return C()&&l()},onTouchMove:function(e){return C()&&d(e)},children:e},"cell-".concat(t))}))},"row-".concat(n))}))})]})},J=function(e){var n=e.placedWords,t=e.markedWords;return Object(a.jsx)("div",{className:"wordList",children:n.map((function(e,n){return Object(a.jsx)("div",{className:T()("word",{marked:t.includes(n)}),children:e},"word-".concat(n))}))})},D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=c.a.useState(JSON.parse(localStorage.getItem(e)||JSON.stringify(n))),a=Object(s.a)(t,2),r=a[0],o=a[1];return c.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(r))}),[r,e]),[r,o]},F=(t(32),function(e){var n=e.onSubmit,t=Object(r.useState)(""),c=Object(s.a)(t,2),o=c[0],i=c[1];return Object(a.jsxs)("div",{className:"Hello",children:[Object(a.jsx)("h3",{children:"Witaj"}),Object(a.jsx)("p",{children:"Jak si\u0119 nazywasz?"}),Object(a.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),o.length>0?n(o):alert("Podaj swoje imi\u0119")},children:[Object(a.jsx)("input",{id:"username",name:"username",type:"text",autoFocus:!0,autoComplete:"off",onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("input",{className:"btn white",type:"submit",value:"Zagrajmy"})]})]})}),A=function(){return Object(a.jsx)("div",{children:"Jeszcze chwila..."})},L=(t(33),function(e){var n=e.username,t=e.onAgain;return Object(a.jsxs)("div",{className:"Grats",children:[Object(a.jsxs)("h1",{className:"Title",children:["Gratulacje ",n,"!"]}),Object(a.jsx)("p",{children:"Idzie ci coraz lepiej. Za ka\u017cd\u0105 wygran\u0105 zbierasz punkty."}),Object(a.jsx)("a",{className:"btn red",href:"#reset",onClick:function(e){e.preventDefault(),t()},children:"Jeszcze raz?"})]})});var W=function(){var e=Object(d.c)("m",d.a),n=Object(s.a)(e,1)[0],t=Object(d.c)("n",d.a),c=Object(s.a)(t,1)[0],o=Object(d.c)("c",d.a),i=Object(s.a)(o,1)[0],h=Object(r.useState)(),p=Object(s.a)(h,2),O=p[0],w=p[1],g=Object(r.useState)(),v=Object(s.a)(g,2),S=v[0],C=v[1],E=Object(r.useState)(),T=Object(s.a)(E,2),W=T[0],P=T[1],U=Object(r.useState)(!1),B=Object(s.a)(U,2),G=B[0],R=B[1],Z=D("gameId",null),H=Object(s.a)(Z,2),X=H[0],Y=H[1],q=D("userId",Object(l.a)()),K=Object(s.a)(q,2),Q=(K[0],K[1],D("username",null)),V=Object(s.a)(Q,2),$=V[0],_=V[1],ee=D("markedWords",[]),ne=Object(s.a)(ee,2),te=ne[0],ae=ne[1],re=D("markedCords",[]),ce=Object(s.a)(re,2),oe=ce[0],ie=ce[1],ue=D("grid",null),se=Object(s.a)(ue,2),le=se[0],de=se[1],je=D("placedWords",null),ke=Object(s.a)(je,2),fe=ke[0],be=ke[1],me=D("placedCords",null),he=Object(s.a)(me,2),ze=he[0],pe=he[1],ye=function(){return te.length===fe.length},Oe=Object(r.useCallback)((function(){return X}),[X]),we=Object(r.useCallback)((function(){var e=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=k(e,n),r=[],c=[];r.length<t;){var o=b(j);if(!r.includes(o)){var i=x(f),u=M(e,n),s=m(u,i,o);y(o,s,a)&&(a=z(o,s,a),r.push(o),c.push(s))}}return[r,c,a=N(a)]}(n,c,i),t=Object(s.a)(e,3),a=t[0],r=t[1],o=t[2];w(null),C(null),R(!1),P(!1),ae([]),ie([]),be(a),pe(r),de(o),Y(Object(l.a)())}),[be,pe,de,Y,ie,ae,n,c,i]);Object(r.useEffect)((function(){Oe()||we()}),[Oe,we]);var ge=Object(r.useCallback)((function(){var e,n=-1,t=(e=[]).concat.apply(e,Object(u.a)(W)).join("");return ze.forEach((function(e,a){var r;(r=[]).concat.apply(r,Object(u.a)(e)).join("")===t&&(n=a)})),n}),[W,ze]);Object(r.useLayoutEffect)((function(){O&&S&&P(function(e,n){for(var t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(s.a)(n,2),o=c[0],i=c[1],u=[],l=Math.abs(o-a),d=a<o?1:-1,j=Math.abs(i-r),k=r<i?1:-1,f=(l>j?l:-j)/2;u.push([a,r]),a!==o||r!==i;){var b=f;b>-l&&(f-=j,a+=d),b<j&&(f+=l,r+=k)}return u}(O,S))}),[O,S]),Object(r.useLayoutEffect)((function(){if(!G&&W){var e=ge();e>-1&&(ae((function(n){return[].concat(Object(u.a)(n),[e])})),ie((function(e){return[].concat(Object(u.a)(e),Object(u.a)(W))}))),P(),w(),C()}}),[G,W,ge,ie,ae]);var ve=function(){we()},xe=function(e){return e.preventDefault()},Me=function(){return!!$};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[!Me()&&Object(a.jsx)(F,{onSubmit:function(e){return _(e)}}),Me()&&!Oe()&&Object(a.jsx)(A,{}),Me()&&Oe()&&ye()&&Object(a.jsx)(L,{username:$,onAgain:ve}),Me()&&Oe()&&!ye()&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{grid:le,onMouseDown:function(e,n){R(!0),w([e,n]),C([e,n])},onMouseOver:function(e,n){G&&C([e,n])},onMouseUp:function(e,n){C([e,n]),R(!1)},onReset:ve,onTouchEnd:function(){document.removeEventListener("touchstart",xe),R(!1)},onTouchMove:function(e){if(G){var n=e.touches[0];if(n){var t=document.elementFromPoint(n.clientX,n.clientY).dataset,a=t.x,r=t.y,c=[parseInt(a),parseInt(r)];C((function(e){return e&&e.join("")===c.join("")?null:c}))}}},onTouchStart:function(e,n){document.addEventListener("touchstart",xe),R(!0),w([e,n]),C([e,n])},cellSelected:function(e){return!!W&&W.find((function(n){return n[0]===e[0]&&n[1]===e[1]}))},cellMarked:function(e){return!!oe&&oe.find((function(n){return n[0]===e[0]&&n[1]===e[1]}))}}),Object(a.jsx)(J,{placedWords:fe,markedWords:te})]})]})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d.b,{children:Object(a.jsx)(W,{})})}),document.getElementById("root")),P()}},[[34,1,2]]]);
//# sourceMappingURL=main.fe659966.chunk.js.map