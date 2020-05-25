var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d553c0f5-72fa-4b12-9db4-aac165e7b4d4","5114535f-e776-45ed-97ba-6461e84756cb","61489f7f-ada1-4a02-aa77-91a636bfd585","1ad44524-f80e-4e5d-b62a-979b78c296a3","37201b66-f300-47da-8ea3-07f082d5e69c","435744e4-6ee3-4ff1-aa88-75f7327be579","fd56297b-3296-402c-a3ef-bb992b8e031e","12ac3490-1b06-448d-b67e-8cce6fc693b4","a5ad5bf8-a7b7-4625-9dc1-5224aab2a1fe","0162809c-e4ea-4d3f-8dc8-d86a8155a8f8","34b3a138-3912-4cad-84c3-b4585f4ee931","adf80041-3c72-47c1-9701-f0edc3711c33","0370e6ed-ccfc-414b-a16a-bb62e28cdf3d","39b31628-13f7-4fa0-9b90-9deb3bd63293","74ca022f-fecc-4c71-b87a-d4baedb17ffe","756a370d-b5db-4eb5-a009-cb6ba774704e","fed166b6-337d-43de-a4ba-71747de82c0c","9bae6ad3-5483-4d1d-8bed-fb2369c6b413","4229b442-aedc-4450-b141-a8ae5dbe40ee","9e0aa151-d55a-485f-bec3-18b9ea999438","609774b2-ba83-41c2-9591-2b39a65de359","29ab9b6a-3470-4124-b49a-fc045496dbd4","b1d7ebfa-0e1f-4c02-bfd1-18c2cd63c2ac","553a61c6-7b2e-42d7-b965-6ef46900952d","e05db506-0e7d-4914-887f-48de953e2f1a","4af8bf0d-b619-4c4b-b0c4-9473a508f338","260fc51c-61f3-4874-8cc3-45b530ca50df","9b752a47-53a4-4553-8b41-e7ecba1da9d1","a11357bd-7088-41b0-a035-3e7d53ff730c"],"propsByKey":{"d553c0f5-72fa-4b12-9db4-aac165e7b4d4":{"name":"lawn","sourceUrl":null,"frameSize":{"x":400,"y":251},"frameCount":1,"looping":true,"frameDelay":12,"version":"icmVmjx3EWumh1QY.x8oRsTZc1sbmafZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":251},"rootRelativePath":"assets/d553c0f5-72fa-4b12-9db4-aac165e7b4d4.png"},"5114535f-e776-45ed-97ba-6461e84756cb":{"name":"selectionbox","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"AuDEvagSqxpnl6bM2v5Fstqu3XciHcbO","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/5114535f-e776-45ed-97ba-6461e84756cb.png"},"61489f7f-ada1-4a02-aa77-91a636bfd585":{"name":"sun_decay","sourceUrl":null,"frameSize":{"x":100,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"uuO0EigJ506Jw4t50aloeE4doK8pBtir","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":104},"rootRelativePath":"assets/61489f7f-ada1-4a02-aa77-91a636bfd585.png"},"1ad44524-f80e-4e5d-b62a-979b78c296a3":{"name":"shovel","sourceUrl":null,"frameSize":{"x":103,"y":99},"frameCount":1,"looping":true,"frameDelay":12,"version":"oxg8Mq57S6SzqUZejDdPZi1kO1d1X6Xy","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":99},"rootRelativePath":"assets/1ad44524-f80e-4e5d-b62a-979b78c296a3.png"},"37201b66-f300-47da-8ea3-07f082d5e69c":{"name":"restartbtn","sourceUrl":null,"frameSize":{"x":91,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":".CG.Oe14ukqKyXf0JzZhLcgZgFNnH55q","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":28},"rootRelativePath":"assets/37201b66-f300-47da-8ea3-07f082d5e69c.png"},"435744e4-6ee3-4ff1-aa88-75f7327be579":{"name":"sun","sourceUrl":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png"},"fd56297b-3296-402c-a3ef-bb992b8e031e":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"},"12ac3490-1b06-448d-b67e-8cce6fc693b4":{"name":"piece","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"lFih6JIxiIEY3LjqN4E7mAWynlD1_fIS","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/12ac3490-1b06-448d-b67e-8cce6fc693b4.png"},"a5ad5bf8-a7b7-4625-9dc1-5224aab2a1fe":{"name":"asterisk_explode","sourceUrl":null,"frameSize":{"x":132,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"2p0BV_mG4jIfJFiEF5PAIVePVl6ggbnU","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":300},"rootRelativePath":"assets/a5ad5bf8-a7b7-4625-9dc1-5224aab2a1fe.png"},"0162809c-e4ea-4d3f-8dc8-d86a8155a8f8":{"name":"flybot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7uGxRc6D1AYo0Q1heyB4rNn1wKlW8EOg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0162809c-e4ea-4d3f-8dc8-d86a8155a8f8.png"},"34b3a138-3912-4cad-84c3-b4585f4ee931":{"name":"wall","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"3YnzCtoy3I0eG8g8AxEoMcmhkd32rtog","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/34b3a138-3912-4cad-84c3-b4585f4ee931.png"},"adf80041-3c72-47c1-9701-f0edc3711c33":{"name":"wall_damaged","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"snZdNOEEdl16QoakYTEXfgVD_WxQnLkz","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/adf80041-3c72-47c1-9701-f0edc3711c33.png"},"0370e6ed-ccfc-414b-a16a-bb62e28cdf3d":{"name":"wall_damaged_2","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"vAEbAYRj9GOlSXhNUBsLXJZJ.aYkOZfv","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/0370e6ed-ccfc-414b-a16a-bb62e28cdf3d.png"},"39b31628-13f7-4fa0-9b90-9deb3bd63293":{"name":"flybot2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"DckjBefC.EKc6ksw14Lp1sk6svupNOpF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/39b31628-13f7-4fa0-9b90-9deb3bd63293.png"},"74ca022f-fecc-4c71-b87a-d4baedb17ffe":{"name":"piece2","sourceUrl":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png"},"756a370d-b5db-4eb5-a009-cb6ba774704e":{"name":"flybot3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"X0a1n1xVYOdEH18FofMSuCR3eW0XijtT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/756a370d-b5db-4eb5-a009-cb6ba774704e.png"},"fed166b6-337d-43de-a4ba-71747de82c0c":{"name":"a1s","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"B16l49a1CoUmqgMJP6ER6HfwG7fKv8UP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/fed166b6-337d-43de-a4ba-71747de82c0c.png"},"9bae6ad3-5483-4d1d-8bed-fb2369c6b413":{"name":"a1w","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MEcwcSRMU4l0TwFkfqAk.kF7SWgj0h.0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9bae6ad3-5483-4d1d-8bed-fb2369c6b413.png"},"4229b442-aedc-4450-b141-a8ae5dbe40ee":{"name":"a2w","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"22C5.1KBHpWdEvpkRthqcz0LmbmUckJm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4229b442-aedc-4450-b141-a8ae5dbe40ee.png"},"9e0aa151-d55a-485f-bec3-18b9ea999438":{"name":"a2s","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"UoMJsUsPlUdk9njirjSGCST7bDarauIN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9e0aa151-d55a-485f-bec3-18b9ea999438.png"},"609774b2-ba83-41c2-9591-2b39a65de359":{"name":"a4s","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"JQrL_iKigtLLbd_zuvcvGdP.47aTZ9cH","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/609774b2-ba83-41c2-9591-2b39a65de359.png"},"29ab9b6a-3470-4124-b49a-fc045496dbd4":{"name":"a4w","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ARgFXBIUeQYsu4CY_9jIPhG..lvyzQfu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/29ab9b6a-3470-4124-b49a-fc045496dbd4.png"},"b1d7ebfa-0e1f-4c02-bfd1-18c2cd63c2ac":{"name":"a5w","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CNmxlsjh8jDFVBSEnujmBM6gLR0Mq1sh","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b1d7ebfa-0e1f-4c02-bfd1-18c2cd63c2ac.png"},"553a61c6-7b2e-42d7-b965-6ef46900952d":{"name":"a5s","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8XCMLEbwmF8zgKlohAVmGqrZmLxnTbLD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/553a61c6-7b2e-42d7-b965-6ef46900952d.png"},"e05db506-0e7d-4914-887f-48de953e2f1a":{"name":"Boss-3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"P0NKH8zdyU_lAmfc8BAWRUX3mBSLUdRs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e05db506-0e7d-4914-887f-48de953e2f1a.png"},"4af8bf0d-b619-4c4b-b0c4-9473a508f338":{"name":"Boss-2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"VmOdgoT0yjKo26NEsiq9RA2NsQHoX_Hb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4af8bf0d-b619-4c4b-b0c4-9473a508f338.png"},"260fc51c-61f3-4874-8cc3-45b530ca50df":{"name":"generator","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"EN8GpzBHtFxu_.BmE1vubL7pQuEF.VWI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/260fc51c-61f3-4874-8cc3-45b530ca50df.png"},"9b752a47-53a4-4553-8b41-e7ecba1da9d1":{"name":"ghost","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5UjYwkhbfYlxfqBYdDhCESvKS.XreVte","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9b752a47-53a4-4553-8b41-e7ecba1da9d1.png"},"a11357bd-7088-41b0-a035-3e7d53ff730c":{"name":"piece3","sourceUrl":"assets/api/v1/animation-library/gamelab/fhb60UTSxElfkmU4M1zpY1cW.tttCvnt/category_obstacles/ore_ruby.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"fhb60UTSxElfkmU4M1zpY1cW.tttCvnt","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fhb60UTSxElfkmU4M1zpY1cW.tttCvnt/category_obstacles/ore_ruby.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//if you want to remix you must beat studio.code.org/projects/gamelab/U3sCFapqUPqT1nHXM_3AspDhCRJTnMkeZcgf6hm5JgE
var React=function() {
  function e()
  {
    var s=this;this.Listeners=[];
    this.Listen=function(e) {
      var t={};
      s.Listeners.push(t);
      t.Reaction=e;
      this.Disconnect=function() {
        var e=[];
        for(var n=0;n<s.Listeners.length;n++) {
          if(s.Listeners[n]!=t) {
            e.push(t);
            
          }
        }
        s.Listeners=e;
        
      };
      return t;
    };
    
  }
  e.prototype.Trigger=function(){
    for(var e=0;e<this.Listeners.length;e++){
      this.Listeners[e].Reaction.apply(undefined,arguments);
      
    }
    
  };
  return {
    Event:e,
    Pressed:new e(),
    Released:new e(),
    Before:new e(),
    After:new e()
    
  };
  
}();
function mousePressed(){
  React.Pressed.Trigger();
  
}


function mouseReleased()
{React.Released.Trigger()}
var UI5=function(e)
{var i,t,r,n,a,f,s;var v=function(n)
{n=n||createSprite();
n.FixScaling=function(e,r)
{n.scale=e/(r==="width"?n.width:r==="height"?n.height:50)};
n.Draw=function()
{if(n.visible)
{drawSprite(n);
n.Drawn.Trigger(n)}};
n.Released=new e.Event;n.Pressed=new e.Event;
n.Clicked=new e.Event;
n.Update=new e.Event;
n.Drawn=new e.Event;
n.Type="Button";
n.Held=false;
n.Active=true;
n.ZIndex=1;n.Delete=function()
{var e=[];
for(var r=0;r<i.length;r++)
{if(i[r]!=n){e.push(n)}}
i.length=0;
for(var t=0;t<e.length;t++)
{i.push(e[t])}
n.destroy()};
i.push(n);
return n};
i=[];
r=v;
t=function()
{i.sort(function(e,r)
{return r.ZIndex-e.ZIndex});
var e=[];
for(var r=0;
r<i.length;r++)
{var t=i[r];
if(t.Active&&mouseIsOver(t))
{e.push(t)}}
return e[e.length-1]};
s=function()
{var e=t();
for(var r=0;r<i.length;r++)
{if(i[r].Active)
{i[r].Update.Trigger(i[r],e===i[r])}}
  
};
n=function()
{for(var e=0;
e<i.length;e++){i[e].Draw()}};
f=function(){var e=t();
if(e){e.Pressed.Trigger(e);
e.Held=true}};
a=function(){var e=t();
if(e&&e.Held)
{e.Clicked.Trigger(e)}
for(var r=0;
r<i.length;
r++)
{if(i[r].Held)
{i[r].Held=false;
i[r].Released.Trigger(i[r])}}};
e.Pressed.Listen(f);
e.Released.Listen(a);
e.After.Listen(n);
e.Before.Listen(s);
return{CreateButton:r,Objects:i}}
(React);
var AllTowers = {
  
  Generator: {
    Cost:50,
    Recharge:2,
    Health:100,
    Sprite:"generator",
    ActionTime:60,
    Countdown:10,
    Description: "Sunflower (50)",
    Action:function(t) {
      var s = createSprite();
      s.setAnimation("sun");
      s.scale=0.2;
      s.x = t.Sprite.x+randomNumber(-5, 5);
      s.velocityX = randomNumber(-5, 5)/2;
      s.y = t.Sprite.y+randomNumber(-5, 5);
      s.velocityY = randomNumber(-5, 5)/2;
      s.Decay=700;
      s.Type = "credit";
      Collectibles.push(s);
    }
  },
  Asterisk: {
    Cost:150,
    Recharge:20,
    Health:100000000000000000000000,
    Sprite:"asterisk_explode",
    ActionTime:1,
    Countdown:7,
    Description: "Cherry Bomb (150)",
    Action:function(t) {
      for (var i=0; i<Enemies.length;i++) {
        var lane = Enemies[i];
        for (var l=0; l<lane.length;l++) {
          var e = lane[l];
          if (sqrt(sq(e.x-t.Sprite.x)+sq(e.y-t.Sprite.y))<70) {
            e.Health-=500;
            if (e.Health<=0) {
              e.Delete();
            }
          }
        } 
      }
      t.Health = 0;
      t.DeleteTower();
      playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3");
    }
  },
  Flybot: {
    Cost:100,
    Recharge:50,
    Health:100,
    Sprite:"flybot",
    ActionTime:40,
    Countdown:1,
    Description: "Peashooter (100)",
    Action:function(t) {
      if (Enemies[t.Lane].length>0) {
        var s = createSprite();
        s.Type = "normal";
        s.setAnimation("piece");
        s.scale=20/s.height;
        s.Damage = 1000;
        s.x = t.Sprite.x+20;
        s.y = t.Sprite.y;
        s.Lane = t.Lane;
        s.velocityX = 5;
        Projectiles.push(s);
        playSound("assets/category_hits/8bit_splat.mp3");
      } else {
        t.Countdown = randomNumber(0, 10);
      }
    }
  },
  Flybot2: {
    Cost:125,
    Recharge:10,
    Health:100,
    Sprite:"flybot2",
    ActionTime:20,
    Countdown:70,
    Description: "Ice Peashooter (125)",
    Action:function(t) {
      if (Enemies[t.Lane].length>0) {
        var shoot = function() {
          var s = createSprite();
          s.Type = "normal";
          s.setAnimation("piece2");
          s.scale=20/s.height;
          s.Damage = 500;
          s.x = t.Sprite.x+20;
          s.y = t.Sprite.y;
          s.Lane = t.Lane;
          s.velocityX = 5;
          Projectiles.push(s);
          playSound("assets/category_hits/8bit_splat.mp3");
          s.Speed = 1000;
        };
        shoot();
      } else {
        t.Countdown = randomNumber(0, 10);
      }
    }
  },
  Flybot3: {
    Cost:125,
    Recharge:20,
    Health:100,
    Sprite:"flybot3",
    ActionTime:20,
    Countdown:15,
    Description: "Fire Peashooter(125)",
    Action:function(t) {
      if (Enemies[t.Lane].length>0) {
        var s = createSprite();
        s.Type = "normal";
        s.setAnimation("piece3");
        s.scale=20/s.height;
        s.Damage = 500;
        s.x = t.Sprite.x+20;
        s.y = t.Sprite.y;
        s.Lane = t.Lane;
        s.velocityX = 5;
        Projectiles.push(s);
        playSound("assets/category_hits/8bit_splat.mp3");
        s.Speed = 1000;
      } else {
        t.Countdown = randomNumber(0, 10);
      }
    }
  },
  Ghost: {
    Cost:300,
    Recharge:3,
    Health:100,
    Sprite:"ghost",
    ActionTime:15,
    Countdown:40,
    Description: "Threepeater (300)",
    Action:function(t) {
      if (enemyExists()) {
        var s = createSprite();
        s.Type = "follow";
        s.setAnimation("piece");
        s.scale=20/s.height;
        s.Damage = 400;
        s.Speed = 1000;
        s.x = t.Sprite.x+20;
        s.y = t.Sprite.y;
        s.Target = getClosestEnemy(t.Sprite.x, t.Sprite.y);
        Projectiles.push(s);
        playSound("assets/category_hits/8bit_splat.mp3");
      } else {
        t.Countdown = randomNumber(0, 10);
      }
    }
  },
  Wall: {
    Cost:50,
    Recharge:0,
    Health:10000,
    Sprite:"wall",
    ActionTime:1,
    Countdown:1,
    Description: "Wall-Nut (50)",
    Action:function(t) {
      if (t.Health<1000) {
        t.Sprite.setAnimation("wall_damaged_2");
      } else if (t.Health<5000) {
        t.Sprite.setAnimation("wall_damaged");
      }
    }
  },
  Shovel: {
    Recharge:50,
    Shovel:1,
    Sprite:"shovel",
    Description: "Dig up plants",
  }
};
var Types = {
  Blue: {
    Still: "a1s",
    Walk: "a1w",
    Health: 1764,
    Speed: 0.7,
  },
  Green: {
    Still: "a2s",
    Walk: "a2w",
    Health: 2896,
    Speed: 0.3,
  },
  Yellow: {
    Still: "Boss-2",
    Walk: "Boss-3",
    Health: 3987,
    Speed: 0.1,
  }
  ,
  Biege: {
    Still: "a4s",
    Walk: "a4w",
    Health: 5987,
    Speed: 0.1,
  },
  Boss: {
    Size: 1.4,
    Still: "a1s",
    Walk: "a1w",
    Health: 55769,
    Speed: 0.2,
  },
  Boss2: {
    Size: 1.4,
    Still: "Boss-2",
    Walk: "Boss-3",
    Health: 500000,
    Speed: 0.2,
  },
  Pink: {
    Size: 0.7,
    Still: "a5s",
    Walk: "a5w",
    Health: 1200,
    Speed: 2,
  }
};

var Levels = {
  Level1:[
    ["wait", 500],
    ["Blue", 60],
    ["Blue", 40],
    ["Blue", 70],
    ["Green", 30],
    ["Green", 70],
    ["Yellow", 25],
    ["Green", 60],
    ["Yellow", 25],
    ["Yellow", 90],
    ["Biege", 25],
    ["Biege", 25],
    ["Yellow", 25],
    ["Green", 25],
    ["Blue", 90],
    ["Blue", 50],
    ["Blue", 50],
    ["Blue", 40],
    ["Boss", 20],
    ["Biege", 50],
    ["Biege", 50],
    ["Yellow", 50],
    ["Green", 50],
    ["Blue", 90],
    ["Pink", 50],
    ["Pink", 50],
    ["Pink", 50],
    ["Biege", 50],
    ["Yellow", 50],
    ["Yellow", 50],
    ["Green", 25],
    ["Green", 25],
    ["Biege", 25],
    ["Pink", 70],
    ["Boss2", 50],
    ["wait", 500],
    ["Boss2", 700],
    ["Pink", 100],
    ["Boss", 200],
]
};
var TimeUntilNextCredit = 150;
var EnemyInstructions = unpackageLevel(Levels.Level1);
var Time = 0;
var CreditDisplaySprite = createSprite();
CreditDisplaySprite.setAnimation("sun");
CreditDisplaySprite.scale=0.4;
CreditDisplaySprite.x=30;
CreditDisplaySprite.y=370;
var Credits = 50;
var CreditsAnim = 50;
var Collectibles = [];
var Projectiles = [];
var Enemies = [[],[],[],[],[]];
var bkg = createSprite();bkg.setAnimation("background");bkg.x=200;bkg.y=200;
var AvailableTowers = ["Generator", "Ghost",  "Asterisk", "Wall", "Flybot", "Flybot2", "Flybot3", "Shovel"];
var HoverText = "";
var HoverX=0;
var IsHoldingTower = false;
var TowersOnLawn = [];
var TowersOnLawnGroup = createGroup();

var lawn = createSprite();
var screen = "game";
lawn.setAnimation("lawn");
lawn.x=200;
lawn.y=200;
lawn.scale=400/lawn.width;
lawn.Rows = 5;
lawn.Collumns = 8;
lawn.GetTile = function(x, y) {
  var mx = x-lawn.x+lawn.width/2;
  var my = y-lawn.y+lawn.height/2;
  mx = (floor((mx*lawn.Collumns)/lawn.width));
  my = (floor((my*lawn.Rows)/lawn.height));
  if (mx>=0&&mx<lawn.Collumns&&my>=0&&my<lawn.Rows) {
    x = mx*lawn.width/lawn.Collumns+lawn.x-lawn.width/2;
    y = my*lawn.height/lawn.Rows+lawn.y-lawn.height/2;
    var width = lawn.width/lawn.Collumns;
    var height = lawn.height/lawn.Rows;
    return [mx, my, x+width/2, y+height/2];
  }
};

lawn.SelectTile = function(x, y) {
  noStroke();
  fill(rgb(0, 0, 0, 0.2));
  rect(x-lawn.width/lawn.Collumns/2, y-lawn.height/lawn.Rows/2, lawn.width/lawn.Collumns, lawn.height/lawn.Rows);
};

var lawndata = {};
var boundingbox = createSprite();
boundingbox.setAnimation("selectionbox");
boundingbox.scale=42/boundingbox.width;
boundingbox.pause();

var RespawnButton = UI5.CreateButton();
RespawnButton.Active=false;
RespawnButton.visible=false;
RespawnButton.x = 200;
RespawnButton.y = 300;
RespawnButton.Clicked.Listen(function() {
  resetGame();
  screen = "game";
  RespawnButton.visible=false;
  RespawnButton.Active=false;
});
RespawnButton.setAnimation("restartbtn");
RespawnButton.Update.Listen(function(self, over){
  if (over) {
    self.scale = min(self.scale+0.2, 1.5);
  } else {
    self.scale = max(self.scale-0.2, 1);
  }
});

var SelectionButtons = createSelectionButtons();
registerSelectionButtons(SelectionButtons, AvailableTowers);

React.Released.Listen(function(){
  if (IsHoldingTower) {
    var pos = lawn.GetTile(IsHoldingTower.x, IsHoldingTower.y);
    if (pos) {
      if (IsHoldingTower.CorrespondingTower.Shovel&&lawndata[pos[0]]&&lawndata[pos[0]][pos[1]]) {
        lawndata[pos[0]][pos[1]].DeleteTower();
      } else {
        if (!lawndata[pos[0]]) {
          lawndata[pos[0]]={};
        }
        
        if (!lawndata[pos[0]][pos[1]] && Credits>=IsHoldingTower.CorrespondingTower.Cost) {
          var tow = Object.create(IsHoldingTower.CorrespondingTower);
          Credits-=tow.Cost;
          IsHoldingTower.Recharge = tow.Recharge;
          var sprite = createSprite(pos[2],pos[3]);
          sprite.setAnimation(tow.Sprite);
          sprite.scale = 50/sprite.height;
          sprite.TileX = pos[0];
          sprite.TileY = pos[1];
          tow.Sprite = sprite;
          tow.Lane = pos[1];
          tow.Health = IsHoldingTower.CorrespondingTower.Health;
          tow.DeleteTower = function() {
            tow.Sprite.destroy();
            var nl = [];
            for (var ti = 0; ti<TowersOnLawn.length; ti++) {
              if (TowersOnLawn[ti]!=tow) {
                nl.push(TowersOnLawn[ti]);
              }
            }
            TowersOnLawn=nl;
            delete lawndata[pos[0]][pos[1]];
          };
          lawndata[pos[0]][pos[1]]=tow;
          TowersOnLawn.push(tow);
          TowersOnLawnGroup.add(sprite);
        }
      }
    }
  }
});

function draw() {
  if (keyDown("Q")&&keyDown("W")&&keyDown("E")) {
    Credits=promptNum("Set credits to....");
  }
  if (screen==="game") {
    drawSprite(bkg);
    textAlign(RIGHT, CENTER);
    fill("Black");
    textSize(13);
    text("Plants vs. Zombies by Zihao Wang aka. Super-Coder2000", 380, 360);    
    IsHoldingTower = false;
    HoverText = "";
    React.Before.Trigger();
    drawSprite(lawn);
    
    if (IsHoldingTower) {
      var pos = lawn.GetTile(IsHoldingTower.x, IsHoldingTower.y);
      if (pos) {
        lawn.SelectTile(pos[2], pos[3]);
      }
    }
    if (EnemyInstructions[Time]) {
      createEnemy(Types[EnemyInstructions[Time]], randomNumber(0, lawn.Rows-1));
    }
    for (var i = 0; i<TowersOnLawn.length; i++) {
      var t = TowersOnLawn[i];
      t.Countdown--;
      if (t.Countdown<=0) {
        t.Countdown = t.ActionTime;
        t.Action(t);
      }
      drawSprite(t.Sprite);
    }
    for (var i = 0; i<Enemies.length; i++) {
      var l = Enemies[i];
      var previa;
      for (var li = 0; li<l.length;li++) {
        var t = l[li];
        if (t.isTouching(TowersOnLawnGroup) && !t.isAttacking) {
          for (var tg = 0; tg<TowersOnLawnGroup.length; tg++) {
            var tow = TowersOnLawnGroup[tg];
            if ((tow.TileY==i) && tow.isTouching(t)) { //check same lane
              t.isAttacking = lawndata[tow.TileX][tow.TileY];
              
              t.atx = tow.TileX;
              break;
            }
          }
        }
        if  (t.isAttacking) {
          t.setAnimation(t.Still);
          t.isAttacking.Health--;
          if (t.isAttacking.Health<=0 && lawndata[t.atx][i]) {
            t.isAttacking.DeleteTower();
          }
          if (t.isAttacking.Health<=0) {
            delete t.isAttacking;
          }
        } else {
          t.x-=t.Speed;
          t.setAnimation(t.Walk);
        }
        if (t.x+t.width/2<0) {
          screen = "lose";
          hideButtons(SelectionButtons);
          RespawnButton.Active=true;
          RespawnButton.visible = true;
        }
        drawSprite(t);
      }
    }
    var nl = [];
    var notsafe = false;
    for (var p = 0; p<Projectiles.length; p++) {
      var po= Projectiles[p];
      var hit = undefined; // 'not necessary' but it turns it out IS necessary cause code.org is broken
      if (po.Type==="normal") {
        for (var j = 0; j<Enemies[po.Lane].length; j++) {
          var en = Enemies[po.Lane][j];
          if (po.isTouching(en)) {
            hit = en;
            break;
          }
        }
        
        if (hit) {
          playSound("assets/category_hits/retro_game_hit_block_4.mp3");
          hit.Health-=po.Damage;
          if (hit.Health<=0) {
            hit.Delete();
          }
        }
        
        if (hit || po.x>400) {
          po.destroy();
        } else {
          nl.push(po);
        }
      } else if (po.Type==="follow") {
        var target = po.Target;
        if (target.Health>0) {
          po.setSpeedAndDirection(po.Speed, atan2(target.y-po.y, target.x-po.x));
          if (po.isTouching(target)) {
            hit = target;
          }
          
          if (hit) {
            playSound("assets/category_hits/retro_game_hit_block_4.mp3");
            hit.Health-=po.Damage;
            if (hit.Health<=0) {
              hit.Delete();
            }
          }
          
          if (hit || po.x>400) {
            po.destroy();
          } else {
            nl.push(po);
          }
        } else if (enemyExists()) {
          po.Target = getClosestEnemy(po.x, po.y);
          nl.push(po);
        } else {
          po.destroy();
        }
      }
      drawSprite(po);
    }
    Projectiles = nl;
    nl = [];
    TimeUntilNextCredit--;
    if (TimeUntilNextCredit<=0) {
      spawnCredit();
      TimeUntilNextCredit = randomNumber(300, 400);
    }
    for (var c = 0; c<Collectibles.length; c++) {
      var co= Collectibles[c];
      co.Decay--;
      if (co.Type=="credit") {
        //start flashing to indicate that the sun is decaying
        if (co.Decay<=100) {
          co.setAnimation(floor(co.Decay/10)%2==1?"sun_decay":"sun");
        }
        if (co.Decay>0) {
          if (co.Collected || mouseIsOver(co)) {
            co.Collected=true;
            co.x-=co.x/8;
            co.y-=(-400+co.y)/8;
            co.velocityX=0;
            co.velocityY=0;
            if (co.isTouching(CreditDisplaySprite)) {
              co.destroy();
              Credits+=25;
            } else {
              nl.push(co);
            }
          } else {
            co.velocityX*=0.9;
            co.velocityY*=0.9;
            nl.push(co);
          }
        }
      }
        drawSprite(co);
    }
    Collectibles = nl;
    
    if (HoverText) {
      textSize(16);
      fill("purple");
      var normal = HoverX-textWidth(HoverText)/2-5;
      var fin = min(max(5, normal), 400-textWidth(HoverText)-15);
      rect(fin, 50, textWidth(HoverText)+10, 20);
      fill("cyan");
      textAlign(CENTER, CENTER);
      text(HoverText, HoverX+fin-normal, 62);
    }
    React.After.Trigger();
    drawSprite(CreditDisplaySprite);
    textAlign(LEFT, CENTER);
    fill("yellow");
    textSize(40);
    CreditsAnim+=((Credits-CreditsAnim)/5);
    text(round(CreditsAnim), 70, 370);
    Time++;
    if (Time>Object.keys(EnemyInstructions)[Object.keys(EnemyInstructions).length-1]&&!enemyExists()) {
      screen = "end";
      hideButtons(SelectionButtons);
      RespawnButton.Active=true;
      RespawnButton.visible = true;
    }
  } else if (screen === "end") {
    React.Before.Trigger();
    background(rgb(255, 255, 255, 0.2));
    textSize(50);
    fill("black");
    text("YOU WIN", 50, 50);
    React.After.Trigger();
  } else if (screen === "lose") {
    React.Before.Trigger();
    background(rgb(255, 255, 255, 0.2));
    textSize(50);
    fill("black");
    text("YOU LOSE", 50, 50);
    React.After.Trigger();
  }
}

function hideButtons(btns) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].Active=false;
    btns[i].visible=false;
  }
}

