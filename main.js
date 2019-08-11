var data = null;
var xhr = new XMLHttpRequest();
var all = document.createElement('div');
document.body.appendChild(all);
var sum1 = document.createElement('span');
var sum2 = document.createElement('span');
var b1 = document.createElement('span');
var b2 = document.createElement('span');
sum1.classList.add("nums");
sum2.classList.add("nums");
b1.classList.add("nums");
b2.classList.add("nums");
var win1 = document.createElement('div');
var win2 = document.createElement('div');
var lose1 = document.createElement('div');
var lose2 = document.createElement('div');
var stndby1 = document.createElement('div');
var stndby2 = document.createElement('div');
stndby1.classList.add("nums");
stndby2.classList.add("nums");
var arr;
win1.id = "win";
lose1.id = "lose";
win2.id = "win";
lose2.id = "lose";
xhr.open("GET", "https://api.streamelements.com/kappa/v2/contests/5d26328e6b84c45a4fe1845a");
xhr.setRequestHeader("accept", "application/json");
xhr.send(data);
xhr.addEventListener("readystatechange", function () {
	function update() {
		var ndata = null;
		var nxhr = new XMLHttpRequest();
		nxhr.open("GET", "https://api.streamelements.com/kappa/v2/contests/5d26328e6b84c45a4fe1845a");
		nxhr.setRequestHeader("accept", "application/json");
		nxhr.send(ndata);
		nxhr.addEventListener("readystatechange", function () {
			if (nxhr.readyState == 4) {
				xhr = nxhr;
				if (xhr.readyState === xhr.DONE) {
					sum1.textContent = xhr.response;
					sum2.textContent = xhr.response;
					b1.textContent = xhr.response;
					b2.textContent = xhr.response;				
					arr = xhr.response.split(',');
					var act = `{"active":null`;
					var check1 = `"winner":true}`;
					var check2 = `"winner":true}]`;
					var winRes;		
					if (act == arr[0]) {
						if (check1 == arr[14]) {
							winRes = arr[12];
							winRes = winRes.replace(`"title":`, `Выигравшая опция: `).replace(`"`, ``).replace(`"`, ``);
						}
						else if (check2 == arr[19]) {
							winRes = arr[17];
							winRes = winRes.replace('"title":', '').replace('"', '').replace('"', '');
						}
						else if (check1 !== arr[14] && check2 !== arr[19]) {
							winRes = "Ставку отменили";
						}
						//title.textContent = ' ';
						stndby1.textContent = 'Ставок нет.';
						stndby2.textContent = 'Выигравшая опция: ' + winRes + '.';
						win1.textContent = ' ';
						lose1.textContent = ' ';
						win2.textContent = ' ';
						lose2.textContent = ' ';
						b1.textContent  = ' ';
						b2.textContent = ' ';
						sum1.textContent = ' ';
						sum2.textContent = ' ';
					}
					else {						
							sum1.textContent = (arr[8].replace('"options":[{"totalAmount":', ""));											
							b1.textContent = (arr[9].replace('"totalUsers":', "").replace('"', '').replace('"', ""));
							sum2.textContent = (arr[13].replace('{"totalAmount":', ""));
							b2.textContent = (arr[14].replace('"totalUsers":', "").replace('"', '').replace('"', ""));
							win1.textContent = `Поставивших на победу:  ` + b1.textContent;
							win2.textContent = `Сумма на победу: ` + sum1.textContent;
							lose1.textContent = `Поставивших на поражение: ` + b2.textContent;
							lose2.textContent = `Сумма на поражение: ` + sum2.textContent;
							stndby1.textContent = ' ';
							stndby2.textContent = ' ';
					}
					//console.log(arr[8], arr[9]);
					//console.log(arr[13],arr[14]);
				}
				all.appendChild(stndby1);
				all.appendChild(stndby2);
				all.appendChild(win1);
				all.appendChild(win2);
				all.appendChild(lose1);
				all.appendChild(lose2);
			}
		});
	}
	setInterval(update, 1000);
});