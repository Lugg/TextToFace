if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototye = o;
		return new F();
	};
}

var objFace = {
	hair1 : null,
	faceForm : null,
	eye : null,
	eyebrow : null,
	mouth : null,
	beard : null,
	nose : null,
	ear : null,
	hair2 : null,
	horizontal : null,
	vertical : null,
	id : null
};

var another_face = Object.create(objFace); //hier wird ein Object erzeugt, welches alle Attribute von objFace geerbt hat. Silke muss nun nur noch die Gescihtsteile zuweisen, die sie braucht. Der Rest bleibt null