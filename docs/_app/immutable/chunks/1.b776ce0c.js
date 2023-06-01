import{S as ae,i as ne,s as oe,k as o,q as p,a as u,l as i,m as l,r,h as e,c,L as Zt,n as v,b as a,E as n,M as ie,u as le,I as te}from"./index.3d9248da.js";function pe(S){let d,q,m,k,H,lt,j,I,pt,U,V,$,y,L,rt,ut,_,Pt,z,w,ee=`<code class="language-js"><span class="token comment">// Initializing "listeners" to audio, audio = HTMLAudioElement. Can be created using new Audio("path").</span>
<span class="token keyword">const</span> audioContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AudioContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> analyserNode <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createAnalyser</span><span class="token punctuation">(</span>audio<span class="token punctuation">)</span>
<span class="token keyword">const</span> track <span class="token operator">=</span> audioContext<span class="token punctuation">.</span><span class="token function">createMediaElementSource</span><span class="token punctuation">(</span>audio<span class="token punctuation">)</span>
analyserNode<span class="token punctuation">.</span>fftSize <span class="token operator">=</span> NumberOfLines<span class="token operator">*</span><span class="token number">2</span>
analyserNode<span class="token punctuation">.</span>smoothingTimeConstant <span class="token operator">=</span> <span class="token number">.4</span>

track<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>analyserNode<span class="token punctuation">)</span>
analyserNode<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>audioContext<span class="token punctuation">.</span>destination<span class="token punctuation">)</span>

<span class="token keyword">const</span> bufferLength <span class="token operator">=</span> analyserNode<span class="token punctuation">.</span>frequencyBinCount
<span class="token keyword">const</span> dataArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>bufferLength<span class="token punctuation">)</span>
analyserNode<span class="token punctuation">.</span><span class="token function">getByteTimeDomainData</span><span class="token punctuation">(</span>dataArray<span class="token punctuation">)</span>

<span class="token comment">// Updating audio data and looping through frequencies</span>
analyserNode<span class="token punctuation">.</span><span class="token function">getByteTimeDomainData</span><span class="token punctuation">(</span>dataArray<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>bufferLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> freq <span class="token operator">=</span> dataArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,F,E,D,ct,K,N,ft,J,R,ht,Q,g,T,Bt,X,x,M,dt,Y,A,yt,Z,C,W,mt,tt,P,kt,et,B,O,wt,st,f,gt,bt,vt,It,_t,Et,Nt,Rt,Tt,xt,at,G,nt,ot,b,At,Ct,Gt;return{c(){d=o("p"),q=p("Hello, welcome to Nottify Part 1. In this part I will tell you about the start of everything such as the visualiser, login and register."),m=u(),k=o("h3"),H=o("strong"),lt=p("The start of everything"),j=u(),I=o("p"),pt=p("Everything started out with me one day playing around with audio related stuff with svelte. What I ended up prototyping was a music visualiser than reacted to the frequencies of the music. It was really rough but it was what started my whole idea of Notify. I experimented with a circular progress bar. But later on in the project I found out that sometimes, less is more! Which is why I changed it to something else."),U=u(),V=o("br"),$=u(),y=o("div"),L=o("b"),rt=p("Image below is the early prototype that was made."),ut=u(),_=o("img"),z=p(`
Usefull code I used for detecting audio frequencies for visualisation (found this on youtube I think):
`),w=o("pre"),F=u(),E=o("h3"),D=o("strong"),ct=p("After the prototype?"),K=u(),N=o("p"),ft=p("After the protype, I decided to make it bigger. Which lead me to planning out a rough idea of the website features, one of the big features I wanted was an account system where you can login and register. That is why it all started with me designing the register/login page."),J=u(),R=o("p"),ht=p("I went with a 3d design for the page becaues I wanted to play around with transform-style: preserve-3d. I got a pretty good result as shown bellow."),Q=u(),g=o("div"),T=o("img"),X=u(),x=o("h3"),M=o("strong"),dt=p("Good decision but it cost me some time"),Y=u(),A=o("p"),yt=p("While I was designing the register/login page I realised that I might benefit from typescript, which is why I remade everything currently to typescript. I love typescript, for example the autocomplete becomes much better when I can specify types which allows me to write code faster."),Z=u(),C=o("h3"),W=o("strong"),mt=p("Conclusion"),tt=u(),P=o("p"),kt=p("I really enjoy working svelte and this was a good learning experience, I think this was my first time using typescript and oh boy, I really liked it. I like listening to music which is probably why I came up with the idea to begin with, I have actually made a music visualiser before but that was in Roblox but you code in lua there."),et=u(),B=o("h3"),O=o("strong"),wt=p("Progress"),st=u(),f=o("p"),gt=p("❌ Register / login functionallity "),bt=o("br"),vt=p(`
✔️ Register / login page `),It=o("br"),_t=p(`
❌ Typescript `),Et=o("br"),Nt=p(`
❌ Audio streaming `),Rt=o("br"),Tt=p(`
❌ Song lists `),xt=o("br"),at=u(),G=o("h1"),nt=p(S[0]),ot=u(),b=o("button"),At=p("CLICK ME"),this.h()},l(t){d=i(t,"P",{});var s=l(d);q=r(s,"Hello, welcome to Nottify Part 1. In this part I will tell you about the start of everything such as the visualiser, login and register."),s.forEach(e),m=c(t),k=i(t,"H3",{});var St=l(k);H=i(St,"STRONG",{});var qt=l(H);lt=r(qt,"The start of everything"),qt.forEach(e),St.forEach(e),j=c(t),I=i(t,"P",{});var Ht=l(I);pt=r(Ht,"Everything started out with me one day playing around with audio related stuff with svelte. What I ended up prototyping was a music visualiser than reacted to the frequencies of the music. It was really rough but it was what started my whole idea of Notify. I experimented with a circular progress bar. But later on in the project I found out that sometimes, less is more! Which is why I changed it to something else."),Ht.forEach(e),U=c(t),V=i(t,"BR",{}),$=c(t),y=i(t,"DIV",{class:!0});var it=l(y);L=i(it,"B",{});var Lt=l(L);rt=r(Lt,"Image below is the early prototype that was made."),Lt.forEach(e),ut=c(it),_=i(it,"IMG",{src:!0,class:!0}),it.forEach(e),z=r(t,`
Usefull code I used for detecting audio frequencies for visualisation (found this on youtube I think):
`),w=i(t,"PRE",{class:!0});var se=l(w);se.forEach(e),F=c(t),E=i(t,"H3",{});var Dt=l(E);D=i(Dt,"STRONG",{});var Mt=l(D);ct=r(Mt,"After the prototype?"),Mt.forEach(e),Dt.forEach(e),K=c(t),N=i(t,"P",{});var Wt=l(N);ft=r(Wt,"After the protype, I decided to make it bigger. Which lead me to planning out a rough idea of the website features, one of the big features I wanted was an account system where you can login and register. That is why it all started with me designing the register/login page."),Wt.forEach(e),J=c(t),R=i(t,"P",{});var Ot=l(R);ht=r(Ot,"I went with a 3d design for the page becaues I wanted to play around with transform-style: preserve-3d. I got a pretty good result as shown bellow."),Ot.forEach(e),Q=c(t),g=i(t,"DIV",{class:!0});var jt=l(g);T=i(jt,"IMG",{src:!0,class:!0}),jt.forEach(e),X=c(t),x=i(t,"H3",{});var Ut=l(x);M=i(Ut,"STRONG",{});var Vt=l(M);dt=r(Vt,"Good decision but it cost me some time"),Vt.forEach(e),Ut.forEach(e),Y=c(t),A=i(t,"P",{});var $t=l(A);yt=r($t,"While I was designing the register/login page I realised that I might benefit from typescript, which is why I remade everything currently to typescript. I love typescript, for example the autocomplete becomes much better when I can specify types which allows me to write code faster."),$t.forEach(e),Z=c(t),C=i(t,"H3",{});var zt=l(C);W=i(zt,"STRONG",{});var Ft=l(W);mt=r(Ft,"Conclusion"),Ft.forEach(e),zt.forEach(e),tt=c(t),P=i(t,"P",{});var Kt=l(P);kt=r(Kt,"I really enjoy working svelte and this was a good learning experience, I think this was my first time using typescript and oh boy, I really liked it. I like listening to music which is probably why I came up with the idea to begin with, I have actually made a music visualiser before but that was in Roblox but you code in lua there."),Kt.forEach(e),et=c(t),B=i(t,"H3",{});var Jt=l(B);O=i(Jt,"STRONG",{});var Qt=l(O);wt=r(Qt,"Progress"),Qt.forEach(e),Jt.forEach(e),st=c(t),f=i(t,"P",{});var h=l(f);gt=r(h,"❌ Register / login functionallity "),bt=i(h,"BR",{}),vt=r(h,`
✔️ Register / login page `),It=i(h,"BR",{}),_t=r(h,`
❌ Typescript `),Et=i(h,"BR",{}),Nt=r(h,`
❌ Audio streaming `),Rt=i(h,"BR",{}),Tt=r(h,`
❌ Song lists `),xt=i(h,"BR",{}),h.forEach(e),at=c(t),G=i(t,"H1",{});var Xt=l(G);nt=r(Xt,S[0]),Xt.forEach(e),ot=c(t),b=i(t,"BUTTON",{});var Yt=l(b);At=r(Yt,"CLICK ME"),Yt.forEach(e),this.h()},h(){Zt(_.src,Pt="FirstVersion.PNG")||v(_,"src",Pt),v(_,"class","svelte-1tuin5d"),v(y,"class","ImageDiv svelte-1tuin5d"),v(w,"class","language-js"),Zt(T.src,Bt="FirstVersion.PNG")||v(T,"src",Bt),v(T,"class","svelte-1tuin5d"),v(g,"class","ImageDiv svelte-1tuin5d")},m(t,s){a(t,d,s),n(d,q),a(t,m,s),a(t,k,s),n(k,H),n(H,lt),a(t,j,s),a(t,I,s),n(I,pt),a(t,U,s),a(t,V,s),a(t,$,s),a(t,y,s),n(y,L),n(L,rt),n(y,ut),n(y,_),a(t,z,s),a(t,w,s),w.innerHTML=ee,a(t,F,s),a(t,E,s),n(E,D),n(D,ct),a(t,K,s),a(t,N,s),n(N,ft),a(t,J,s),a(t,R,s),n(R,ht),a(t,Q,s),a(t,g,s),n(g,T),a(t,X,s),a(t,x,s),n(x,M),n(M,dt),a(t,Y,s),a(t,A,s),n(A,yt),a(t,Z,s),a(t,C,s),n(C,W),n(W,mt),a(t,tt,s),a(t,P,s),n(P,kt),a(t,et,s),a(t,B,s),n(B,O),n(O,wt),a(t,st,s),a(t,f,s),n(f,gt),n(f,bt),n(f,vt),n(f,It),n(f,_t),n(f,Et),n(f,Nt),n(f,Rt),n(f,Tt),n(f,xt),a(t,at,s),a(t,G,s),n(G,nt),a(t,ot,s),a(t,b,s),n(b,At),Ct||(Gt=ie(b,"click",S[1]),Ct=!0)},p(t,[s]){s&1&&le(nt,t[0])},i:te,o:te,d(t){t&&e(d),t&&e(m),t&&e(k),t&&e(j),t&&e(I),t&&e(U),t&&e(V),t&&e($),t&&e(y),t&&e(z),t&&e(w),t&&e(F),t&&e(E),t&&e(K),t&&e(N),t&&e(J),t&&e(R),t&&e(Q),t&&e(g),t&&e(X),t&&e(x),t&&e(Y),t&&e(A),t&&e(Z),t&&e(C),t&&e(tt),t&&e(P),t&&e(et),t&&e(B),t&&e(st),t&&e(f),t&&e(at),t&&e(G),t&&e(ot),t&&e(b),Ct=!1,Gt()}}}const ce={title:"Nottify Part 1",date:"2023-04-21"};function re(S,d,q){let m=0;return[m,()=>{q(0,m=m+1)}]}class fe extends ae{constructor(d){super(),ne(this,d,re,pe,oe,{})}}export{fe as default,ce as metadata};