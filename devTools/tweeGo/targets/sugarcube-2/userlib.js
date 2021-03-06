/* mousetrap v1.5.3 craig.is/killing/mice */
(function(C,r,g){function t(a,b,h){a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent("on"+b,h)}function x(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return l[a.which]?l[a.which]:p[a.which]?p[a.which]:String.fromCharCode(a.which).toLowerCase()}function D(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function u(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function y(a,b){var h,c,e,g=[];h=a;"+"===h?h=["+"]:(h=h.replace(/\+{2}/g,"+plus"),h=h.split("+"));for(e=0;e<h.length;++e)c=h[e],z[c]&&(c=z[c]),b&&"keypress"!=b&&A[c]&&(c=A[c],g.push("shift")),u(c)&&g.push(c);h=c;e=b;if(!e){if(!k){k={};for(var m in l)95<m&&112>m||l.hasOwnProperty(m)&&(k[l[m]]=m)}e=k[h]?"keydown":"keypress"}"keypress"==e&&g.length&&(e="keydown");return{key:c,modifiers:g,action:e}}function B(a,b){return null===a||a===r?!1:a===b?!0:B(a.parentNode,b)}function c(a){function b(a){a=
a||{};var b=!1,n;for(n in q)a[n]?b=!0:q[n]=0;b||(v=!1)}function h(a,b,n,f,c,h){var g,e,l=[],m=n.type;if(!d._callbacks[a])return[];"keyup"==m&&u(a)&&(b=[a]);for(g=0;g<d._callbacks[a].length;++g)if(e=d._callbacks[a][g],(f||!e.seq||q[e.seq]==e.level)&&m==e.action){var k;(k="keypress"==m&&!n.metaKey&&!n.ctrlKey)||(k=e.modifiers,k=b.sort().join(",")===k.sort().join(","));k&&(k=f&&e.seq==f&&e.level==h,(!f&&e.combo==c||k)&&d._callbacks[a].splice(g,1),l.push(e))}return l}function g(a,b,n,f){d.stopCallback(b,
b.target||b.srcElement,n,f)||!1!==a(b,n)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=x(a);b&&("keyup"==a.type&&w===b?w=!1:d.handleKey(b,D(a),a))}function l(a,c,n,f){function e(c){return function(){v=c;++q[a];clearTimeout(k);k=setTimeout(b,1E3)}}function h(c){g(n,c,a);"keyup"!==f&&(w=x(c));setTimeout(b,10)}for(var d=q[a]=0;d<c.length;++d){var p=d+1===c.length?h:e(f||
y(c[d+1]).action);m(c[d],p,f,a,d)}}function m(a,b,c,f,e){d._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var g=a.split(" ");1<g.length?l(a,g,b,c):(c=y(a,c),d._callbacks[c.key]=d._callbacks[c.key]||[],h(c.key,c.modifiers,{type:c.action},f,a,e),d._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:e,combo:a}))}var d=this;a=a||r;if(!(d instanceof c))return new c(a);d.target=a;d._callbacks={};d._directMap={};var q={},k,w=!1,p=!1,v=!1;d._handleKey=function(a,
c,e){var f=h(a,c,e),d;c={};var k=0,l=!1;for(d=0;d<f.length;++d)f[d].seq&&(k=Math.max(k,f[d].level));for(d=0;d<f.length;++d)f[d].seq?f[d].level==k&&(l=!0,c[f[d].seq]=1,g(f[d].callback,e,f[d].combo,f[d].seq)):l||g(f[d].callback,e,f[d].combo);f="keypress"==e.type&&p;e.type!=v||u(a)||f||b(c);p=l&&"keydown"==e.type};d._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)m(a[d],b,c)};t(a,"keypress",e);t(a,"keydown",e);t(a,"keyup",e)}var l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",
20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},A={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},z={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},k;for(g=1;20>g;++g)l[111+g]="f"+g;for(g=0;9>=g;++g)l[g+96]=g;c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};this._directMap=
{};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||B(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.init=function(){var a=c(r),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};c.init();C.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=
c);"function"===typeof define&&define.amd&&define(function(){return c})})(window,document);

