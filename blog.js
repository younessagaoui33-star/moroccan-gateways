(function(){
var U={
 t:{en:"Travel Blog",es:"Blog de viaje",fr:"Blog de voyage"},
 s:{en:"Practical tips from our local team to plan your trip to Morocco.",es:"Consejos prácticos de nuestro equipo local para planificar tu viaje a Marruecos.",fr:"Conseils pratiques de notre équipe locale pour préparer votre voyage au Maroc."},
 home:{en:"← Back to home",es:"← Volver al inicio",fr:"← Retour à l’accueil"},
 back:{en:"← Back to blog",es:"← Volver al blog",fr:"← Retour au blog"},
 read:{en:"Read article →",es:"Leer artículo →",fr:"Lire l’article →"},
 min:{en:"min read",es:"min de lectura",fr:"min de lecture"},
 more:{en:"Keep reading",es:"Sigue leyendo",fr:"À lire aussi"},
 cta:{en:"Plan your trip with us",es:"Planifica tu viaje con nosotros",fr:"Préparez votre voyage avec nous"},
 wa:{en:"Message us on WhatsApp →",es:"Escríbenos por WhatsApp →",fr:"Écrivez-nous sur WhatsApp →"}
};
function L(o){return o[cur]||o.en}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function mins(p){var n=0;p.s.forEach(function(x){n+=(L(x.p)).split(/\s+/).length});return Math.max(2,Math.round(n/190))}
function card(p,i){return '<article class="apost bpc"><a class="ap ph '+p.img+'" href="#post-'+(i+1)+'" aria-label="'+esc(L(p.t))+'"></a><div class="ab"><small>'+mins(p)+' '+L(U.min)+'</small><h3>'+esc(L(p.t))+'</h3><p>'+esc(L(p.x))+'</p><a class="rm" href="#post-'+(i+1)+'">'+L(U.read)+'</a></div></article>'}
window.renderBlog=function(){
  var pg=document.getElementById("blog-page");if(!pg||pg.hidden||!window.BLOG)return;
  var m=location.hash.match(/^#post-(\d+)$/),i=m?+m[1]-1:-1,p=BLOG[i];
  if(!p){
    document.title="Blog | Moroccan Gateways";
    pg.innerHTML='<div class="chero"><a href="#home">'+L(U.home)+'</a><h1>'+L(U.t)+'</h1><p>'+L(U.s)+'</p></div><div class="cw" style="max-width:1000px"><div class="ablog bl" style="margin-top:-34px">'+BLOG.map(card).join("")+'</div></div>';return}
  document.title=L(p.t)+" | Moroccan Gateways";
  var msg=encodeURIComponent("Hello Moroccan Gateways, I read your article \""+p.t.en+"\" and I'd like to plan a trip.");
  var rel=[1,2].map(function(k){var j=(i+k)%BLOG.length;return card(BLOG[j],j)}).join("");
  pg.innerHTML='<div class="chero bph"><div class="ph '+p.img+'"></div><div class="bhi"><a href="#blog-page">'+L(U.back)+'</a><h1>'+esc(L(p.t))+'</h1><p>'+mins(p)+' '+L(U.min)+'</p></div></div>'
   +'<div class="cw"><div class="abox bpost"><p class="lead">'+esc(L(p.x))+'</p>'
   +p.s.map(function(x){return '<h2>'+esc(L(x.h))+'</h2><p>'+esc(L(x.p))+'</p>'}).join("")
   +'<div class="bcta"><h3>'+L(U.cta)+'</h3><p>'+esc(L(p.c))+'</p><a class="book" href="https://wa.me/212651725529?text='+msg+'" target="_blank" rel="noopener">'+L(U.wa)+'</a></div></div>'
   +'<h2 class="bmore">'+L(U.more)+'</h2><div class="ablog bl">'+rel+'</div></div>'}
renderBlog();
})();
