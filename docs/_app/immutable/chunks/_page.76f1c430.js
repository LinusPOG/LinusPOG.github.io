import{_ as o}from"./preload-helper.41c905a7.js";const n=async()=>{const t=Object.entries(Object.assign({"/src/lib/posts/1.svx":()=>o(()=>import("./1.b776ce0c.js"),["./1.b776ce0c.js","./index.3d9248da.js","..\\assets\\1.5aa1c98f.css"],import.meta.url),"/src/lib/posts/2.svx":()=>o(()=>import("./2.e9196968.js"),["./2.e9196968.js","./index.3d9248da.js"],import.meta.url),"/src/lib/posts/3.svx":()=>o(()=>import("./3.24e05829.js"),["./3.24e05829.js","./index.3d9248da.js","..\\assets\\1.5aa1c98f.css"],import.meta.url)}));return await Promise.all(t.map(async([s,r])=>{const{metadata:l}=await r(),i=`${s.slice(15,4*-1)}`;return{meta:l,path:i}}))};async function c(){return(await n()).sort((a,s)=>new Date(s.meta.date).getMilliseconds()-new Date(a.meta.date).getMilliseconds())}async function _({fetch:e}){return{posts:await c()}}const P=Object.freeze(Object.defineProperty({__proto__:null,load:_},Symbol.toStringTag,{value:"Module"}));export{P as _,_ as l};
