$("#Qui-Gon-Jinn").on("click", function () {
    userPick = $("#Qui-Gon-Jinn");
    enemyOne = $("#Yoda");
    enemyTwo = $("#Darth-Vader");
    enemyThree = $("#Darth-Maul");
    

    $("#character").html(userPick);
    $(".enemy-one").html(enemyOne);
    $(".enemy-two").html(enemyTwo);
    $(".enemy-three").html(enemyThree);

    enemyOne.attr("class", "enemies");
    enemyTwo.attr("class", "enemies");
    enemyThree.attr("class", "enemies");

    
    $(enemyOne).on("click", function(){
        $("#defender").html(enemyOne);
        enemyOne.attr("id", "defender");

        $("#attack").on("click", function(){
            timesClick++;
            console.log("times clicked: " + timesClick);

            quiGon -= 25;
            console.log(quiGon);

            yoda -= 8*timesClick;
            console.log(yoda)

            youAttacked.text("You attacked Yoda for " + 8*timesClick + " damage");
            enemyAttacked.text("Yoda attacked you back for 25 damage");
            $(healthQui).text(quiGon);
            $(healthYoda).text(yoda);

            if(quiGon === 0){
                alert("sorry, you lost!");
            }
            if (yoda === 0){
                alert("you won!")
            }

        });
    });


});