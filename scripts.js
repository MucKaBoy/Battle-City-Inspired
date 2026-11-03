window.onload = function () {
var gamemode = 0; 
//
function getPromiseFromEvent(item, event) {
  return new Promise((resolve) => {
    const listener = () => {
      item.removeEventListener(event, listener);
      resolve();
    }
    item.addEventListener(event, listener);
  })
}
async function waitForButton1Click() {
  const div = document.getElementById("choicediv");
  const buttonpvp = document.getElementById("gamemodepvp");
  const canvas = document.getElementById("canvas");
  //const keysjpg = document.getElementById("keysjpg");
  await getPromiseFromEvent(buttonpvp, "click") 
  gamemode = 1;
  div.innerText = "Стрелки - передвижение синего; WASD - Передвижение красного; Shift - Огонь синего; Q - Огонь красного";
  canvas.style.display = "block";
  //keysjpg.style.display = "flex";
}
async function waitForButton2Click() {
  const div = document.getElementById("choicediv");
  const buttonpve = document.getElementById("gamemodepve");
  const canvas = document.getElementById("canvas");
  const buttons = document.getElementById("buttons");
  
  await getPromiseFromEvent(buttonpve, "click") 
  gamemode = 2;
  div.innerText = "Стрелки - передвижение синего; WASD - Передвижение красного; Shift - Огонь синего; Q - Огонь красного";
  buttons.style.display = "block";
  canvas.style.display = "block";
}

  async function waitForButton3Click() {
  const div = document.getElementById("choicediv");
  const buttonsrv = document.getElementById("gamemodesrv");
  const canvas = document.getElementById("canvas");
  const buttons = document.getElementById("buttons");
  
  await getPromiseFromEvent(buttonsrv, "click") 
  gamemode = 3;
  div.innerText = "Стрелки - передвижение синего; WASD - Передвижение красного; Shift - Огонь синего; Q - Огонь красного;";
  buttons.style.display = "none";
  canvas.style.display = "block";
}
    
waitForButton1Click();
waitForButton2Click();
waitForButton3Click();
//
var gamemodepvp = document.getElementById("gamemodepvp"), gamemodepve = document.getElementById("gamemodepve");
    function choice(){
        gamemodepve.onclick = function(){gamemode = 1};
        gamemodepvp.onclick = function(){gamemode = 2}; 
        console.log(gamemode);
    }
    //
var canvas = document.getElementById("canvas"), context = canvas.getContext("2d");  
//canvas.width = window.innerWidth; ничего себе канва на весь экран?
//canvas.height = window.innerHeight;
       
var gamemode = 0,
x = 50, y = 349, level = 1,speed = 150, pickupbuff = 1, oursize = 50, levelscore = 0, shield = 0, shieldmemory = -1, score = 0, lvlscrneeded = 3, dir = 0, gundir = 1,     bulletsx = [], bulletsy = [], bulletspeed = 1000, bulletspeeds = [], bulletsize = 7, bulletdirs = [], bufferdir = 0, bulletlvl = 0, hp = 1, maxhp = 1, ammo = 0, maxammo = 5,

enemyx = 3000, enemyy = 400, level2 = 1, enemyhp = 1, enemymaxhp = 1, enemyspeed = 50, score2 = 0, dir2 = 0, gundir2 = 1,  bulletlvl2 = 0, bufferdir2 = 0, pickupbuff2 = 1, lvlscrneeded2 = 3, levelscore2 = 0, bulletsize2 = 7, bulletspeed2 = 1000, ammo2 = 0, maxammo2 = 5, bulletsx2 = [], bulletsy2 = [], bulletspeeds2 = [], bulletdirs2 = [],

bulletsx3 = [], bulletsy3 = [], bulletspeeds3 = [], bulletdirs3 = [], bufferdir3, autogunlvl = 1, k3 = 0, q3 = 0, n3 = 0, i3 = 0,
    
i = 0, n = 0, q = 0, k = 0, i2 = 0, n2 = 0, q2 = 0, k2 = 0, i3 = 0, 
basex = 800, basey = 680, basehp = 10, basemaxhp = 10, ammoupgradecost = 0, repaircost = 0, ammostationlvl = 0, ammocost = 0, baselvl = 1,
medstationupradecost = 10, medstationlvl = 0, medikitcost = 0, medikitx = -500, medikity = -500, ammoboxx = -500, ammoboxy = -500,
foex = [], foey = [], foespeed = [], foehp = [], foemaxhp = [],foetype = [], foesize = [], foetarget = [], num, nummax, wave = 1, wavebuff = 0,
coinxs = [], coinys = [], coinn = 0, coink = 0, coinq = 0, typepossible = 1, coinvalue = [], enemyworth = [], enemyxpworth = [],
keyr, keyu, keyl, keyd, key1, key2,
roundx = 50, roundy = 349,
min = 3000, a,b,c, closestfoe = 0,
t = Date.now(), 
time = Date.now(), time2 = Date.now(), attackspeed = 1,
enemytime = Date.now(), enemytime2 = Date.now(), enemyattackspeed = 1,
autoguntime = Date.now(), autoguntime2 = Date.now(), autogunattackspeed = 1,
coinx = Math.random() * 1750,
coiny = Math.random() * 750,
buffx = Math.random() * 1750,
buffy = Math.random() * 750,
shieldx = -300, shieldy = -300, enemysize = 10, 
coinsound = new Audio('1.mp3'), newlevelsound = new Audio('2.mp3'), gameoversound = new Audio('3.mp3'), buffballsound = new Audio('4.mp3'),
winsound = new Audio('5.mp3'), shieldbreaksound = new Audio('6.mp3'), shieldpickupsound = new Audio('7.mp3'), shotsound = new Audio('9.mp3'), hitsound = new Audio('10.mp3'), bullethitbullet = new Audio('10b.mp3'), enemyshoot = new Audio('9.mp3'),
nogunsound = new Audio('11.mp3'), leveldown = new Audio ('12.mp3'), enemydeath = new Audio('13.mp3'), ammopickup = new Audio('14.mp3');
//var killmodmusic = new Audio('8.mp3'); //прикол с музыкой из дума
var randomx = Math.random() * 1750, randomy = Math.random() * 750;
var shrek = new Image();
shrek.src = 'ShrekPNG.png';
var ammopng = new Image();
ammopng.src = 'ammo.png';
var buffpng = new Image();
buffpng.src = 'buff.png';  
var ammostationpng = new Image();
ammostationpng.src = 'ammostation.png';  
var ammostation2png = new Image();
ammostation2png.src = 'ammostation2.png';
var ammostation4png = new Image();
ammostation4png.src = 'ammostation4.png';
//var map = {};
//var randomwallx = Math.random() * 1450;
//var randomwally = Math.random() * 750;
//var borderx , bordery;
//var clicks = 0 , bufferspeed = speed, bufferenemyspeed = enemyspeed;;
let rightbtn = document.getElementById("RightButton");
let jumpbtn;
jumpbtn = document.getElementById("JumpButton");
let leftbtn = document.getElementById("LeftButton");
let downbtn = document.getElementById("DownButton");
//let pausebtn = document.getElementById("Pause");
rightbtn.onmousedown = function(){dir = 1};
jumpbtn.onmousedown = function(){dir = 2};
leftbtn.onmousedown = function(){dir = 3};
downbtn.onmousedown = function(){dir = 4};
    
rightbtn.ontouchstart = function(){dir = 1};
jumpbtn.ontouchstart = function(){dir = 2};
leftbtn.ontouchstart = function(){dir = 3};
downbtn.ontouchstart = function(){dir = 4};
    
rightbtn.onmouseup = function(){dir = 0};
jumpbtn.onmouseup = function(){dir = 0};
leftbtn.onmouseup = function(){dir = 0};
downbtn.onmouseup = function(){dir = 0};
    
rightbtn.ontouchend = function(){dir = 0};
jumpbtn.ontouchend = function(){dir = 0};
leftbtn.ontouchend = function(){dir = 0};
downbtn.ontouchend = function(){dir = 0};

/*pausebtn.onclick = function(){
    clicks++;
    speed = 0;
    enemyspeed = 0;
    if(speed == 0 && enemyspeed == 0 && clicks % 2 == 0 ){
        speed = bufferspeed;
        enemyspeed = bufferenemyspeed;
    }
}*/  
function keys(){
  if(gamemode == 2){
  //pve игрок
  document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    if (keyName === 'ArrowRight' || keyName === 'd' || keyName === 'D' || keyName === 'в' || keyName === 'В') {
    dir = 1; 
    gundir = dir;
    return;
    }
    if (keyName === 'ArrowUp' || keyName === 'w' || keyName === 'W' || keyName === 'ц' || keyName === 'Ц') {
        dir = 2;
        gundir = dir;
        return;
    }
    if (keyName === 'ArrowLeft' || keyName === 'a' || keyName === 'A' || keyName === 'ф' || keyName === 'Ф') {
        dir = 3;
        gundir = dir;
        return;
    }
    if (keyName === 'ArrowDown' || keyName === 's' || keyName === 'S' || keyName === 'Ы' || keyName === 'ы') {
        dir = 4;
        gundir = dir;
        return;
    }
    if (keyName === 'й' || keyName === 'Й' || keyName === 'Q' || keyName === 'q') {
        if(bulletlvl > 0) {
        bulletbool = 1;
        bulletdir = dir;
        shotsound.currentTime = 0;
        shotsound.play();
        if(dir == 0) bulletdir = bufferdir;
        return;
        }
    if(bulletlvl == 0){
        nogunsound.currentTime = 0;
        nogunsound.play();
        return;
    }
  }  
}, false);
  document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  if (keyName === 'ArrowRight' || keyName === 'd' || keyName === 'D'|| keyName === 'в' || keyName === 'В') {
    bufferdir = dir;
    gundir = dir;
    dir = 0;
    
    //keyr = 0;
    return;
  }
  if (keyName === 'ArrowUp' || keyName === 'w' || keyName === 'W' || keyName === 'ц' || keyName === 'Ц') {
      bufferdir = dir;
      gundir = dir;
      dir = 0;
 // keyu = 0;
  return;
  }
  if (keyName === 'ArrowLeft' ||keyName === 'a'|| keyName === 'A' || keyName === 'ф' || keyName === 'Ф') {
      bufferdir = dir;
      gundir = dir;
      dir = 0;
 // keyl = 0;
  return;
  }
  if (keyName === 'ArrowDown' || keyName === 's' || keyName === 'S' || keyName === 'Ы' || keyName === 'ы') {
      bufferdir = dir;
      gundir = dir;
      dir = 0;
  //keyd = 0;
  return;
  }
}, false);}
    
    if(gamemode == 1){
        document.addEventListener('keydown', (event) => {
        var keyName = event.key;
        // 1 игрок
        if ( keyName === 'd' || keyName === 'D' || keyName === 'в' || keyName === 'В') {
            dir = 1; 
            gundir = dir;
            return;
        }
        if ( keyName === 'w' || keyName === 'W' || keyName === 'ц' || keyName === 'Ц') {
            dir = 2;
            gundir = dir;
            return;
        }
        if ( keyName === 'a' || keyName === 'A' || keyName === 'ф' || keyName === 'Ф') {
            dir = 3;
            gundir = dir;
            return;
        }
        if ( keyName === 's' || keyName === 'S' || keyName === 'Ы' || keyName === 'ы') {
            dir = 4;
            gundir = dir;
            return;
        }
        if (keyName === 'й' || keyName === 'Й' || keyName === 'Q' || keyName === 'q') {
            
            if(bulletlvl > 0 && ammo > 0) {
                for(i = 0; i < n; i++){
                
                    if(bulletlvl == 1){
                        bulletsize = 7;
                        bulletspeed = 750;
                    }
                    if(bulletlvl == 2){
                        bulletsize = 7;
                        bulletspeed = 250;
                    }
                }
                ammo--;
                k = 0;
                if(q == 0){
                n++;
                bulletdirs[i] = dir;
                if(dir == 0) bulletdirs[i] = bufferdir;
                bulletsx[i] = x;
                bulletsy[i] = y;
                bulletspeeds[i] = bulletspeed;
                }
                if(q > 0){
                    for(i = 0; i < n; i++){
                        if(bulletsx[i] == 0 && bulletsy[i] == 0 && k == 0) {
                            bulletdirs[i] = dir;
                            if(dir == 0) bulletdirs[i] = bufferdir;
                            bulletsx[i] = x;
                            bulletsy[i] = y;
                            bulletspeeds[i] = bulletspeed;
                            k++;
                        }
                    }
                }
                
                shotsound.currentTime = 0;
                shotsound.play();
                return;
            }   
            if(bulletlvl == 0){
                nogunsound.currentTime = 0;
                nogunsound.play();
            return;
            }
        }  
        // 2 игрок 
        if (keyName === 'ArrowRight') {
            dir2 = 1; 
            gundir2 = dir2;
            return;
        }
        if (keyName === 'ArrowUp') {
            dir2 = 2;
            gundir2 = dir2;
            return;
        }
        if (keyName === 'ArrowLeft') {
            dir2 = 3;
            gundir2 = dir2;
            return;
        }
        if (keyName === 'ArrowDown') {
            dir2 = 4;
            gundir2 = dir2;
            return;
        }
        if (keyName === 'Shift') {
            
            if(bulletlvl2 > 0 && ammo2 > 0) {
                for(i2 = 0; i2 < n2; i2++){
                
                    if(bulletlvl2 == 1){
                        bulletsize2 = 7;
                        bulletspeed2 = 750;
                    }
                    if(bulletlvl2 == 2){
                        bulletsize2 = 7;
                        bulletspeed2 = 250;
                    }
                }
                ammo2--;
                k2 = 0;
                if(q2 == 0){
                n2++;
                bulletdirs2[i2] = dir2;
                if(dir2 == 0) bulletdirs2[i2] = bufferdir2;
                bulletsx2[i2] = enemyx;
                bulletsy2[i2] = enemyy;
                bulletspeeds2[i2] = bulletspeed2;
                }
                if(q2 > 0){
                    for(i2 = 0; i2 < n2; i2++){
                        if(bulletsx2[i2] == 1800 && bulletsy2[i2] == 0 && k2 == 0) {
                            bulletdirs2[i2] = dir2;
                            if(dir2 == 0) bulletdirs2[i2] = bufferdir2;
                            bulletsx2[i2] = enemyx;
                            bulletsy2[i2] = enemyy;
                            bulletspeeds2[i2] = bulletspeed2;
                            k2++;
                        }
                    }
                }
                shotsound.currentTime = 0;
                shotsound.play();
                return;
            }   
            if(bulletlvl2 == 0){
                nogunsound.currentTime = 0;
                nogunsound.play();
            return;
            }
        }
}, false);
    document.addEventListener('keyup', (event) => {
        const keyName = event.key;

        if (keyName === 'd' || keyName === 'D'|| keyName === 'в' || keyName === 'В') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        if (keyName === 'w' || keyName === 'W' || keyName === 'ц' || keyName === 'Ц') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        if (keyName === 'a'|| keyName === 'A' || keyName === 'ф' || keyName === 'Ф') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        if ( keyName === 's' || keyName === 'S' || keyName === 'Ы' || keyName === 'ы') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        
        if (keyName === 'ArrowRight' ) {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        if (keyName === 'ArrowUp' ) {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        if (keyName === 'ArrowLeft') {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        if (keyName === 'ArrowDown' ) {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        
}, false);}
    if(gamemode == 3){
        document.addEventListener('keydown', (event) => {
        var keyName = event.key;
        // 1 игрок
        if ( keyName === 'd' || keyName === 'D' || keyName === 'в' || keyName === 'В') {
            dir = 1; 
            gundir = dir;
            return;
        }
        if ( keyName === 'w' || keyName === 'W' || keyName === 'ц' || keyName === 'Ц') {
            dir = 2;
            gundir = dir;
            return;
        }
        if ( keyName === 'a' || keyName === 'A' || keyName === 'ф' || keyName === 'Ф') {
            dir = 3;
            gundir = dir;
            return;
        }
        if ( keyName === 's' || keyName === 'S' || keyName === 'Ы' || keyName === 'ы') {
            dir = 4;
            gundir = dir;
            return;
        }
        if (keyName === 'й' || keyName === 'Й' || keyName === 'Q' || keyName === 'q') {
            time2 = Date.now();
            if(((time2 - time)/1000) > attackspeed){
            time = Date.now();
            if(bulletlvl > 0 && ammo > 0) {
                for(i = 0; i < n; i++){
                
                    if(bulletlvl == 1){
                        bulletsize = 7;
                        bulletspeed = 750;
                    }
                    if(bulletlvl == 2){
                        bulletsize = 7;
                        bulletspeed = 250;
                    }
                }
                ammo--;
                k = 0;
                if(q == 0){
                n++;
                bulletdirs[i] = dir;
                if(dir == 0) bulletdirs[i] = bufferdir;
                bulletsx[i] = x;
                bulletsy[i] = y;
                bulletspeeds[i] = bulletspeed;
                }
                if(q > 0){
                    for(i = 0; i < n; i++){
                        if(bulletsx[i] == -100 && bulletsy[i] == -100 && k == 0) {
                            bulletdirs[i] = dir;
                            if(dir == 0) bulletdirs[i] = bufferdir;
                            bulletsx[i] = x;
                            bulletsy[i] = y;
                            bulletspeeds[i] = bulletspeed;
                            k++;
                        }
                    }
                }
                
                shotsound.currentTime = 0;
                shotsound.play();
                return;
            }   
            if(bulletlvl == 0){
                nogunsound.currentTime = 0;
                nogunsound.play();
            return;
            }
        }
        }  
        // 2 игрок
        if (keyName === 'ArrowRight') {
            dir2 = 1; 
            gundir2 = dir2;
            return;
        }
        if (keyName === 'ArrowUp') {
            dir2 = 2;
            gundir2 = dir2;
            return;
        }
        if (keyName === 'ArrowLeft') {
            dir2 = 3;
            gundir2 = dir2;
            return;
        }
        if (keyName === 'ArrowDown') {
            dir2 = 4;
            gundir2 = dir2;
            return;
        }
        if (keyName === 'Shift') {
            enemytime2 = Date.now();
            if(((enemytime2 - enemytime)/1000) > enemyattackspeed){
            enemytime = Date.now();
            if(bulletlvl2 > 0 && ammo2 > 0) {
                for(i2 = 0; i2 < n2; i2++){
                
                    if(bulletlvl2 == 1){
                        bulletsize2 = 7;
                        bulletspeed2 = 750;
                    }
                    if(bulletlvl2 == 2){
                        bulletsize2 = 7;
                        bulletspeed2 = 250;
                    }
                }
                ammo2--;
                k2 = 0;
                if(q2 == 0){
                n2++;
                bulletdirs2[i2] = dir2;
                if(dir2 == 0) bulletdirs2[i2] = bufferdir2;
                bulletsx2[i2] = enemyx;
                bulletsy2[i2] = enemyy;
                bulletspeeds2[i2] = bulletspeed2;
                }
                if(q2 > 0){
                    for(i2 = 0; i2 < n2; i2++){
                        if(bulletsx2[i2] == 1900 && bulletsy2[i2] == -100 && k2 == 0) {
                            bulletdirs2[i2] = dir2;
                            if(dir2 == 0) bulletdirs2[i2] = bufferdir2;
                            bulletsx2[i2] = enemyx;
                            bulletsy2[i2] = enemyy;
                            bulletspeeds2[i2] = bulletspeed2;
                            k2++;
                        }
                    }
                }
                shotsound.currentTime = 0;
                shotsound.play();
                return;
            }   
            if(bulletlvl2 == 0){
                nogunsound.currentTime = 0;
                nogunsound.play();
            return;
            }
        }
        }
            //покупка станции боеприпасов
        if(keyName === 'B' || keyName === 'b'){
            if(score >= ammoupgradecost && ammostationlvl < 4){
                if(ammostationlvl == 1) ammocost -= 5;
                if(ammostationlvl == 2) ammocost -= 3;
                if(ammostationlvl == 3) ammocost -= 2;
                ammostationlvl++;
                basemaxhp+=2;
                basehp+=2;
                score -= ammoupgradecost;
                ammoupgradecost += 5;
                return;
            }
        }
        //Покупка мед станции
        if(keyName === 'H' || keyName === 'h'){
            if(score >= medstationupradecost && medstationlvl < 4){
                if(medstationlvl == 1) medikitcost -= 5;
                if(medstationlvl == 2) medikitcost -= 3;
                if(medstationlvl == 3) medikitcost -= 1;
                medstationlvl++;
                basemaxhp+=2;
                basehp+=2;
                score -= medstationupradecost;
                medstationupradecost += 5;
                return;
            }
        }
        // покупка ящика с патронами
        if(keyName === 'M' || keyName === 'm'){
            if(ammostationlvl > 0 && score >= ammocost && ammostationlvl < 4){
                ammoboxx = Math.random() * 1750;
                ammoboxy = Math.random() * 300 + 300;
                score -= ammocost;
            }
            if(ammostationlvl >= 4){
                ammo = maxammo;
                ammo2 = maxammo2;
                ammopickup.currentTime = 0; ammopickup.play();
            }
            return;
        }
            
       if(keyName === 'K' || keyName === 'k'){
            if(medstationlvl > 0 && score >= medikitcost){
                medikitx = Math.random() * 1750;
                medikity = Math.random() * 300 + 300;
                score -= medikitcost;
                return;
            }
        }
        // ремонт базы  
        if(keyName === 'R' || keyName === 'r'){
                if(basehp < basemaxhp && score >= repaircost){
                    basehp++;
                    score -= repaircost;
                }
                return;
        }
        if(keyName === 'U' || keyName === 'u'){
            if(medstationlvl == 4 && ammostationlvl == 4 && baselvl < 2){
                baselvl++;
                
            }       
                return;
        }
        
}, false);
    document.addEventListener('keyup', (event) => {
        const keyName = event.key;

        if (keyName === 'd' || keyName === 'D'|| keyName === 'в' || keyName === 'В') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        if (keyName === 'w' || keyName === 'W' || keyName === 'ц' || keyName === 'Ц') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        if (keyName === 'a'|| keyName === 'A' || keyName === 'ф' || keyName === 'Ф') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        if ( keyName === 's' || keyName === 'S' || keyName === 'Ы' || keyName === 'ы') {
            bufferdir = dir;
            gundir = dir;
            dir = 0;
            return;
        }
        
        if (keyName === 'ArrowRight' ) {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        if (keyName === 'ArrowUp' ) {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        if (keyName === 'ArrowLeft') {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        if (keyName === 'ArrowDown' ) {
            bufferdir2 = dir2;
            gundir2 = dir2;
            dir2 = 0;
            return;
        }
        
}, false);}
}

    
function draw(){
    //PVE BEGIN
    if(gamemode == 2){
    var passed = (Date.now() - t)/1000;
    t = Date.now();
    var fps = Math.round(1/passed);
    context.clearRect(0,0,1800,800);
    
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(fps,1750,25);
    
    /*if(speed == 0 && enemyspeed == 0 && score < 40){
        context.beginPath();
        context.font = "75px Arial";
        context.fillStyle = "White";
        context.fillText("Pause",650,400);
    }*/
    
     if(bulletbool == 1){
        bulletx = x;
        bullety = y;
        if(bulletlvl == 1){
            bulletsize = 7;
            bulletspeed = 1750;
        }
        if(bulletlvl == 2){
            bulletsize = 7;
            bulletspeed = 2250;
        }
        bulletbool = 0;
    }
    
    
    // верхняя панель
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(score,25,25);
    
    roundx = Math.round(x);
    roundy = Math.round(y);
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(roundx,100,25);

    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText("x:",80,25);
    
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(roundy,200,25);
    

    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText("y:",180,25);
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText("speed:",260,25);
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(speed,335,25);
    
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText("Pick Up Buff:",550,25);
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(pickupbuff,695,25);
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText("Our Size:", 395,25);
    
    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "White";
    context.fillText(oursize,505,25);
    
    //отрисовка прогресса уровня
    
    context.beginPath();
    context.rect(1490,740,(300/lvlscrneeded)*levelscore,50);
    context.fillStyle = "green";
    context.fill();
    
    context.beginPath();
    context.rect(1490,740,300,50);
    context.strokeStyle = "white";
    context.stroke();
    //отрисовка levela
    
    context.beginPath();
    context.font = "32px Arial";
    context.fillStyle = "White";
    context.fillText("Level:",1590,775);
    
    context.beginPath();
    context.font = "32px Arial";
    context.fillStyle = "White";
    context.fillText(level,1675,775);
    
    //отрисовка enemyhp
    
    if(enemyhp != enemymaxhp){
        context.beginPath();
        context.rect(enemyx - 100,enemyy - 45 - enemysize, 200/enemymaxhp * enemyhp ,40);
        context.fillStyle = "green";
        context.fill();
    
        context.beginPath();
        context.rect(enemyx - 100, enemyy - 45 - enemysize ,200,40);
        context.strokeStyle = "white";
        context.stroke();
    
        context.beginPath();
        context.font = "32px Arial";
        context.fillStyle = "red";
        context.fillText("Hp:",enemyx - 30,enemyy-enemysize - 15);
    
        context.beginPath();
        context.font = "32px Arial";
        context.fillStyle = "red";
        context.fillText(enemyhp,enemyx - 30 + 50,enemyy-enemysize - 15);
    }
    // отрисовка щита
    if(shield == 1){
        context.beginPath(); 
        context.arc(x,y,oursize+oursize/5,0,2*Math.PI);
        context.fillStyle = "Orange";
        context.fill();
    }
    
    //отрисовка монеты
    context.beginPath(); 
    context.arc(coinx,coiny,10,0,2*Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    
    // отрисовка зелёного buffшара
    context.beginPath(); 
    context.arc(buffx,buffy,30,0,2*Math.PI);
    context.fillStyle = "green";
    context.fill();
    
    //отрисовка нас
    context.beginPath();
    context.arc(x,y,oursize,0,2*Math.PI);
    context.fillStyle = "red";
    context.fill();
    
    //отрисовка пушки
    
    if(bulletlvl == 1){
        context.beginPath();
        context.arc(x,y,oursize/2,0,2*Math.PI);
        context.fillStyle = "gray";
        context.fill();
        if(gundir == 1){
            context.beginPath();
            context.rect(x,y-5,50,10);
            context.fillStyle = "gray";
            context.fill();
        }
        if(gundir == 2){
            context.beginPath();
            context.rect(x-5,y-55,10,45);
            context.fillStyle = "gray";
            context.fill();
        }
        if(gundir == 3){
            context.beginPath();
            context.rect(x-50,y-5,50,10);
            context.fillStyle = "gray";
            context.fill();
        }
        if(gundir == 4){
            context.beginPath();
            context.rect(x-5,y+5,10,45);
            context.fillStyle = "gray";
            context.fill();
        }
    }
     if(bulletlvl == 2){
            context.beginPath();
            context.rect(x-10,y-10,20,20);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
    
    //bullet
    context.beginPath();
    context.arc(bulletx,bullety,bulletsize,0,2*Math.PI);
    context.fillStyle = "#42aaff";
    context.fill();
    
    // появление стены
    /*if(score == 0){
        borderx = randomwallx;
        bordery = randomwally;
        context.beginPath();
        context.rect(borderx,bordery,300,20);
        context.fillStyle = "Blue";
        context.fill();
    }*/
    
    // наше перемещение
    if(dir==1 && x < 1800 - oursize ){ x+=(speed * passed)};
    if(dir==2 && y > 0 + oursize ){ y-=(speed * passed) };
    if(dir==3 && x > 0 + oursize ){ x -= (speed * passed)};
    if(dir==4 && y < 800 - oursize ){ y += (speed * passed)};
    //if(dir==5 && x < 1800 - oursize && y > 0 + oursize){ x+=(speed * passed); y-=(speed * passed); }
    
    //подбор моенты
    if(coinx <= x + (oursize + 10) * pickupbuff 
       && coinx >= x - (oursize + 10) * pickupbuff 
       && coiny <= y + (oursize + 10) * pickupbuff 
       && y - (oursize + 10) * pickupbuff <= coiny){ 
        coinx = Math.random() * 1750;
        coiny = Math.random() * 750;
        if(score < 40){
            coinsound.currentTime = 0;
            coinsound.play();
        }
        score ++;
        enemysize += 5; 
        enemyspeed += 3;
        enemymaxhp += 1;
        enemyhp += 1;
    }
    //передвижение bullet и его отрисовка
    
    if(bulletlvl == 1){
        if(bulletdir==1 ){ bulletx+=(bulletspeed * passed)};
        if(bulletdir==2 ){ bullety-=(bulletspeed * passed) };
        if(bulletdir==3 ){ bulletx-= (bulletspeed * passed)};
        if(bulletdir==4 ){ bullety+= (bulletspeed * passed)};
    }
    if(bulletlvl == 2){
        if(bulletx < enemyx){bulletx += (bulletspeed * passed);}
        else if(bulletx > enemyx){bulletx -= (bulletspeed * passed);}
        if(bullety < enemyy){bullety += (bulletspeed * passed);}
        else if(bullety > enemyy){bullety -= (bulletspeed * passed);}
    }
    
    // попадание bullet
    if(bulletx <= enemyx + bulletsize + enemysize 
       && bulletx >= enemyx - bulletsize - enemysize 
       && bullety <= enemyy + bulletsize + enemysize  
       && enemyy - enemysize - bulletsize <= bullety){
        if(bulletlvl == 1){
            enemyhp = enemyhp - 1;
        }
        if(bulletlvl == 2){
            enemyhp = enemyhp - 2;
        }
        hitsound.currentTime = 0;
        hitsound.play();
        //!n--;
        bulletbool = 0;
        bulletspeed = 0;
        bulletx = 0;
        bullety = 0;
    }
    //передвижение врага и его отрисовка
    if(enemyx < x){enemyx += (enemyspeed * passed);}
    else if(enemyx > x){enemyx -= (enemyspeed * passed);}
    if(enemyy < y){enemyy += (enemyspeed * passed);}
    else if(enemyy > y){enemyy -= (enemyspeed * passed);}
    
    //синий шар или шрек в качестве врага
    /*context.beginPath(); 
    context.arc(enemyx,enemyy,enemysize,0,2*Math.PI);
    context.fillStyle = "Blue";
    context.fill();*/
    
    context.drawImage(shrek,enemyx - (enemysize) ,enemyy - (enemysize),enemysize*2,enemysize*2);
    
    // условия появления щита
    if((score % 5 == 0 && shield == 0 && shieldmemory != score && score != 0)){
        shieldx = randomx;
        shieldy = randomy;
        context.beginPath(); 
        context.arc(shieldx,shieldy,25,0,2*Math.PI);
        context.fillStyle = "Orange";
        context.fill();
    }
    if((score % 5 != 0 || shieldmemory == score || score == 0)){
        shieldx = -300;
        shieldy = -300;
    }
    
    
    //подбор щита
    if(shieldx <= x + ((oursize + 25) * pickupbuff)
       && shieldx >= x - ((oursize + 25) * pickupbuff)
       && shieldy <= y + ((oursize + 25) * pickupbuff)
       && shieldy >= y - ((oursize + 25) * pickupbuff)){
        shieldpickupsound.play();
        //killmodmusic.play();
        shieldmemory = score;
        shield++;
        randomx = Math.random() * 1750;
        randomy = Math.random() * 750;
        shieldx = -300;
        shieldy = -300;
    }
    
    // попался на врага и работа щита
    if(enemyx <= x + enemysize + oursize 
       && enemyx >= x - enemysize - oursize 
       && enemyy <= y + enemysize + oursize  
       && y - enemysize - oursize <= enemyy)
    {
        if(shield == 0){
            if(level < 4){
                gameoversound.play();
                x= -100;
                y= -100;
            }
            if(level >= 4){
                level -= 3;
                lvlscrneeded -= 6;
                buffx = Math.random() * 1750;
                buffy = Math.random() * 750;
                leveldown.play();
                enemyx = 2100;
            }
        }
        if(shield == 1){
            shieldbreaksound.play();
            //killmodmusic.pause();
            enemyx = 2100;
            shield--;
        }
    }
    if(enemyhp <= 0){
            enemydeath.play();
            enemyhp = enemymaxhp;
            enemyx = 2100;
            bulletbool = 0;
        }
    
    // зелёный шарик
    if(buffx <= x + ((oursize + 30) * pickupbuff)
       && buffx >= x - ((oursize + 30) * pickupbuff)
       && buffy <= y + ((oursize + 30) * pickupbuff)
       && buffy >= y - ((oursize + 30) * pickupbuff)){
            if(levelscore < lvlscrneeded){ 
                buffballsound.currentTime = 0;
                buffballsound.play();
            }
            levelscore+=1;
            buffx = Math.random() * 1750;
            buffy = Math.random() * 750;
    }
    // уровни
    if(levelscore > lvlscrneeded){ newlevelsound.play(); level+=1; levelscore = 0; lvlscrneeded+=2;}
        if(level == 1){ bulletlvl = 0; speed = 175; oursize = 50; pickupbuff = 1;}
        if(level == 2){bulletlvl = 0; speed = 275; oursize = 45; pickupbuff = 1.5;}
        if(level == 3){bulletlvl = 1; speed = 350; oursize = 35; pickupbuff = 2;}
        if(level == 4){bulletlvl = 1; speed = 425; oursize = 35; pickupbuff = 3;}
        if(level == 5){bulletlvl = 1; speed = 475; oursize = 35; pickupbuff = 4;}
        if(level == 6){bulletlvl = 1; speed = 550; oursize = 30; pickupbuff = 5;} 
        if(level == 7){bulletlvl = 2; speed = 600; oursize = 30; pickupbuff = 5; buffx = -400; buffy = -400;}
    // гам овер
    if(x == -100 && y == -100){
        context.beginPath();
        context.font = "75px Arial";
        context.fillStyle = "White";
        context.fillText("GAME OVER",650,400);
        speed = 0;
        enemyspeed = 0;
    }
        //победа
    if(score >= 40){
	context.beginPath();
        winsound.play();
        context.clearRect(0,0,1800,800);
        context.font = "75px Arial";
        context.fillStyle = "Green";
        context.fillText("WIN!!!",750,400);
        speed = 0;
        enemyspeed = 0;
    }
    }
    //PVE END
    
    //PVP BEGIN 
    
    if(gamemode == 1){
        var passed = (Date.now() - t)/1000;
        t = Date.now();
        var fps = Math.round(1/passed);
        q = 0;
        q2 = 0;
        context.clearRect(0,0,1800,800);
        
        if(enemyx == 3000){
         enemyx = 1500;
         enemyy = 600;
         enemysize = oursize;
         enemyspeed = speed;
         x = 300;
         y = 600;
         maxhp = 6;
         hp = maxhp;
         enemymaxhp = 6;
         enemyhp = enemymaxhp;
         lvlscrneeded = 3;
         lvlscrneeded2 = 3;
        }
        //счёт
        context.beginPath();
        context.font = "25px Arial";
        context.fillStyle = "red";
        context.fillText(score,25,25);
        
        context.beginPath();
        context.font = "25px Arial";
        context.fillStyle = "blue";
        context.fillText(score2,1750,25);
        
        
        // отрисовка монетки
        context.beginPath(); 
        context.arc(coinx,coiny,10,0,2*Math.PI);
        context.fillStyle = "yellow";
        context.fill();
    
        // отрисовка зелёного buffшара
        context.beginPath(); 
        context.arc(buffx,buffy,30,0,2*Math.PI);
        context.fillStyle = "green";
        context.fill();
        
        context.drawImage(buffpng,buffx-25,buffy-25,50,50);
    
        //отрисовка первого игрока
        context.beginPath();
        context.arc(x,y,oursize,0,2*Math.PI);
        context.fillStyle = "red";
        context.fill();
        
        // отрисовка второго игрока
        context.beginPath(); 
        context.arc(enemyx,enemyy,enemysize,0,2*Math.PI);
        context.fillStyle = "Blue";
        context.fill();
        
        // пушка игрока 1
        if(bulletlvl == 1){
            context.beginPath();
            context.arc(x,y,oursize/2,0,2*Math.PI);
            context.fillStyle = "gray";
            context.fill();
            if(gundir == 1){
                context.beginPath();
                context.rect(x,y-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir == 2){
                context.beginPath();
                context.rect(x-5,y-55,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir == 3){
                context.beginPath();
                context.rect(x-50,y-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir == 4){
                context.beginPath();
                context.rect(x-5,y+5,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
        }
        if(bulletlvl == 2){
            context.beginPath();
            context.rect(x-10,y-10,20,20);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
        //пушка игрока 2
        
        if(bulletlvl2 == 1){
            context.beginPath();
            context.arc(enemyx,enemyy,enemysize/2,0,2*Math.PI);
            context.fillStyle = "gray";
            context.fill();
            if(gundir2 == 1){
                context.beginPath();
                context.rect(enemyx,enemyy-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir2 == 2){
                context.beginPath();
                context.rect(enemyx-5,enemyy-55,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir2 == 3){
                context.beginPath();
                context.rect(enemyx-50,enemyy-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir2 == 4){
                context.beginPath();
                context.rect(enemyx-5,enemyy+5,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
        }
        if(bulletlvl2 == 2){
            context.beginPath();
            context.rect(enemyx-10,enemyy-10,20,20);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
        
        // два прямоугольника для красоты панелей
        context.beginPath();
        context.rect(15,715,300,50);
        context.strokeStyle = "white";
        context.stroke();
        
        context.beginPath();
        context.rect(1490,715,300,50);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка прогресса уровня первого игрока
    
        context.beginPath();
        context.rect(15,740,(300/lvlscrneeded)*levelscore,25);
        context.fillStyle = "#d53e07";
        context.fill();
        
        context.beginPath();
        context.rect(15,740,300,25);
        context.strokeStyle = "white";
        context.stroke();
        //отрисовка levela
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Level:",130,760);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(level,175,760);
        
        //отрисовка прогресса уровня второго игрока
    
        context.beginPath();
        context.rect(1490,740,(300/lvlscrneeded2)*levelscore2,25);
        context.fillStyle = "darkgreen";
        context.fill();
    
        context.beginPath();
        context.rect(1490,740,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка levela второго игрока
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Level:",1605,760);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(level2,1650,760);
        
        // отрисовка полоски hp player 1
        
        context.beginPath();
        context.rect(15,765,(300/maxhp)*hp,25);
        context.fillStyle = "red";
        context.fill();
        
        context.beginPath();
        context.rect(15,765,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка hp player 1
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("HP:",130,785);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(hp,160,785);
        
         // отрисовка полоски hp player 2
        
        context.beginPath();
        context.rect(1490,765,(300/enemymaxhp)*enemyhp,25);
        context.fillStyle = "blue";
        context.fill();
        
        context.beginPath();
        context.rect(1490,765,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка hp player 2
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("HP:",1605,785);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(enemyhp,1635,785);
        
        //отрисовка ammo полоски первого игрока
    
        context.beginPath();
        context.rect(15,715,(300/maxammo)*ammo,25);
        context.fillStyle = "#cc7000";
        context.fill();
        
        context.beginPath();
        context.rect(15,715,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка ammo
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Ammo:",130,735);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(ammo,180,735);
        
        //отрисовка ammo полоски второго игрока
    
        context.beginPath();
        context.rect(1490,715,(300/maxammo2)*ammo2,25);
        context.fillStyle = "#cc7000";
        context.fill();
    
        context.beginPath();
        context.rect(1490,715,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка ammo второго игрока
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Ammo:",1605,735);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(ammo2,1655,735);
        
        //ammobox
        
        context.beginPath();
        context.rect(ammoboxx,ammoboxy,70,70);
        context.fillStyle = "#8f5429";
        context.fill();
        
        context.drawImage(ammopng,ammoboxx+5,ammoboxy+5,60,60);
        
        context.beginPath();
        context.rect(ammoboxx - 5,ammoboxy,5,70);
        context.fillStyle = "#663300";
        context.fill();
        
        context.beginPath();
        context.rect(ammoboxx + 70,ammoboxy,5,70);
        context.fillStyle = "#663300";
        context.fill();
        
        context.beginPath();
        context.rect(ammoboxx-5, ammoboxy + 70, 80, 5);
        context.fillStyle = "#663300";
        context.fill();
        
        context.beginPath();
        context.rect(ammoboxx - 5, ammoboxy - 5, 80, 5);
        context.fillStyle = "#663300";
        context.fill();
        
        
        
        //player 1 передвижение
        if(dir==1 && x < 1800 - oursize ){ x+=(speed * passed)};
        if(dir==2 && y > 0 + oursize ){ y-=(speed * passed) };
        if(dir==3 && x > 0 + oursize ){ x -= (speed * passed)};
        if(dir==4 && y < 800 - oursize ){ y += (speed * passed)};
        // player 2 передвижение
        if(dir2==1 && enemyx < 1800 - enemysize ){ enemyx+=(enemyspeed * passed)};
        if(dir2==2 && enemyy > 0 + enemysize ){ enemyy-=(enemyspeed * passed) };
        if(dir2==3 && enemyx > 0 + enemysize ){ enemyx -= (enemyspeed * passed)};
        if(dir2==4 && enemyy < 800 - enemysize ){ enemyy += (enemyspeed * passed)};
        
        // подбор монеты
    if(coinx <= x + (oursize+10) * pickupbuff && coinx >= x - (oursize+10) * pickupbuff && coiny <= y + (oursize+10) * pickupbuff && y - (oursize+10) * pickupbuff <=coiny){ 
        coinx = Math.random() * 1750; coiny = Math.random() * 750;
        if(score < 50){ coinsound.currentTime = 0; coinsound.play();}
        score++; 
        ammo++;
        if(hp < maxhp){
            hp++;
        }
    }
        
    if(coinx <= enemyx + (enemysize+10) * pickupbuff2 && coinx >= enemyx - (enemysize+10) * pickupbuff2 && coiny <= enemyy + (enemysize+10) * pickupbuff2 && enemyy - (enemysize+10) * pickupbuff2 <=coiny){ 
        coinx = Math.random() * 1750; coiny = Math.random() * 750;
        if(score2 < 50){ coinsound.currentTime = 0; coinsound.play();}
        score2++;
        ammo2++;
        if(enemyhp < enemymaxhp){
            enemyhp++;
        }
    }
        
        // подбор патронов
         if(ammoboxx + 35 <= x + 35 + oursize * pickupbuff && ammoboxx + 35 >= x - 35 - oursize * pickupbuff && ammoboxy + 35 <= y + 35 + oursize * pickupbuff && y - 35 - oursize * pickupbuff <= ammoboxy + 35){ 
            ammoboxx = -500; ammoboxy = -500;
            ammopickup.play();
            ammo = maxammo;
        }
        
        if(ammoboxx + 35 <= enemyx + 35 + enemysize * pickupbuff2 && ammoboxx + 35 >= enemyx - 35 - enemysize * pickupbuff2 && ammoboxy + 35 <= enemyy + 35 + enemysize * pickupbuff2 && enemyy - 35 - enemysize * pickupbuff2 <= ammoboxy + 35){ 
            ammoboxx = -500; ammoboxy = -500;
            ammopickup.play();
            ammo2 = maxammo2;
        }
        // щит(теперь это аптечка)
        // появление аптечки
        /*if(((score % 10 == 0 || score2 % 10 == 0) && shieldmemory != score && score != 0 && score2 != 0)){
        shieldx = randomx;
        shieldy = randomy;
        context.beginPath(); 
        context.arc(shieldx,shieldy,50,0,2*Math.PI);
        context.fillStyle = "white";
        context.fill();
            
        context.beginPath(); 
        context.rect(shieldx - 50 ,shieldy - 15, 40, 20);
        context.fillStyle = "red";
        context.fill();
            
        context.beginPath(); 
        context.rect(shieldx - 15, shieldy - 50, 20, 40);
        context.fillStyle = "red";
        context.fill();
    }
    if((score % 5 != 0 || shieldmemory == score || score == 0)){
        shieldx = -300;
        shieldy = -300;
    }*/
        
        
        
        //передвижение bullet и его отрисовка 1 игрок
    for(i = 0; i < n; i++){
    if(bulletlvl == 1){
        if(bulletdirs[i]==1 ){ bulletsx[i]+=(bulletspeeds[i] * passed)};
        if(bulletdirs[i]==2 ){ bulletsy[i]-=(bulletspeeds[i] * passed) };
        if(bulletdirs[i]==3 ){ bulletsx[i]-= (bulletspeeds[i] * passed)};
        if(bulletdirs[i]==4 ){ bulletsy[i]+= (bulletspeeds[i] * passed)};
    }
    if(bulletlvl == 2){
        if(bulletsx[i] < enemyx){bulletsx[i] += (bulletspeeds[i] * passed);}
        else if(bulletsx[i] > enemyx){bulletsx[i] -= (bulletspeeds[i] * passed);}
        if(bulletsy[i] < enemyy){bulletsy[i] += (bulletspeeds[i] * passed);}
        else if(bulletsy[i] > enemyy){bulletsy[i] -= (bulletspeeds[i] * passed);}
    }
    }
        //передвижение bullet и его отрисовка 2 игрок
    for(i2 = 0; i2 < n2; i2++){
    if(bulletlvl2 == 1){
        if(bulletdirs2[i2]==1 ){ bulletsx2[i2]+=(bulletspeeds2[i2] * passed)};
        if(bulletdirs2[i2]==2 ){ bulletsy2[i2]-=(bulletspeeds2[i2] * passed) };
        if(bulletdirs2[i2]==3 ){ bulletsx2[i2]-= (bulletspeeds2[i2] * passed)};
        if(bulletdirs2[i2]==4 ){ bulletsy2[i2]+= (bulletspeeds2[i2] * passed)};
    }
    if(bulletlvl2 == 2){
        if(bulletsx2[i2] < x){bulletsx2[i2] += (bulletspeeds2[i2] * passed);}
        else if(bulletsx2[i2] > x){bulletsx2[i2] -= (bulletspeeds2[i2] * passed);}
        if(bulletsy2[i2] < y){bulletsy2[i2] += (bulletspeeds2[i2] * passed);}
        else if(bulletsy2[i2] > y){bulletsy2[i2] -= (bulletspeeds2[i2] * passed);}
    }
    }
        // попадание пули
        for(i = 0; i < n ; i++){
            if(bulletsx[i] <= enemyx + bulletsize + enemysize && bulletsx[i] >= enemyx - bulletsize - enemysize  && bulletsy[i] <= enemyy + bulletsize + enemysize && enemyy - enemysize - bulletsize <= bulletsy[i]){
                enemyhp = enemyhp - 1;
                hitsound.currentTime = 0;
                hitsound.play();
                context.beginPath(); 
                context.arc(enemyx,enemyy,enemysize,0,2*Math.PI);
                context.fillStyle = "white";
                context.fill();
                bulletspeeds[i] = 0;
                bulletsx[i] = 0;
                bulletsy[i] = 0;
            }
        }
            
        for(i2 = 0; i2 < n2 ; i2++){
            if(bulletsx2[i2] <= x + bulletsize + enemysize && bulletsx2[i2] >= x - bulletsize - enemysize  && bulletsy2[i2] <= y + bulletsize + enemysize && y - enemysize - bulletsize <= bulletsy2[i2]){
                hp = hp - 1;
                hitsound.currentTime = 0;
                hitsound.play();
                context.beginPath(); 
                context.arc(x,y,oursize,0,2*Math.PI);
                context.fillStyle = "white";
                context.fill();
                bulletspeeds2[i2] = 0;
                bulletsx2[i2] = 1800;
                bulletsy2[i2] = 0;
            }
        }
        
        for(i2 = 0; i2 < n2 ; i2++){
        for(i = 0; i < n; i++){
        
        // попадание пули в пулю
        if(bulletsx[i] <= bulletsx2[i2] + bulletsize + bulletsize2 && bulletsx[i] >= bulletsx2[i2] - bulletsize - bulletsize2  && bulletsy[i] <= bulletsy2[i2] + bulletsize + bulletsize2 && bulletsy2[i2] - bulletsize2 - bulletsize <= bulletsy[i]){
        bullethitbullet.currentTime = 0;
        bullethitbullet.play();
        context.beginPath(); 
        context.arc(bulletsx[i],bulletsy[i],bulletsize+bulletsize2,0,2*Math.PI);
        context.fillStyle = "white";
        context.fill();
        bulletsx[i] = 0;
        bulletsy[i] = 0;
        bulletspeeds[i] = 0;
        bulletsx2[i2] = 1800;
        bulletsy2[i2] = 0;
        bulletspeeds2[i2] = 0;
        }
        }
        }
        
        // чтобы не было минок и вылетающие за экран возвращаются в 0 0
        for(i = 0; i < n; i++){
            if( bulletdirs[i] == 0){
                //if(ammo >= 0 && bulletsx[i] != 0 && bulletsy[i] != 0) ammo++;
                bulletsx[i] = 0;
                bulletsy[i] = 0;
            }
            if(bulletsx[i] > 1900 || bulletsx[i] < -100 || bulletsy[i] > 1000 || bulletsy[i] < -100){
                bulletsx[i] = 0;
                bulletsy[i] = 0
                bulletspeeds[i] = 0;
                bulletdirs[i] = 0;
            }
            if(bulletsx[i] == 0 && bulletsy[i] == 0){
                q++;
            }
        }
        for(i2 = 0; i2 < n2; i2++){
            if( bulletdirs2[i2] == 0){
                //if(ammo2 >= 0 && bulletsx2[i] != 1800 && bulletsy2[i] != 0) ammo2++;
                bulletsx2[i2] = 1800;
                bulletsy2[i2] = 0;
            }
            if(bulletsx2[i2] > 1900 || bulletsx2[i2] < -100 || bulletsy2[i2] > 1000 || bulletsy2[i2] < -100){
                bulletsx2[i2] = 1800;
                bulletsy2[i2] = 0
                bulletspeeds2[i2] = 0;
                bulletdirs2[i2] = 0;
            }
            if(bulletsx2[i2] == 1800 && bulletsy2[i2] == 0){
                q2++;
            }
        }
        
        
        
        
        // hp ноль или ниже
        if(hp <= 0){
            if(level >= 1){
                leveldown.play();
                level -= 1;
                levelscore = 0;
                if(lvlscrneeded > 3){ lvlscrneeded -= 2;}
                hp = 3;
                if(buffx == -400 && buffy == -400){buffx = Math.random() * 1750; buffy = Math.random() * 750;}
            }
            if(level < 1){
	            context.beginPath();
                winsound.play();
                context.clearRect(0,0,1800,800);
                context.font = "75px Arial";
                context.fillStyle = "blue";
                context.fillText("Player 2 wins!",750,400);
                speed = 0;
                enemyspeed = 0;
                bulletlvl = 0;
                level = 0;
                hp = 0;
                }
            }
        if(ammo > maxammo) ammo = maxammo;
        if(ammo2 > maxammo2) ammo2 = maxammo2;
        
         if(enemyhp <= 0){
            if(level2 >= 1){
                leveldown.play();
                level2 -= 1;
                levelscore2 = 0;
                if(lvlscrneeded2 > 3){ lvlscrneeded2 -= 2;}
                enemyhp = 3;
                if(buffx == -400 && buffy == -400){buffx = Math.random() * 1750; buffy = Math.random() * 750;}
            }
            if(level2 < 1){
	            context.beginPath();
                winsound.play();
                context.clearRect(0,0,1800,800);
                context.font = "75px Arial";
                context.fillStyle = "red";
                context.fillText("Player 1 wins!",750,400);
                speed = 0;
                enemyspeed = 0;
                bulletlvl2 = 0;
                level2 = 0;
                enemyhp = 0;
                }
            }   
        
        
        
        // зелёный шарик
        
        if(buffx <= x + ((oursize + 30) * pickupbuff)
           && buffx >= x - ((oursize + 30) * pickupbuff)
           && buffy <= y + ((oursize + 30) * pickupbuff)
           && buffy >= y - ((oursize + 30) * pickupbuff) && level < 7){
            if(levelscore < lvlscrneeded){ 
                buffballsound.currentTime = 0;
                buffballsound.play();
            }
            levelscore+=1;
            buffx = Math.random() * 1750;
            buffy = Math.random() * 750;
        }
        
        if(buffx <= enemyx + ((enemysize + 30) * pickupbuff2)
           && buffx >= enemyx - ((enemysize + 30) * pickupbuff2)
           && buffy <= enemyy + ((enemysize + 30) * pickupbuff2)
           && buffy >= enemyy - ((enemysize + 30) * pickupbuff2) && level2 < 7){
            if(levelscore2 < lvlscrneeded2){ 
                buffballsound.currentTime = 0;
                buffballsound.play();
            }
            levelscore2+=1;
            buffx = Math.random() * 1750;
            buffy = Math.random() * 750;
        }
        
        //уровни первого игрока
        if(levelscore > lvlscrneeded){ newlevelsound.play(); level+=1; levelscore = 0; lvlscrneeded+=2; hp = maxhp; if(bulletlvl > 0){ammoboxx = Math.random() * 1750; ammoboxy = Math.random() * 750;}}
        if(level == 1){bulletlvl = 0; speed = 175; oursize = 50; pickupbuff = 1; maxammo = 10;}
        if(level == 2){bulletlvl = 0; speed = 275; oursize = 45; pickupbuff = 1.5; maxammo = 10;}
        if(level == 3){bulletlvl = 1; speed = 350; oursize = 35; pickupbuff = 2; maxammo = 10;}
        if(level == 4){bulletlvl = 1; speed = 425; oursize = 35; pickupbuff = 3; maxammo = 10;}
        if(level == 5){bulletlvl = 1; speed = 475; oursize = 35; pickupbuff = 4; maxammo = 15}
        if(level == 6){bulletlvl = 1; speed = 550; oursize = 30; pickupbuff = 5; maxammo = 20} 
        if(level == 7){bulletlvl = 2; speed = 600; oursize = 30; pickupbuff = 5; maxammo = 30}
        
        //уровни второго игрока
        if(levelscore2 > lvlscrneeded2){ newlevelsound.play(); level2+=1; levelscore2 = 0; lvlscrneeded2+=2; enemyhp = enemymaxhp; if(bulletlvl2 > 0){ammoboxx = Math.random() * 1750; ammoboxy = Math.random() * 750;}}
        if(level2 == 1){bulletlvl2 = 0; enemyspeed = 175; enemysize = 50; pickupbuff2 = 1; maxammo2 = 10;}
        if(level2 == 2){bulletlvl2 = 0; enemyspeed = 275; enemysize = 45; pickupbuff2 = 1.5; maxammo2 = 10;}
        if(level2 == 3){bulletlvl2 = 1; enemyspeed = 350; enemysize = 35; pickupbuff2 = 2; maxammo2 = 10;}
        if(level2 == 4){bulletlvl2 = 1; enemyspeed = 425; enemysize = 35; pickupbuff2 = 3; maxammo2 = 10;}
        if(level2 == 5){bulletlvl2 = 1; enemyspeed = 475; enemysize = 35; pickupbuff2 = 4; maxammo2 = 15;}
        if(level2 == 6){bulletlvl2 = 1; enemyspeed = 550; enemysize = 30; pickupbuff2 = 5; maxammo2 = 20;} 
        if(level2 == 7){bulletlvl2 = 2; enemyspeed = 600; enemysize = 30; pickupbuff2 = 5; maxammo2 = 30;}
        
        if(level == 7 && level2 == 7){ buffx = -400; buffy = -400;}
        
        //победа
        if(score >= 50){
	        context.beginPath();
            winsound.play();
            context.clearRect(0,0,1800,800);
            context.font = "75px Arial";
            context.fillStyle = "red";
            context.fillText("Player 1 wins!",750,400);
            speed = 0;
            enemyspeed = 0;
            bulletlvl = 0;
            bulletlvl2 = 0
        }
         if(score2 >= 50){
	        context.beginPath();
            winsound.play();
            context.clearRect(0,0,1800,800);
            context.font = "75px Arial";
            context.fillStyle = "blue";
            context.fillText("Player 2 wins!",750,400);
            speed = 0;
            enemyspeed = 0;
            bulletlvl = 0;
            bulletlvl2 = 0
        }
        
        
        //bullet
        for(i = 0; i < n ;i++){
            context.beginPath();
            context.arc(bulletsx[i],bulletsy[i],bulletsize,0,2*Math.PI);
            context.fillStyle = "orange";
            context.fill(); 
        }
        for(i2 = 0; i2 < n2 ;i2++){
            context.beginPath();
            context.arc(bulletsx2[i2],bulletsy2[i2],bulletsize2,0,2*Math.PI);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
    }
    
    //PVP END
    
    // SURVIVAL BEGIN
    if(gamemode == 3){
        var passed = (Date.now() - t)/1000;
        t = Date.now();
        var fps = Math.round(1/passed);
        q = 0;
        q2 = 0;
        context.clearRect(0,0,1800,800);
        
        //console.log(ammostationbool);
        
        if(enemyx == 3000){
         enemyx = 1500;
         enemyy = 600;
         enemysize = oursize;
         enemyspeed = speed;
         x = 300;
         y = 600;
         maxhp = 4;
         hp = maxhp;
         enemymaxhp = 4;
         enemyhp = enemymaxhp;
         lvlscrneeded = 10;
         lvlscrneeded2 = 10;
         num = 0;
         nummax = 1;
         ammoupgradecost = 10;
         medstationupradecost = 10;
         repaircost = 10;
         ammocost = 10;
         medikitcost = 10;
         score = 1000;
        }
        //счёт
        context.beginPath();
        context.font = "25px Arial";
        context.fillStyle = "yellow";
        context.fillText(score,5,55);
        
        /*context.beginPath();
        context.font = "25px Arial";
        context.fillStyle = "blue";
        context.fillText(score2,1468,790);*/
        
        // волна
        context.beginPath();
        context.font = "26px Arial";
        context.fillStyle = "white";
        context.fillText("Wave:",5,25);
        
        context.beginPath();
        context.font = "26px Arial";
        context.fillStyle = "white";
        context.fillText(wave,80,25);       
       
        //отрисовка менюшки главной базы
        if((basex + 100 <= enemyx + 100 + enemysize && basex + 100 >= enemyx - 100 - enemysize && basey + 50 <= enemyy + 50 + enemysize && enemyy - 50 - enemysize <= basey + 50) || (basex + 100 <= x + 100 + oursize && basex + 100 >= x - 100 - oursize && basey + 50 <= y + 50 + oursize && y - 50 - oursize <= basey + 50)){
            context.beginPath();
            context.rect(700,550,400,100);
            context.strokeStyle = "white";
            context.stroke();
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("2)Для ремонта базы нажмите R.",705,580);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("Цена:",890,580);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText(repaircost,923,580);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("монеток (за 1 hp)",940,580);
            
            
            if(ammostationlvl == 0){
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("1)Для создания станции боеприпасов нажмите B.",705,565);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("Цена:",985,565);
                
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText(ammoupgradecost,1018,565);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("монеток",1033,565);
            }
             
            if(ammostationlvl > 0 && ammostationlvl < 4 ){
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("1)Для улучшения станции боеприпасов нажмите B.",705,565);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("Цена:",995,565);
                
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText(ammoupgradecost,1028,565);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("монет",1045,565);
            }
            
            if(ammostationlvl == 4 && medstationlvl < 4){
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("1)Чтобы открыть улучшение базы улучшите медстанцию",705,565);
            
            }
            
            
            if(medstationlvl == 0){
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("3)Для создания медстанции нажмите H.",705,595);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("Цена:",933,595);
                
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText(medstationupradecost,968,595);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("монеток",985,595);
                
            }
            if(medstationlvl > 0 && medstationlvl < 4 ){
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("3)Для улучшения медстанции нажмите B.",705,595);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("Цена:",940,595);
                
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText(medstationupradecost,973,595);
            
            context.beginPath();
            context.font = "12px Arial";
            context.fillStyle = "white";
            context.fillText("монет",990,595);
            }
            
            if(medstationlvl == 4 && ammostationlvl < 4 ){
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("3)Чтобы открыть улучшение базы улучшите станцию боеприпасов",705,595);
            }
            
             if(medstationlvl == 4 && ammostationlvl == 4 && baselvl < 2 ){
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("1)Чтобы улучшить базу нажмите U(пока ничего нет)",705,565);
            }
            
            
             
        }
        
        //отрисовка меню зарядной станции
        if(ammostationlvl > 0){
            if((basex + 300 <= enemyx + 50 + enemysize && basex + 300 >= enemyx - 50 - enemysize && basey + 62.5 <= enemyy + 37.5 + enemysize && enemyy - 37.5 - enemysize <= basey + 62.5) || (basex + 300 <= x + 50 + oursize && basex + 300 >= x - 50 - oursize && basey + 62.5 <= y + 37.5 + oursize && y - 62.5 - oursize <= basey + 37.5)){
                
                context.beginPath();
                context.rect(1175,715,300,75);
                context.strokeStyle = "white";
                context.stroke();
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("1)Для покупки ящика со снарядами нажмите M",1180,730);
            
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("Стоимость ящика равна ",1180,745);
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText(ammocost,1320,745);
            
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("монеток",1335,745);
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("Улучшения станции понижают стоимость ящика",1180,760);
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("и повышают максимальное hp базы",1180,775);
            
            }
        }
        //отрисовка меню медстанции
        if(medstationlvl > 0){
            if((basex - 100 <= enemyx + 50 + enemysize && basex - 100 >= enemyx - 50 - enemysize && basey + 62.5 <= enemyy + 37.5 + enemysize && enemyy - 37.5 - enemysize <= basey + 62.5) || (basex - 100 <= x + 50 + oursize && basex - 100 >= x - 50 - oursize && basey + 62.5 <= y + 37.5 + oursize && y - 62.5 - oursize <= basey + 37.5)){
                
                context.beginPath();
                context.rect(330,715,300,75);
                context.strokeStyle = "white";
                context.stroke();
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("1)Для покупки аптечки нажмите K",335,730);
            
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("Стоимость аптечки равна ",335,745);
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText(medikitcost,480,745);
            
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("монеток",495,745);
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("Улучшения станции понижают стоимость аптечки",335,760);
                
                context.beginPath();
                context.font = "12px Arial";
                context.fillStyle = "white";
                context.fillText("и повышают максимальное hp базы",335,775);
            }
        }
        // отрисовка ammo станции
        if(ammostationlvl >= 1){
            context.beginPath();
            context.rect(basex + 250 ,basey + 25, 100 ,75);
            context.fillStyle = "#9c9c9c";
            context.fill();
            
            context.beginPath();
            context.rect(basex + 200 ,basey + 40, 50 ,15);
            context.fillStyle = "#909090";
            context.fill();
            
            if(ammostationlvl == 1){context.drawImage(ammopng,basex + 275,basey + 37.5 ,50,50);}
            
            if(ammostationlvl >= 2){
                if(ammostationlvl == 2){ context.drawImage(ammostationpng,basex + 232.5,basey + 25 ,135,75);}
                context.beginPath();
                context.rect(basex + 250 ,basey + 100, 10 ,10);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex + 340 ,basey + 100, 10 ,10);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex + 200 ,basey + 70, 50 ,15);
                context.fillStyle = "#909090";
                context.fill();
                
                context.beginPath();
                context.rect(basex + 330 ,basey + 110, 30 ,8);
                context.fillStyle = "#909090";
                context.fill();
                
                context.beginPath();
                context.rect(basex + 240 ,basey + 110, 30 ,8);
                context.fillStyle = "#909090";
                context.fill();
                 
            }
            
            if(ammostationlvl >= 3){
                
                context.beginPath();
                context.rect(basex + 295 ,basey + 100, 10 ,10);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex + 290 ,basey + 110, 20 ,8);
                context.fillStyle = "#909090";
                context.fill();  
             if(ammostationlvl == 3){ context.drawImage(ammostation2png,basex + 255, basey + 30 ,93,62.8);}  
            }
            if(ammostationlvl >= 4){
                context.beginPath();
                context.rect(basex + 250 ,basey, 100 ,75);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex + 200 ,basey + 10, 50 ,15);
                context.fillStyle = "#909090";
                context.fill();
                
                if(ammostationlvl == 4){ context.drawImage(ammostation4png,basex + 255, basey + 5 ,93,93);}
            }
            
        }
        // отрисовка мед станции
        if(medstationlvl >= 1){
            context.beginPath();
            context.rect(basex - 150 ,basey + 25, 100 ,75);
            context.fillStyle = "#9c9c9c";
            context.fill();
            
            context.beginPath();
            context.rect(basex - 50 ,basey + 40, 50 ,15);
            context.fillStyle = "#909090";
            context.fill();
            
            if(medstationlvl == 1){
                context.beginPath();
                context.rect(basex - 105 ,basey + 33, 10 ,60);
                context.fillStyle = "#000000";
                context.fill();
                
                context.beginPath();
                context.rect(basex - 130 ,basey + 58, 60 ,10);
                context.fillStyle = "#000000";
                context.fill();
            }
            
            if(medstationlvl >= 2){
                 if(medstationlvl == 2){
                    context.beginPath();
                    context.rect(basex - 105 ,basey + 33, 10 ,60);
                    context.fillStyle = "#770000";
                    context.fill();
                
                    context.beginPath();
                    context.rect(basex - 130 ,basey + 58, 60 ,10);
                    context.fillStyle = "#770000";
                    context.fill();
                     
                    context.beginPath();
                    context.rect(basex - 135 ,basey + 29, 5 ,21);
                    context.fillStyle = "#770000";
                    context.fill();
                     
                    context.beginPath();
                    context.rect(basex - 143 ,basey + 37, 21 ,5);
                    context.fillStyle = "#770000";
                    context.fill();
                     
                }   
                
                context.beginPath();
                context.rect(basex - 50 ,basey + 70, 50 ,15);
                context.fillStyle = "#909090";
                context.fill();
                
                context.beginPath();
                context.rect(basex - 150 ,basey + 100, 10 ,10);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex - 60 ,basey + 100, 10 ,10);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex - 160 ,basey + 110, 30 ,8);
                context.fillStyle = "#909090";
                context.fill();
                
                context.beginPath();
                context.rect(basex - 70 ,basey + 110, 30 ,8);
                context.fillStyle = "#909090";
                context.fill();
                if(medstationlvl >= 3){
                    if(medstationlvl == 3){
                        context.beginPath();
                        context.rect(basex - 105 ,basey + 33, 10 ,60);
                        context.fillStyle = "#bb0000";
                        context.fill();
                
                        context.beginPath();
                        context.rect(basex - 130 ,basey + 58, 60 ,10);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 135 ,basey + 29, 5 ,21);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 143 ,basey + 37, 21 ,5);
                        context.fillStyle = "#bb0000";
                        context.fill();
                        
                        context.beginPath();
                        context.rect(basex - 70 ,basey + 29, 5 ,21);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 78 ,basey + 37, 21 ,5);
                        context.fillStyle = "#bb0000";
                        context.fill();
                    }
                    context.beginPath();
                    context.rect(basex - 105 ,basey + 100, 10 ,10);
                    context.fillStyle = "#9c9c9c";
                    context.fill();
                    
                    context.beginPath();
                    context.rect(basex - 110 ,basey + 110, 20 ,8);
                    context.fillStyle = "#909090";
                    context.fill();
                }
            if(medstationlvl >= 4){
                context.beginPath();
                context.rect(basex - 150 ,basey, 100 ,75);
                context.fillStyle = "#9c9c9c";
                context.fill();
                
                context.beginPath();
                context.rect(basex - 50 ,basey + 10, 50 ,15);
                context.fillStyle = "#909090";
                context.fill();
                if(medstationlvl == 4){
                        context.beginPath();
                        context.rect(basex - 105 ,basey + 10, 10 ,80);
                        context.fillStyle = "#bb0000";
                        context.fill();
                
                        context.beginPath();
                        context.rect(basex - 140 ,basey + 45, 80 ,10);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 135 ,basey + 4, 5 ,21);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 143 ,basey + 12, 21 ,5);
                        context.fillStyle = "#bb0000";
                        context.fill();
                        
                        context.beginPath();
                        context.rect(basex - 70 ,basey + 4, 5 ,21);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 78 ,basey + 12, 21 ,5);
                        context.fillStyle = "#bb0000";
                        context.fill();
                    
                        context.beginPath();
                        context.rect(basex - 135 ,basey + 74, 5 ,21);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 143 ,basey + 82, 21 ,5);
                        context.fillStyle = "#bb0000";
                        context.fill();
                    
                        context.beginPath();
                        context.rect(basex - 70 ,basey + 74, 5 ,21);
                        context.fillStyle = "#bb0000";
                        context.fill();
                     
                        context.beginPath();
                        context.rect(basex - 78 ,basey + 82, 21 ,5);
                        context.fillStyle = "#bb0000";
                        context.fill();
                }
            }
            }
        }
        
        // отрисовка монетки
        for(i = 0; i < coinn; i++){
            if(coinvalue[i]==1){
                context.beginPath(); 
                context.arc(coinxs[i],coinys[i],10,0,2*Math.PI);
                context.fillStyle = "yellow";
                context.fill();
            }
            if(coinvalue[i]==2){
                context.beginPath(); 
                context.arc(coinxs[i],coinys[i],15,0,2*Math.PI);
                context.fillStyle = "yellow";
                context.fill();
            }
            if(coinvalue[i]==3){
                context.beginPath(); 
                context.arc(coinxs[i],coinys[i],20,0,2*Math.PI);
                context.fillStyle = "yellow";
                context.fill();
            }
            if(coinvalue[i]==5){
                context.beginPath(); 
                context.arc(coinxs[i],coinys[i],30,0,2*Math.PI);
                context.fillStyle = "yellow";
                context.fill();
            }
        }
    
        // отрисовка зелёного buffшара
        context.beginPath(); 
        context.arc(buffx,buffy,30,0,2*Math.PI);
        context.fillStyle = "green";
        context.fill();
        
        context.drawImage(buffpng,buffx-25,buffy-25,50,50);
        
        //отрисовка базы
        context.beginPath();
        context.rect(basex,basey,200,100);
        context.fillStyle = "#9c9c9c";
        context.fill();
        
        if(baselvl > 1){
            context.beginPath();
            context.rect(basex + 350 ,basey + 40, 30 ,20);
            context.fillStyle = "#909090";
            context.fill();
            
            context.beginPath(); 
            context.arc(basex + 400,basey + 50,30,0,2*Math.PI);
            context.fillStyle = "9c9c9c";
            context.fill();
        }
        
        /*context.beginPath();
        context.rect(basex + 200,basey - 30, 30,130);
        context.fillStyle = "#909090";
        context.fill();
        
        context.beginPath();
        context.rect(basex - 30 ,basey - 30, 30,130);
        context.fillStyle = "#909090";
        context.fill();*/
        
        
        //отрисовка первого игрока
        context.beginPath();
        context.arc(x,y,oursize,0,2*Math.PI);
        context.fillStyle = "red";
        context.fill();
        
        // отрисовка второго игрока
        context.beginPath(); 
        context.arc(enemyx,enemyy,enemysize,0,2*Math.PI);
        context.fillStyle = "Blue";
        context.fill();
        
        // пушка игрока 1
        if(bulletlvl == 1){
            context.beginPath();
            context.arc(x,y,oursize/2,0,2*Math.PI);
            context.fillStyle = "gray";
            context.fill();
            if(gundir == 1){
                context.beginPath();
                context.rect(x,y-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir == 2){
                context.beginPath();
                context.rect(x-5,y-55,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir == 3){
                context.beginPath();
                context.rect(x-50,y-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir == 4){
                context.beginPath();
                context.rect(x-5,y+5,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
        }
        if(bulletlvl == 2){
            context.beginPath();
            context.rect(x-10,y-10,20,20);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
        //пушка игрока 2
        
        if(bulletlvl2 == 1){
            context.beginPath();
            context.arc(enemyx,enemyy,enemysize/2,0,2*Math.PI);
            context.fillStyle = "gray";
            context.fill();
            if(gundir2 == 1){
                context.beginPath();
                context.rect(enemyx,enemyy-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir2 == 2){
                context.beginPath();
                context.rect(enemyx-5,enemyy-55,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir2 == 3){
                context.beginPath();
                context.rect(enemyx-50,enemyy-5,50,10);
                context.fillStyle = "gray";
                context.fill();
            }
            if(gundir2 == 4){
                context.beginPath();
                context.rect(enemyx-5,enemyy+5,10,45);
                context.fillStyle = "gray";
                context.fill();
            }
        }
        if(bulletlvl2 == 2){
            context.beginPath();
            context.rect(enemyx-10,enemyy-10,20,20);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
        
        // два прямоугольника для красоты панелей
        context.beginPath();
        context.rect(15,715,300,75);
        context.strokeStyle = "white";
        context.stroke();
        
        context.beginPath();
        context.rect(1490,715,300,75);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка прогресса уровня первого игрока
    
        context.beginPath();
        context.rect(15,740,(300/lvlscrneeded)*levelscore,25);
        context.fillStyle = "#d53e07";
        context.fill();
        
        context.beginPath();
        context.rect(15,740,300,25);
        context.strokeStyle = "white";
        context.stroke();
        //отрисовка levela
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Level:",130,760);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(level,175,760);
        
        //отрисовка прогресса уровня второго игрока
    
        context.beginPath();
        context.rect(1490,740,(300/lvlscrneeded2)*levelscore2,25);
        context.fillStyle = "darkgreen";
        context.fill();
    
        context.beginPath();
        context.rect(1490,740,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка levela второго игрока
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Level:",1605,760);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(level2,1650,760);
        
        // отрисовка полоски hp player 1
        
        context.beginPath();
        context.rect(15,765,(300/maxhp)*hp,25);
        context.fillStyle = "red";
        context.fill();
        
        context.beginPath();
        context.rect(15,765,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка hp player 1
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("HP:",130,785);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(hp,160,785);
        
         // отрисовка полоски hp player 2
        
        context.beginPath();
        context.rect(1490,765,(300/enemymaxhp)*enemyhp,25);
        context.fillStyle = "blue";
        context.fill();
        
        context.beginPath();
        context.rect(1490,765,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка hp player 2
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("HP:",1605,785);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(enemyhp,1635,785);
        
        // отрисовка полоски hp и hp базы
        
        context.beginPath();
        context.rect(800,785,(200/basemaxhp)*basehp,10);
        context.fillStyle = "darkgreen";
        context.fill();
        
        context.beginPath();
        context.rect(800,785,200,10);
        context.strokeStyle = "white";
        context.stroke();
        
    
        context.beginPath();
        context.font = "8px Arial";
        context.fillStyle = "White";
        context.fillText("HP:",805,792.5);
    
        context.beginPath();
        context.font = "8px Arial";
        context.fillStyle = "White";
        context.fillText(basehp,880,792.5);
        
        context.beginPath();
        context.font = "8px Arial";
        context.fillStyle = "White";
        context.fillText("/",890,792.5);
        
        context.beginPath();
        context.font = "8px Arial";
        context.fillStyle = "White";
        context.fillText(basemaxhp,895,792.5);
        
        //отрисовка ammo полоски первого игрока
    
        context.beginPath();
        context.rect(15,715,(300/maxammo)*ammo,25);
        context.fillStyle = "#cc7000";
        context.fill();
        
        context.beginPath();
        context.rect(15,715,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка ammo
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Ammo:",130,735);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(ammo,180,735);
        
        //отрисовка ammo полоски второго игрока
    
        context.beginPath();
        context.rect(1490,715,(300/maxammo2)*ammo2,25);
        context.fillStyle = "#cc7000";
        context.fill();
    
        context.beginPath();
        context.rect(1490,715,300,25);
        context.strokeStyle = "white";
        context.stroke();
        
        //отрисовка ammo второго игрока
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText("Ammo:",1605,735);
    
        context.beginPath();
        context.font = "16px Arial";
        context.fillStyle = "White";
        context.fillText(ammo2,1655,735);
        
        //ammobox
        
        context.beginPath();
        context.rect(ammoboxx,ammoboxy,70,70);
        context.fillStyle = "#8f5429";
        context.fill();
        
        context.drawImage(ammopng,ammoboxx+5,ammoboxy+5,60,60);
        
        context.beginPath();
        context.rect(ammoboxx - 5,ammoboxy,5,70);
        context.fillStyle = "#663300";
        context.fill();
        
        context.beginPath();
        context.rect(ammoboxx + 70,ammoboxy,5,70);
        context.fillStyle = "#663300";
        context.fill();
        
        context.beginPath();
        context.rect(ammoboxx-5, ammoboxy + 70, 80, 5);
        context.fillStyle = "#663300";
        context.fill();
        
        context.beginPath();
        context.rect(ammoboxx - 5, ammoboxy - 5, 80, 5);
        context.fillStyle = "#663300";
        context.fill();
        
        //medikit
        
        context.beginPath();
        context.rect(medikitx,medikity,70,70);
        context.fillStyle = "#ccccff";
        context.fill();
        
        context.beginPath();
        context.rect(medikitx + 10,medikity + 30,50,10);
        context.fillStyle = "#aa0000";
        context.fill();
        
        context.beginPath();
        context.rect(medikitx + 30,medikity + 10,10,50);
        context.fillStyle = "#aa0000";
        context.fill();
        
        
        // отрисовка hp врагов
        for(i = 0; i < nummax; i++){
            if(foehp[i] < foemaxhp[i]){
                if(foetype[i] == 0){
                    context.beginPath();
                    context.rect(foex[i] - 20,foey[i] - 13 - foesize[i], 40/foemaxhp[i] * foehp[i] ,10);
                    context.fillStyle = "green";
                    context.fill();
        
                    context.beginPath();
                    context.rect(foex[i] - 20, foey[i] - 13 - foesize[i] ,40,10);
                    context.strokeStyle = "white";
                    context.stroke();
    
                }
                if(foetype[i] == 1){
                    context.beginPath();
                    context.rect(foex[i] - 30,foey[i] - 23 - foesize[i], 60/foemaxhp[i] * foehp[i] ,20);
                    context.fillStyle = "green";
                    context.fill();
        
                    context.beginPath();
                    context.rect(foex[i] - 30, foey[i] - 23 - foesize[i] ,60,20);
                    context.strokeStyle = "white";
                    context.stroke();
    
                }
                if(foetype[i] == 3 || foetype[i] == 5){
                    context.beginPath();
                    context.rect(foex[i] - 75,foey[i] - 23 - foesize[i], 150/foemaxhp[i] * foehp[i] ,20);
                    context.fillStyle = "green";
                    context.fill();
        
                    context.beginPath();
                    context.rect(foex[i] - 75, foey[i] - 23 - foesize[i] ,150,20);
                    context.strokeStyle = "white";
                    context.stroke();
    
                    
                    context.beginPath();
                    context.font = "18px Arial";
                    context.fillStyle = "white";
                    context.fillText(foehp[i],foex[i] - 27,foey[i]-foesize[i] - 5);
                    
                    context.beginPath();
                    context.font = "18px Arial";
                    context.fillStyle = "white";
                    context.fillText("/",foex[i] - 5,foey[i]-foesize[i] - 5);
                    
                    context.beginPath();
                    context.font = "18px Arial";
                    context.fillStyle = "white";
                    context.fillText(foemaxhp[i],foex[i] + 5,foey[i]-foesize[i] - 5);
                }
            }
        }
        
        // враги
        
        if(num < nummax && wavebuff < wave){
            for(i = 0; i < nummax; i++){
                foex[i] = Math.random() * 1750;
                foey[i] = -100 - Math.random() * 200;
                foetype[i] = Math.random() * typepossible;
                foetype[i] = Math.round(foetype[i]);
                foetarget[i] = Math.random() * 1; foetarget[i] = Math.round(foetarget[i]);
                //типы врагов
                if(foetype[i] == 0){foemaxhp[i]=2;foesize[i]=20;foespeed[i]=100; enemyworth[i]=1; enemyxpworth[i]=2;}
                if(foetype[i] == 1){foemaxhp[i]=3;foesize[i]=30;foespeed[i]=75;  enemyworth[i]=2; enemyxpworth[i]=3;}
                if(foetype[i] == 2){foemaxhp[i]=1;foesize[i]=15;foespeed[i]=200; enemyworth[i]=1; enemyxpworth[i]=1;}
                if(foetype[i] == 3){foemaxhp[i]=10;foesize[i]=50;foespeed[i]=35; foetarget[i] = 2; enemyworth[i]=3; enemyxpworth[i]=8;}
                if(foetype[i] == 4){foemaxhp[i]=1;foesize[i]=10;foespeed[i]=300; enemyworth[i]=1; enemyxpworth[i]=1;}
                if(foetype[i] == 5){foemaxhp[i]=25;foesize[i]=100;foespeed[i]=25; foetarget[i] = 2; enemyworth[i]=5; enemyxpworth[i]=15;}
                foehp[i] = foemaxhp[i];
                num++;
            }
            wavebuff++;
        }
        
        // волны
        
        if(num == 0){
            wave++;
            nummax++;
            if(wave > 3 && wave < 7) typepossible++;
            if(wave == 10) typepossible++;
        }
        
        // отрисовка врагов
        
        for(i = 0; i < nummax; i++){
            context.beginPath();
            context.arc(foex[i],foey[i],foesize[i],0,2*Math.PI);
            context.fillStyle = "#4d004d";
            context.fill(); 
        }
        
        // передвижение врагов
        for(i = 0; i < nummax; i++){
            if(foetarget[i] == 0){
                if(foex[i] < x){ foex[i] += (foespeed[i] * passed);}
                else if(foex[i] > x){ foex[i] -= (foespeed[i] * passed);}
                if(foey[i] < y){ foey[i] += (foespeed[i] * passed);}
                else if(foey[i] > y){ foey[i] -= (foespeed[i] * passed);}
            }
            if(foetarget[i] == 1){
                if(foex[i] < enemyx){ foex[i] += (foespeed[i] * passed);}
                else if(foex[i] > enemyx){ foex[i] -= (foespeed[i] * passed);}
                if(foey[i] < enemyy){ foey[i] += (foespeed[i] * passed);}
                else if(foey[i] > enemyy){ foey[i] -= (foespeed[i] * passed);}
            }
            if(foetarget[i] == 2){
                if(foex[i] < basex + 100){ foex[i] += (foespeed[i] * passed);}
                else if(foex[i] > basex - 100){ foex[i] -= (foespeed[i] * passed);}
                if(foey[i] < basey){ foey[i] += (foespeed[i] * passed);}
                else if(foey[i] > basey){ foey[i] -= (foespeed[i] * passed);}
            }
        }
        
        // урон врагов по player 1
        for(i = 0; i < nummax; i++){
            if(foex[i] <= x + foesize[i] + oursize && foex[i] >= x - foesize[i] - oursize  && foey[i] <= y + foesize[i] + oursize && y - oursize - foesize[i] <= foey[i]){
                hp--;
                if(foehp[i] > 0) {foehp[i]--; foey[i] -= 200;}
                if(foehp[i] <= 0){
                    coink = 0;
                    if(coinq == 0){
                        coinn++;
                        coinxs[i] = foex[i];
                        coinys[i] = foey[i];
                        coinvalue[i] = enemyworth[i];
                    }
                    if(coinq > 0){
                        for(i3 = 0; i3 < coinn; i3++){
                            if(coinxs[i3] == -300 && coinys[i3] == -300 && coink == 0){
                                coinxs[i3] = foex[i];
                                coinys[i3] = foey[i];
                                coinvalue[i3] = enemyworth[i];
                                coink++;
                            }
                        }
                    }

                    foey[i] = -500; foespeed[i] = 0; num--;
                }
                
            }
        }
        // урон врагов по player 2
        for(i = 0; i < nummax; i++){
            if(foex[i] <= enemyx + foesize[i] + enemysize && foex[i] >= enemyx - foesize[i] - enemysize  && foey[i] <= enemyy + foesize[i] + enemysize && enemyy - enemysize - foesize[i] <= foey[i]){
                enemyhp--;
                if(foehp[i] > 0) {foehp[i]--; foey[i] -= 200;}
                if(foehp[i] <= 0){
                    coink = 0;
                    if(coinq == 0){
                        coinn++;
                        coinxs[i] = foex[i];
                        coinys[i] = foey[i];
                        coinvalue[i] = enemyworth[i];
                    }
                    if(coinq > 0){
                        for(i3 = 0; i3 < coinn; i3++){
                            if(coinxs[i3] == -300 && coinys[i3] == -300 && coink == 0){
                                coinxs[i3] = foex[i];
                                coinys[i3] = foey[i];
                                coinvalue[i3] = enemyworth[i];
                                coink++;
                            }
                        }
                    }
                    foey[i] = -500; foespeed[i] = 0; num--;
                }
            }
        }
        // урон врагов по базе
        for(i = 0; i < nummax; i++){
            if(basex + 100 <= foex[i] + 100 + foesize[i] && basex + 100 >= foex[i] - 100 - foesize[i] && basey + 50 <= foey[i] + 50 + foesize[i] && foey[i] - 50 - foesize[i] <= basey + 50){
                basehp--;
                if(foehp[i] > 0) {foehp[i]--; foey[i] -= 200;}
                if(foehp[i] <= 0){
                    coink = 0;
                    if(coinq == 0){
                        coinn++;
                        coinxs[i] = foex[i];
                        coinys[i] = foey[i];
                        coinvalue[i] = enemyworth[i];
                    }
                    if(coinq > 0){
                        for(i3 = 0; i3 < coinn; i3++){
                            if(coinxs[i3] == -300 && coinys[i3] == -300 && coink == 0){
                                coinxs[i3] = foex[i];
                                coinys[i3] = foey[i];
                                coinvalue[i3] = enemyworth[i];
                                coink++;
                            }
                        }
                    }
                    foey[i] = -500; foespeed[i] = 0; num--;
                }
            }
        }
        
        
        
        
        
        //player 1 передвижение
        if(dir==1 && x < 1800 - oursize ){ x+=(speed * passed)};
        if(dir==2 && y > 0 + oursize ){ y-=(speed * passed) };
        if(dir==3 && x > 0 + oursize ){ x -= (speed * passed)};
        if(dir==4 && y < 800 - oursize ){ y += (speed * passed)};
        // player 2 передвижение
        if(dir2==1 && enemyx < 1800 - enemysize ){ enemyx+=(enemyspeed * passed)};
        if(dir2==2 && enemyy > 0 + enemysize ){ enemyy-=(enemyspeed * passed) };
        if(dir2==3 && enemyx > 0 + enemysize ){ enemyx -= (enemyspeed * passed)};
        if(dir2==4 && enemyy < 800 - enemysize ){ enemyy += (enemyspeed * passed)};
        
        // подбор монет
        for(i = 0; i < coinn; i++){
            if(coinxs[i] <= x + (oursize + 10) * pickupbuff && coinxs[i] >= x - (oursize+10) * pickupbuff && coinys[i] <= y + (oursize+10) * pickupbuff && y - (oursize+10) * pickupbuff <=coinys[i]){ 
                coinxs[i] = -300; coinys[i] = -300;
                if(score < 200){coinsound.currentTime = 0; coinsound.play();}
                score+=coinvalue[i];
            }
        }
        
        for(i = 0; i < coinn; i++){
            if(coinxs[i] <= enemyx + (enemysize+10) * pickupbuff2 && coinxs[i] >= enemyx - (enemysize+10) * pickupbuff2 && coinys[i] <= enemyy + (enemysize+10) * pickupbuff2 && enemyy - (enemysize+10) * pickupbuff2 <=coinys[i]){ 
                coinxs[i] = -300; coinys[i] = -300;
                if(score2 < 50){coinsound.currentTime = 0; coinsound.play();}
                score+=coinvalue[i];
            }
        }
        
        // подбор патронов
         if(ammoboxx + 35 <= x + 35 + oursize * pickupbuff && ammoboxx + 35 >= x - 35 - oursize * pickupbuff && ammoboxy + 35 <= y + 35 + oursize * pickupbuff && y - 35 - oursize * pickupbuff <= ammoboxy + 35){ 
            ammoboxx = -500; ammoboxy = -500;
            ammopickup.play();
            ammo = maxammo;
        }
        
        if(ammoboxx + 35 <= enemyx + 35 + enemysize * pickupbuff2 && ammoboxx + 35 >= enemyx - 35 - enemysize * pickupbuff2 && ammoboxy + 35 <= enemyy + 35 + enemysize * pickupbuff2 && enemyy - 35 - enemysize * pickupbuff2 <= ammoboxy + 35){ 
            ammoboxx = -500; ammoboxy = -500;
            ammopickup.play();
            ammo2 = maxammo2;
        }
        
        // подбор medikit
        
        if(medikitx + 35 <= x + 35 + oursize * pickupbuff && medikitx + 35 >= x - 35 - oursize * pickupbuff && medikity + 35 <= y + 35 + oursize * pickupbuff && y - 35 - oursize * pickupbuff <= medikity + 35){ 
            medikitx = -500; medikity = -500;
            hp = maxhp;
        }
        
        if(medikitx + 35 <= enemyx + 35 + enemysize * pickupbuff2 && medikitx + 35 >= enemyx - 35 - enemysize * pickupbuff2 && medikity + 35 <= enemyy + 35 + enemysize * pickupbuff2 && enemyy - 35 - enemysize * pickupbuff2 <= medikity + 35){ 
            medikitx = -500; medikity = -500;
            enemyhp = enemymaxhp;
        }
        
        
        
        //передвижение bullet 1 игрок
    for(i = 0; i < n; i++){
    if(bulletlvl == 1){
        if(bulletdirs[i]==1 ){ bulletsx[i]+=(bulletspeeds[i] * passed)};
        if(bulletdirs[i]==2 ){ bulletsy[i]-=(bulletspeeds[i] * passed) };
        if(bulletdirs[i]==3 ){ bulletsx[i]-= (bulletspeeds[i] * passed)};
        if(bulletdirs[i]==4 ){ bulletsy[i]+= (bulletspeeds[i] * passed)};
    }
    if(bulletlvl == 2){
        if(bulletsx[i] < enemyx){bulletsx[i] += (bulletspeeds[i] * passed);}
        else if(bulletsx[i] > enemyx){bulletsx[i] -= (bulletspeeds[i] * passed);}
        if(bulletsy[i] < enemyy){bulletsy[i] += (bulletspeeds[i] * passed);}
        else if(bulletsy[i] > enemyy){bulletsy[i] -= (bulletspeeds[i] * passed);}
    }
    }
        //передвижение bullet 2 игрок
    for(i2 = 0; i2 < n2; i2++){
    if(bulletlvl2 == 1){
        if(bulletdirs2[i2]==1 ){ bulletsx2[i2]+=(bulletspeeds2[i2] * passed)};
        if(bulletdirs2[i2]==2 ){ bulletsy2[i2]-=(bulletspeeds2[i2] * passed) };
        if(bulletdirs2[i2]==3 ){ bulletsx2[i2]-= (bulletspeeds2[i2] * passed)};
        if(bulletdirs2[i2]==4 ){ bulletsy2[i2]+= (bulletspeeds2[i2] * passed)};
    }
    if(bulletlvl2 == 2){
        if(bulletsx2[i2] < x){bulletsx2[i2] += (bulletspeeds2[i2] * passed);}
        else if(bulletsx2[i2] > x){bulletsx2[i2] -= (bulletspeeds2[i2] * passed);}
        if(bulletsy2[i2] < y){bulletsy2[i2] += (bulletspeeds2[i2] * passed);}
        else if(bulletsy2[i2] > y){bulletsy2[i2] -= (bulletspeeds2[i2] * passed);}
    }
    }
        // попадание пули во врага
        for(i2 = 0; i2 < nummax ; i2++){
            for(i = 0; i < n ; i++){
                if(bulletsx[i] <= foex[i2] + bulletsize + foesize[i2] && bulletsx[i] >= foex[i2] - bulletsize - foesize[i2]  && bulletsy[i] <= foey[i2] + bulletsize + foesize[i2] && foey[i2] - foesize[i2] - bulletsize <= bulletsy[i]){
                    if(foehp[i2] >= 1) foehp[i2]--;
                    if(foehp[i2] <= 0){
                        coinn++;
                        coinxs.push(foex[i2]);
                        coinys.push(foey[i2]);
                        coinvalue.push(enemyworth[i2]);
                        /*coink = 0;
                        if(coinq == 0){
                          

                            coinn++;
                            coinxs[i] = foex[i2];
                            coinys[i] = foey[i2];
                            coinvalue[i] = enemyworth[i2];
                        
                        }
                        /*if(coinq > 0){ 
                            for(i3 = 0; i3 < coinn; i3++){
                                if(coinxs[i3] == -300 && coinys[i3] == - 300 && coink == 0){
                                    coinxs[i3] = foex[i2];
                                    coinys[i3] = foey[i2];
                                    coinvalue[i3] = enemyworth[i2];
                                    coink++;
                                }
                            }
                        }*/
                        console.log("coinn: ",coinn,"coinq: ",coinq,"coink: ",coink)
                        if(level < 7) levelscore += enemyxpworth[i2];
                        foey[i2] = -500; foespeed[i2] = 0; num--;
                        
                    }
                    hitsound.currentTime = 0;
                    hitsound.play();
                    context.beginPath(); 
                    context.arc(foex[i2],foey[i2],foesize[i2],0,2*Math.PI);
                    context.fillStyle = "white";
                    context.fill();
                    bulletspeeds[i] = 0;
                    bulletsx[i] = -100;
                    bulletsy[i] = -100;
                    
                }
            }
        }
            
         for(i2 = 0; i2 < nummax ; i2++){
            for(i = 0; i < n2 ; i++){
                if(bulletsx2[i] <= foex[i2] + bulletsize2 + foesize[i2] && bulletsx2[i] >= foex[i2] - bulletsize2 - foesize[i2]  && bulletsy2[i] <= foey[i2] + bulletsize2 + foesize[i2] && foey[i2] - foesize[i2] - bulletsize2 <= bulletsy2[i]){
                    if(foehp[i2] >= 1) foehp[i2]--;
                    if(foehp[i2] <= 0){
                        coinn++;
                        coinxs.push(foex[i2]);
                        coinys.push(foey[i2]);
                        coinvalue.push(enemyworth[i2]);
                        /*coink = 0;
                        if(coinq == 0){
                            coinn++;
                            coinxs[i] = foex[i2];
                            coinys[i] = foey[i2];
                            coinvalue[i] = enemyworth[i2];
                        }
                        if(coinq > 0){
                            for(i3 = 0; i3 < coinn; i3++){
                                if(coinxs[i3] == -300 && coinys[i3] == - 300 && coink == 0){
                                    coinxs[i3] = foex[i2];
                                    coinys[i3] = foey[i2];
                                    coinvalue[i3] = enemyworth[i2];
                                    coink++;
                                }
                            }
                        }*/
                        if(level2 < 7) levelscore2 += enemyxpworth[i2];
                        foey[i2] = -500; foespeed[i2] = 0; num--;
                    }
                    hitsound.currentTime = 0;
                    hitsound.play();
                    context.beginPath(); 
                    context.arc(foex[i2],foey[i2],foesize[i2],0,2*Math.PI);
                    context.fillStyle = "white";
                    context.fill();
                    bulletspeeds2[i] = 0;
                    bulletsx2[i] = 1900;
                    bulletsy2[i] = -100;
                }
            }
        }
        
 /*    Забагованная автопушка */
        //автопушка базы
        min = 100000;
        if(baselvl > 1){
            for(i = 0; i < nummax; i++){
                a = Math.abs(1200 - foex[i]);
                b = Math.abs(730 - foey[i]);
                c = a^2+b^2;
                if(c <= min){closestfoe = i; min = c;}
            }

            context.beginPath(); 
            context.arc(foex[closestfoe],foey[closestfoe],foesize[closestfoe/2],0,2*Math.PI);
            context.fillStyle = "red";
            context.fill();
            
            autoguntime2 = Date.now();
            if(((autoguntime2 - autoguntime)/1000) > autogunattackspeed){
            autoguntime = Date.now();
                for(i = 0; i < n; i++){
                    if(bulletlvl == 1){
                        bulletsize = 7;
                        bulletspeed = 750;
                    }
                    if(bulletlvl == 2){
                        bulletsize = 7;
                        bulletspeed = 750;
                    }
                }
                k3 = 0;
                if(q3 == 0){
                n3++;
                bulletdirs2[i2] = dir2;
                if(dir2 == 0) bulletdirs2[i2] = bufferdir2;
                bulletsx3[i] = 1250;
                bulletsy3[i] = 730;
                bulletspeeds3[i] = bulletspeed;
                }
                if(q3 > 0){
                    for(i3 = 0; i3 < n3; i3++){
                        if(bulletsx3[i3] == -100 && bulletsy3[i3] == -100 && k3 == 0) {
                            bulletdirs3[i3] = dir3;
                            if(dir == 0) bulletdirs3[i3] = bufferdir3;
                            bulletsx3[i3] = x3;
                            bulletsy3[i3] = y3;
                            bulletspeeds3[i3] = bulletspeed3;
                            k3++;
                        }
                    }
                }
            }
        }

           // передвижение bullet автопушка
    for(i3 = 0; i3 < n3; i3++){
        if(autogunlvl == 1){
            if(bulletsx3[i3] < foex[closestfoe]){bulletsx3[i3] += (bulletspeeds3[i3] * passed);}
            else if(bulletsx3[i3] > foex[closestfoe]){bulletsx3[i3] -= (bulletspeeds3[i3] * passed);}
            if(bulletsy3[i3] < foey[closestfoe]){bulletsy3[i3] += (bulletspeeds3[i3] * passed);}
            else if(bulletsy3[i3] > foey[closestfoe]){bulletsy3[i3] -= (bulletspeeds3[i3] * passed);}
    }
    }
            //попадание bullet автопушка
        for(i2 = 0; i2 < nummax ; i2++){
            for(i3 = 0; i3 < n3 ; i3++){
                if(bulletsx3[i3] <= foex[i2] + bulletsize + foesize[i2] && bulletsx3[i3] >= foex[i2] - bulletsize - foesize[i2]  && bulletsy3[i3] <= foey[i2] + bulletsize + foesize[i2] && foey[i2] - foesize[i2] - bulletsize <= bulletsy3[i3]){
                    if(foehp[i2] >= 1) foehp[i2]--;
                    if(foehp[i2] <= 0){
                        coinn++;
                        coinxs.push(foex[i2]);
                        coinys.push(foey[i2]);
                        coinvalue.push(enemyworth[i2]);
                        /*coink = 0;
                        if(coinq == 0){
                            coinn++;
                            coinxs[i3] = foex[i2];
                            coinys[i3] = foey[i2];
                            coinvalue[i3] = enemyworth[i2];
                        }
                        if(coinq > 0){
                            for(i3 = 0; i3 < coinn; i3++){
                                if(coinxs[i3] == -300 && coinys[i3] == - 300 && coink == 0){
                                    coinxs[i3] = foex[i2];
                                    coinys[i3] = foey[i2];
                                    coinvalue[i3] = enemyworth[i2];
                                    coink++;
                                }
                            }
                        }*/
                        foey[i2] = -500; foespeed[i2] = 0; num--;
                        
                    }
                    hitsound.currentTime = 0;
                    hitsound.play();
                    context.beginPath(); 
                    context.arc(foex[i2],foey[i2],foesize[i2],0,2*Math.PI);
                    context.fillStyle = "white";
                    context.fill();
                    bulletspeeds3[i3] = 0;
                    bulletsx3[i3] = -100;
                    bulletsy3[i3] = -100;
                    bulletspeeds3[i] = 0;
                    bulletsx3[i] = -100;
                    bulletsy3[i] = -100;
                }
            }
        }
            
   /* */
        // попадание пули в пулю отключено для коопа чтобы не мешать друг другу
        /*for(i2 = 0; i2 < n2 ; i2++){
            for(i = 0; i < n; i++){
                if(bulletsx[i] <= bulletsx2[i2] + bulletsize + bulletsize2 && bulletsx[i] >= bulletsx2[i2] - bulletsize - bulletsize2  && bulletsy[i] <= bulletsy2[i2] + bulletsize + bulletsize2 && bulletsy2[i2] - bulletsize2 - bulletsize <= bulletsy[i]){
                    bullethitbullet.currentTime = 0;
                    bullethitbullet.play();
                    context.beginPath(); 
                    context.arc(bulletsx[i],bulletsy[i],bulletsize+bulletsize2,0,2*Math.PI);
                    context.fillStyle = "white";
                    context.fill();
                    bulletsx[i] = -100;
                    bulletsy[i] = -100;
                    bulletspeeds[i] = 0;
                    bulletsx2[i2] = 1900;
                    bulletsy2[i2] = -100;
                    bulletspeeds2[i2] = 0;
                }
            }
        }*/
        
        // чтобы не было минок и вылетающие за экран возвращаются в 0 0
        for(i = 0; i < n; i++){
            if( bulletdirs[i] == 0){
                //if(ammo >= 0 && bulletsx[i] != 0 && bulletsy[i] != 0) ammo++;
                bulletsx[i] = -100;
                bulletsy[i] = -100;
            }
            if(bulletsx[i] > 2000 || bulletsx[i] < -200 || bulletsy[i] > 1000 || bulletsy[i] < -200){
                bulletsx[i] = -100;
                bulletsy[i] = -100;
                bulletspeeds[i] = 0;
                bulletdirs[i] = 0;
            }
            if(bulletsx[i] == -100 && bulletsy[i] == -100){
                q++;
            }
        }
        for(i2 = 0; i2 < n2; i2++){
            if( bulletdirs2[i2] == 0){
                //if(ammo2 >= 0 && bulletsx2[i] != 1800 && bulletsy2[i] != 0) ammo2++;
                bulletsx2[i2] = 1900;
                bulletsy2[i2] = -100;
            }
            if(bulletsx2[i2] > 2000 || bulletsx2[i2] < -200 || bulletsy2[i2] > 1000 || bulletsy2[i2] < -200){
                bulletsx2[i2] = 1900;
                bulletsy2[i2] = -100;
                bulletspeeds2[i2] = 0;
                bulletdirs2[i2] = 0;
            }
            if(bulletsx2[i2] == 1900 && bulletsy2[i2] == -100){
                q2++;
            }
        }
        for(i3 = 0; i3 < n3; i3++){
            if( bulletdirs3[i3] == 0){
                //if(ammo2 >= 0 && bulletsx2[i] != 1800 && bulletsy2[i] != 0) ammo2++;
                bulletsx3[i3] = 1900;
                bulletsy3[i3] = -100;
            }
            if(bulletsx3[i3] > 2000 || bulletsx3[i3] < -200 || bulletsy3[i3] > 1000 || bulletsy3[i3] < -200){
                bulletsx3[i3] = 1900;
                bulletsy3[i3] = -100;
                bulletspeeds3[i3] = 0;
                bulletdirs3[i3] = 0;
            }
            if(bulletsx3[i3] == 1900 && bulletsy3[i3] == -100){
                q3++;
            }
        }
        coinq = 0;
        for(i3 = 0; i3 < coinn; i3++){
            if(coinxs[i3] == -300 && coinys[i3] == -300){coinq++;}
        }
        
        
        
        // hp ноль или ниже
        if(hp <= 0){
            if(level >= 1){
                leveldown.play();
                level -= 1;
                levelscore = 0;
                if(lvlscrneeded > 3){ lvlscrneeded -= 2;}
                hp = 3;
                if(buffx == -400 && buffy == -400){buffx = Math.random() * 1750; buffy = Math.random() * 750;}
                if(ammo > maxammo) ammo = maxammo;
                if(ammo2 > maxammo2) ammo2 = maxammo2;
            }
            if(level < 1){
                gameoversound.play();
                context.clearRect(0,0,1800,800);
	            context.beginPath();
                context.font = "75px Arial";
                context.fillStyle = "red";
                context.fillText("Player 1 was killed!",600,400);
                speed = 0;
                enemyspeed = 0;
                bulletlvl = 0;
                level = 0;
                hp = 0;
            }
        }
        // hp второго игрока меньше нуля
         if(enemyhp <= 0){
            if(level2 >= 1){
                leveldown.play();
                level2 -= 1;
                levelscore2 = 0;
                if(lvlscrneeded2 > 3){ lvlscrneeded2 -= 2;}
                enemyhp = 3;
                if(buffx == -400 && buffy == -400){buffx = Math.random() * 1750; buffy = Math.random() * 750;}
            }
            if(level2 < 1){
                gameoversound.play();
                context.clearRect(0,0,1800,800);
	            context.beginPath();
                context.font = "75px Arial";
                context.fillStyle = "blue";
                context.fillText("Player 2 was killed!",600,400);
                speed = 0;
                enemyspeed = 0;
                bulletlvl2 = 0;
                level2 = 0;
                enemyhp = 0;
                }
            }
        //hp базы ноль
        if(basehp <= 0){
            gameoversound.play();
            context.clearRect(0,0,1800,800);
            context.beginPath();
            context.font = "75px Arial";
            context.fillStyle = "White";
            context.fillText("Our base has been destroyed!",400,400);
                speed = 0;
                enemyspeed = 0;
                bulletlvl2 = 0;
                level2 = 0;
                enemyhp = 0;
        }
        
        
        // зелёный шарик
        if(buffx <= x + ((oursize + 30) * pickupbuff)
           && buffx >= x - ((oursize + 30) * pickupbuff)
           && buffy <= y + ((oursize + 30) * pickupbuff)
           && buffy >= y - ((oursize + 30) * pickupbuff) && level < 7){
            if(levelscore < lvlscrneeded){ 
                buffballsound.currentTime = 0;
                buffballsound.play();
            }
            levelscore+=5;
            buffx = Math.random() * 1750;
            buffy = Math.random() * 750;
        }
        
        if(buffx <= enemyx + ((enemysize + 30) * pickupbuff2)
           && buffx >= enemyx - ((enemysize + 30) * pickupbuff2)
           && buffy <= enemyy + ((enemysize + 30) * pickupbuff2)
           && buffy >= enemyy - ((enemysize + 30) * pickupbuff2) && level2 < 7){
            if(levelscore2 < lvlscrneeded2){ 
                buffballsound.currentTime = 0;
                buffballsound.play();
            }
            levelscore2+=5;
            buffx = Math.random() * 1750;
            buffy = Math.random() * 750;
        }
        
        //уровни первого игрока
        if(levelscore > lvlscrneeded){ newlevelsound.play(); level+=1; levelscore = 0; lvlscrneeded+=10; hp = maxhp + 2; if(bulletlvl > 0){ammoboxx = Math.random() * 1750; ammoboxy = Math.random() * 750;}}
        if(level == 1){bulletlvl = 0; speed = 175; oursize = 50; pickupbuff = 1; maxammo = 10; maxhp = 4; attackspeed = 1}
        if(level == 2){bulletlvl = 1; speed = 275; oursize = 45; pickupbuff = 1.5; maxammo = 10; maxhp = 6; attackspeed = 1}
        if(level == 3){bulletlvl = 1; speed = 350; oursize = 35; pickupbuff = 2; maxammo = 10; maxhp = 8; attackspeed = 0.75}
        if(level == 4){bulletlvl = 1; speed = 425; oursize = 35; pickupbuff = 3; maxammo = 10; maxhp = 10; attackspeed = 0.5}
        if(level == 5){bulletlvl = 1; speed = 475; oursize = 35; pickupbuff = 4; maxammo = 15; maxhp = 12; attackspeed = 0.25}
        if(level == 6){bulletlvl = 1; speed = 550; oursize = 30; pickupbuff = 5; maxammo = 20; maxhp = 14; attackspeed = 0.1} 
        if(level == 7){bulletlvl = 1; speed = 600; oursize = 30; pickupbuff = 5; maxammo = 30; maxhp = 16; attackspeed = 0.05}
        
        //уровни второго игрока
        if(levelscore2 > lvlscrneeded2){ newlevelsound.play(); level2+=1; levelscore2 = 0; lvlscrneeded2+=10; enemyhp = enemymaxhp + 2; if(bulletlvl2 > 0){ammoboxx = Math.random() * 1750; ammoboxy = Math.random() * 750;}}
        if(level2 == 1){bulletlvl2 = 0; enemyspeed = 175; enemysize = 50; pickupbuff2 = 1; maxammo2 = 10; enemymaxhp = 4; enemyattackspeed = 1}
        if(level2 == 2){bulletlvl2 = 1; enemyspeed = 275; enemysize = 45; pickupbuff2 = 1.5; maxammo2 = 10; enemymaxhp = 6; enemyattackspeed = 1}
        if(level2 == 3){bulletlvl2 = 1; enemyspeed = 350; enemysize = 35; pickupbuff2 = 2; maxammo2 = 10; enemymaxhp = 8; enemyattackspeed = 0.75}
        if(level2 == 4){bulletlvl2 = 1; enemyspeed = 425; enemysize = 35; pickupbuff2 = 3; maxammo2 = 10; enemymaxhp = 10; enemyattackspeed = 0.5}
        if(level2 == 5){bulletlvl2 = 1; enemyspeed = 475; enemysize = 35; pickupbuff2 = 4; maxammo2 = 15; enemymaxhp = 12; enemyattackspeed = 0.25}
        if(level2 == 6){bulletlvl2 = 1; enemyspeed = 550; enemysize = 30; pickupbuff2 = 5; maxammo2 = 20; enemymaxhp = 14; enemyattackspeed = 0.1} 
        if(level2 == 7){bulletlvl2 = 1; enemyspeed = 600; enemysize = 30; pickupbuff2 = 5; maxammo2 = 30; enemymaxhp = 16; enemyattackspeed = 0.05}
        if(level == 7 && level2 == 7){ buffx = -400; buffy = -400;}
        
        //победа
        /*if(score >= 50){
	        context.beginPath();
            winsound.play();
            context.clearRect(0,0,1800,800);
            context.font = "75px Arial";
            context.fillStyle = "red";
            context.fillText("Player 1 wins!",750,400);
            speed = 0;
            enemyspeed = 0;
            bulletlvl = 0;
            bulletlvl2 = 0
        }
         if(score2 >= 50){
	        context.beginPath();
            winsound.play();
            context.clearRect(0,0,1800,800);
            context.font = "75px Arial";
            context.fillStyle = "blue";
            context.fillText("Player 2 wins!",750,400);
            speed = 0;
            enemyspeed = 0;
            bulletlvl = 0;
            bulletlvl2 = 0
        }*/
        
        //отрисовка bullet
        for(i = 0; i < n ;i++){
            context.beginPath();
            context.arc(bulletsx[i],bulletsy[i],bulletsize,0,2*Math.PI);
            context.fillStyle = "orange";
            context.fill();
        }
        for(i2 = 0; i2 < n2 ;i2++){
            context.beginPath();
            context.arc(bulletsx2[i2],bulletsy2[i2],bulletsize2,0,2*Math.PI);
            context.fillStyle = "#42aaff";
            context.fill(); 
        }
         for(i3 = 0; i3 < n3 ;i3++){
            context.beginPath();
            context.arc(bulletsx3[i3],bulletsy3[i3],bulletsize2,0,2*Math.PI);
            context.fillStyle = "pink";
            context.fill(); 
        }
        
        console.log("coinn: ",coinn,"coinq: ",coinq,"coink: ",coink)

        
        
    }
    
    // SURVIVAL END
    window.requestAnimationFrame(draw);
}
    async function keys1(){
        const buttonpve = document.getElementById("gamemodepve");
        await getPromiseFromEvent(buttonpve, "click")
        keys();
        draw();
    }
    async function keys2(){
        const buttonpvp = document.getElementById("gamemodepvp");
        await getPromiseFromEvent(buttonpvp, "click")
        keys();
        draw();
    }
    async function keys3(){
        const buttonsrv = document.getElementById("gamemodesrv");
        await getPromiseFromEvent(buttonsrv, "click")
        keys();
        draw();
    }
    keys1();
    keys2();
    keys3();
}