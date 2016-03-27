var name = "Kervin";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

//console.log(formattedName);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

console.log(formattedRole);
