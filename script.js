function getData(){ 
var form = document.forms["form_1"];
var name = form["name"].value;
var sname = form["sname"].value;
var fname = form["fname"].value;
var group = form["group"].value;
var gender = form["gender"].value;
var date  = form["date"].value;
var date1  = new Date (form["date"].value);
var date2 = new Date(form["date"].value);
var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
var w1,w2;
var pa = document.getElementById("par");
var pa1 = document.getElementById("par1");


if ( gender == "male")
{
	w1 = "студент";
	w2 = "родился";
}
else
{
	w1 = "студентка";
	w2 = "родилась";
}

pa.innerHTML = "Я, " + w1 + " группы " + group + " " + sname + " " + name[0] + ". " + fname[0] + ". , " + w2 + " " + date + " это был день " + days[date1.getDay()] + ".";
date2 = new Date(date1.getFullYear() - 1,08,0);
var dateNow = new Date();
var dateS = new Date(2017,2,22);
var dateO = new Date(2016,08,22);


var remaining = dateS - dateNow;

remaining /= 1000; // секунды до даты

remaining /= 60;    // минуты до даты

remaining /= 60;    // часы до даты

remaining /= 24;    // дни до даты

remaining = (Math.abs(remaining)).toFixed(0);



var remaining1 = dateO - dateNow;

remaining1 /= 1000; // секунды до даты

remaining1 /= 60;    // минуты до даты

remaining1 /= 60;    // часы до даты

remaining1 /= 24;    // дни до даты

remaining1 = (Math.abs(remaining1)).toFixed(0);

/*date2.setFullYear(date1.getFullYear() - 1 );
date2.setDate(1);
date2.setMonth(9);*/
pa1.innerHTML = "1 сентября прошлого года был " + /*date2.getFullYear()*/ days[date2.getDay()] + "<br> " +" До дней весеннего и осеннего равноденствий "
+" осталось полных суток " + remaining + " и " + remaining1 + ".";
return false; 
};