Mousetrap.bind("enter", function () {
	$("#story-caption #endWeekButton a.macro-click").trigger("click");
});
Mousetrap.bind("space", function () {
	$("#story-caption #nextButton a.macro-click").trigger("click");
});
Mousetrap.bind("c", function () {
	$("#story-caption #manageArcology a.macro-click").trigger("click");
});
Mousetrap.bind("p", function () {
	$("#story-caption #managePenthouse a.macro-click").trigger("click");
});
Mousetrap.bind("left", function () {
	$("#prevSlave a.macro-click").trigger("click");
	$("#prevRule a.macro-click").trigger("click");
});
Mousetrap.bind("q", function () {
	$("#prevSlave a.macro-click").trigger("click");
	$("#prevRule a.macro-click").trigger("click");
});
Mousetrap.bind("shift+left", function () {
	$("#firstRule a.macro-click").trigger("click");
});
Mousetrap.bind("shift+q", function () {
	$("#firstRule a.macro-click").trigger("click");
});
Mousetrap.bind("right", function () {
	$("#nextSlave a.macro-click").trigger("click");
	$("#nextRule a.macro-click").trigger("click");
});
Mousetrap.bind("shift+right", function () {
	$("#lastRule a.macro-click").trigger("click");
});
Mousetrap.bind("e", function () {
	$("#nextSlave a.macro-click").trigger("click");
	$("#nextRule a.macro-click").trigger("click");
});
Mousetrap.bind("shift+e", function () {
	$("#lastRule a.macro-click").trigger("click");
});
Mousetrap.bind("f", function () {
	$("#walkpast a.macro-click").trigger("click");
});
Mousetrap.bind("h", function () {
	$("#manageHG a.macro-click").trigger("click");
});
Mousetrap.bind("s", function () {
	$("#buySlaves a.macro-click").trigger("click");
});
Mousetrap.bind("a", function () {
	$("#managePA a.macro-click").trigger("click");
});
Mousetrap.bind("b", function () {
	$("#manageBG a.macro-click").trigger("click");
});
Mousetrap.bind("r", function () {
	$("#manageRecruiter a.macro-click").trigger("click");
});
Mousetrap.bind("o", function () {
	$("#story-caption #optionsButton a.macro-click").trigger("click");
});
Mousetrap.bind("y", function () {
	$("#story-caption #policyButton a.macro-click").trigger("click");
});
Mousetrap.bind("f", function () {
	$("#story-caption #FSButton a.macro-click").trigger("click");
});
Mousetrap.bind("l", function () {
	$("#story-caption #LanguageButton a.macro-click").trigger("click");
});
Mousetrap.bind("t", function () {
	$("#story-caption #PAOButton a.macro-click").trigger("click");
});
Mousetrap.bind("u", function () {
	$("#story-caption #URButton a.macro-click").trigger("click");
});
Mousetrap.bind("w", function () {
	$("#story-caption #WARButton a.macro-click").trigger("click");
});

/**
 * BoobGenerator namespace.
 */
if (typeof BoobGenerator == "undefined") {
	var BoobGenerator = {
		rollBreast: function (modif) {
			var volume = [0, 300, 500, 650, 800, 1000, 1200, 1400, 1600, 1800, 2050, 2300, 2600, 2900, 3250, 3600, 3950, 4300, 4700, 5100, 5500, 5900];
			var volume_dist = [90000, 470000, 720000, 840000, 908574, 947759, 970151, 982946, 990258, 994436, 996824, 998188, 998968, 999414, 999669, 999814, 999897, 999945, 999972, 999987, 999995, 1000000];
			var randomRoll = Math.floor(Math.random() * 1000000) + 1
			var actualSize = 0
			while (randomRoll > volume_dist[actualSize]) {
				actualSize = actualSize + 1
			}
			var minorSizeAdjustment = 0
			if (Math.random()<.5) {
				minorSizeAdjustment = (Math.floor(Math.random() * 2) + 1) * 50
			}
			var volResult = volume[actualSize] + minorSizeAdjustment + modif
			if (volResult < 0) {volResult = 0}
			return volResult
		}
	};
	// Raise namespace scope to Global.
	window.BoobGenerator = BoobGenerator;
};

