var hiroName;
var mind = 5;
var body = 5;

var heroButton = document.querySelector('#heroNameForm');
heroButton.addEventListener('submit', function(event) {
  event.preventDefault();
  hiroName = this.querySelector('input').value;
  console.log("Character is named "+hiroName)
  introduction();
});

function introduction() {
  console.log("introduction");
  console.log('mind='+mind);
  console.log('body='+body);
  var div = document.createElement('div');
  div.innerHTML = 'This is the story of a character named ' + hiroName + '<br>Was ' + hiroName+ ' smart or strong?';
  div.id = 'introduction';
  document.getElementById('story').appendChild(div);

  var div = document.createElement('button');
  div.innerHTML = 'smart';
  div.id = 'input';
  div.addEventListener('click', smart);
  document.getElementById('options').appendChild(div);

  var div = document.createElement('button');
  div.innerHTML = 'strong';
  div.id = 'input';
  div.addEventListener('click', strong);
  document.getElementById('options').appendChild(div);
}

function smart() {
  mind = mind + 3;
  console.log("choice smart");
  console.log("mind="+mind);
  console.log("body="+body);
  document.getElementById('options').innerHTML = '';
  var div = document.createElement('div');
  div.innerHTML = hiroName + ' was a smart person.<br>There was a chance to talk or fight.';
  div.id = 'conflict';
  document.getElementById('story').appendChild(div);
  choice();
}

function strong() {
  body = body + 3;
  console.log("choice strong");
  console.log("mind="+mind);
  console.log("body="+body);
  document.getElementById('options').innerHTML = '';
  var div = document.createElement('div');
  div.innerHTML = hiroName + ' was a strong person.<br>There was a chance to talk or fight.';
  div.id = 'conflict';
  document.getElementById('story').appendChild(div);
  choice();
}

function choice () {
  var div = document.createElement('button');
  div.innerHTML = 'Talk';
  div.id = 'input';
  div.addEventListener('click', talk);
  document.getElementById('options').appendChild(div);

  var div = document.createElement('button');
  div.innerHTML = 'Fight';
  div.id = 'input';
  div.addEventListener('click', fight);
  document.getElementById('options').appendChild(div);
}

function talk() {
  document.getElementById('options').innerHTML = '';
  mind = mind + Math.floor(Math.random()*5);
  console.log("choice talk");
  console.log("mind="+mind);
  console.log("body="+body);
  if (mind>=9) {
    console.log('pass');
    var div = document.createElement('div');
    div.innerHTML = hiroName + ' was able to talk through the problem.';
    div.id = 'endingGood';
    document.getElementById('story').appendChild(div);
  } else {
    console.log('fail');
    var div = document.createElement('div');
    div.innerHTML = hiroName + ' found that talking did no good here.';
    div.id = 'endingBad';
    document.getElementById('story').appendChild(div);
  };
}

function fight() {
  document.getElementById('options').innerHTML = '';
  body = body + Math.floor(Math.random()*5);
  console.log("choice fight");
  console.log("mind="+mind);
  console.log("body="+body);
  if (body>=9) {
    console.log('pass');
    var div = document.createElement('div');
    div.innerHTML = hiroName + ' was able to fight through the problem.';
    div.id = 'endingGood';
    document.getElementById('story').appendChild(div);
  } else {
    console.log('fail');
    var div = document.createElement('div');
    div.innerHTML = hiroName + ' found that fighting did no good here.';
    div.id = 'endingBad';
    document.getElementById('story').appendChild(div);
  };
}

var reset = function() {
  mind = 5;
  body = 5;
  document.getElementById('options').innerHTML = '';// Place holder for removing div for now
  document.getElementById('story').innerHTML = '';
  document.querySelector('input').value = '';
}
