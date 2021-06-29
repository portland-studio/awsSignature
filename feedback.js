var feedback;

console.log("JS VM IN: " + input);
var obj = JSON.parse(input);

if (obj.data=="green"){
	console.log("JS VM: green path selected");
	feedback = "25";
} else {
	console.log("JS VM: other path selected");
	feedback = "75";
};

feedback;