/**
 * Slave checker namespace.
 */
if (typeof SlaveStatsChecker == "undefined") {
	var SlaveStatsChecker = {
		checkForLisp: function (slave) {
			return ((slave.lips > 70) || (slave.lipsPiercing + slave.tonguePiercing > 2))
		}
	};
	// Raise namespace scope to Global.
	window.SlaveStatsChecker = SlaveStatsChecker;
};

window.canGetPregnant = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.preg != 0) {
		return false;
	} else if (slave.ovaries != 1) {
		return false;
	} else if (canDoVaginal(slave) == false) {
		return false;
	} else {
		return true;
	}
};

window.isFertile = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.preg > 0) {
		return false;
	} else if (slave.preg < -1) {
		return false;
	} else if (slave.ovaries != 1) {
		return false;
	} else {
		return true;
	}
};

window.canAchieveErection = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.dick < 7 && slave.dick > 0 && (slave.balls > 0 ? slave.hormones <= 0 : slave.hormones < 0)) {
		return true;
	} else {
		return false;
	}
};

window.canSee = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.eyes > -2) {
		return true;
	} else {
		return false;
	}
};

window.canWalk = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.amp == 1)  {
		return false;
	} else if (slave.boobs > 10000+(slave.muscles*100)) {
		return false;
	} else if (slave.heels == 0) {
		return true;
	} else if (slave.shoes == "heels") {
		return true;
	} else if (slave.shoes == "extreme heels") {
		return true;
	} else if (slave.shoes == "boots") {
		return true;
	} else {
		return false;
	}
};

window.canTalk = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.accent > 2)  {
		return false;
	} else if (slave.voice == 0) {
		return false;
	} else if (slave.lips > 95) {
		return false;
	} else {
		return true;
	}
};

window.canDoAnal = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.vaginalAccessory == "anal chastity") {
		return false;
	} else if (slave.dickAccessory == "anal chastity") {
		return false;
	} else if (slave.vaginalAccessory == "combined chastity") {
		return false;
	} else if (slave.dickAccessory == "combined chastity") {
		return false;
	}
	return true;
};

window.canDoVaginal = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.vagina < 0) {
		return false;
	} else if (slave.vaginalAccessory == "chastity belt") {
		return false;
	} else if (slave.vaginalAccessory == "combined chastity") {
		return false;
	}
	return true;
};

window.relationTargetWord = function(slave) {
	if (!slave) {
		return null;
	} else if (slave.relation == "daughter") {
		return "mother";
	} else if (slave.relation == "mother") {
		return "daughter";
	}
	return slave.relation;
};

window.ruleApplied = function(slave, ID) {
	if (!slave) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	} else {
		for(var d=0; d < slave.currentRules.length; ++d){
			if(slave.currentRules[d] == ID){
				return true;
			}
		}return false;
	}
};

window.ruleAssignment = function(applyAssignment, assignment) {
	for(var d=0; d < applyAssignment.length; ++d){
		if(applyAssignment[d] == assignment){

			return true;
		}
	}return false;
};

window.ruleFacility = function(applyFacility, facility) {
	for(var d=0; d < applyFacility.length; ++d){
		if(applyFacility[d] == facility){
			return true;
		}
	}return false;
};

