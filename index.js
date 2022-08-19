function scuberGreetingForFeet(ride){

  if (ride <= 400) {
    return `This one is on me!` 
  } else if (ride >2000 && ride<2500){
    return `I will gladly take your thirty bucks.`
  }else if (ride > 2500){
    return `No can do.`
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2551);

function ternaryCheckCity(city){
 return city === "NYC"? "Ok, sounds good.": "No go."
}
// ternaryCheckCity("NYC");
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  switch(tip){
    case tip = "generous":
      return `Thank you so much.`;
      break;
    case tip = "not as generous":
      return `Thank you.`;
      break;
    default:
      return "Bye."   
  }   
};
switchOnCharmFromTip("generous")
switchOnCharmFromTip("not as generous")
switchOnCharmFromTip(tip);