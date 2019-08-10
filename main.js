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
xhr.send(data);
xhr.addEventListener("readystatechange", function () {
	function update(){
			var ndata = null;
			var nxhr = new XMLHttpRequest();					
			nxhr.open("GET", "https://api.streamelements.com/kappa/v2/contests/5d26328e6b84c45a4fe1845a");
			nxhr.setRequestHeader("accept", "application/json");
			nxhr.send(ndata);
			nxhr.addEventListener("readystatechange", function(){
				if(nxhr.readyState == 4){
					console.log(nxhr.response);
					console.clear();
					xhr = nxhr;
					if (xhr.readyState === xhr.DONE){
	    title.textContent =  xhr.response;
		sum.textContent = xhr.response;
		users.textContent = xhr.response;
		opt1.textContent = xhr.response;
		opt2.textContent = xhr.response;
		arr = xhr.response.split(',');
		var act = `{"active":null`;
		var check1 = `"winner":true}`;
		var check2 = `"winner":true}]`;
		var winRes;
		if(act == arr[0]){
			if(check1 == arr[14]){
				winRes = arr[12];
				winRes = winRes.replace(`"title":`,``).replace(`"`,``).replace(`"`,``);
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
		
	} 
	all.appendChild(title); 
	all.appendChild(sum);
	all.appendChild(users);
	all.appendChild(opt1);
	all.appendChild(opt2);
				}
			});
	}
	setInterval(update, 1000);
 	
});
//setInterval(all, 5000);