window.ruleExcludeSlaveFacility = function(rule, slave) {
	if (!slave) {
		return null;
	}else if (!rule) {
		return null;
	}else if (!rule.excludeFacility) {
		return false;
	} else {
		for(var d=0; d < rule.excludeFacility.length; ++d){
			if(rule.excludeFacility[d] == "hgsuite"){
				if(slave.assignment == "live with your Head Girl" ){
					return true;
				}
				else if(slave.assignment == "be your Head Girl"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "arcade"){
				if (slave.assignment == "be confined in the arcade" ){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "mastersuite"){
				if(slave.assignment == "serve in the master suite" ){
					return true;
				}
				else if(slave.assignment == "be your Concubine"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "clinic"){
				if(slave.assignment == "get treatment in the clinic" ){
					return true;
				}
				else if(slave.assignment == "be the Nurse"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "spa"){
				if(slave.assignment == "rest in the spa" ){
					return true;
				}
				else if(slave.assignment == "be the Attendant"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "brothel"){
				if(slave.assignment == "work in the brothel" ){
					return true;
				}
				else if(slave.assignment == "be the Madam"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "club"){
				if(slave.assignment == "serve in the club" ){
					return true;
				}
				else if(slave.assignment == "be the DJ"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "dairy"){
				if (slave.assignment == "work in the dairy"){
					return true;
				}
				else if(slave.assignment == "be the Milkmaid"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "servantsquarters"){
				if(slave.assignment == "work as a servant"){
					return true;
				}
				else if(slave.assignment == "be the Stewardess"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "schoolroom"){
				if(slave.assignment == "learn in the schoolroom" ){
					return true;
				}
				else if(slave.assignment == "be the Schoolteacher"){
					return true;
				}
			}
			else if(rule.excludeFacility[d] == "cellblock"){
				if(slave.assignment == "be confined in the cellblock" ){
					return true;
				}
				else if(slave.assignment == "be the Wardeness"){
					return true;
				}
			}
		}
	}
};

window.ruleAppliedToSlaveFacility = function(rule, slave) {
	if (!slave) {
		return null;
	}else if (!rule) {
		return null;
	}else if (!rule.facility) {
		return false;
	} else {
		for(var d=0; d < rule.facility.length; ++d){
			if(rule.facility[d] == "hgsuite"){
				if(slave.assignment == "live with your Head Girl" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be your Head Girl")){
					return true;
				}
			}
			else if(rule.facility[d] == "arcade"){
				if(slave.assignment == "be confined in the arcade" ){
					return true;
				}
			}
			else if(rule.facility[d] == "mastersuite"){
				if(slave.assignment == "serve in the master suite" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be your Concubine")){
					return true;
				}
			}
			else if(rule.facility[d] == "clinic"){
				if(slave.assignment == "get treatment in the clinic" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Nurse")){
					return true;
				}
			}
			else if(rule.facility[d] == "spa"){
				if(slave.assignment == "rest in the spa" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Attendant")){
					return true;
				}
			}
			else if(rule.facility[d] == "brothel"){
				if(slave.assignment == "work in the brothel" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Madam")){
					return true;
				}
			}
			else if(rule.facility[d] == "club"){
				if(slave.assignment == "serve in the club" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the DJ")){
					return true;
				}
			}
			else if(rule.facility[d] == "dairy"){
				if (slave.assignment == "work in the dairy"){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Milkmaid")){
					return true;
				}
			}
			else if(rule.facility[d] == "servantsquarters"){
				if(slave.assignment == "work as a servant" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Stewardess")){
					return true;
				}
			}
			else if(rule.facility[d] == "schoolroom"){
				if(slave.assignment == "learn in the schoolroom" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Schoolteacher")){
					return true;
				}
			}
			else if(rule.facility[d] == "cellblock"){
				if(slave.assignment == "be confined in the cellblock" ){
					return true;
				}
				else if((rule.excludeSpecialSlaves != true) && (slave.assignment == "be the Wardeness")){
					return true;
				}
			}
		}return false;
	}
};

window.ruleSlaveSelected = function(slave, rule) {
	if (!slave) {
		return null;
	}else if (!rule) {
		return null;
	}else if (!rule.selectedSlaves) {
		return false;
	} else {
		for(var d=0; d < rule.selectedSlaves.length; ++d){
			if(slave.ID == rule.selectedSlaves[d]){
				return true;
			}
		}return false;
	}
};

window.ruleSlaveExcluded = function(slave, rule) {
	if (!slave) {
		return null;
	}else if (!rule) {
		return null;
	}else if (!rule.excludedSlaves) {
		return false;
	} else {
		for(var d=0; d < rule.excludedSlaves.length; ++d){
			if(slave.ID == rule.excludedSlaves[d]){
				return true;
			}
		}return false;
	}
};
window.hasSurgeryRule = function(slave, rules) {
	if (!slave) {
		return false;
	}else if (!rules) {
		return false;
	}else if (!slave.currentRules) {
		return false;
	}else {
		for(var d=rules.length-1; d >= 0; --d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].autoSurgery > 0){
						return true;
					}
				}
			}
		}return false;
	}
};

window.lastPregRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return false;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].preg == -1){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.hasHColorRule = function(slave, rules) {
	if (!slave) {
		return false;
	}else if (!rules) {
		return false;
	}else if (!slave.currentRules) {
		return false;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].hColor != "no default setting"){
						return true;
					}
				}
			}
		}return false;
	}
};

