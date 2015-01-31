'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AScoreCtrl
 * @description
 * # AScoreCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('AScoreCtrl', function ($scope, $cookies, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var myRace = $cookies.race;
    var mySubrace = $cookies.subrace;

    var modifier;
    var myStr = $cookies.str;
    var myDex = $cookies.dex;
    var myCon = $cookies.con;
    var myInt = $cookies.int;
    var myWis = $cookies.wis;
    var myCha = $cookies.cha;

    //Booleans to set warning/message classes
    $scope.isHidden = false;
    $scope.isMessage = false;
    $scope.isWarning = false;

    //test array for basic details needed for this controller
    $scope.characterDetails = [{
      race: myRace,
      subrace: mySubrace
    }];

    $scope.abilityScores = [{//sets the bonus message and value
      str : myStr,
      dex : myDex,
      con : myCon,
      int : myInt,
      wis : myWis,
      cha : myCha,
    }];




    $scope.getRace = function() {
      //  $cookies.race = $scope.selectedRace;

      if(myRace === 'Select a Race' || typeof myRace === 'undefined'){//sees if race are undefined
        $log.debug('no race selected');
        $scope.detectRace = [{
          msg : 'Warning - No Race or Subrace selected. Select a Race and Subrace to display score bonuses.',//tell the user
          bns : ''
        }];
        $scope.isMessage = false;
        $scope.isWarning = true; //Sets the warning class on the message span
      }
      if(mySubrace === 'Select a Subrace' || mySubrace === 'None Available' || typeof mySubrace ==='undefined'){
        $log.debug('no subrace selected');
      }
      if(mySubrace === 'Select a Subrace' || mySubrace === 'None Available' && myRace !== 'Human' || typeof mySubrace ==='undefined'){
        $log.debug('no subrace selected');

        $scope.detectRace = [{
          msg : 'Warning - No Subrace selected. Select a Race and Subrace to display score bonuses.',//tell the user
          bns : ''
        }];
        $scope.isMessage = false;
        $scope.isWarning = true; //Sets the warning class on the message span
      } else {

        if(myRace === 'Dwarf'){ //Detects the race
          $scope.detectRace = [{ //sets the bonus message and value
            msg : 'Dwarf Race Bonus: ',
            bns : '+2 Con'
          }];
          if(mySubrace === 'Hill Dwarf'){ //detects the subrace
            $scope.detectSubrace = [{
              msg : 'Hill Dwarf Subrace Bonus: ',
              bns : '+1 Wis'
            }];
          }
          if(mySubrace === 'Mountain Dwarf'){ //detects the subrace
            $scope.detectSubrace = [{
              msg : 'Mountain Dwarf Subrace Bonus: ',
              bns : '+2 Str'
            }];
          }
          $scope.isMessage = true;
          $scope.isWarning = false;
        }

        if(myRace === 'Elf'){ //Detects the race
          $scope.detectRace = [{//sets the bonus message and value
            msg : 'Elf Race Bonus: ',
            bns : '+2 Dex'
          }];
          if(mySubrace === 'Wood Elf'){ //detects the subrace
            $scope.detectSubrace = [{
              msg : 'Wood Elf Subrace Bonus: ',
              bns : '+1 Wis'
            }];
          }
          if(mySubrace === 'High Elf'){ //detects the subrace
            $scope.detectSubrace = [{
              msg : 'High Elf Subrace Bonus: ',
              bns : '+1 Int'
            }];
          }
          $scope.isMessage = true;
          $scope.isWarning = false;
        }

        if(myRace === 'Halfling'){ //Detects the race
          $scope.detectRace = [{//sets the bonus message and value
            msg : 'Halfling Race Bonus: ',
            bns : '+2 Dex'
          }];
          if(mySubrace === 'Lightfoot'){ //detects the subrace
            $scope.detectSubrace = [{
              msg : 'Lightfoot Subrace Bonus: ',
              bns : '+1 Cha'
            }];
          }
          if(mySubrace === 'Stout'){ //detects the subrace
            $scope.detectSubrace = [{
              msg : 'Stout Subrace Bonus: ',
              bns : '+1 Con'
            }];
          }
        }
        if(myRace === 'Human'){ //Detects the race
          $scope.detectRace = [{//sets the bonus message and value
            msg : 'Human Race Bonus: ',
            bns : '+1 to all stats'
          }];
        }
      }
    }; //End of getRace();

    //sets up ability scores and modifiers if they exist
    $scope.abilityScores.str = parseFloat(myStr);
    $scope.abilityScores.dex = parseFloat(myDex);
    $scope.abilityScores.con = parseFloat(myCon);
    $scope.abilityScores.int = parseFloat(myInt);
    $scope.abilityScores.wis = parseFloat(myWis);
    $scope.abilityScores.cha = parseFloat(myCha);


    //Ability score calculations as defined by the basic player's guide
    $scope.setModifier = function( abilityScore ) {
      if(abilityScore <= 1){return -5;}
      if(abilityScore >= 2 && abilityScore <= 3){return -4;}
      if(abilityScore >= 4 && abilityScore <= 5){return -3;}
      if(abilityScore >= 6 && abilityScore <= 7){return -2;}
      if(abilityScore >= 8 && abilityScore <= 9){return -1;}
      if(abilityScore >= 10 && abilityScore <= 11){return 0;}
      if(abilityScore >= 12 && abilityScore <= 13){return 1;}
      if(abilityScore >= 14 && abilityScore <= 15){return 2;}
      if(abilityScore >= 16 && abilityScore <= 17){return 3;}
      if(abilityScore >= 18 && abilityScore <= 19){return 4;}
      if(abilityScore >= 20 && abilityScore <= 21){return 5;}
      if(abilityScore >= 22 && abilityScore <= 23){return 6;}
      if(abilityScore >= 24 && abilityScore <= 25){return 7;}
      if(abilityScore >= 26 && abilityScore <= 27){return 8;}
      if(abilityScore >= 28 && abilityScore <= 29){return 9;}
      if(abilityScore >= 30){return 10;}
    };

    //Using the function above, these set the cookies for each ability
    $scope.setStr = function() {
      $scope.strMod = $scope.setModifier(this.abilityScores.str);
      $cookies.str = $scope.abilityScores.str;
    };
    $scope.setDex = function() {
      $scope.dexMod = $scope.setModifier(this.abilityScores.dex);
      $cookies.dex = $scope.abilityScores.dex;
    };
    $scope.setCon = function() {
      $scope.conMod = $scope.setModifier(this.abilityScores.con);
      $cookies.con = $scope.abilityScores.con;
    };
    $scope.setInt = function() {
      $scope.intMod = $scope.setModifier(this.abilityScores.int);
      $cookies.int = $scope.abilityScores.int;
    };
    $scope.setWis = function() {
      $scope.wisMod = $scope.setModifier(this.abilityScores.wis);
      $cookies.wis = $scope.abilityScores.wis;
    };
    $scope.setCha = function() {
      $scope.chaMod = $scope.setModifier(this.abilityScores.cha);
      $cookies.cha = $scope.abilityScores.cha;
    };
  });
