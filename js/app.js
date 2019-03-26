$(document).ready(function(){
var items = [];
var li = $('li');
function listTodos() {
    var ul = '<ul>';
    for (i = 0; i < items.length; i++){
      ul += '<li class="todoItem">' + items[i] + '<a href="#" class="deleteItem glyphicon glyphicon-remove" aria-hidden="true"></a>'+ '</li>';
    } 
    ul + '</ul>';
    $('#items').html(ul);
    var todoItem = $('.todoItem');
    var deleteItems = $('.deleteItem');
  for (i = 0; i < deleteItems.length; i++) {
  deleteItems[i].id = i;

  $(deleteItems[i]).on('click', function remove(event) {
  $(this).closest('li').remove();
  items.splice($.inArray(items[i], items), 1);
    return false;
});
}
}

$('#add').on('click', function add() {
  var task = $('#entry').val();
    if(task != ''){
      items.push(task);
      listTodos();
      $('input').val('');
      return false;
    }
    else{
      $('#entry').attr('placeholder','Your task can not be empty');
    }

    return false;
});
});