window.hasHStyleRule = function(slave, rules) {
	if (!slave) {
		return false;
	}else if (!rules) {
		return false;
	}else if (!slave.currentRules) {
		return false;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].hStyle != "no default setting"){
						return true;
					}
				}
			}
		}return false;
	}
};

window.hasEyeColorRule = function(slave, rules) {
	if (!slave) {
		return false;
	}else if (!rules) {
		return false;
	}else if (!slave.currentRules) {
		return false;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].hStyle != "no default setting"){
						return true;
					}
				}
			}
		}return false;
	}
};

window.lastEyeWearRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].eyewear != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastEyeColorRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].eyeColor != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastMakeupRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].makeup != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastNailsRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].nails != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastHColorRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].hColor != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastHStyleRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].hStyle != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastHLengthRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].hLength != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastPubicHColorRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].pubicHColor != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastPubicHStyleRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].pubicHStyle != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastNipplesPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].nipplesPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastAreolaePiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].areolaePiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastClitPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].clitPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastClitSettingRule = function(slave, rules) {
    if (!slave) {
        return null;
    }else if (!rules) {
        return null;
    }else if (!slave.currentRules) {
        return null;
    }else {
        for(var d=rules.length-1; d >= 0;--d){
            for(var e=0; e < slave.currentRules.length;++e){
                if(slave.currentRules[e] == rules[d].ID){
                    if (rules[d].clitSetting != "no default setting"){
                        return rules[d];
                    }
                }
            }
        }return null;
    }
};
window.lastVaginaPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].vaginaPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastDickPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].dickPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastAnusPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].anusPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastLipsPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].lipsPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastTonguePiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].tonguePiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastEarPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].earPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastEyebrowPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].earPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastNosePiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].nosePiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastNavelPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].navelPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastCorsetPiercingRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].corsetPiercing != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastBoobsTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].boobsTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastButtTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].buttTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastVaginaTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].vaginaTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastDickTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].dickTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastAnusTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].anusTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastLipsTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].lipsTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastShouldersTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].shouldersTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastArmsTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].armsTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastLegsTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].legsTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastStampTatRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].stampTat != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.lastLactationSurgeryRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			if (!rules[d].surgery) {
				return null;
			}
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].surgery.lactation != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastLipSurgeryRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			if (!rules[d].surgery) {
				return null;
			}
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].surgery.lips != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastBoobSurgeryRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			if (!rules[d].surgery) {
				return null;
			}
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].surgery.boobs != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};
window.lastButtSurgeryRule = function(slave, rules) {
	if (!slave) {
		return null;
	}else if (!rules) {
		return null;
	}else if (!slave.currentRules) {
		return null;
	}else {
		for(var d=rules.length-1; d >= 0;--d){
			if (!rules[d].surgery) {
				return null;
			}
			for(var e=0; e < slave.currentRules.length;++e){
				if(slave.currentRules[e] == rules[d].ID){
					if (rules[d].surgery.butt != "no default setting"){
						return rules[d];
					}
				}
			}
		}return null;
	}
};

