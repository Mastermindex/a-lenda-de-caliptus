const characters = [
 {id:"caliptus",name:"Caliptus",title:"O herói do Reino",element:"Ordem",role:"Guerreiro",hp:300,atk:50,def:25,passive:"Last Breath",basic:"Corte rápido",charged:"Lâmina do Amanhecer",skill:"Bola de Fogo",sprite:"cavaleiro.png",lore:"Um herói cujo objetivo já foi cumprido, e agora luta não pelo reino, mas pelo simples anseio por uma luta."},
 {id:"gwen",name:"Gwen",title:"Caçadora de Heróis",element:"Caos",role:"Especialista",hp:250,atk:75,def:20,passive:"Preparado",basic:"Corte Rápido",charged:"Lâmina da Noite",skill:"Passos de Vento",sprite:"Ladina.png",lore:"Uma mercenária que usa agilidade e força para superar seus adversários antes que possam tocá-la."},
 {id:"zuan",name:"Zuan",title:"Deus da Espada",element:"Karma",role:"Guerreiro",hp:300,atk:60,def:20,passive:"Built Different",basic:"Corte da Rocha",charged:"Lâmina de Obsidiana",skill:"Lanças de Mercúrio",sprite:"Ronnin.png",lore:"Um antigo samurai que quase nunca parece se mover. Quando o faz, sua espada fala por ele."},
 {id:"kaite",name:"Kaite",title:"Arqueira Élfica",element:"Ordem",role:"Especialista / Maga",hp:250,atk:70,def:25,passive:"Gluttony",basic:"Disparo Rápido",charged:"Flecha Arcana",skill:"Chuva de Flechas",sprite:"Arqueira.png",lore:"Uma arqueira élfica cuja afinidade com a mana torna cada flecha uma ameaça."},
 {id:"golem",name:"Golem",title:"A Fúria das Trevas",element:"Caos",role:"Guerreiro",hp:500,atk:100,def:0,passive:"Built Different",basic:"Corte Negro",charged:"Pisão",skill:"Terremoto",sprite:"Golem.png",lore:"Um golem criado por necromancia a partir de inúmeras almas de guerreiros."},
 {id:"kaiser",name:"Kaiser",title:"Imperador Demoníaco",element:"Caos",role:"Mago",hp:350,atk:20,def:45,passive:"Gluttony",basic:"Soco Arcano",charged:"Explosão Mágica",skill:"Voar",sprite:"demonio.png",lore:"Um demônio que domina as trevas e utiliza magia negra para subjugar seus oponentes."},
 {id:"craylus",name:"Craylus",title:"O Mago de Todos os Magos",element:"Ordem",role:"Mago",hp:250,atk:80,def:15,passive:"Preparado",basic:"Disparo Etéreo",charged:"Lanças de Odin",skill:"Carregar Mana",sprite:"mago.png",lore:"Um mago cuja sabedoria e força arcana excedem todos os limites do reino."},
 {id:"mark",name:"Mark",title:"Lutador de Aço",element:"Karma",role:"Guerreiro",hp:300,atk:50,def:30,passive:"Last Breath",basic:"Strike",charged:"Punho do Dragão",skill:"Uppercut",sprite:"Fighter.png",lore:"Um lutador especializado em combates rápidos, que viveu para conquistar o maior torneio."},
 {id:"opineu",name:"Opineu",title:"Mestre dos Anões",element:"Karma",role:"Guerreiro",hp:350,atk:45,def:40,passive:"Preparado",basic:"Golpe de Machado",charged:"Martelo de Magma",skill:"Mestre da Forja",sprite:"Opineu.png",lore:"Um anão poderoso que deixou a forja para usar suas invenções na arena."}
];
const equipment = [
 {id:"light",name:"Arma leve",type:"Ataques rápidos",desc:"100% de dano. Sem chance de esquiva.",base:"Ataque rápido",order:"Ataques leves recuperam 1 PE extra.",chaos:"Ataques leves aplicam veneno por 3 turnos.",karma:"Ataques pesados concedem 25 de escudo."},
 {id:"heavy",name:"Arma pesada",type:"Força bruta",desc:"120% de dano. 5% de chance de esquiva.",base:"Golpes com 120% de dano.",order:"Ataques pesados causam 20% a mais de dano.",chaos:"Ataques pesados aplicam veneno por 3 turnos.",karma:"Ataques pesados concedem 50 de escudo."},
 {id:"staff",name:"Cajado Arcano",type:"Magia e mana",desc:"110% de dano. 10% de chance de esquiva. Usa mana.",base:"Canaliza poder arcano.",order:"Habilidade inata: cura 10% da vida máxima por 3 PE.",chaos:"Skills roubam 10% do dano causado.",karma:"Habilidade inata: regeneração por 5 turnos (4 PE)."},
 {id:"bow",name:"Arco",type:"Precisão",desc:"85% de dano. 20% de chance crítica (135%).",base:"20% de chance de crítico.",order:"Flecha flamejante: dano e queimadura por 3 turnos (5 PE).",chaos:"Flecha sombria: dano e reduz defesa por 3 turnos (5 PE).",karma:"Flecha da Justiça: dano baseado na vida restante do usuário (5 PE)."}
];
const consumables = [
 {id:"meat",name:"Carne Seca",desc:"Recupera vida e fortalece o corpo.",base:"+40 HP",order:"+10 HP adicionais",chaos:"+10% de dano por 2 turnos (custa 20 HP)",karma:"+5 HP adicionais"},
 {id:"water",name:"Água Santa",desc:"Uma bênção que pode proteger ou ferir.",base:"+15 HP",order:"+50 de escudo",chaos:"-55 HP e +20% de dano",karma:"+25 de escudo e +15 HP"},
 {id:"mask",name:"Máscara do Abismo",desc:"Um artefato instável das profundezas.",base:"-50 HP e +10% de dano",order:"-25 HP e +10% de dano",chaos:"+75 HP e +5% de dano",karma:"+20% de dano"}
];
const enemies = [
 {name:"Esqueleto Errante",subtitle:"Guardião das raízes",sprite:"esqueleto.png",element:"Caos",hp:190,atk:28,def:8,threat:"BAIXA"},
 {name:"Golem das Ruínas",subtitle:"Colosso desperto",sprite:"Golem.png",element:"Caos",hp:330,atk:38,def:14,threat:"MÉDIA"},
 {name:"Mago Corrompido",subtitle:"Eco da magia antiga",sprite:"mago.png",element:"Caos",hp:390,atk:42,def:18,threat:"ALTA"},
 {name:"Kaiser, o Imperador",subtitle:"Senhor das trevas",sprite:"demonio.png",element:"Caos",hp:520,atk:48,def:24,threat:"EXTREMA"},
 {name:"Rei Demônio",subtitle:"O último trono da masmorra",sprite:"Golem.png",element:"Caos",hp:780,atk:58,def:28,threat:"LENDÁRIA"}
];
const state={hero:null,gear:null,item:null,heroHp:0,heroPe:8,heroShield:0,enemy:null,enemyHp:0,enemyShield:0,turn:1,floor:0,itemUsed:false,gameOver:false,damageBonus:0,defenseBonus:0,poison:0,burn:0,enemyDefenseDown:0,lastFlame:false,turns:0};
const $=id=>document.getElementById(id);
function showScreen(name){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$("screen-"+name).classList.add("active");window.scrollTo(0,0)}
function elementClass(e){return "element-"+e.toLowerCase()}
function heroImage(c){return "assets/"+c.sprite}
function renderCharacters(){
 $("character-grid").innerHTML=characters.map(c=>`<button class="character-card ${state.hero?.id===c.id?"selected":""}" data-id="${c.id}">
 <img src="${heroImage(c)}" alt="${c.name}" loading="lazy"><div class="char-copy"><h3>${c.name}</h3><p class="char-title">${c.title}</p><div class="element-text ${elementClass(c.element)}">${c.element.toUpperCase()} · ${c.role.toUpperCase()}</div><div class="mini-stats"><span>HP <b>${c.hp}</b></span><span>ATK <b>${c.atk}</b></span><span>DEF <b>${c.def}</b></span></div><div class="passive-mini">✦ ${c.passive}</div></div></button>`).join("");
 document.querySelectorAll(".character-card").forEach(b=>b.addEventListener("click",()=>{state.hero=characters.find(c=>c.id===b.dataset.id);renderCharacters();$("to-loadout-btn").disabled=false;$("selected-summary").textContent=`${state.hero.name} · ${state.hero.element} · ${state.hero.hp} HP / ${state.hero.atk} ATK / ${state.hero.def} DEF`}));
}
function renderLoadout(){
 const c=state.hero;$("loadout-hero").innerHTML=`<img src="${heroImage(c)}" alt="${c.name}"><div class="element-text ${elementClass(c.element)}">${c.element.toUpperCase()} · ${c.role.toUpperCase()}</div><h3>${c.name}</h3><p>${c.title}</p><div class="loadout-stats"><span>HP <b>${c.hp}</b></span><span>ATK <b>${c.atk}</b></span><span>DEF <b>${c.def}</b></span></div>`;
 const allowed = c.role.includes("Guerreiro") ? ["light","heavy"]
  : c.role.includes("Especialista") && c.role.includes("Maga") ? ["bow","staff"]
  : c.role.includes("Mago") ? ["staff"]
  : c.role.includes("Especialista") ? ["bow"] : [];
 const availableEquipment=equipment.filter(e=>allowed.includes(e.id));
 if(!availableEquipment.some(e=>e.id===state.gear?.id)) state.gear=availableEquipment[0]||null;
 $("equipment-options").innerHTML=availableEquipment.map(e=>`<button class="option-card ${state.gear?.id===e.id?"selected":""}" data-id="${e.id}"><strong>${e.name}</strong><span>${e.desc}</span><em>${e[c.element.toLowerCase()]}</em></button>`).join("");
 $("item-options").innerHTML=consumables.map(i=>`<button class="option-card ${state.item?.id===i.id?"selected":""}" data-id="${i.id}"><strong>${i.name}</strong><span>${i.desc}</span><em>${i.base} · ${i[c.element.toLowerCase()]}</em></button>`).join("");
 document.querySelectorAll("#equipment-options .option-card").forEach(b=>b.addEventListener("click",()=>{state.gear=equipment.find(e=>e.id===b.dataset.id);renderLoadout()}));
 document.querySelectorAll("#item-options .option-card").forEach(b=>b.addEventListener("click",()=>{state.item=consumables.find(i=>i.id===b.dataset.id);renderLoadout()}));
}
function addLog(text,enemy=false){const p=document.createElement("p");p.className="log-entry"+(enemy?" enemy-log":"");p.innerHTML=text;$("battle-log").prepend(p)}
function toast(text){$("toast").textContent=text;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1900)}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function advantage(attacker,defender){const cycle={Ordem:"Caos",Caos:"Karma",Karma:"Ordem"};return cycle[attacker]===defender?1.15:cycle[defender]===attacker?.9:1}
function startBattle(floor=0){
 state.floor=floor;state.turn=1;state.heroHp=state.hero.hp;state.heroPe=8;state.heroShield=0;state.enemyShield=0;state.itemUsed=false;state.gameOver=false;state.damageBonus=0;state.defenseBonus=0;state.poison=0;state.burn=0;state.enemyDefenseDown=0;state.lastFlame=false;state.turns=0;
 const base=enemies[floor];const scale=1+Math.max(0,floor-1)*.12;
 state.enemy={...base,hp:Math.round(base.hp*scale),atk:Math.round(base.atk*scale),def:Math.round(base.def*scale)};
 state.enemyHp=state.enemy.hp;$("battle-log").innerHTML="";addLog(`Você entrou na arena. <strong>${state.enemy.name}</strong> bloqueia seu caminho.`);$("battle-item-name").textContent=state.item.name.toUpperCase();showScreen("battle");renderBattle(); 
}
function getStats(){
 const h=state.hero;let atk=h.atk,def=h.def;
 if(h.passive==="Built Different"&&state.heroHp<h.hp*.5){if(h.element==="Caos")atk*=1.1;else def*=h.element==="Ordem"?1.2:1.1;if(h.element==="Karma")atk*=1.05}
 if(h.passive==="Preparado"&&state.heroHp>h.hp*.8){if(h.element==="Ordem")atk*=1.2;if(h.element==="Caos")def*=1.5}
 if(h.passive==="Gluttony"&&state.itemUsed){if(h.element==="Ordem")def*=1.1;if(h.element==="Caos")atk*=1.1;if(h.element==="Karma"){atk*=1.05;def*=1.05}}
 atk*=1+state.damageBonus;def*=1+state.defenseBonus;
 return {atk,def};
}
function renderBattle(){
 const h=state.hero,e=state.enemy,st=getStats();
 $("stage-label").textContent=`MASMORRA · ANDAR ${state.floor+1} / ${enemies.length}`;$("enemy-title").textContent=e.name;$("turn-number").textContent=state.turn;
 $("hero-image").src=heroImage(h);$("hero-name").textContent=h.name;$("hero-class").textContent=h.role;$("hero-element").textContent=h.element.toUpperCase();$("hero-hp-text").textContent=`${Math.ceil(state.heroHp)} / ${h.hp}`;$("hero-hp-bar").style.width=`${clamp(state.heroHp/h.hp*100,0,100)}%`;$("hero-pe-text").textContent=`${state.heroPe} / 10`;$("hero-pe-bar").style.width=`${clamp(state.heroPe/10*100,0,100)}%`;$("hero-atk").textContent=Math.round(st.atk);$("hero-def").textContent=Math.round(st.def);$("hero-passive").textContent=h.passive;
 $("enemy-image").src="assets/"+e.sprite;$("enemy-name").textContent=e.name;$("enemy-class").textContent=e.subtitle;$("enemy-element").textContent=e.element.toUpperCase();$("enemy-hp-text").textContent=`${Math.ceil(state.enemyHp)} / ${e.hp}`;$("enemy-hp-bar").style.width=`${clamp(state.enemyHp/e.hp*100,0,100)}%`;$("enemy-threat").textContent=e.threat;$("enemy-threat-bar").style.width=`${Math.min(100,25+state.floor*18)}%`;$("enemy-atk").textContent=e.atk;$("enemy-def").textContent=e.def-Math.round(state.enemyDefenseDown);$("enemy-floor").textContent=String(state.floor+1).padStart(2,"0");
 const actions=[{key:"basic",name:h.basic,desc:"Ataque simples · recupera 1 PE",cost:0},{key:"charged",name:h.charged,desc:"Golpe reforçado",cost:3},{key:"skill",name:h.skill,desc:"Habilidade especial",cost:5}];
 $("action-grid").innerHTML=actions.map(a=>`<button class="action-btn" data-action="${a.key}" ${state.heroPe<a.cost?"disabled":""}><strong>${a.name}</strong><small>${a.desc}</small><small class="cost">${a.cost?`CUSTO ${a.cost} PE`:"SEM CUSTO"}</small></button>`).join("");
 document.querySelectorAll(".action-btn").forEach(b=>b.addEventListener("click",()=>playerAction(b.dataset.action)));
 $("ultimate-btn").disabled=state.heroPe<1;$("item-btn").disabled=state.itemUsed||state.gameOver;$("item-btn").innerHTML=state.itemUsed?"✓ ITEM UTILIZADO":`✚ USAR <span>${state.item.name.toUpperCase()}</span><small>Uso único nesta batalha</small>`;
}
function spend(cost){if(state.heroPe<cost){toast("Energia insuficiente!");return false}state.heroPe-=cost;return true}
function damageEnemy(amount,label,opts={}){
 const def=Math.max(0,state.enemy.def-state.enemyDefenseDown);let damage=Math.max(1,Math.round(amount-def));damage=Math.round(damage*advantage(state.hero.element,state.enemy.element));
 if(opts.crit)damage=Math.round(damage*1.35);
 const absorbed=Math.min(state.enemyShield,damage);state.enemyShield-=absorbed;damage-=absorbed;
 state.enemyHp=Math.max(0,state.enemyHp-damage);
 addLog(`<strong>${label}</strong> causou ${damage} de dano${absorbed?` (${absorbed} absorvido pelo escudo)`:""}.`);
 return damage;
}
function playerAction(action){
 if(state.gameOver)return;let h=state.hero,st=getStats(),base=st.atk*(state.gear.id==="heavy"?1.2:state.gear.id==="staff"?1.1:state.gear.id==="bow"?.85:1);let valid=true;
 if(action==="basic"){
  let crit=state.gear.id==="bow"&&Math.random()<.2;damageEnemy(base, h.basic,{crit});
  state.heroPe=clamp(state.heroPe+(state.gear.id==="light"&&h.element==="Ordem"?2:1),0,10);
  if(state.gear.id==="heavy"&&Math.random()<.05){state.enemyDefenseDown+=0;addLog("A arma pesada abriu uma brecha na guarda inimiga.")}
  if(state.gear.id==="light"&&h.element==="Caos"){state.poison=3;addLog("O inimigo foi envenenado por 3 turnos.")}
  if(state.gear.id==="heavy"&&h.element==="Karma"){state.heroShield+=25;addLog("A postura pesada concedeu 25 de escudo.")}
 }else if(action==="charged"){
  if(!spend(3))return;let amount=base*2;
  if(state.gear.id==="heavy"&&h.element==="Ordem")amount*=1.2;
  damageEnemy(amount,h.charged);
  if(state.gear.id==="heavy"&&h.element==="Karma"){state.heroShield+=50;addLog("O golpe pesado concedeu 50 de escudo.")}
  if(state.gear.id==="heavy"&&h.element==="Caos"){state.poison=3;addLog("O inimigo foi envenenado por 3 turnos.")}
 }else if(action==="skill"){
  const cost=h.passive==="Preparado"&&h.element==="Karma"?4:5;if(!spend(cost))return;
  if(h.id==="caliptus"){const dmg=Math.round(st.atk*2);state.enemyHp=Math.max(0,state.enemyHp-dmg);addLog(`<strong>${h.skill}</strong> atravessou a defesa e causou ${dmg} de dano.`)}
  else if(h.id==="gwen"){state.defenseBonus+=.25;addLog(`<strong>${h.skill}</strong> aumentou sua defesa em 25% por 2 turnos.`)}
  else if(h.id==="zuan"){damageEnemy(st.atk*1.8,h.skill);state.enemyDefenseDown+=10;addLog("A defesa inimiga caiu em 10 pontos por 3 turnos.")}
  else if(h.id==="kaite"){damageEnemy(st.atk*1.65,h.skill);addLog("Uma chuva de flechas atingiu o oponente.")}
  else if(h.id==="golem"){damageEnemy(st.atk*1.5,h.skill);state.enemyDefenseDown+=12;addLog("O terremoto desestabilizou o oponente: defesa reduzida.")}
  else if(h.id==="kaiser"){state.defenseBonus+=.2;damageEnemy(st.atk*1.5,h.skill);addLog("Kaiser paira acima do campo e fortalece sua guarda.")}
  else if(h.id==="craylus"){state.heroPe=clamp(state.heroPe+4,0,10);addLog(`<strong>${h.skill}</strong> recuperou 4 PE.`)}
  else if(h.id==="mark"){damageEnemy(st.atk*1.9,h.skill);state.enemyDefenseDown+=5}
  else if(h.id==="opineu"){state.damageBonus+=.3;addLog(`<strong>${h.skill}</strong> criou um amuleto: +30% ATK por 2 turnos.`)}
 }else return;
 if(state.enemyHp<=0){finishBattle(true);return}
 enemyTurn();state.turn++;state.turns++;tickEffects();if(state.enemyHp<=0){finishBattle(true);return}if(state.heroHp<=0){if(h.passive==="Last Breath"&&!state.lastFlame){state.heroHp=1;state.lastFlame=true;addLog("✦ <strong>Last Breath!</strong> Você resistiu com 1 HP.",false)}else{finishBattle(false);return}}
 renderBattle();
}
function useItem(){
 if(state.itemUsed||state.gameOver)return;const h=state.hero,i=state.item;state.itemUsed=true;
 if(i.id==="meat"){state.heroHp=clamp(state.heroHp+40+(h.element==="Ordem"?10:h.element==="Karma"?5:0),0,h.hp);if(h.element==="Caos"){state.heroHp=Math.max(1,state.heroHp-20);state.damageBonus+=.1}}
 if(i.id==="water"){state.heroHp=clamp(state.heroHp+15+(h.element==="Karma"?15:0),0,h.hp);if(h.element==="Ordem")state.heroShield+=50;if(h.element==="Karma")state.heroShield+=25;if(h.element==="Caos"){state.heroHp=Math.max(1,state.heroHp-55);state.damageBonus+=.2}}
 if(i.id==="mask"){state.heroHp=Math.max(1,state.heroHp-50+(h.element==="Ordem"?25:h.element==="Caos"?75:0));state.damageBonus+=h.element==="Caos"?.05:h.element==="Karma"?.2:.1}
 if(h.passive==="Gluttony"){if(h.element==="Ordem")state.defenseBonus+=.1;if(h.element==="Caos")state.damageBonus+=.1;if(h.element==="Karma"){state.damageBonus+=.05;state.defenseBonus+=.05}}
 addLog(`Você consumiu <strong>${i.name}</strong>. ${i.desc}`);enemyTurn();state.turn++;state.turns++;tickEffects();if(state.enemyHp<=0){finishBattle(true);return}if(state.heroHp<=0){if(h.passive==="Last Breath"&&!state.lastFlame){state.heroHp=1;state.lastFlame=true;addLog("✦ <strong>Last Breath!</strong> Você resistiu com 1 HP.")}else{finishBattle(false);return}}renderBattle();
}
function useUltimate(){
 if(state.heroPe<1||state.gameOver)return;const h=state.hero,st=getStats(),pe=state.heroPe;state.heroPe=0;
 let damage=st.atk*pe*.75;
 if(state.gear.id==="bow"&&h.element==="Karma")damage=Math.max(damage,h.hp-state.heroHp);
 damageEnemy(damage,"Ultimate · "+h.name);
 addLog(`<strong>Ultimate liberada!</strong> Toda a energia foi consumida (${pe} PE).`);
 if(state.enemyHp<=0){finishBattle(true);return}enemyTurn();state.turn++;state.turns++;tickEffects();if(state.enemyHp<=0){finishBattle(true);return}if(state.heroHp<=0){if(h.passive==="Last Breath"&&!state.lastFlame){state.heroHp=1;state.lastFlame=true;addLog("✦ <strong>Last Breath!</strong> Você resistiu com 1 HP.")}else{finishBattle(false);return}}renderBattle();
}
function enemyTurn(){
 if(state.enemyHp<=0)return;const e=state.enemy,roll=Math.random();const st=getStats();let amount,label;
 if(roll<.7){amount=e.atk;label="atacou"}
 else if(roll<.9){amount=e.atk*1.7;label="usou um ataque carregado"}
 else{const heal=Math.round(e.hp*.07);state.enemyHp=clamp(state.enemyHp+heal,0,e.hp);addLog(`O inimigo recuperou ${heal} HP.`,true);return}
 amount=Math.max(1,Math.round((amount-st.def)*advantage(e.element,state.hero.element)));
 const dodge=(state.gear.id==="heavy"?.05:state.gear.id==="staff"?.1:0);
 if(Math.random()<dodge){addLog(`Você esquivou do ataque inimigo!`,true);return}
 const absorbed=Math.min(state.heroShield,amount);state.heroShield-=absorbed;amount-=absorbed;
 state.heroHp-=amount;addLog(`O inimigo ${label} e causou ${amount} de dano${absorbed?` (${absorbed} absorvido pelo escudo)`:""}.`,true);
}
function tickEffects(){
 if(state.poison>0){const d=Math.max(1,Math.round(state.enemy.hp*.01));state.enemyHp=Math.max(0,state.enemyHp-d);state.poison--;addLog(`O veneno causou ${d} de dano.`,true)}
 if(state.burn>0){const d=Math.max(1,Math.round(state.enemy.hp*.03));state.enemyHp=Math.max(0,state.enemyHp-d);state.burn--;addLog(`A queimadura causou ${d} de dano.`,true)}
 if(state.enemyDefenseDown>0)state.enemyDefenseDown=Math.max(0,state.enemyDefenseDown-1);
 if(state.damageBonus>0)state.damageBonus=Math.max(0,state.damageBonus-.025);
 if(state.defenseBonus>0)state.defenseBonus=Math.max(0,state.defenseBonus-.025);
}
function finishBattle(won){
 state.gameOver=true;
 if(won){const final=state.floor===enemies.length-1;$("result-symbol").textContent=final?"♛":"✦";$("result-eyebrow").textContent=final?"O REINO ESTÁ SALVO":"VITÓRIA";$("result-title").textContent=final?"O Rei Demônio foi derrotado.":"O caminho continua."; $("result-copy").textContent=final?"Caliptus cumpriu seu destino. A masmorra silenciou e o reino está livre das trevas.":"Você superou "+state.enemy.name+". Prepare-se: a masmorra guarda um desafio ainda maior."; $("next-battle-btn").style.display=final?"none":"inline-block";$("next-battle-btn").innerHTML="PRÓXIMO DESAFIO <span>→</span>";}
 else{$("result-symbol").textContent="☽";$("result-eyebrow").textContent="DERROTA";$("result-title").textContent="A masmorra venceu desta vez."; $("result-copy").textContent="Seu campeão caiu diante de "+state.enemy.name+". Reorganize sua estratégia e tente novamente."; $("next-battle-btn").style.display="inline-block";$("next-battle-btn").textContent="TENTAR NOVAMENTE";}
 $("result-stats").innerHTML=`<div class="result-stat"><strong>${state.turns+1}</strong><span>TURNOS</span></div><div class="result-stat"><strong>${Math.max(0,Math.ceil(state.heroHp))}</strong><span>HP RESTANTE</span></div><div class="result-stat"><strong>${state.floor+1}</strong><span>ANDAR</span></div>`;
 showScreen("result");
}
$("start-btn").addEventListener("click",()=>{renderCharacters();showScreen("select")});
$("to-loadout-btn").addEventListener("click",()=>{if(!state.hero)return;state.gear=null;state.item=consumables[0];renderLoadout();showScreen("loadout")});
$("back-select-btn").addEventListener("click",()=>showScreen("select"));
$("begin-battle-btn").addEventListener("click",()=>{if(!state.gear||!state.item){toast("Escolha equipamento e consumível.");return}startBattle(0)});
$("item-btn").addEventListener("click",useItem);
$("ultimate-btn").addEventListener("click",useUltimate);
$("next-battle-btn").addEventListener("click",()=>{if(state.gameOver&&state.heroHp>0&&state.floor<enemies.length-1)startBattle(state.floor+1);else startBattle(state.floor)});
$("result-menu-btn").addEventListener("click",()=>{state.hero=null;state.gear=null;state.item=null;renderCharacters();$("to-loadout-btn").disabled=true;$("selected-summary").textContent="Selecione um personagem para continuar." ;showScreen("title")});
$("quit-btn").addEventListener("click",()=>{if(confirm("Deseja abandonar a jornada atual? Seu progresso nesta partida será perdido.")){state.hero=null;showScreen("title")}});
