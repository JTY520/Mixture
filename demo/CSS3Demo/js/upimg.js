function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
//
//$(document).ready(function(){
//$("p").click(function(){
//  $(this).hide();
//});
//});

function upload(evt){
	var reader = new FileReader();
	var file = $("#inputImg")[0].files[0];
	console.log(file.type);
	if(file.type == "image/png" || file.type == "image/jpg" ||file.type == "image/JPEG"){
		reader.onload = (function (e) {
		return function (e) {
//          console.log(this.result); 

//          var src = 
//          $("#img").appendChild() = src;
//          console.log($("#img"));
//
//			$("#img").innerHTML="<img src='"+this.result+"' alt=''/>";
        	var src = this.result;
        	$("#img").attr("src",src);
		};
	    })(file);
	    reader.readAsDataURL(file);
	    return true;
	}
	return false;
}
