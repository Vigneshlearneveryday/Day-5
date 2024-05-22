var json = [{
    "id" : "Vignesh D", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "nauticalvigneshmenon@gmail.com"
},
{
    "id" : "Vignesh D",
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "nauticalvigneshmenon@gmail.com"
}];

for(var i = 0; i < json.length; i++) {

    var obj = json[i];
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}

json.forEach(function(obj) { console.log(obj.msg); });


for (var key in json) {

if (json.hasOwnProperty(key)) {

  console.log(json[key].id);
  
 
}
}

let text = "";

for (let x of json[key].id) {

 text += x;
}
 console.log(text);
