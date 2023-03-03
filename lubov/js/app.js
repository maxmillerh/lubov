$(window).scroll(function() {
  $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});


var narash = document.getElementById('narash');
var shugar = document.getElementById('shugar');
var permonen = document.getElementById('permonen');

var narash2 = document.getElementById('narash2');
var shugar2 = document.getElementById('shugar2');
var permonen2 = document.getElementById('permonen2');

var recBlock1 = document.getElementById('recBlock1');
var recBlock2 = document.getElementById('recBlock2');
var recBlock3 = document.getElementById('recBlock3');

var uslBlock1 = document.getElementById('uslBlock1');
var uslBlock2 = document.getElementById('uslBlock2');
var uslBlock3 = document.getElementById('uslBlock3');


narash.onclick = function(){
  recBlock1.classList.remove('d-none');
  recBlock2.classList.add('d-none');
  recBlock3.classList.add('d-none');

  narash.classList.add('activete');
  shugar.classList.remove('activete');
  permonen.classList.remove('activete');

}

shugar.onclick = function(){
  recBlock1.classList.add('d-none');
  recBlock2.classList.remove('d-none');
  recBlock3.classList.add('d-none');

  narash.classList.remove('activete');
  shugar.classList.add('activete');
  permonen.classList.remove('activete');
}

permonen.onclick = function(){
  recBlock1.classList.add('d-none');
  recBlock2.classList.add('d-none');
  recBlock3.classList.remove('d-none');

  narash.classList.remove('activete');
  shugar.classList.remove('activete');
  permonen.classList.add('activete');

}

// второе


narash2.onclick = function(){
  uslBlock1.classList.remove('d-none');
  uslBlock2.classList.add('d-none');
  uslBlock3.classList.add('d-none');

  narash2.classList.add('activete');
  shugar2.classList.remove('activete');
  permonen2.classList.remove('activete');

}

shugar2.onclick = function(){
  uslBlock1.classList.add('d-none');
  uslBlock2.classList.remove('d-none');
  uslBlock3.classList.add('d-none');

  narash2.classList.remove('activete');
  shugar2.classList.add('activete');
  permonen2.classList.remove('activete');
}

permonen2.onclick = function(){
  uslBlock1.classList.add('d-none');
  uslBlock2.classList.add('d-none');
  uslBlock3.classList.remove('d-none');

  narash2.classList.remove('activete');
  shugar2.classList.remove('activete');
  permonen2.classList.add('activete');

}