
var optionCharacters = ["Yoda", "Qui-Gon-Jinn", "Darth-Vader", "Darth-Maul"];
var valuesCharacters = [180, 100, 150, 120];
var enemyOne; var enemyTwo; var enemyThree; var enemies; 
        var quiGon =  100;
        var darthMaul = 120;
        var darthVader = 150;
        var yoda = 180;
        var timesClick=0;
        var userPick="";
        var trueFalse=true;
        var trueFalse2=true;
        var enemies = [];
        var healthEnemies = [];
        var userhealth = "";
        var currentEnemy="";
        var valueUserPick;
        var healthUser;

        var youAttacked = $("#youAttacked");
        var enemyAttacked = $("#enemyAttacked");
        var winLossMessage = $("#win-loss");
        
        var healthQui=$("#health-quigon");
        //$(healthQui).html(quiGon);
        $(healthQui).text(valuesCharacters[1]);

        var healthMaul = $("#health-maul");
        //$(healthMaul).html(darthMaul);
        $(healthMaul).text(valuesCharacters[3]);

        var healthVader = $("#health-vader");
        //$(healthMaul).html(darthMaul);
        $(healthVader).text(valuesCharacters[2]);

        var healthYoda = $("#health-yoda");
        //$(healthMaul).html(darthMaul);
        $(healthYoda).text(valuesCharacters[0]);
        
       console.log("qui gon health start: " + quiGon);
       console.log("yoda health start: " + yoda);
       console.log("maul health start: " + darthMaul);
       console.log("vader health start: " + darthVader);


       function chooseEnemyTwo(){
            $(enemyTwo).on("click", function(){
            console.log("esto no debería contar " + timesClick);
            winLossMessage.text("");
            $("#defender").html(enemyTwo);
            enemyTwo.attr("id", "defender-style");
            attackTwo();
            });
        }

        function chooseCharacter(chosenId){
        if(userPick === ""){
            userPick = $("#" + chosenId);
            for(var x=0; x<optionCharacters.length; x++){
                if(chosenId === optionCharacters[x]){
                    console.log("This is the character that the user picked " + optionCharacters[x]);
                    healthUser=valuesCharacters[x];
                    user=optionCharacters[x];
                    userhealth = document.getElementById(optionCharacters[x]).getElementsByClassName("absolute-health")[0];
                    console.log("user: " + userhealth);
                }
                else{
                    enemies.push(optionCharacters[x]);
                    console.log("This are the enemies that the user can fight " + optionCharacters[x]);                
                }   
            } 

            enemyOne = $("#" + enemies[0]);
            enemyTwo = $("#" + enemies[1]);
            enemyThree = $("#" + enemies[2]);
            
            $("#character").html(userPick);
            $(".enemy-one").html(enemyOne);
            $(".enemy-two").html(enemyTwo);
            $(".enemy-three").html(enemyThree);

            console.log(enemies.length);

            
            userPick.attr("class", "relative " + chosenId);
            enemyOne.attr("class", "enemies currentE " +  enemies[0]);
            enemyTwo.attr("class", "enemies currentE " +  enemies[1]);
            enemyThree.attr("class", "enemies currentE " +  enemies[2]);
            
            }
       }
        function chooseEnemy(){
            $(".currentE").on("click", function(){
                var selected= $(this);
                if(currentEnemy=== ""){
                    currentEnemy = selected;
                    $("#defender").html(currentEnemy);
                    currentEnemy.attr("id", "defender-style");
                    trueFalse=true;
                }
            });
        }

        
        function attack(){
            $("#attack").on("click", function(){
                if(trueFalse === true){
                    timesClick++;
                    console.log("times clicked: " + timesClick);
                    


                    if(currentEnemy.hasClass("Yoda") && userPick.hasClass(user)){
                        console.log("Yoda hola");
                        //console.log(currentEnemy);
                        

                        yoda -= 8*timesClick;
                        healthUser -= 25;

                        userhealth.innerHTML = healthUser;
                        $(healthYoda).text(yoda);

                        console.log(yoda);
                        console.log(healthUser);

                        youAttacked.text("You attacked Yoda for " + 8*timesClick + " damage");
                        enemyAttacked.text("Yoda attacked you back for 25 damage");                

                        if(healthUser <= 0){
                            alert("sorry, you lost!");
                            location.reload();
                        }
    
                        if (yoda <= 0){
                            currentEnemy.hide();
                            currentEnemy="";
                            youAttacked.text("");                        
                            enemyAttacked.text("");
                            winLossMessage.text("You have defeated Yoda, you can choose to fight another enemy.");
                            trueFalse=false;
                        }      
                        
                    }

                    else if(currentEnemy.hasClass("Qui-Gon-Jinn") && userPick.hasClass(user)){
                        console.log("Qui-Gon-Jinn hola");

                        quiGon -= 8*timesClick;
                        healthUser -= 5;

                        userhealth.innerHTML = healthUser;
                        $(healthQui).text(quiGon);

                        console.log(quiGon);
                        console.log(healthUser);

                        youAttacked.text("You attacked Qui-Gon-Jinn for " + 8*timesClick + " damage");
                        enemyAttacked.text("Qui-Gon-Jinn attacked you back for 5 damage");                

                        if(healthUser <= 0){
                            alert("sorry, you lost!");
                            location.reload();
                        }
    
                        if (quiGon <= 0){
                            currentEnemy.hide();
                            currentEnemy="";
                            youAttacked.text("");                        
                            enemyAttacked.text("");
                            winLossMessage.text("You have defeated Qui-Gon-Jinn, you can choose to fight another enemy.");
                            trueFalse=false;
                        }      
                        
                    }

                    else if(currentEnemy.hasClass("Darth-Vader") && userPick.hasClass(user)){
                        console.log("Darth-Vader hola");
                        

                        console.log(currentEnemy);
                        darthVader -= 8*timesClick;
                        healthUser -= 20;

                        userhealth.innerHTML = healthUser;
                        $(healthVader).text(darthVader);

                        console.log(darthVader);
                        console.log(healthUser);

                        youAttacked.text("You attacked Darth-Vader for " + 8*timesClick + " damage");
                        enemyAttacked.text("Darth-Vader attacked you back for 20 damage");                

                        if(healthUser <= 0){
                            alert("sorry, you lost!");
                            location.reload();
                        }
    
                        if (darthVader <= 0){
                            currentEnemy.hide();
                            currentEnemy="";
                            youAttacked.text("");                        
                            enemyAttacked.text("");
                            winLossMessage.text("You have defeated Darth-Vader, you can choose to fight another enemy.");
                            trueFalse=false;
                        }      
                        
                    }

                    else if(currentEnemy.hasClass("Darth-Maul") && userPick.hasClass(user)){
                        console.log("Darth-Maul hola");
                        console.log(currentEnemy);

                        darthMaul -= 8*timesClick;
                        healthUser -= 15;

                        userhealth.innerHTML = healthUser;
                        $(healthQui).text(quiGon);

                        console.log(quiGon);
                        console.log(healthUser);

                        youAttacked.text("You attacked Darth-Maul for " + 8*timesClick + " damage");
                        enemyAttacked.text("Darth-Maul attacked you back for 15 damage");                

                        if(healthUser <= 0){
                            alert("sorry, you lost!");
                            location.reload();
                        }
    
                        if (darthMaul <= 0){
                            currentEnemy.hide();
                            currentEnemy="";
                            youAttacked.text("");                        
                            enemyAttacked.text("");
                            winLossMessage.text("You have defeated Darth-Maul, you can choose to fight another enemy.");
                            trueFalse=false;
                        }      
                        
                    }
                
                }
                else{
                    winLossMessage.text("No enemy. Please pick one.");
                    console.log("times clicked: " + timesClick);
                }  
            });
        }
            
        $(".character").on("click", function () {
            var selectedCharacter = $(this);
            chooseCharacter(selectedCharacter.attr("id"));
            chooseEnemy();
            attack();
            chooseEnemy();
            attack();
            
        });