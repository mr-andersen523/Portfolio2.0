// floating action button 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top'
    });
  });
//gituhub button
  document.getElementById("github").onclick = function () {
    location.href = "https://github.com/mr-andersen523";
};
//linkedin button
document.getElementById("linkedin").onclick = function () {
    location.href = "https://www.linkedin.com/in/chase-andersen-26275290/";
};

//email

$(document).ready(function(){
  $('.modal').modal();
});

//resume button
document.getElementById("resume").onclick = function () {
    location.href = "resume-portfolio.pdf";
};

// fab with tooltips
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  
  $("#fab-btn").mouseover(function(){
  setTimeout(function(){
      $('.tooltipped').tooltip('open');
  
  },600); 
  });
  $("#fab-btn").mouseout(function(){
      $('.tooltipped').tooltip('close');
  })


// parallax
  $(document).ready(function(){
    $('.parallax').parallax();
  });


  //scroll function

  $("#about-tab").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#portfolio-tab").click(function() {
  $('html,body').animate({
      scrollTop: $("#portfolio").offset().top},
      'slow');
});

$("#contact-tab").click(function() {
  $('html,body').animate({
      scrollTop: $("#contact").offset().top},
      'slow');
});

$(document).ready(function(){
  $(this).scrollTop(0);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});