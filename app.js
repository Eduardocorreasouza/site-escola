const SB_URL='https://fgfkgqwasotwwkkfmmhf.supabase.co';
const SB_KEY='sb_publishable_eYjoIm6r6lYGCVftdyqFSA_mVUZrVVk';
const db=window.supabase?.createClient(SB_URL,SB_KEY);

const areas=[
 {name:'Café & Leitura',tag:'HISTÓRIAS & IDENTIDADES',icon:'☕',intro:'Livros, quadrinhos e narrativas registram memória, identidade e experiências.',points:['Mangás e cultura japonesa','Literatura negra e afrodiaspórica','Narrativas indígenas e de imigração'],actions:['ler','conhecer','escutar'],context:'Histórias registram memória e identidade. Mangás, romances, cordéis e relatos mostram diferentes experiências.',examples:'Mangás japoneses, literatura negra, cordel e narrativas indígenas mostram diferentes formas de contar histórias.',focus:'Observe língua, personagens e temas. A referência cultural depende do contexto.',media:[
  {url:'/assets/collages/cafe.png',label:'Leitura • memória',credit:'Composição visual da exposição',source:'Arquivo local',fallback:'/assets/cafe.png'},
  {url:'/assets/photos/leitura-memoria.jpg',label:'Livros • leitura',credit:'Imagem enviada para a exposição',source:'Arquivo local',fallback:'/assets/cafe.png'}]},
 {name:'Degustação',tag:'SABORES & ENCONTROS',icon:'◒',intro:'Ingredientes e receitas carregam território, memória e encontros entre povos.',points:['Temperos e tradições indianas','Massas e sabores da Itália','Cozinhas japonesa, africana, árabe e indígena'],actions:['sentir','identificar','relacionar'],context:'Uma mesa reúne território, memória e encontros. Ingredientes e técnicas também viajam com as pessoas.',examples:'Especiarias indianas, massas italianas e preparos japoneses se encontram com saberes africanos, árabes e indígenas.',focus:'Observe ingredientes, técnicas e caminhos de troca entre povos.',media:[
  {url:'/assets/collages/degustacao.png',label:'Sabores • encontros',credit:'Composição visual da exposição',source:'Arquivo local',fallback:'/assets/degustacao.png'},
  {url:'/assets/degustacao.png',label:'Degustação • sabores e território',credit:'Arte da área',source:'Arquivo local',fallback:'/assets/degustacao.png'}]},
 {name:'Beleza & Estilos',tag:'CORPO, ROUPA & PERTENCIMENTO',icon:'✦',intro:'Cabelos, roupas, adornos e símbolos podem comunicar pertencimento e identidade.',points:['Tranças e estéticas negras','Bunad e roupas regionais europeias','Grafismos e adornos indígenas'],actions:['observar','contextualizar','respeitar'],context:'Cabelos, roupas e adornos podem comunicar identidade. Os significados mudam conforme povo, região e situação.',examples:'Tranças afro, bunad norueguês, roupas regionais e grafismos indígenas mostram diferentes formas de pertencimento.',focus:'Observe quem usa, em qual situação e qual significado a comunidade atribui.',media:[
  {url:'/assets/collages/beleza.png',label:'Beleza • pertencimento',credit:'Composição visual da exposição',source:'Arquivo local',fallback:'/assets/beleza.png'},
  {url:'/assets/beleza.png',label:'Corpo • roupa • identidade',credit:'Arte da área',source:'Arquivo local',fallback:'/assets/beleza.png'}]},
 {name:'Artes & Desenhos',tag:'IMAGEM, ARTE & MEMÓRIA',icon:'✎',intro:'Pinturas, desenhos e grafismos registram visões de mundo e formas de expressão.',points:['Arte europeia e suas escolas','Grafismos e artes indígenas','Artes africanas e afro-brasileiras'],actions:['observar','comparar','contextualizar'],context:'A arte registra visões de mundo. Diferentes povos usam linguagens, materiais e referências próprias.',examples:'Pinturas europeias, grafismos indígenas e artes africanas e afro-brasileiras mostram diferentes formas de expressão.',focus:'Observe autoria, contexto e significado. Representar exige entender de onde vem a obra.',media:[
  {url:'/assets/collages/artes.png',label:'Arte • memória e expressão',credit:'Composição visual da exposição',source:'Arquivo local',fallback:'/assets/artes.png'},
  {url:'/assets/photos/arte-memoria-expressao.jpg',label:'Arte • memória',credit:'Imagem de referência da exposição',source:'Arquivo local',fallback:'/assets/artes.png'}]}
];