function resetGame() {
  lawndata = {};
  TowersOnLawn = [];
  TowersOnLawnGroup.destroyEach(); //clear sprites in this stupid group
  registerSelectionButtons(SelectionButtons, AvailableTowers);
  Credits=50;
  Time=0;
  Collectibles=[];
  Projectiles=[];
  Enemies = [[],[],[],[],[]];
  IsHoldingTower = false;
  CreditsAnim = 50;
  TimeUntilNextCredit=150;
  HoverText = "";
  HoverX = 0;
  
}

function enemyExists() {
  for (var i = 0; i<Enemies.length; i++) {
    var lane = Enemies[i];
    if (lane.length>0) {
      return true;
    }
  }
  return false;
}

function unpackageLevel(l) {
  var t = 0;
  var e = {};
  for (var i = 0; i<l.length; i++) {
    if (l[i][0]=="wait") {
      t+=l[i][1];
    } else {
      e[t] = l[i][0];
      t+=l[i][1];
    }
  }
  return e;
}

function spawnCredit() {
  var s = createSprite();
  s.setAnimation("sun");
  s.scale=0.2;
  s.x = randomNumber(40, 360);
  s.velocityY = randomNumber(15, 35);
  s.Decay=700;
  s.Type = "credit";
  Collectibles.push(s);
}

