var data = null;
var xhr = new XMLHttpRequest();
var all = document.createElement('div');
document.body.appendChild(all);
var s = document.createElement('div');
var s1 = document.createElement('div');
var s2 = document.createElement('div');
var arr;
all.classList.add('all');
xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    console.log(this.response);
    s.textContent =  this.response;
	s1.textContent = s.textContent;
	s2.textContent = s.textContent;
	arr = this.response.split(',');
	s.textContent = (arr[4].replace('"title":',""));
	s1.textContent = (arr[1].replace('"totalAmount"',"Общая сумма"));
	s2.textContent = (arr[2].replace('"totalUsers"',"Ставочников"));
  }
});
setTimeout("window.location.reload()", 215000);
all.appendChild(s); 
all.appendChild(s1);
all.appendChild(s2);
xhr.open("GET", "https://api.streamelements.com/kappa/v2/contests/5d26328e6b84c45a4fe1845a");
xhr.setRequestHeader("accept", "application/json");

xhr.send(data);
