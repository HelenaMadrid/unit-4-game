

var enemyOne; var enemyTwo; var enemyThree; var enemies; 
        var quiGon =  100;
        var darthMaul = 120;
        var darthVader = 150;
        var yoda = 180;
        var timesClick=0;
        var userPick="";
        var trueFalse=true;
        var trueFalse2=true;

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

        var enemyUno = {
            name: "Qui Gon Jinn",
            value: 100
        }

       // $("#Qui-Gon-Jinn").on("click", function () {
        //    userPick = $("#Qui-Gon-Jinn");
          //  enemyOne = $("#Yoda");
          //  enemyTwo = $("#Darth-Vader");
          //  enemyThree = $("#Darth-Maul");
            

          //  $("#character").html(userPick);
          //  $(".enemy-one").html(enemyOne);
          //  $(".enemy-two").html(enemyTwo);
          //  $(".enemy-three").html(enemyThree);
          //  enemyOne.attr("class", "enemies");
          //  enemyTwo.attr("class", "enemies");
          //  enemyThree.attr("class", "enemies");
        
            
          //  $(enemyOne).on("click", function(){
           //     $("#defender").html(enemyOne);
           //     enemyOne.attr("id", "defender");

           //     $("#attack").on("click", function(){
            //        timesClick++;
            //        console.log("times clicked: " + timesClick);

                  //  quiGon -= 25;
                   // console.log(quiGon);

                   // yoda -= 8*timesClick;
                   // console.log(yoda)

                  //  youAttacked.text("You attacked Yoda for " + 8*timesClick + " damage");
                  //  enemyAttacked.text("Yoda attacked you back for 25 damage");
                  //  $(healthQui).text(quiGon);
                  //  $(healthYoda).text(yoda);

                   // if(quiGon === 0){
                   //     alert("sorry, you lost!");
                  //  }
                   // if (yoda === 0){
                  //      alert("you won!")
                   // }

              //  });
           // });
      //  });

        

       // $("#Darth-Vader").on("click", function () {
       //     userPick = $("#Darth-Vader");
        //    $("#character").html(userPick);
       // });

       // $("#Darth-Maul").on("click", function () {
        //    userPick = $("#Darth-Maul");
        //    $("#character").html(userPick);
       // });


        //función de fight en el que el click en botón sea función y que llame a los contrincantes, y guarde los times clicked y los regrese con return.s

      //  $("#attack").on("click", function battle(userPick, defender, timesClick){
        //    timesClick++;
        //    console.log("times clicked: " + timesClick);
       // });
        var characterArray = [];

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
            enemyOne = $("#Qui-Gon-Jinn");
            enemyTwo = $("#Darth-Vader");
            enemyThree = $("#Darth-Maul");

            $("#character").html(userPick);
            $(".enemy-one").html(enemyOne);
            $(".enemy-two").html(enemyTwo);
            $(".enemy-three").html(enemyThree);

            enemyOne.attr("class", "enemies");
            enemyTwo.attr("class", "enemies");
            enemyThree.attr("class", "enemies");
            }
       }
        function chooseEnemyOne(){
        $(enemyOne).on("click", function(){
            $("#defender").html(enemyOne);
            enemyOne.attr("id", "defender-style");
            });
        }   
        function attack(){
            $("#attack").on("click", function(){
                if(trueFalse === true){
                    timesClick++;
                    console.log("times clicked: " + timesClick);

                    yoda -= 5;
                    console.log(yoda);
                    quiGon -= 8*timesClick;
                    console.log(quiGon);

                    youAttacked.text("You attacked Qui Gon Jinn for " + 8*timesClick + " damage");
                    enemyAttacked.text("Qui Gon Jinn attacked you back for 5 damage");
                    $(healthQui).text(quiGon);
                    $(healthYoda).text(yoda);

                    if(yoda <= 0){
                        alert("sorry, you lost!");
                    }

                    if (quiGon <= 0){
                        //enemyOne.hide();
                        enemyOne.remove();
                        youAttacked.text("");                        enemyAttacked.text("");
                        winLossMessage.text("You have defeated Qui Gon Jinn, you can choose to fight another enemy.");
                        trueFalse=false;
                        chooseEnemyTwo();
                    }
                }
                
                else{
                    winLossMessage.text("No enemy. Please pick one.");
                    $(healthQui).text(quiGon);
                    $(healthYoda).text(yoda);
                    console.log("times clicked: " + timesClick);
                    }        
            });
        }

        
        function attackTwo(){
            $("#attack").on("click", function(){
                if(trueFalse2===true){
                    console.log("darth vader " + darthVader);
                    timesClick++;

                    console.log("times clicked: " + timesClick);

                    yoda -= 20;
                    console.log(yoda);

                    darthVader -= 8*timesClick;
                    console.log(darthVader);

                    youAttacked.text("You attacked Darth Vader for " + 8*timesClick + " damage");
                    enemyAttacked.text("Darth Vader attacked you back for 20 damage");
                    winLossMessage.text("");
                    $(healthYoda).text(yoda);
                    $(healthVader).text(darthVader);

                    if(yoda <= 0){
                        alert("sorry, you lost!");
                    }
                    
                    if (darthVader <= 0){
                        enemyTwo.hide();
                        youAttacked.text("");
                        enemyAttacked.text("");
                        winLossMessage.text("You have defeated Darth Vader, you can choose to fight another enemy.");
                        trueFalse2=false;
                    }
                }
                else{
                    winLossMessage.text("No enemy. Please pick one.");
                    $(healthQui).text(quiGon);
                    $(healthYoda).text(yoda);
                    console.log("times clicked: " + timesClick);
                }
            });
        }

       
        $(".character").on("click", function () {
            var selectedCharacter = $(this);
            chooseCharacter(selectedCharacter.attr("id"));
            chooseEnemyOne();
            attack();
            
        });


