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