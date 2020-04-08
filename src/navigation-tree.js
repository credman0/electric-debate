function ajaxCall(node, cb) {
  $.get("https://8e3zm3axp1.execute-api.us-west-2.amazonaws.com/prod/my-resource?id=" + node.id, function (data, status) {
    console.log(data);
    cb(data.body);
  });
}  
  
$(function () {
  $('#jstree').jstree({
    'core' : {
      'data' :  ajaxCall,
      "check_callback" : function (operation, node, parent, position, more) {
        if(operation === "copy_node" || operation === "move_node") {
          if(parent.id === "#") {
            return false; // prevent moving a child above or below the root
          }
        }
        return true; // allow everything else
      }
    }
  });
});