$(document).ready(function(){
  $("form#new-to-do").submit(function(event){
    event.preventDefault();

    var listName = $("input#to-do").val();
    var newList = {name: listName, tasks: []};


    $('ul#lists').append("<li><span class='list'>" + newList.name + " " + "</span></li>");
    $("input#to-do").val('');

    // $(".task").click(function(){
    //   $(".task").append(" " + "done");
    //});
  });
});