const webMedia=[
  {
    content:{url:'https://upload.wikimedia.org/wikipedia/commons/1/19/008_Anime_and_manga_bookshop_in_Japan_-_bookstore_in_Kyoto%2C_Japan.jpg',label:'Mangá • livraria em Kyoto',credit:'Marek Ślusarczyk / Wikimedia Commons',source:'CC BY 3.0'},
    context:{url:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Oral_Tradition_mural_in_Evolution_of_the_Book_series%2C_by_John_W._Alexander._Library_of_Congress_Thomas_Jefferson_Building%2C_Washington%2C_D.C._LCCN2005675755.jpg',label:'Tradição oral • memória',credit:'Library of Congress / Wikimedia Commons',source:'Domínio público'},
    interest:{url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/TSUTAYA_BOOKSTORE.jpg',label:'Livraria • leitura contemporânea',credit:'Souka Kinmei / Wikimedia Commons',source:'CC BY-SA 4.0'}
  },
  {
    content:{url:'https://upload.wikimedia.org/wikipedia/commons/e/e9/Indian_SPices.jpg',label:'Especiarias • Índia',credit:'Maulpatel / Wikimedia Commons',source:'CC BY-SA 4.0'},
    context:{url:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Italian_dish_with_pasta.jpg',label:'Sabores • Itália',credit:'Reem Al-Kashif / Wikimedia Commons',source:'CC BY-SA 4.0'},
    interest:{url:'https://upload.wikimedia.org/wikipedia/commons/b/b3/Japanese_Cuisine.jpg',label:'Culinária • Japão',credit:'Nadiredg / Wikimedia Commons',source:'CC0'}
  },
  {
    content:{url:'https://upload.wikimedia.org/wikipedia/commons/b/b8/African_braids.jpg',label:'Tranças • pertencimento',credit:'Oklo2020 / Wikimedia Commons',source:'CC BY-SA 4.0'},
    context:{url:'https://upload.wikimedia.org/wikipedia/commons/d/dc/Norwegian_folk_costume_from_Western_Norway.jpg',label:'Bunad • Noruega',credit:'Mia1964 / Wikimedia Commons',source:'CC BY-SA 4.0'},
    interest:{url:'https://upload.wikimedia.org/wikipedia/commons/0/02/Pintura_corporal_na_Aldeia_Rio_Pequeno_3.jpg',label:'Pintura corporal • grafismo indígena',credit:'João Martins (Awá Ponhỹ) / Wikimedia Commons',source:'CC BY-SA 4.0'}
  },
  {
    content:{url:'https://upload.wikimedia.org/wikipedia/commons/5/5e/The_Arlesienne_by_Vincent_van_Gogh%2C_1890%2C_oil_on_canvas_-_Museu_de_Arte_de_S%C3%A3o_Paulo_-_DSC07384.jpg',label:'Pintura europeia • Van Gogh',credit:'Daderot / Wikimedia Commons',source:'CC0'},
    context:{url:'https://upload.wikimedia.org/wikipedia/commons/0/0d/Arte_ind%C3%ADgena.jpg',label:'Arte indígena • artesanato',credit:'Joelalencar / Wikimedia Commons',source:'CC BY-SA 4.0'},
    interest:{url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/African_sculpture,_Museum_Humanum,_259013.jpg',label:'Escultura • África',credit:'Zde / Wikimedia Commons',source:'CC BY-SA 4.0'}
  }
];

const roles=[['Recepcionista','Acolher, orientar e ajudar o visitante a entrar na experiência.','↗'],['Curador','Organizar ideias, referências e escolhas da exposição.','⌁'],['Divulgador','Apresentar o projeto e despertar curiosidade.','◌'],['Negociador','Aproximar pessoas, propostas e possibilidades.','◇']];
let slides=[
 {type:'cover',title:'RAÍZES & CONEXÕES',sub:'Uma exposição sobre identidades, povos, memórias e encontros culturais.'},
 {type:'project',title:'Pessoas antes de estereótipos',sub:'A exposição apresenta culturas e identidades étnico-raciais por meio de histórias, sabores, expressões e formas de representação.'}
];
areas.forEach(a=>slides.push({type:'area-cover',a},{type:'area-content',a},{type:'area-context',a},{type:'area-interest',a}));
slides.push({type:'roles',title:'Cada experiência precisa de gente',sub:'Quatro funções, uma mesma intenção: fazer a exposição acontecer.'},{type:'form',title:'Manifestar interesse'});

let i=0;
const app=document.getElementById('app');
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function go(n){i=Math.max(0,Math.min(slides.length-1,n));render()}

let adminMode=new URLSearchParams(location.search).has('admin');
let adminUser=null;
let adminRows=[];

function adminShell(content){
 document.body.classList.add('admin-page');
 app.innerHTML=`<div class="admin-shell">${content}</div>`;
}
function adminLoginView(message=''){
 adminShell(`<section class="admin-login-card">
   <div class="admin-brand">R <span>RAÍZES & CONEXÕES</span></div>
   <span class="kicker">ÁREA RESTRITA</span>
   <h1>Painel do administrador</h1>
   <p>Entre com a conta administrativa cadastrada no Supabase.</p>
   <form class="admin-form" onsubmit="adminLogin(event)">
     <label>E-mail<input id="admin-email" type="email" autocomplete="email" required placeholder="seu e-mail"></label>
     <label>Senha<input id="admin-password" type="password" autocomplete="current-password" required placeholder="Sua senha"></label>
     <button class="primary admin-submit" id="admin-submit">Entrar no painel ↗</button>
     <div class="admin-msg ${message?'error':''}" id="admin-msg">${esc(message)}</div>
   </form>
   <a class="admin-back" href="/">← Voltar para a exposição</a>
 </section>`);
}
function adminTableView(){
 const pending=adminRows.filter(x=>x.status==='pendente').length;
 const approved=adminRows.filter(x=>x.status==='aprovado').length;
 const refused=adminRows.filter(x=>x.status==='recusado').length;
 const rows=adminRows.map(r=>`<tr>
   <td><strong>${esc(r.nome)}</strong><small>${esc(r.turma)}</small></td>
   <td>${esc(r.area)}</td><td>${esc(r.funcao)}</td>
   <td><span class="admin-status status-${esc(r.status)}">${esc(r.status)}</span></td>
   <td>${new Date(r.created_at).toLocaleString('pt-BR')}</td>
   <td class="admin-actions">
     ${r.status!=='aprovado'?`<button onclick="adminStatus('${r.id}','aprovado')">Aprovar</button>`:''}
     ${r.status!=='recusado'?`<button onclick="adminStatus('${r.id}','recusado')">Recusar</button>`:''}
     <button class="danger" onclick="adminDelete('${r.id}')">Excluir</button>
   </td>
 </tr>`).join('') || `<tr><td colspan="6" class="admin-empty">Nenhuma manifestação registrada ainda.</td></tr>`;
 adminShell(`<main class="admin-dashboard">
   <header class="admin-head"><div><span class="kicker">06 / ADMINISTRAÇÃO</span><h1>Manifestações</h1><p>Gerencie as inscrições enviadas pelo formulário da exposição.</p></div><div class="admin-head-actions"><button onclick="adminRefresh()">↻ Atualizar</button><button onclick="adminLogout()">Sair</button></div></header>
   <section class="admin-stats"><div><strong>${adminRows.length}</strong><span>Total</span></div><div><strong>${pending}</strong><span>Pendentes</span></div><div><strong>${approved}</strong><span>Aprovadas</span></div><div><strong>${refused}</strong><span>Recusadas</span></div></section>
   <section class="admin-table-wrap"><table><thead><tr><th>Participante</th><th>Área</th><th>Função</th><th>Status</th><th>Data</th><th>Ações</th></tr></thead><tbody>${rows}</tbody></table></section>
   <a class="admin-back" href="/">← Voltar para a exposição</a>
 </main>`);
}
async function adminLogin(e){
 e.preventDefault(); const msg=document.getElementById('admin-msg'),btn=document.getElementById('admin-submit');
 btn.disabled=true; btn.textContent='Entrando…'; msg.textContent=''; msg.className='admin-msg';
 const email=document.getElementById('admin-email').value.trim(), password=document.getElementById('admin-password').value;
 if(!db){msg.className='admin-msg error';msg.textContent='Conexão com o Supabase indisponível.';btn.disabled=false;btn.textContent='Entrar no painel ↗';return}
 const {data,error}=await db.auth.signInWithPassword({email,password});
 if(error||!data.user){msg.className='admin-msg error';msg.textContent='E-mail ou senha incorretos.';btn.disabled=false;btn.textContent='Entrar no painel ↗';return}
 const {data:admin,error:adminError}=await db.from('admins').select('user_id').eq('user_id',data.user.id).maybeSingle();
 if(adminError||!admin){await db.auth.signOut();msg.className='admin-msg error';msg.textContent='Esta conta não possui acesso de administrador.';btn.disabled=false;btn.textContent='Entrar no painel ↗';return}
 adminUser=data.user; await adminRefresh();
}
async function adminRefresh(){
 if(!db)return adminLoginView('Conexão com o Supabase indisponível.');
 const {data:{session}}=await db.auth.getSession();
 if(!session){adminLoginView();return}
 const {data:admin,error:adminError}=await db.from('admins').select('user_id').eq('user_id',session.user.id).maybeSingle();
 if(adminError||!admin){await db.auth.signOut();adminLoginView('Esta conta não possui acesso de administrador.');return}
 adminUser=session.user;
 const {data,error}=await db.from('manifestacoes').select('*').order('created_at',{ascending:false});
 if(error){adminShell(`<section class="admin-error"><h1>Não foi possível carregar as manifestações.</h1><p>${esc(error.message)}</p><button class="primary" onclick="adminRefresh()">Tentar novamente</button></section>`);return}
 adminRows=data||[];adminTableView();
}
async function adminStatus(id,status){
 const {error}=await db.from('manifestacoes').update({status}).eq('id',id);if(error){alert('Não foi possível atualizar o status.');return}await adminRefresh();
}
async function adminDelete(id){
 if(!confirm('Excluir esta manifestação? Esta ação não pode ser desfeita.'))return;
 const {error}=await db.from('manifestacoes').delete().eq('id',id);if(error){alert('Não foi possível excluir a manifestação.');return}await adminRefresh();
}
async function adminLogout(){await db.auth.signOut();adminUser=null;adminRows=[];adminLoginView();}

function render(){const s=slides[i];const theme=s.type==='area-cover'||s.type==='area-content'||s.type==='area-context'||s.type==='area-interest'?['cafe','degustacao','beleza','artes'][Math.floor((i-2)/4)]:'base';app.innerHTML=`<main class="shell theme-${theme}"><div class="grain"></div><header class="topbar"><button class="brand" onclick="go(0)"><span class="brand-mark">R</span><span>RAÍZES <b>&</b> CONEXÕES</span></button><div class="counter">${String(i+1).padStart(2,'0')} <i></i> ${String(slides.length).padStart(2,'0')}</div></header><section class="slide">${view(s)}</section><nav class="controls"><button onclick="go(${i-1})" ${i===0?'disabled':''}>←</button><div class="progress">${slides.map((_,n)=>`<button class="${n===i?'active':''}" onclick="go(${n})"></button>`).join('')}</div><button onclick="go(${i+1})" ${i===slides.length-1?'disabled':''}>→</button></nav></main>`}
function view(s){
 if(s.type==='cover')return `<div class="layout cover"><div class="hero-copy"><span class="kicker">EXPOSIÇÃO CULTURAL • 2026</span><h1>RAÍZES &<br>CONEXÕES</h1><p>${s.sub}</p><button class="primary" onclick="go(1)">Entrar na experiência ↗</button></div><div class="cover-art"><div class="ring"></div><div class="ring r2"></div><div class="seed">✦</div><span class="scribble s1">RAIZ</span><span class="scribble s2">IDENTIDADE</span></div></div>`;
 if(s.type==='project')return `<div class="layout project"><div><span class="kicker">01 / O PROJETO</span><h2>${s.title}</h2><p class="lead">${s.sub}</p><div class="project-note"><b>O foco:</b> conhecer pessoas e comunidades sem reduzir suas histórias a imagens prontas.</div></div><div class="project-grid"><div class="feature large"><span>04</span><strong>lentes para<br>olhar identidades</strong><small>memória • sabores • expressão • representação</small></div><div class="feature"><span>01</span><strong>respeito</strong><small>ao contexto de cada comunidade</small></div><div class="feature"><span>∞</span><strong>conexões</strong><small>entre histórias do Brasil e do mundo</small></div></div></div>`;
 if(s.type==='roles')return `<div class="layout roles"><div class="section-head"><span class="kicker">05 / FUNÇÕES</span><h2>${s.title}</h2><p>${s.sub}</p></div><div class="role-grid">${roles.map((r,n)=>`<article class="role-card"><span class="role-no">0${n+1}</span><span class="role-icon">${r[2]}</span><h3>${r[0]}</h3><p>${r[1]}</p></article>`).join('')}</div><button class="primary lower" onclick="go(${slides.length-1})">Quero participar ↗</button></div>`;
 if(s.type==='form')return formView();
 const a=s.a;
 if(s.type==='area-cover'){const ai=areas.indexOf(a);const collage=[
  {main:'/assets/collages/cafe.png'},
  {main:'/assets/collages/degustacao.png'},
  {main:'/assets/collages/beleza.png'},
  {main:'/assets/collages/artes.png'}
][ai];return `<div class="layout area-cover editorial-area"><div class="editorial-collage single-collage"><div class="collage-orbit orbit-1"></div><div class="collage-orbit orbit-2"></div><figure class="collage-main"><img src="${collage.main}" alt="${a.name}"></figure><span class="collage-spark">✦</span></div><div class="area-cover-copy"><span class="kicker">${a.tag}</span><h2>${a.name}</h2><p class="lead">${a.intro}</p><button class="ghost" onclick="go(${slides.findIndex(x=>x.type==='area-content'&&x.a.name===a.name)})">Explorar área ↓</button></div></div>`;}
 if(s.type==='area-content'){const ai=areas.indexOf(a),m=webMedia[ai].content;return `<div class="layout area-content"><div class="area-copy"><span class="kicker">${a.tag} / EM FOCO</span><h2>${a.name}</h2><p class="lead">${a.examples}</p><div class="content-highlight"><span>O QUE OBSERVAR</span><p>${a.focus}</p></div></div><div class="area-content-visual"><figure class="web-photo content-photo"><img src="${m.url}" alt="${m.label}" loading="lazy" onerror="this.onerror=null;this.src='${a.media[0].url}'"><figcaption>${m.label}</figcaption></figure><div class="point-grid">${a.points.map((p,n)=>`<div class="point"><span>0${n+1}</span><strong>${p}</strong><i>${a.actions[n]}</i></div>`).join('')}</div></div></div>`;}
 if(s.type==='area-context'){const ai=areas.indexOf(a),m=webMedia[ai].context;return `<div class="layout context"><div class="context-visual"><figure class="web-photo context-photo"><img src="${m.url}" alt="${m.label}" loading="lazy" onerror="this.onerror=null;this.src='${a.media[0].url}'"><figcaption>${m.label}</figcaption></figure><div class="context-overlay"><span class="quote-mark">“</span><h2>Conhecer é ir<br><em>além do estereótipo.</em></h2><div class="context-tag">${a.tag}</div></div></div><div class="context-copy"><span class="kicker">${a.name.toUpperCase()} / CONTEXTO</span><p>${a.context}</p><div class="mini-rule"></div><span class="note">Cada exemplo apresentado pertence a um contexto específico. A exposição não pretende falar por uma comunidade, mas abrir espaço para conhecê-la.</span></div></div>`;}
 const ai=areas.indexOf(a),m=webMedia[ai].interest;return `<div class="layout interest"><div class="interest-copy"><span class="kicker">${a.name.toUpperCase()} / PARTICIPE</span><h2>${ai===3?'Arte • memória':'Leve essa'}<br><em>${ai===3?'e expressão.':'conversa adiante.'}</em></h2><p class="lead">${ai===3?'Obras, grafismos e técnicas que retratam a história, a identidade e a criatividade de diferentes povos.':'Pesquise, apresente ou crie experiências a partir de referências culturais diversas.'}</p><button class="primary" onclick="go(${slides.length-1})">Manifestar interesse ↗</button></div><div class="interest-art web-interest-art"><figure class="interest-photo main-interest-photo"><img src="${m.url}" alt="${m.label}" loading="lazy" onerror="this.onerror=null;this.src='${a.media[0].url}'"><span>${m.label}</span></figure><div class="interest-orbit orbit-a"></div><div class="interest-orbit orbit-b"></div></div></div>`;
}
function formView(){return `<div class="layout form-layout"><div class="form-intro"><span class="kicker">06 / PARTICIPAÇÃO</span><h2>Manifestar<br><em>interesse.</em></h2><p>Escolha uma área e uma função para indicar onde você gostaria de contribuir.</p><div class="warning">A manifestação de interesse <b>não garante uma vaga.</b></div></div><form class="interest-form" onsubmit="submitInterest(event)"><label>Seu nome<input id="nome" maxlength="120" required placeholder="Como podemos chamar você?"></label><label>Sua turma<input id="turma" maxlength="40" required placeholder="Ex.: 103"></label><label>Área de interesse<select id="area">${areas.map(a=>`<option>${a.name}</option>`).join('')}</select></label><label>Função desejada<select id="funcao">${roles.map(r=>`<option>${r[0]}</option>`).join('')}</select></label><button class="primary submit" id="submit">Registrar interesse ↗</button><div id="formmsg"></div></form></div>`}
async function submitInterest(e){e.preventDefault();const m=document.getElementById('formmsg'),b=document.getElementById('submit');b.disabled=true;b.textContent='Enviando…';if(!db){m.className='form-msg error';m.textContent='A conexão com o banco não está configurada.';b.disabled=false;return}const {error}=await db.from('manifestacoes').insert({nome:document.getElementById('nome').value.trim(),turma:document.getElementById('turma').value.trim(),area:document.getElementById('area').value,funcao:document.getElementById('funcao').value,status:'pendente'});if(error){m.className='form-msg error';m.textContent='Não foi possível registrar agora. Tente novamente.';b.disabled=false;b.textContent='Registrar interesse ↗'}else{m.className='success';m.textContent='Sua manifestação foi registrada. Obrigado por fazer parte.';b.textContent='Enviado ✓';e.target.reset()}}
document.addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;if(e.key==='ArrowRight'||e.key==='PageDown')go(i+1);if(e.key==='ArrowLeft'||e.key==='PageUp')go(i-1);if(e.key==='Home')go(0);if(e.key==='End')go(slides.length-1)});
if(adminMode){adminRefresh()}else{render();}
