$(document).ready(function(){
  $("form#new-to-do").submit(function(event){
    event.preventDefault();

    var inputtedItem = $("input#to-do").val();
    var newList = {list: inputtedItem};
    //newList.tasks.push(newTask);

    $('ul#tasks').append("<li><span class='task'>" + newList.list + " " + "</span></li>");
    $("input#to-do").val('');

    // $(".task").click(function(){
    //   $(".task").append(" " + "done");
    //});
  });
});