function registerSelectionButtons(btns, towers) {
  for (var i = 0; i<btns.length; i++) {
    var btn = btns[i];
    if (towers[i]) {
      var prop = AllTowers[towers[i]];
      btn.setAnimation(prop.Sprite);
      btn.pause();
      btn.FixScaling(40, "height");
      btn.visible = true;
      btn.Active = true;
      btn.Recharge = prop.Recharge;
      btn.CorrespondingTower = prop;
      btn.x = btn.PosX;
      btn.y = btn.PosY;
    } else {
      btn.visible = false;
      btn.Active = false;
    }
  }  
}

function createSelectionButtons() {
  var btns = [];
  for (var i = 0; i<8; i++) {
    var btn = UI5.CreateButton();
    btns.push(btn);
    btn.Index = i;
    btn.PosX = i*45+55;
    btn.PosY = 30;
    btn.Update.Listen(function(self, over){
      boundingbox.x = self.PosX;
      boundingbox.y = self.PosY;
      if (self.Held && self.Recharge>0) {
        self.Held = false;
      }
      if (over || self.Held) {
        if (self.Held) {
          boundingbox.setFrame(1);
        } else {
          boundingbox.setFrame(0);
        }
        HoverText = self.CorrespondingTower.Description;
        HoverX = boundingbox.x;
      } else {
        boundingbox.setFrame(0);
      }
      if (self.Held) {
        IsHoldingTower = self;
        self.x = World.mouseX+self.shiftX;
        self.y = World.mouseY+self.shiftY;
        self.ZIndex=0;
      } else {
        self.x += (boundingbox.x-self.x)/4;
        self.y += (boundingbox.y-self.y)/4;
        self.ZIndex=1;
      }
      self.Recharge--;
      //text(self.ZIndex, boundingbox.x, 60);
      drawSprite(boundingbox);      
    });
    btn.Drawn.Listen(function(self){
      noStroke();
      fill(rgb(0, 0, 0, 0.5));
      var ratio = ceil(self.Recharge/self.CorrespondingTower.Recharge*10)/10;
      if (ratio>0) {
        rect(self.PosX-20, self.PosY+20-ratio*40, 40, ratio*40);
      }
    });
    btn.Pressed.Listen(function(self) {
      self.shiftX = self.x-World.mouseX;
      self.shiftY = self.y-World.mouseY;
    });
    btn.y=btn.PosY;
    btn.x=btn.PosX;
  }
  return btns;
}
function getClosestEnemy(x, y) {
  var closest;var dist;
  for (var i = 0; i<Enemies.length; i++) {
    var lane = Enemies[i];
    for (var l = 0; l<lane.length; l++) {
      var e = lane[l];
      var edist = sqrt(sq(x-e.x)+sq(y-e.y));
      if (!closest || (edist<dist)) {
        closest = e;
        dist = edist;
      }
    }
  }
  return closest;
}
function createEnemy(type, lane) {
  console.log(lane);
  var e = createSprite();
  e.x = 410;
  //var width = lawn.width/lawn.Collumns;
  var height = lawn.height/lawn.Rows;  
  //var x = mx*width+lawn.x-lawn.width/2+width/2;
  e.scale = 0.7*(type.Size||1);
  var y = lane*lawn.height/lawn.Rows+lawn.y-lawn.height/2+height-e.height*e.scale/2;
  e.y = y;
  e.Walk = type.Walk;
  e.Still = type.Still;
  e.Health = type.Health;
  e.Speed = type.Speed;
  e.Delete = function() {
    var nl = [];
    for (var i = 0; i<Enemies[lane].length; i++) {
      if (Enemies[lane][i]!=e) {
        nl.push(Enemies[lane][i]);
      }
    }
    Enemies[lane] = nl;
    e.destroy();
  };
  Enemies[lane].push(e);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
