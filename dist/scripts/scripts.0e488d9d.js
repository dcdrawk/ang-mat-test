"use strict";angular.module("myappApp",["ngAnimate","ngCookies","ngMessages","ngRoute","ngSanitize","ngTouch","ngMaterial","ngMdIcons","ngCookies"]).config(["$mdThemingProvider",function(a){a.theme("default").primaryColor("blue-grey",{"default":"700","hue-1":"100","hue-2":"600","hue-3":"A100"}).accentColor("amber",{"default":"400"}).warnColor("red",{"default":"600"})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/character-details",{templateUrl:"views/character-details.html",controller:"DetailsCtrl"}).when("/proficiency",{templateUrl:"views/proficiency.html#profTitle",controller:"ProfCtrl"}).when("/ability-scores",{templateUrl:"views/ability-scores.html",controller:"AScoreCtrl"}).when("/to-do",{templateUrl:"views/to-do.html",controller:"ToDoCtrl"}).when("/example",{templateUrl:"views/example.html",controller:"ExampleCtrl"}).otherwise({redirectTo:"/"})}]).controller("TestCtrl",["$scope",function(a){a.title1="Button",a.title4="Warn",a.isDisabled=!0,a.googleUrl="http://google.com"}]).controller("AppCtrl",["$scope","$timeout","$mdSidenav","$log","$location","$anchorScroll",function(a,b,c,d,e){a.toggleLeft=function(){c("left").toggle().then(function(){d.debug("toggle left is done")})},a.go=function(a){e.path(a),c("left").close()}}]).controller("LeftCtrl",["$scope","$timeout","$mdSidenav","$log","$location","$anchorScroll",function(a,b,c,d,e,f){a.close=function(){c("left").close().then(function(){d.debug("close LEFT is done")})},a.gotoTop=function(){e.hash("pageTitle"),f()}}]),angular.module("myappApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myappApp").controller("DetailsCtrl",["$scope","$log","$cookies",function(a,b,c){var d,e,f=c.race,g=c.subrace,h=c.charName,i=c["class"],j=c.background,k=c.alignment,l=c.experience,m=c.level;for(a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.details={name:h,race:f,subrace:"","class":"",background:"",alignment:"",experience:l,level:m},a.races=["Select a Race","Dwarf","Elf","Halfling","Human"],a.subraces=["None Available"],a.characterClasses=["Select a Class","Cleric","Fighter","Rogue","Wizard"],a.backgrounds=["Select a Background","Acolyte","Criminal","Folk Hero","Noble","Sage","Soldier"],a.alignment=["Select an Alignment","Lawful Good","Lawful Neutral","Lawful Evil","Neutral Good","True Neutral","Neutral Evil","Chaotic Good","Chaotic Neutral","Chaotic Evil"],a.testarray=[{value:222,text:"1st"},{value:2,text:"2nd"}],a.selectedSubrace=a.subraces[0],d=0;d<a.races.length;d++)if(c.race!==a.races[d]&&(a.selectedRace=a.races[0]),c.race===a.races[d]){a.selectedRace=a.races[d];break}for(d=0;d<a.races.length;d++){if("Select a Race"===a.selectedRace&&(a.subraces=["None Available"],a.selectedSubrace=a.subraces[0]),"Dwarf"===a.selectedRace)for(a.subraces=["Select a Subrace","Hill Dwarf","Mountain Dwarf"],e=0;e<a.subraces.length;e++)if(g===a.subraces[e]){a.selectedSubrace=a.subraces[e];break}if("Elf"===a.selectedRace)for(a.subraces=["Select a Subrace","High Elf","Wood Elf"],e=0;e<a.subraces.length;e++)if(g===a.subraces[e]){a.selectedSubrace=a.subraces[e];break}if("Halfling"===a.selectedRace)for(a.subraces=["Select a Subrace","Lightfoot","Stout"],e=0;e<a.subraces.length;e++)if(g===a.subraces[e]){a.selectedSubrace=a.subraces[e];break}if("Human"===a.selectedRace)for(a.subraces=["None Available"],e=0;e<a.subraces.length;e++)if(g===a.subraces[e]){a.selectedSubrace=a.subraces[e];break}}for(d=0;d<a.characterClasses.length;d++){if(i===a.characterClasses[d]){a.selectedClass=a.characterClasses[d];break}a.selectedClass=a.characterClasses[0]}for(d=0;d<a.backgrounds.length;d++){if(j===a.backgrounds[d]){a.selectedBackground=a.backgrounds[d];break}a.selectedBackground=a.backgrounds[0]}for(d=0;d<a.alignment.length;d++){if(k===a.alignment[d]){a.selectedAlignment=a.alignment[d];break}a.selectedAlignment=a.alignment[0]}l>=0&&(a.characterExp=parseInt(l)),a.setName=function(){c.charName=a.details.name},a.setRace=function(){c.race=a.selectedRace},a.setSubrace=function(){c.subrace=a.selectedSubrace},a.setClass=function(){c["class"]=a.selectedClass},a.setBackground=function(){c.background=a.selectedBackground},a.setAlignment=function(){c.alignment=a.selectedAlignment},a.setExp=function(){c.experience=parseInt(a.characterExp),c.level=parseInt(a.characterLevel)},a.setLevel=function(){c.level=parseInt(a.characterLevel)},a.updateSubrace=function(){"Select a Race"===a.selectedRace&&(b.debug("no race selected"),a.subraces=["None available"],a.selectedSubrace=a.subraces[0]),"Dwarf"===a.selectedRace&&(b.debug("Dwarf race selected"),a.subraces=["Select a Subrace","Hill Dwarf","Mountain Dwarf"],a.selectedSubrace=a.subraces[0]),"Elf"===a.selectedRace&&(b.debug("Elf race selected"),a.subraces=["Select a Subrace","High Elf","Wood Elf"],a.selectedSubrace=a.subraces[0]),"Halfling"===a.selectedRace&&(b.debug("Halfling race selected"),a.subraces=["Select a Subrace","Lightfoot","Stout"],a.selectedSubrace=a.subraces[0]),"Human"===a.selectedRace&&(b.debug("Human race selected"),a.subraces=["None Available"],a.selectedSubrace=a.subraces[0])},a.calculateLevel=function(){this.characterExp>=0&&(a.characterLevel=1),this.characterExp>=300&&(a.characterLevel=2),this.characterExp>=900&&(a.characterLevel=3),this.characterExp>=2700&&(a.characterLevel=4),this.characterExp>=6500&&(a.characterLevel=5),this.characterExp>=14e3&&(a.characterLevel=6),this.characterExp>=23e3&&(a.characterLevel=7),this.characterExp>=34e3&&(a.characterLevel=8),this.characterExp>=48e3&&(a.characterLevel=9),this.characterExp>=64e3&&(a.characterLevel=10),this.characterExp>=85e3&&(a.characterLevel=11),this.characterExp>=1e5&&(a.characterLevel=12),this.characterExp>=12e4&&(a.characterLevel=13),this.characterExp>=14e4&&(a.characterLevel=14),this.characterExp>=164e3&&(a.characterLevel=15),this.characterExp>=195e3&&(a.characterLevel=16),this.characterExp>=225e3&&(a.characterLevel=17),this.characterExp>=265e3&&(a.characterLevel=18),this.characterExp>=305e3&&(a.characterLevel=19),this.characterExp>=355e3&&(a.characterLevel=20)}}]),angular.module("myappApp").controller("ProfCtrl",["$scope","$cookies","$mdDialog","$log",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var e=b["class"],f=b.level;a.isHidden=!1,a.isMessage=!0,a.isWarning=!0,f>=1?d.debug(f):(d.debug("level not set"),a.warningMessage=[{msg1:"Level not set. Set level in ",bold:"Character Details",msg2:" to show Proficiency Bonus."}],"Cleric"!==e&&"Fighter"!==e&&"Rogue"!==e&&"Wizard"!==e&&(a.warningMessage=[{msg1:"Level/Class not set. Set level/class in ",bold:"Character Details",msg2:" to show Proficiency info."}])),f>=1&&4>=f&&(a.profBonus=2),f>=5&&8>=f&&(a.profBonus=3),f>=9&&12>=f&&(a.profBonus=4),f>=12&&16>=f&&(a.profBonus=5),f>=17&&(a.profBonus=6),b.profBonus=a.profBonus,"Cleric"!==e&&"Fighter"!==e&&"Rogue"!==e&&"Wizard"!==e?(d.debug(e),a.warningMessage=[{msg1:"Class not set. Set class in ",bold:"Character Details",msg2:" to show Proficiency info."}]):a.detectClass=[{msg1:"Displaying proficiency for ",bold:"Level "+f+" "+e+"."}],"Cleric"===e&&(a.armorProf="Light and medium armor, shields",a.weapProf="All simple weapons",a.toolProf="None",a.savingThrows="Wisdom, Charisma",a.skillsProf="Choose two from History, Insight, Medicine, Persuasion, and Religion"),"Fighter"===e&&(a.armorProf="All armor, shields",a.weapProf="Simple weapons, martial weapons",a.toolProf="None.",a.savingThrows="Strength, Constitution",a.skillsProf="Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival"),"Rogue"===e&&(a.armorProf="Light Armor",a.weapProf="Simple weapons, hand crossbows, longswords, rapiers, shortswords",a.toolProf="Thieves tools",a.savingThrows="Dexterity, Intelligence",a.skillsProf="Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth"),"Wizard"===e&&(a.armorProf="None",a.weapProf="Daggers, darts, slings, quarterstaffs, light crossbows.",a.toolProf="None",a.savingThrows="Intelligence, Wisdom",a.skillsProf="Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion"),a.alert="",a.showAlert=function(a){c.show(c.alert().title("Proficiency Info").content("Your proficiency bonus is calculated based on your level. Your class determines the type of weapons, armor, tools, etc. that your character is able to use.").ariaLabel("Ability Score Info").ok("Close").targetEvent(a))}}]),angular.module("myappApp").controller("AScoreCtrl",["$scope","$cookies","$log","$mdDialog",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var e=b.race,f=b.subrace,g=b.str,h=b.dex,i=b.con,j=b["int"],k=b.wis,l=b.cha;a.isHidden=!1,a.isMessage=!1,a.isWarning=!1,a.characterDetails=[{race:e,subrace:f}],a.abilityScores=[{str:g,dex:h,con:i,"int":j,wis:k,cha:l}],a.getRace=function(){("Select a Race"===e||"undefined"==typeof e)&&(c.debug("no race selected"),a.detectRace=[{msg:"Warning - No Race or Subrace selected. Select a Race and Subrace to display score bonuses.",bns:""}],a.isMessage=!1,a.isWarning=!0),("Select a Subrace"===f||"None Available"===f||"undefined"==typeof f)&&c.debug("no subrace selected"),"Select a Subrace"===f||"None Available"===f&&"Human"!==e||"undefined"==typeof f?(c.debug("no subrace selected"),a.detectRace=[{msg:"Warning - No Subrace selected. Select a Race and Subrace to display score bonuses.",bns:""}],a.isMessage=!1,a.isWarning=!0):("Dwarf"===e&&(a.detectRace=[{msg:"Dwarf Race Bonus: ",bns:"+2 Con"}],"Hill Dwarf"===f&&(a.detectSubrace=[{msg:"Hill Dwarf Subrace Bonus: ",bns:"+1 Wis"}]),"Mountain Dwarf"===f&&(a.detectSubrace=[{msg:"Mountain Dwarf Subrace Bonus: ",bns:"+2 Str"}]),a.isMessage=!0,a.isWarning=!1),"Elf"===e&&(a.detectRace=[{msg:"Elf Race Bonus: ",bns:"+2 Dex"}],"Wood Elf"===f&&(a.detectSubrace=[{msg:"Wood Elf Subrace Bonus: ",bns:"+1 Wis"}]),"High Elf"===f&&(a.detectSubrace=[{msg:"High Elf Subrace Bonus: ",bns:"+1 Int"}]),a.isMessage=!0,a.isWarning=!1),"Halfling"===e&&(a.detectRace=[{msg:"Halfling Race Bonus: ",bns:"+2 Dex"}],"Lightfoot"===f&&(a.detectSubrace=[{msg:"Lightfoot Subrace Bonus: ",bns:"+1 Cha"}]),"Stout"===f&&(a.detectSubrace=[{msg:"Stout Subrace Bonus: ",bns:"+1 Con"}]),a.isMessage=!0,a.isWarning=!1),"Human"===e&&(a.detectRace=[{msg:"Human Race Bonus: ",bns:"+1 to all stats"}]))},a.abilityScores.str=parseFloat(g),a.abilityScores.dex=parseFloat(h),a.abilityScores.con=parseFloat(i),a.abilityScores["int"]=parseFloat(j),a.abilityScores.wis=parseFloat(k),a.abilityScores.cha=parseFloat(l),a.setModifier=function(a){return 1>=a?-5:a>=2&&3>=a?-4:a>=4&&5>=a?-3:a>=6&&7>=a?-2:a>=8&&9>=a?-1:a>=10&&11>=a?0:a>=12&&13>=a?1:a>=14&&15>=a?2:a>=16&&17>=a?3:a>=18&&19>=a?4:a>=20&&21>=a?5:a>=22&&23>=a?6:a>=24&&25>=a?7:a>=26&&27>=a?8:a>=28&&29>=a?9:a>=30?10:void 0},a.setStr=function(){a.strMod=a.setModifier(this.abilityScores.str),b.str=a.abilityScores.str},a.setDex=function(){a.dexMod=a.setModifier(this.abilityScores.dex),b.dex=a.abilityScores.dex},a.setCon=function(){a.conMod=a.setModifier(this.abilityScores.con),b.con=a.abilityScores.con},a.setInt=function(){a.intMod=a.setModifier(this.abilityScores["int"]),b["int"]=a.abilityScores["int"]},a.setWis=function(){a.wisMod=a.setModifier(this.abilityScores.wis),b.wis=a.abilityScores.wis},a.setCha=function(){a.chaMod=a.setModifier(this.abilityScores.cha),b.cha=a.abilityScores.cha},a.alert="",a.showAlert=function(a){d.show(d.alert().title("Ability Score Info").content("Ability scores determine your characters power in 6 categories (str, dex, con, int, wis, cha). The score determines the modifier, which can be added to your skills and dice rolls.").ariaLabel("Ability Score Info").ok("Close").targetEvent(a))}}]),angular.module("myappApp").controller("ToDoCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myappApp").controller("ExampleCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);