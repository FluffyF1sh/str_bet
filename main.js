var data = null;
var xhr = new XMLHttpRequest();
var all = document.createElement('div');
document.body.appendChild(all);
var s = document.createElement('string');
var s1 = document.createElement('string');
var arr;
xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    //console.log(this.response);
    s.textContent =  this.response;
	s1.textContent = s.textContent;
	arr = this.response.split(',');
	s.textContent = (arr[4].replace('"title":',"") + ' ' + arr[1].replace('"totalAmount"',"Общая сумма")+ ' ' + arr[2].replace('"totalUsers"',"Ставочников"));
  }
});

all.appendChild(s);  
xhr.open("GET", "https://api.streamelements.com/kappa/v2/contests/5d26328e6b84c45a4fe1845a");
xhr.setRequestHeader("accept", "application/json");

xhr.send(data);
