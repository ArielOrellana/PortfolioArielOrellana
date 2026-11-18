import{d as f,r as L,i as h,o as a,c as o,u as v,g as C,a as t,t as p,F as b,j as S,k as n,b as u,p as y,h as _,_ as k,l as M}from"./index-BKEfbsFE.js";const i=e=>(y("data-v-1de0af1a"),e=e(),_(),e),T={class:"card"},j=["src","alt"],B=["aria-label"],H=i(()=>t("i",{class:"fa-solid fa-code","aria-hidden":"true"},null,-1)),R=[H],D={class:"card-body"},Q={class:"card-title"},V={class:"card-desc"},E={key:0,class:"card-tags"},I={key:1,class:"card-actions"},w=["href"],J=i(()=>t("i",{class:"fa-solid fa-code-branch","aria-hidden":"true"},null,-1)),O=i(()=>t("span",{class:"sr-only"},"(se abre en nueva ventana)",-1)),$=["href"],F=i(()=>t("i",{class:"fa-solid fa-link","aria-hidden":"true"},null,-1)),N=i(()=>t("span",{class:"sr-only"},"(se abre en nueva ventana)",-1)),U=["href"],x=i(()=>t("i",{class:"fa-brands fa-android","aria-hidden":"true"},null,-1)),z=i(()=>t("span",{class:"sr-only"},"(se abre en nueva ventana)",-1)),q=f({__name:"ProjectCard",props:{card:{type:Object,required:!0}},setup(e){const l=e,d=L(!1),c=h(()=>(l.card.descripcion??"").split(`
`)[0]),m=h(()=>{var r;const s=(r=(l.card.descripcion??"").match(/Aptitudes:\s*(.+)$/m))==null?void 0:r[1];return s?s.split(",").map(P=>P.trim()).filter(Boolean):[]});return(g,s)=>(a(),o("article",T,[d.value?(a(),o("div",{key:1,class:"card-img card-img-fallback",role:"img","aria-label":`Vista previa no disponible del proyecto ${e.card.titulo}`},R,8,B)):(a(),o("img",{key:0,src:v(C)(e.card.img),alt:`Vista previa del proyecto ${e.card.titulo}`,class:"card-img",loading:"lazy",width:"560",height:"350",onError:s[0]||(s[0]=r=>d.value=!0)},null,40,j)),t("div",D,[t("h2",Q,p(e.card.titulo),1),t("p",V,p(c.value),1),m.value.length?(a(),o("ul",E,[(a(!0),o(b,null,S(m.value,r=>(a(),o("li",{key:r},p(r),1))),128))])):n("",!0),e.card.repo||e.card.sitio||e.card.apk?(a(),o("div",I,[e.card.repo?(a(),o("a",{key:0,href:e.card.repo,target:"_blank",rel:"noopener noreferrer",class:"boton small"},[u("Repo "),J,O],8,w)):n("",!0),e.card.sitio?(a(),o("a",{key:1,href:e.card.sitio,target:"_blank",rel:"noopener noreferrer",class:"boton small"},[u("Sitio "),F,N],8,$)):n("",!0),e.card.apk?(a(),o("a",{key:2,href:e.card.apk,target:"_blank",rel:"noopener noreferrer",class:"boton small"},[u("APK "),x,z],8,U)):n("",!0)])):n("",!0)])]))}}),G=k(q,[["__scopeId","data-v-1de0af1a"]]),K=[{id:1,img:"/portfolio/genube.png",descripcion:`Sistema de gestión educativa multiplataforma con dashboard administrativo, sistema contable, app para padres y backend mobile.

Stack dashboard: PHP 5.6, jQuery, CSS/JS vanilla.
Stack contable: Laravel, AdminLTE, Bootstrap.
Stack app padres (web + mobile): Laravel, AngularJS 1.2, Bootstrap, React Native.

Arquitectura de microservicios, optimización de rendimiento.

Aptitudes: PHP, Laravel, jQuery, AngularJS, React Native, Bootstrap, AdminLTE, MySQL, Git`,titulo:"Genube",sitio:"https://genube.com/",apk:"https://play.google.com/store/apps/details?id=com.genube.genubePadres"},{id:2,img:"/portfolio/ferriplast.png",descripcion:`Desarrollo y mantenimiento de web E-commerce Ferriplast.

Aptitudes: Laravel, HTML, Bootstrap, JavaScript, Sass, MySQL, PHP`,titulo:"Ferriplast",sitio:"https://ferriplast.com.ar/h/public/"},{id:3,img:"/portfolio/funalsrl.png",descripcion:`Desarrollo y mantenimiento de web E-commerce Funal S.R.L.

Aptitudes: Laravel, HTML, Bootstrap, JavaScript, Sass, MySQL, PHP`,titulo:"Funal S.R.L"},{id:4,img:"/portfolio/agenda.png",descripcion:`Sistema de agenda de gastos con sumatorias y CRUD.

Aptitudes: Laravel, HTML, CSS, JavaScript, MySQL, Bootstrap, PHP`,titulo:"Agenda",repo:"https://github.com/ArielOrellana/agenda"},{id:5,img:"/portfolio/portfolio1.png",descripcion:`E-commerce con carrito de compras y CRUD de categorías y productos.

Aptitudes: Laravel, HTML, CSS, JavaScript, Bootstrap, MySQL, PHP`,titulo:"E-commerce",repo:"https://github.com/ArielOrellana/Pagina-web-ventas"},{id:6,img:"/portfolio/api_movie.png",descripcion:`API Rest con CRUD de TV shows, películas y actores.

Aptitudes: Laravel, PHP, MySQL`,titulo:"API Películas",repo:"https://github.com/ArielOrellana/api_movie"},{id:7,img:"/portfolio/mazebook.png",descripcion:`Red social tipo Twitter desarrollada en Vue.js.

Aptitudes: HTML, CSS, Bootstrap, Vue.js, JavaScript`,titulo:"Mazebook",sitio:"https://arielorellana.github.io/tutorialvue/",repo:"https://github.com/ArielOrellana/tutorialvue"},{id:8,img:"/portfolio/rick_morty.png",descripcion:`Web CRUD con consumo de API de Rick & Morty.

Aptitudes: HTML, CSS, JavaScript, Vue.js, Vuex`,titulo:"Rick & Morty App"},{id:9,img:"/portfolio/portfolio.png",descripcion:`Portfolio personal desarrollado con Vue 3.

Aptitudes: HTML, CSS, JavaScript, Vue 3`,titulo:"Este Portfolio",sitio:"https://arielorellana.github.io/PortfolioArielOrellana/",repo:"https://github.com/ArielOrellana/PortfolioArielOrellana"},{id:10,img:"/portfolio/portfolio1.png",descripcion:"Migración de versión Laravel 5 a Laravel 8.",titulo:"E-commerce (Laravel upgrade)",repo:"https://github.com/ArielOrellana/ventas"},{id:11,img:"/portfolio/portfolio-3.png",descripcion:`Ejercicios de estructuras de datos, diagramas de flujo y lógica con C++.

Aptitudes: C++, lógica de programación`,titulo:"Ejercicios UTN",repo:"https://github.com/ArielOrellana/UTN-CPP-DFD"},{id:12,img:"/portfolio/QA-test.png",descripcion:`Historias de usuario, tests manuales y pruebas de humo.

Aptitudes: QA/QC, Testing manual, Scrum`,titulo:"QA Trello"},{id:13,img:"/portfolio/seeker.png",descripcion:`Desarrollo y mantenimiento de plataforma SaaS para gestión de estacionamientos inteligentes.

Migración de sistema legacy (CodeIgniter 3 + Backbone.js) a stack moderno con Laravel + React + Docker. Desarrollo de dashboard administrativo y APIs REST.

Aptitudes: PHP, Laravel, React, CodeIgniter 3, Backbone.js, Bootstrap, Docker, MySQL, jQuery`,titulo:"Seeker Parking",sitio:"https://seekerparking.com/"}],A=e=>(y("data-v-128aac77"),e=e(),_(),e),W=A(()=>t("h1",{class:"section-title"},"Portfolio",-1)),X=A(()=>t("p",{class:"section-sub"},"Proyectos en los que he trabajado",-1)),Y={class:"grid"},Z=f({__name:"PortfolioView",setup(e){return(l,d)=>(a(),o("section",null,[W,X,t("div",Y,[(a(!0),o(b,null,S(v(K),c=>(a(),M(G,{key:c.id,card:c},null,8,["card"]))),128))])]))}}),ae=k(Z,[["__scopeId","data-v-128aac77"]]);export{ae as default};
