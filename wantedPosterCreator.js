/*
 Authors:   Victor
 Reviewers: Lukas
 Description: Creates the wanted poster with the metadata about the person
 */


var fs = require('fs');
/*
var metaData = {
	gender : 1,
	age : 2,
	dangerLevel : 1,
	iq : 1,
	mentalHealth : 1
}


// Used for testing
function main()
{
createWantedPoster(2,metaData,ready);
}
function ready(err)
{
console.log("ready"+err);
}*/

function createWantedPoster( id,mData, callback )
{
	var wantedPoster = '';
	var gender='';
	var demgender='';
	var pronomen='';
	var spronomen='';
	var possessivartikel='';
	var personalpronomen='';
	var ihmihr='';
	wantedPoster +='<p>';
	
	if (mData.pirat ==1)
		{
		wantedPoster += 'Der Text stammt von einem sehr gefährlichen Piraten.<br> Er hat bereits alle sieben Weltmeere besegelt und schon sehr viele Städte ausgeplündert.<br> Es lässt sich nicht ausschließen, dass es sich um einen Kapitän eines Piratenschiffs handelt.';
		}
	else
		{
		wantedPoster += 'Bei der gesuchten Person handelt es sich um ';
		if	(mData.gender ==1)
		{	wantedPoster += 'einen Mann.<br> Er ';	
			gender = 'Der Mann';
			demgender = 'dem Mann';
			pronomen ='Er';
			spronomen='er';
			possessivartikel='seine';
			personalpronomen='ihn';
			ihmihr='ihm';

		}
		else {
		wantedPoster += 'eine Frau.<br> Sie ';
		gender = 'Die Frau';
		demgender='der Frau';
		pronomen='Sie';
		spronomen='sie';
		possessivartikel='ihre';
		personalpronomen='sie';
		var ihmihr='ihr';
		}
		
		switch (mData.age){
		case 1: wantedPoster += ' ist eher jung und zwischen 20 und 30'; break;
		case 2: wantedPoster += ' ist zwischen 30 und 40' ;break;
		case 3: wantedPoster += ' ist etwas reifer und zwischen 50 und 60' ;break;
		}
		wantedPoster += ' Jahre alt. <br>';
		
		switch (mData.dangerLevel){
		case 1: wantedPoster += gender + ' ist extrem gefährlich (Osama Bin Laden ist ein Witz im Vergleich gewesen).<br>'; break;
		case 2: wantedPoster += gender + ' ist sehr schwer einzuschätzen im Bezug auf die Gefährlichkeit. Allerdings ist davon auszugehen, dass '+spronomen+' im Zweifel zu allem bereit ist.<br>' ;break;
		case 3: wantedPoster += 'Von '+ demgender+ ' geht keine Gefahr aus.<br>' ;break;
		}
		
		switch (mData.iq){
		case 1: wantedPoster += pronomen + ' ist sehr intelligent, der IQ liegt über 130. Deshalb sind '+possessivartikel+' Verbrechen extrem gut geplant.<br>'; break;
		case 2: wantedPoster += pronomen + ' ist nicht sehr schlau, aber auch nicht dumm. Generell sollte man sich aber vor '+ihmihr+' in Acht nehmen.<br>' ;break;
		case 3: wantedPoster += pronomen + ' ist so dumm, dass '+spronomen+' zum Wasser kochen ein Rezept benötigt.<br>' ;break; 
		}
		switch (mData.mentalHealth){
		case 1: wantedPoster += pronomen +' ist in einem sehr verwirrten Zustand, was '+personalpronomen+' unberechenbar macht.<br>';break;
		case 2: wantedPoster += pronomen +' weiß nicht so recht, ob '+spronomen+' sich entspannen soll oder doch lieber verwirrt umher rennen muss.<br>' ;break;
		case 3: wantedPoster += pronomen +' ist total entspannt (fast schon tiefenentspannt) und weiß, wie '+spronomen+' mit gefährlichen Situationen (Verhaftung) entspannt umgehen kann.<br>' ;break; 
		}
	}
	wantedPoster +='</p>';

	fs.writeFile(__dirname + '/wantedPoster/wantedPoster' + id, wantedPoster, function(err) {
		callback(err);
	}); 
	
}
//main ();
exports.createWantedPoster = createWantedPoster;