window.checkThresholds = function(number, rule) {
	if (!rule) {
		return null;
	} else {
		if ((rule.thresholdUpper != "none") && (rule.thresholdLower != "none")){
			if (!rule.eqLower && !rule.eqUpper){
				if((number < rule.thresholdUpper) && (number > rule.thresholdLower)){
					return true;
				}
			}
			else if (rule.eqLower && !rule.eqUpper){
				if((number < rule.thresholdUpper) && (number >= rule.thresholdLower)){
					return true;
				}
			}
			else if (!rule.eqLower && rule.eqUpper){
				if((number <= rule.thresholdUpper) && (number > rule.thresholdLower)){
					return true;
				}
			}
			else {
				if((number <= rule.thresholdUpper) && (number >= rule.thresholdLower)){
					return true;
				}
			}
		}
		else if (rule.thresholdUpper != "none"){
			if (!rule.eqUpper) {
				if(number < rule.thresholdUpper){
					return true;
				}
			}
			else{
				if(number <= rule.thresholdUpper){
					return true;
				}
			}
		}
		else if (rule.thresholdLower != "none"){
			if (!rule.eqLower) {
				if(number > rule.thresholdLower){
					return true;
				}
			}
			else{
				if(number >= rule.thresholdLower){
					return true;
				}
			}
		}return false;
	}
};

window.removeFromArray = function(arr, val) {
	for (var i = 0; i < arr.length; i++)
		if (val == arr[i])
			return arr.splice(i,1);
	return null;
};

window.milkAmount = function(slave) {
	var milk;
	var calcs;
	if (!slave) {
		return null;
	} else {
		calcs = slave.boobs-slave.boobsImplant
		if (calcs > 10000) {
			milk = (78+((calcs-10000)/300))
		} else if (calcs > 5000) {
			milk = (53+((calcs-5000)/200))
		} else if (calcs > 2000) {
			milk = (29+((calcs-2000)/125))
		} else if (calcs > 800) {
			milk = (16+((calcs-800)/80))
		} else {
			milk = (8+((calcs-400)/50))
		}
		if (slave.lactation == 2) {
			milk *= 1.2
		}
		milk += (milk*((slave.devotion-50)/200))
		if (slave.boobsImplant > 200) {
			milk *= 0.9
		}
		calcs = slave.hormones
		if (slave.balls != 0 && calcs > -2) {
			calcs -= 1
		} else if (slave.ovaries != 1 && calcs < 2) {
			calcs += 1
		}
		milk *= (1+(calcs*0.1))
		milk *= (1+(slave.preg/100))
		milk *= (1+(slave.health/50))
		milk *= (1+(slave.weight/500))
		milk *= (1+(slave.lactationAdaptation/500))
		milk = Math.trunc(milk)
		milk = Math.clamp(milk,1,10000)
		return milk
	}
};

window.cumAmount = function(slave) {
	var cum = 0;
	var calcs = 0;
	if (!slave) {
		return null;
	} else {
		if (slave.drugs == "testicle enhancement") {
			cum = ((slave.balls*3.5)+1)
		} else {
			cum = ((slave.balls*2.5)+1)
		}
		calcs = slave.hormones
		cum *= (1-(calcs*0.1))
		if (slave.scrotum == 0) {
			cum *= 0.8
		}
		if (slave.devotion > 50) {
			cum += (cum*(slave.devotion/100))
		} else if (slave.devotion < -50) {
			cum += (cum*(slave.devotion/100))
		}
		if (slave.health > 50) {
			cum += (cum*(slave.health/50))
		} else if (slave.health < -50) {
			cum += (cum*(slave.health/50))
		}
		cum = Math.trunc(cum)
		cum = Math.clamp(cum,1,10000)
		return cum
	}
};
