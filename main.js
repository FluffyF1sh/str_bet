var data = null;
var xhr = new XMLHttpRequest();
var all = document.createElement('div');
document.body.appendChild(all);
var title = document.createElement('div');
var sum = document.createElement('div');
var users = document.createElement('div');
var opt1 = document.createElement('div');
var opt2 = document.createElement('div');
var arr;
xhr.open("GET", "https://api.streamelements.com/kappa/v2/contests/5d26328e6b84c45a4fe1845a");
xhr.setRequestHeader("accept", "application/json");
xhr.timeout = 5000;
xhr.onload = function() {
  if (this.readyState === this.DONE) {
    //console.log(this.response);
        title.textContent =  this.response;
		sum.textContent = this.response;
		users.textContent = this.response;
		opt1.textContent = this.response;
		opt2.textContent = this.response;
		arr = this.response.split(',');
		var act = '{"active":null';
		var check1 = '"winner":true}';
		var check2 = '"winner":true}]';
		var winRes;
		//console.log(arr[14],arr[19]);
		if(act == arr[0]){
			if(check1 == arr[14]){
				winRes = arr[12];
				winRes = winRes.replace('"title":','').replace('"','').replace('"','');
			}
			else if(check2 == arr[19]){
				winRes = arr[17];
				winRes = winRes.replace('"title":', '').replace('"','').replace('"','');
			}
			else if(check1 !== arr[14] && check2 !== arr[19]){
				winRes = "нет";
			}
			title.textContent = ' ';
			sum.textContent = 'Соревнование не проводится. ';
			users.textContent = 'Прошлый победитель: ' + winRes + '!';
			opt1.textContent = ' ';
			opt2.textContent = ' ';
		}
		else{
			sum.textContent = (arr[1].replace('"totalAmount"',"Общая сумма"));
			title.textContent = (arr[4].replace('"title":',"").replace('"', '').replace('"', ""));
			users.textContent = (arr[2].replace('"totalUsers"',"Ставочников"));
			opt1.textContent = ("!bet " + arr[12].replace('"command":', "").replace('"', '').replace('"}', "") + " [сумма]");
			opt2.textContent = ("!bet " + arr[17].replace('"command":', "").replace('"', '').replace('"}]', "") + " [сумма]");;
		}
		//console.log(check1, check2);
	}
    xhr.ontimeout = function(){
    	var ref = all;
    	document.getElementById('upd').innerHTML = ref;
    	all = ref;
    	return all;
	}
	all.appendChild(title); 
	all.appendChild(sum);
	all.appendChild(users);
	all.appendChild(opt1);
	all.appendChild(opt2);
};



xhr.send(data);