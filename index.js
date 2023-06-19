function saturdayFun(activity = 'roller-skate') {
    return `On Saturdays, I like to ${activity}!`;
  }
  
  function mondayWork(task = 'go to the office') {
    return `On Mondays, I have to ${task}.`;
  }
  
  function wrapAdjective(flair = '*') {
    return function (adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  
  console.log(saturdayFun()); 
  console.log(saturdayFun('go hiking')); 
  
  console.log(mondayWork()); 
  console.log(mondayWork('attend meetings')); 
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction()); 
  console.log(encouragingPromptFunction("a dedicated programmer")); 
  
