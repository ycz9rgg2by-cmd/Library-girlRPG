// =====================================
// Library Girl RPG
// Version 0.2.2
// Daily Quest Engine
// =====================================


// ---------- PLAYER ----------

let player = {

    level:1,
    exp:20,
    coins:20

};


// ---------- DATE ----------

const today = new Date();

const weekday = today.toLocaleDateString("en-US",{
    weekday:"long"
});

const fullDate = today.toLocaleDateString("en-US",{

    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"

});


// ---------- GREETING ----------

const hour = today.getHours();

let greeting="Good Morning";

if(hour>=12){

    greeting="Good Afternoon";

}

if(hour>=18){

    greeting="Good Evening";

}


// ---------- QUEST DATABASE ----------

const quests={

Monday:[

"🏃 Walk 20 minutes",
"🥗 Eat real food",
"💧 Drink 2L water"

],

Tuesday:[

"💪 Strength Training",
"🥦 Vegetables",
"😴 Sleep before 11 PM"

],

Wednesday:[

"🚶 Fast Walk",
"📖 Read 20 min",
"🧘 Meditation"

],

Thursday:[

"🏃 Cardio",
"🥩 High Protein",
"📵 Digital Detox"

],

Friday:[

"🚶 Recovery Walk",
"🍎 Healthy Meal",
"🙏 Gratitude"

],

Saturday:[

"🧹 House Cleaning",
"🚶 Move 20 minutes",
"☕ Relax"

],

Sunday:[

"😴 Full Recovery",
"📚 Reading",
"❤️ Family Time"

]

};


// ---------- TOP BAR ----------

document.getElementById("todayDate").innerHTML=fullDate;

document.getElementById("greeting").innerHTML=
"☀️ "+greeting+", Library Girl!";


// ---------- QUEST ----------

const list=document.getElementById("questList");

quests[weekday].forEach(function(item){

const row=document.createElement("div");

row.className="quest-row";

row.innerHTML=`

<label>

<input type="checkbox">

${item}

</label>

`;

list.appendChild(row);

});


// ---------- COMPLETE BUTTON ----------

document
.getElementById("completeButton")
.addEventListener("click",completeQuest);


// ---------- COMPLETE ----------

function completeQuest(){

player.exp+=20;

player.coins+=10;

alert(

"🌼 Quest Complete!\n\n"

+"+20 EXP\n"

+"+10 Health Coins"

);

}