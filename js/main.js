// ===== Loader =====
(function(){var n=0,el=document.getElementById('n'),bar=document.getElementById('bar'),ld=document.getElementById('loader');
var t=setInterval(function(){n+=Math.ceil(Math.random()*9);if(n>=100){n=100;clearInterval(t);setTimeout(function(){ld.classList.add('done')},300)}el.textContent=n;bar.style.width=n+'%'},70)})();

// ===== Latar jaringan node =====
(function(){var c=document.getElementById('stars'),x=c.getContext('2d'),N=[],W,H,m={x:-999,y:-999},still=matchMedia('(prefers-reduced-motion:reduce)').matches;window.NC='96,165,250';
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;N=[];for(var i=0,n=Math.min(120,Math.round(W*H/15000));i<n;i++)N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.5+.6})}
function dr(){x.clearRect(0,0,W,H);for(var i=0;i<N.length;i++){var a=N[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;x.fillStyle='rgba('+NC+',.8)';x.beginPath();x.arc(a.x,a.y,a.r,0,6.3);x.fill();
for(var j=i+1;j<N.length;j++){var b=N[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle='rgba('+NC+','+(.28*(1-d/130))+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
var dm=Math.hypot(a.x-m.x,a.y-m.y);if(dm<170){x.strokeStyle='rgba(242,183,5,'+(.5*(1-dm/170))+')';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke()}}
if(!still)requestAnimationFrame(dr)}
addEventListener('mousemove',function(e){m.x=e.clientX;m.y=e.clientY});addEventListener('resize',rs);rs();dr()})();

// ===== Render konten dari data.js =====
var $=function(q){return document.querySelector(q)};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
$('#grid').innerHTML=PROJECTS.map(function(p,i){if(!i)return '';return '<button class="glass pc rv" data-i="'+i+'" aria-label="Detail '+esc(p.t)+'"><div class="dv"><i></i><img src="'+p.img+'" alt="Tampilan '+esc(p.t)+'" loading="lazy"></div><div class="pb"><span class="tg">'+p.c+'</span><h3>'+esc(p.t)+'</h3><p>'+esc(p.s)+'</p></div></button>'}).join('');
(function(){var p=PROJECTS[0];$('#feat').innerHTML='<div><div class="st2">// PROYEK UNGGULAN</div><h3>'+esc(p.t)+'</h3><p class="s">'+esc(p.s)+'</p><p>'+esc(p.d)+'</p><ul>'+p.f.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul><button class="b p" data-show>Lihat detail &rarr;</button></div><div class="dv"><i></i><img src="'+p.img+'" alt="Tampilan '+esc(p.t)+'"></div>'})();
var mt=HARD.map(function(h){return '<span>'+esc(h[0])+'</span>'}).join('');$('#mqt').innerHTML=mt+mt;
$('#books').innerHTML=BOOKS.map(function(b){return '<figure class="rv"><img src="'+b.img+'" alt="Sampul '+esc(b.t)+'" loading="lazy"><figcaption><b>'+esc(b.t)+'</b><span>'+esc(b.m)+'</span></figcaption></figure>'}).join('');
$('#hard').innerHTML=HARD.map(function(h){return '<div class="glass tile rv"><em>'+esc(h[1])+'</em>'+esc(h[0])+'</div>'}).join('');
$('#soft').innerHTML=SOFT.map(function(s){return '<span>'+esc(s)+'</span>'}).join('');
var lg='';$('#exp').innerHTML=EXP.map(function(e){var h=e.g!==lg?'<li class="grp">'+esc(e.g)+'</li>':'';lg=e.g;return h+'<li class="glass rv"><b>'+esc(e.w)+'</b><h4>'+esc(e.t)+'</h4><p>'+esc(e.d)+'</p></li>'}).join('');
$('#ytimg').src=SITE.vthumb;
if(typeof CERTS!=='undefined'&&CERTS.length){$('#tbc').hidden=false;$('#certs').innerHTML=CERTS.map(function(c){return '<div class="glass cert rv">'+(c.img?'<img src="'+c.img+'" alt="'+esc(c.t)+'" loading="lazy">':'')+'<h4>'+esc(c.t)+'</h4><p>'+esc(c.by||'')+(c.y?' · '+esc(c.y):'')+'</p>'+(c.link?'<a href="'+c.link+'" target="_blank" rel="noopener">Lihat &rarr;</a>':'')+'</div>'}).join('')}

// ===== Tab =====
var tb=document.querySelectorAll('.tabs button'),pn=document.querySelectorAll('.pnl');
tb.forEach(function(b){b.addEventListener('click',function(){tb.forEach(function(x){x.setAttribute('aria-selected',x===b)});pn.forEach(function(p){p.hidden=p.id!==b.dataset.t});reveal()})});

// ===== Detail proyek =====
var dlg=$('#dlg');
function show(i){var p=PROJECTS[i];
var btn=p.link?'<a class="b p" href="'+p.link+'" target="_blank" rel="noopener">'+esc(p.lt)+' &rarr;</a>':'<span class="b off">Demo menyusul</span>';
$('#dbody').innerHTML='<img src="'+p.img+'" alt="Tampilan '+esc(p.t)+'"><div><span class="tg">'+p.c+'</span><h3>'+esc(p.t)+'</h3><p class="s">'+esc(p.s)+'</p><p style="color:#C9D6EE;font-size:15px">'+esc(p.d)+'</p><ul>'+p.f.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul><div style="margin-bottom:14px">'+p.tech.map(function(t){return '<span class="tg">'+esc(t)+'</span>'}).join('')+'</div>'+btn+'</div>';
dlg.showModal()}
$('#grid').addEventListener('click',function(e){var c=e.target.closest('.pc');if(c)show(c.dataset.i)});
$('#feat').addEventListener('click',function(e){if(e.target.closest('[data-show]'))show(0)});
$('#dx').addEventListener('click',function(){dlg.close()});
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});

// ===== Form kontak: kirim lewat WhatsApp atau email =====
function msg(){var n=$('#fn').value.trim()||'(nama)',m=$('#fm').value.trim()||'(pesan)';return 'Halo Adilia, saya '+n+'. '+m}
$('#fwa').addEventListener('click',function(){open(SITE.wa+'?text='+encodeURIComponent(msg()),'_blank')});
$('#fml').addEventListener('click',function(){location.href=SITE.mail+'?subject='+encodeURIComponent('Pesan dari portofolio')+'&body='+encodeURIComponent(msg())});

// ===== Animasi muncul + angka + menu aktif =====
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
function reveal(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el)})}reveal();
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,to=+el.dataset.n,dec=el.dataset.d==='1',t0=performance.now();
function f(t){var k=Math.min((t-t0)/1200,1),v=to*k;el.textContent=dec?v.toFixed(2).replace('.',','):Math.round(v);if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f);co.unobserve(el)})});
document.querySelectorAll('[data-n]').forEach(function(el){co.observe(el)});
var nl=document.querySelectorAll('.nav a'),so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)nl.forEach(function(a){a.classList.toggle('on',a.hash==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(function(s){so.observe(s)});

// ===== Teks ketik, progres scroll, cahaya kursor =====
(function(){var R=['Pengembangan Web','Analisis & Perancangan Sistem','Penulisan Ilmiah','Berbagi Ilmu Lewat Tulisan & Video'],el=$('#tp'),i=0,j=0,del=false;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){return}
function tick(){var w=R[i];j+=del?-1:1;el.textContent=w.slice(0,j);var d=del?45:90;
if(!del&&j===w.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%R.length;d=350}setTimeout(tick,d)}setTimeout(tick,1800)})();
addEventListener('scroll',function(){var h=document.documentElement;$('#pg').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
document.addEventListener('mousemove',function(e){var g=e.target.closest&&e.target.closest('.glass');if(!g)return;var r=g.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px')});
document.addEventListener('mousemove',function(e){var c=e.target.closest&&e.target.closest('.pc');if(!c)return;var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateY('+px*8+'deg) rotateX('+(-py*8)+'deg) translateY(-6px)'});
document.addEventListener('mouseout',function(e){var c=e.target.closest&&e.target.closest('.pc');if(c)c.style.transform=''});

// ===== Terminal interaktif =====
(function(){var out=$('#tout'),inp=$('#tcmd');
function pr(h){var d=document.createElement('div');d.innerHTML=h;out.appendChild(d);out.scrollTop=out.scrollHeight}
var C={help:function(){return 'Perintah: <b>whoami</b> <b>skills</b> <b>projects</b> <b>experience</b> <b>education</b> <b>contact</b> <b>social</b> <b>clear</b>'},
whoami:function(){return 'Adilia Meylani, mahasiswa Sistem Informasi ITB Tuban. Web developer &amp; analis sistem. Sudah membangun 8 sistem informasi, menulis 3 buku, dan membuat 26 video tutorial.'},
skills:function(){return HARD.map(function(h){return esc(h[0])}).join(' · ')+'<br>'+SOFT.map(esc).join(' · ')},
projects:function(){return PROJECTS.map(function(p,i){return '<b>'+(i+1)+'.</b> '+esc(p.t)+' <span class="g">['+p.c+']</span> '+esc(p.s)}).join('<br>')},
experience:function(){return EXP.map(function(e){return '<b>'+esc(e.w)+'</b> '+esc(e.t)}).join('<br>')},
education:function(){return 'S1 Sistem Informasi, ITB Tuban (2024 - estimasi 2028), IPK 3,80<br>Madrasah Aliyah, Pondok Pesantren Assalam Bangilan (lulus 2023)'},
contact:function(){return 'Email: meylaniee87@gmail.com<br>WhatsApp: 0878-3700-4739'},
social:function(){return 'YouTube @mmylnni · Instagram @meylnmystique_ · TikTok @_mmylnni'},
clear:function(){out.innerHTML='';return ''},
'sudo hire-me':function(){return '<span class="g">Permintaan diterima.</span> Silakan hubungi lewat bagian Kontak, saya tunggu kabarnya.'}};
function run(v){pr('<span class="g">$</span> '+esc(v));var f=C[v.toLowerCase().trim()];pr(f?f():'perintah tidak dikenal: '+esc(v)+'. Ketik <b>help</b>.')}
inp.addEventListener('keydown',function(e){if(e.key==='Enter'){var v=inp.value;inp.value='';if(v.trim())run(v)}});
$('#term').addEventListener('click',function(){inp.focus()});
pr('Selamat datang. Ketik <b>help</b> untuk melihat perintah.');run('whoami')})();

// ===== Pilihan tema warna =====
(function(){var TH=[['#3B82F6','#8B5CF6','96,165,250'],['#14B8A6','#3B82F6','45,212,191'],['#F59E0B','#EF4444','251,191,36'],['#EC4899','#8B5CF6','244,114,182']],box=$('#th');
function set(i){var t=TH[i],r=document.documentElement.style;r.setProperty('--g1',t[0]);r.setProperty('--g2',t[1]);window.NC=t[2];[].forEach.call(box.children,function(b,k){b.setAttribute('aria-pressed',k===i)});try{localStorage.setItem('th',i)}catch(e){}}
box.innerHTML=TH.map(function(t,i){return '<button aria-label="Tema warna '+(i+1)+'" style="background:linear-gradient(135deg,'+t[0]+','+t[1]+')"></button>'}).join('');
[].forEach.call(box.children,function(b,i){b.addEventListener('click',function(){set(i)})});
var s=0;try{s=+localStorage.getItem('th')||0}catch(e){}set(s)})();

// ===== Sertifikat + riwayat semester =====
(function(){var nc=$('#nc');nc.dataset.n=CERTS.length;if(!CERTS.length)nc.closest('.st').hidden=true;
if(CERTS.length){$('#tbc').hidden=false;$('#certs').innerHTML=CERTS.map(function(c,i){return '<button class="glass cert pc2 rv" data-i="'+i+'" aria-label="Lihat sertifikat '+esc(c.t)+'"><img src="'+c.img+'" alt="Sertifikat '+esc(c.t)+'" loading="lazy"><span class="tg">'+esc(c.r||'Peserta')+'</span><h4>'+esc(c.t)+'</h4><p>'+esc(c.by)+' · '+esc(c.y)+'</p></button>'}).join('');
$('#certs').addEventListener('click',function(e){var b=e.target.closest('.pc2');if(!b)return;var c=CERTS[b.dataset.i];$('#dbody').innerHTML='<div style="grid-column:1/-1;padding:14px"><img src="'+c.img+'" alt="" style="width:100%;border-radius:12px;display:block"><p style="margin:12px 4px 0;color:#C9D6EE"><b>'+esc(c.t)+'</b><br>'+esc(c.by)+' · '+esc(c.y)+'</p></div>';dlg.showModal()})}
$('#git').innerHTML=JOURNEY.map(function(j){return '<div class="gc rv"><i></i><div class="h"><span class="tag2">'+esc(j.s)+'</span><span class="msg">git commit -m "'+esc(j.m)+'"</span></div><ul>'+j.items.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul></div>'}).join('');
reveal()})();
