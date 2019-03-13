var optionCharacters = ["Yoda", "Qui-Gon-Jinn", "Darth-Vader", "Darth-Maul"];
var enemyOne; var enemyTwo; var enemyThree; var enemies; 
        var quiGon =  100;
        var darthMaul = 120;
        var darthVader = 150;
        var yoda = 180;
        var timesClick=0;
        var userPick="";
        var trueFalse=true;
        var trueFalse2=true;
        var enemies=[];
       

        var youAttacked = $("#youAttacked");
        var enemyAttacked = $("#enemyAttacked");
        var winLossMessage = $("#win-loss");
        
        var healthQui=$("#health-quigon");
        //$(healthQui).html(quiGon);
        $(healthQui).text(quiGon);

        var healthMaul = $("#health-maul");
        //$(healthMaul).html(darthMaul);
        $(healthMaul).text(darthMaul);

        var healthVader = $("#health-vader");
        //$(healthMaul).html(darthMaul);
        $(healthVader).text(darthVader);

        var healthYoda = $("#health-yoda");
        //$(healthMaul).html(darthMaul);
        $(healthYoda).text(yoda);
        
       console.log("qui gon health start: " + quiGon);
       console.log("yoda health start: " + yoda);
       console.log("maul health start: " + darthMaul);
       console.log("vader health start: " + darthVader);




    function chooseCharacter(chosenId){
        if(userPick === ""){
            userPick = $("#" + chosenId);

            for(var x=0; x<optionCharacters.length; x++){
                if(chosenId === optionCharacters[x]){
                    console.log("This is the character that the user picked " + optionCharacters[x]);
                    $("#character").html(userPick);
                }
                else{
                    enemies.push(optionCharacters[x]);
                    console.log("This are the enemies that the user can fight " + optionCharacters[x]);
                }
                
            }         
       }
    }


    $(".character").on("click", function () {
        var selectedCharacter = $(this);
        chooseCharacter(selectedCharacter.attr("id"));
        for(var y=0; enemies.length; y++){
            enemyOne=enemies[0];
            enemyTwo=enemies[1];
            enemyThree=enemies[2];
            $(".enemy-one").html(enemyOne);
            $(".enemy-two").html(enemyTwo);
            $(".enemy-three").html(enemyThree);
          //  enemyOne.attr("class", "enemies");
            //enemyTwo.attr("class", "enemies");
            //enemyThree.attr("class", "enemies");
        }
            console.log(enemyOne);

        
        //chooseEnemyOne();
       // attack();
    });
    

