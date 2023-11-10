
$(function () {

  var btn9 = document.getElementById('btn9');
  var textEl9 = document.getElementById('text9');

  localStorage.getItem('recentSave9');
  recentSave9();

  function recentSave9() {
    var note9 = localStorage.getItem('note9');
    textEl9.textContent = note9;
  };

  btn9.addEventListener('click', function() {
    var note9 = document.getElementById('text9').value;
    localStorage.setItem('note9', note9);
    recentSave9();
  });


  var btn10 = document.getElementById('btn10');
  var textEl10 = document.getElementById('text10');
  
  localStorage.getItem('recentSave10');
  recentSave10();

  function recentSave10() {
    var note10 = localStorage.getItem('note10');
    textEl10.textContent = note10;
  };

  btn10.addEventListener('click', function() {
    var note10 = document.getElementById('text10').value;
    localStorage.setItem('note10', note10);
    recentSave10();
  });


  var btn11 = document.getElementById('btn11');
  var textEl11 = document.getElementById('text11');

  localStorage.getItem('recentSave11');
  recentSave11();

  function recentSave11() {
    var note11 = localStorage.getItem('note11');
    textEl11.textContent = note11;
  };

  btn11.addEventListener('click', function() {
    var note11 = document.getElementById('text11').value;
    localStorage.setItem('note11', note11);
    recentSave11();
  });


  var btn12 = document.getElementById('btn12');
  var textEl12 = document.getElementById('text12');

  localStorage.getItem('recentSave12');
  recentSave12();

  function recentSave12() {
    var note12 = localStorage.getItem('note12');
    textEl12.textContent = note12;
  };

  btn12.addEventListener('click', function() {
    var note12 = document.getElementById('text12').value;
    localStorage.setItem('note12', note12);
    recentSave12();
  });


  var btn1 = document.getElementById('btn1');
  var textEl1 = document.getElementById('text1');

  localStorage.getItem('recentSave1');
  recentSave1();

  function recentSave1() {
    var note1 = localStorage.getItem('note1');
    textEl1.textContent = note1;
  };

  btn1.addEventListener('click', function() {
    var note1 = document.getElementById('text1').value;
    localStorage.setItem('note1', note1);
    recentSave1();
  });


  var btn2 = document.getElementById('btn2');
  var textEl2 = document.getElementById('text2');

  localStorage.getItem('recentSave2');
  recentSave2();

  function recentSave2() {
    var note2 = localStorage.getItem('note2');
    textEl2.textContent = note2;
  };

  btn2.addEventListener('click', function() {
    var note2 = document.getElementById('text2').value;
    localStorage.setItem('note2', note2);
    recentSave2();
  });

  
  var btn3 = document.getElementById('btn3');
  var textEl3 = document.getElementById('text3');

  localStorage.getItem('recentSave3');
  recentSave3();

  function recentSave3() {
    var note2 = localStorage.getItem('note2');
    textEl2.textContent = note2;
  };

  btn3.addEventListener('click', function() {
    var note3 = document.getElementById('text3').value;
    localStorage.setItem('note3', note3);
    recentSave3();
  });


  var btn4 = document.getElementById('btn4');
  var textEl4 = document.getElementById('text4');

  localStorage.getItem('recentSave4');
  recentSave4();

  function recentSave4() {
    var note4 = localStorage.getItem('note4');
    textEl4.textContent = note4;
  };

  btn4.addEventListener('click', function() {
    var note4 = document.getElementById('text4').value;
    localStorage.setItem('note4', note4);
    recentSave4();
  });


  var btn5 = document.getElementById('btn5');
  var textEl5 = document.getElementById('text5');

  localStorage.getItem('recentSave5');
  recentSave5();

  function recentSave5() {
    var note5 = localStorage.getItem('note5');
    textEl5.textContent = note5;
  };

  btn5.addEventListener('click', function() {
    var note5 = document.getElementById('text5').value;
    localStorage.setItem('note5', note5);
    recentSave5();
  });


   
  var hour9 = document.querySelector("#hour-9");
  var hour10 = document.querySelector("#hour-10");
  var hour11 = document.querySelector("#hour-11");
  var hour12 = document.querySelector("#hour-12");
  var hour1 = document.querySelector("#hour-1");
  var hour2 = document.querySelector("#hour-2");
  var hour3 = document.querySelector("#hour-3");
  var hour4 = document.querySelector("#hour-4");
  var hour5 = document.querySelector("#hour-5");


  var hour = new Date();
  console.log(hour.getHours());


    if (hour.getHours() === 9) {
    hour9.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 9) {
    hour9.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour9.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 10) {
    hour10.setAttribute("style","background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 10) {
    hour10.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour10.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 11) {
    hour11.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 11) {
    hour11.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour11.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 12) {
    hour12.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 12) {
    hour12.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour12.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 13) {
    hour1.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 13) {
    hour1.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour1.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 14) {
    hour2.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 14) {
    hour2.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour2.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 15) {
    hour3.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 15) {
    hour3.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour3.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 16) {
    hour4.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 16) {
    hour4.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour4.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };

  if (hour.getHours() === 17) {
    hour5.setAttribute("style", "background-color: #ff6961; color: black;");
  } else if (hour.getHours() < 17) {
    hour5.setAttribute("style", "background-color: #77dd77; color: black;");
  } else {
    hour5.setAttribute("style", "background-color: #d3d3d3; color: black;");
  };



  var date = dayjs().format('dddd, MMMM D');
  document.getElementById("currentDay").textContent = date;
  
});
