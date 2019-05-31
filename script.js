var createPolitician= function(name, partyColor){
  
  var politician = {};//new blank object
  politician.name= name;//set name porpery to the value of the name parameter
  politician.electionResults=null;
  politician.totalVotes= 0; 
  politician.partyColor=partyColor;
  

  politician.tallyUpTotalVotes= function(){
    
    this.totalVotes= 0;
    
    for (var i = 0; i< this.electionResults.length; i++){this.totalVotes=this.totalVotes + this.electionResults[i]; }
  }
     
  return politician;
  
};


var heather= createPolitician("Heather Runyon",[132, 17, 11]);

var carly= createPolitician("Carly Rocco",[245, 141, 136]);

//console.log(carly.partyColor);
//console.log(heather.partyColor);

heather.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
 
carly.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

heather.electionResults[9] = 1;
carly.electionResults[9] = 28;
 
heather.electionResults[4] = 17;
carly.electionResults[4] = 38;
 
heather.electionResults[43] = 11;
carly.electionResults[43] = 27;
 
//console.log(heather.electionResults);
//console.log(carly.electionResults);


// set the state function 
var setStateResults= function(state){
  
   theStates[state].winner= null;
  
    if(heather.electionResults[state]>carly.electionResults[state]){
      
      theStates[state].winner=heather;
      
    }else if(heather.electionResults[state]<carly.electionResults[state]){
      
      theStates[state].winner=carly;
  }
  
  
//color should change on map  
  var stateWinner = theStates[state].winner;
 
      if (stateWinner !== null) {
        
      theStates[state].rgbColor = stateWinner.partyColor;
        
      } else {
        
        theStates[state].rgbColor = [11,32,57];}
  
  
  var countryInfoTable=document.getElementById('countryResults');
  
   var row=countryInfoTable.children[0].children[0];
   
      row.children[0].innerText = heather.name;
      row.children[1].innerText = heather.totalVotes;
      row.children[2].innerText= carly.name;
      row.children[3].innerText= carly.totalVotes;
      row.children[5].innerText= winner;
  
  
  var stateInfoTable=document.getElementById('stateResults');
  
    var header=stateInfoTable.children[0];
  
    var body=stateInfoTable.children[1];
  
    var stateName=header.children[0].children[0];
  
    var abbrev=header.children[0].children[1];
  
    var name1=body.children[0].children[0];
  
    var name2=body.children[1].children[0];
  
    var result1=body.children[0].children[1];
  
    var result2=body.children[1].children[1];
  
    var winnersName = body.children[2].children[1];
  
 stateName.innerText= theStates[state].nameFull;
  
 abbrev.innerText="("+theStates[state].nameAbbrev +")";
  
  name1.innerText=heather.name;
  
  name2.innerText=carly.name;
  
  result1.innerText=heather.electionResults[state];
  
  result2.innerText=carly.electionResults[state];
  
  
  if(theStates[state].winner === null){
    
    winnersName.innerText="Draw";
    
  } else {
    
    winnersName.innerText= theStates[state].winner.name;
  }
   
  
}


//tally up votes
heather.tallyUpTotalVotes();
carly.tallyUpTotalVotes();

//console.log(heather.totalVotes);
//console.log(carly.totalVotes);


//winner
var winner="";

if(heather.totalVotes > carly.totalVotes){
  
  winner=heather.name;
  
    }else if (heather.totalVotes < carly.totalVotes){winner=carly.name;}

    else {winner="draw"
    
    }
     
//console.log(winner);



  

  

  
  
  

    

  