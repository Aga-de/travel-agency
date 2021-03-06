export const formatTime = (arg) => {
  if (!arg) {
    return null;
  } else if (isNaN(arg)){
    return null;
  } else if (arg <= 0){
    return null;
  } else if (arg){

    let hours   = Math.floor(arg / 3600);
    let minutes = Math.floor(arg / 60) % 60;
    let seconds = Math.floor(arg % 60);

    if (hours   < 10) {hours   = '0'+hours;}
    if (minutes < 10) {minutes = '0'+minutes;}
    if (seconds < 10) {seconds = '0'+seconds;}

    let time    = hours + ':' + minutes + ':'+ seconds;

    return time; 
  }  
};

