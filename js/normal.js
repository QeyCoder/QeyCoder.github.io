function login() {
	setTimeout("tb_show('Logga in', 'tervix.asp?KeepThis=true&TB_iframe=true&height=150&width=300&modal=false', '')", 100);	
}
function logout() {
	window.location = "tervix_out.asp"
}
function winrefresh() {

	window.location.reload()
}

function createhandler(){
var xmlhttp;
if (window.XMLHttpRequest) {
xmlhttp = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
}
return xmlhttp;
}
function get(url, divid){ //Url to fetch + div ID to insert content into 
var xmlhttp=createhandler();
xmlhttp.onreadystatechange=function (){ 
if(xmlhttp.readyState==4){
document.getElementById(divid).innerHTML=xmlhttp.responseText;
xmlhttp.onreadystatechange = null;
xmlhttp.abort();
}
};
xmlhttp.open('GET', url + "?rnd="+ Math.random(), true);
xmlhttp.send(null);
}

function ajax_update(page, divnamn) { 
    var xhr; 
    try { xhr = new ActiveXObject('Msxml2.XMLHTTP'); }
    catch (e) {
        try { xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
        catch (e2) {
          try { xhr = new XMLHttpRequest(); }
          catch (e3) { xhr = false; }
        }
     }		 
	 
  	xhr.open("GET", page + "&rnd="+ Math.random() ,true)
  	xhr.send(null); 
    xhr.onreadystatechange = function() {
		//parent.window.scroll(0,2000);
         if(xhr.readyState  == 4) {
              if(xhr.status  == 200)
                 document.getElementById(divnamn).innerHTML=xhr.responseText;
              else
                 document.getElementById(divnamn).innerHTML="-";
         }
    };
}

/* DISABLE LINKS IN ACTIVE AREA */
/*window.onload= function(){
        DisableEnableLinks(false, )
}*/

function DisableEnableLinks(xHow, divid){
  /*objLinks = document.links;*/
  objLinks = document.getElementById(divid).getElementsByTagName("a");
  for(i=0;i<objLinks.length;i++){
  	
    objLinks[i].disabled = xHow;
	
    //link with onclick
    if(objLinks[i].onclick && xHow){  
        objLinks[i].onclick = new Function("return false;" + objLinks[i].onclick.toString().getFuncBody());
    }
    //link without onclick
    else if(xHow){  
      objLinks[i].onclick = function(){return false;}
    }
    //remove return false with link without onclick
    else if(!xHow && objLinks[i].onclick.toString().indexOf("function(){return false;}") != -1){            
      objLinks[i].onclick = null;
    }
    //remove return false link with onclick
    else if(!xHow && objLinks[i].onclick.toString().indexOf("return false;") != -1){  
      strClick = objLinks[i].onclick.toString().getFuncBody().replace("return false;","")
      objLinks[i].onclick = new Function(strClick);
    }
  }
}
function doljmig() {
document.getElementById('mydiv').style.visibility = 'hidden'
}

function checkAll(theForm, cName, status) {
for (i=0,n=theForm.elements.length;i<n;i++)
if (theForm.elements[i].className.indexOf(cName) !=-1) {
theForm.elements[i].checked = status;
}
}

function validateString(field, falt, msg, min, max) { 
if (!min) { min = 1 } 
if (!max) { max = 65535 } 
if (!field.value || field.value.length < min ||  
field.value.max > max) { 
document.getElementById(falt).style.background = '#b5d1e3';
/*alert(msg);*/
field.focus(); 
field.select();
return false; 
}
	if (document.getElementById("forumpassword").value != '' && document.getElementById("forumpasswordverify").value != '') {
		if (document.getElementById("forumpassword").value != document.getElementById("forumpasswordverify").value) {
		document.getElementById("forumpassword").style.background = '#e3b9b5';
		document.getElementById("forumpasswordverify").style.background = '#e3b9b5';
		document.getElementById("forumpassword").focus(); 
		document.getElementById("forumpassword").select();
		return false;
		}
	}
document.getElementById(falt).style.background = '#ffffff';
return true;
}

function validateForm(field2, falt2, msg2, min, max) { 
if (!min) { min = 1 } 
if (!max) { max = 65535 } 
if (!field2.value || field2.value.length < min ||  
field2.value.max > max) { 
document.getElementById(falt2).style.background = '#b5d1e3';
/*alert(msg);*/
field2.focus(); 
field2.select();
return false; 
}
document.getElementById(falt2).style.background = '#ffffff';
return true;
}
function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}
