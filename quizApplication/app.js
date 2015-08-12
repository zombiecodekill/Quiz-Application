function askquestion(questions,awnserselectionone,
                     awnserslectiontwo,correctawnserone,
                     correctawnsertwo){
    this.askquestions = questions;
    this.questionawnser= awnserselectionone;
    this.questionawnsertwo = awnserslectiontwo
    this.correctawnserone = correctawnserone;
    this.correctawnsertwo = correctawnsertwo;

}
askquestion.prototype.addquestion = function(){
    //stuff to set up tomarow take and incrment the array

    var point= 0;
    var wrong = 0;
    var quest = []

    var userchoicesone=[];
    var userchoicetwo = [];

    var userawnserscorrect = [];
    var userawnserscorrecttwo = [];

    quest.push(this.askquestions);

    userchoicesone.push(this.questionawnser);
    userchoicetwo.push(this.questionawnsertwo);

    userawnserscorrect.push(this.correctawnserone);
    userawnserscorrecttwo.push(this.correctawnsertwo);

    for(i=0; i<quest.length; i++){
        $("#question").html("your question is" + quest[i]);
    }

    for(i=0; i<userchoicesone.length; i++){
        $("#choice0").html("your question is" + userchoicesone[i]);
        var choice = userchoicesone[i];
    }

    for(i=0; i<userchoicetwo.length; i++){
        $("#choice1").html("your question is" + userchoicetwo[i]);
        //var choice = user[i];
    }

    $("#guess0").click(function(){
        for(i=0; i<userawnserscorrect.length; i++){
            if(userawnserscorrect[i]==="correct"){
                point+=1;
            }else{
                wrong+=1;
            }
        }

        $("#progress").html("Question" + "" + point + "of" + wrong )
    });



    $("#guess1").click(function(){
        for(i=0; i<userawnserscorrecttwo.length; i++){
            if(userawnserscorrecttwo[i]==="correct"){
                point+=1;
            }else{
                wrong+=1;
            }
        }
        $("#progress").html(" You got questions" + "" + point + "of" + wrong + "right")
    });



}
function createquiz(){
    var done = [
        a = new askquestion("question one","questiononeawnser","questionawnsertwo","correct","incorect"),
        b = new askquestion("question two","questiononeawnser three","questionawnser four","incorect","correct"),
    ]
    count =0;
    for(i=0; i<done.length; i++){
        done[count].addquestion()
        $("#guess0").click(function(){
            count+=1;
            done[count].addquestion()
        });
        $("#guess1").click(function(){
            count+=1;
            done[count].addquestion()
        });
    }
}

createquiz();