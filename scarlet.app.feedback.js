function IOappSel(){
  document.getElementById("input1").value = "App";

  document.getElementById("IOapp").style.backgroundColor = "rgba(132, 91, 183, 1)";
  document.getElementById("IOweb").style.backgroundColor = "DeepSkyBlue";
}
function IOwebSel(){
  document.getElementById("input1").value = "Website";

  document.getElementById("IOweb").style.backgroundColor = "rgba(132, 91, 183, 1)";
  document.getElementById("IOapp").style.backgroundColor = "DeepSkyBlue";
}

function ITsugSel(){
  document.getElementById("input2").value = "Suggestion";

  document.getElementById("ITsug").style.backgroundColor = "rgba(132, 91, 183, 1)";
  document.getElementById("ITbug").style.backgroundColor = "DeepSkyBlue";
}
function ITbugSel(){
  document.getElementById("input2").value = "Bug Report";

  document.getElementById("ITbug").style.backgroundColor = "rgba(132, 91, 183, 1)";
  document.getElementById("ITsug").style.backgroundColor = "DeepSkyBlue";
}

function submitfb(){
  var applicationfb = document.getElementById("input1").value;
  var reasonfb = document.getElementById("input2").value;

  var idesc = document.getElementById("inputDesc").value;
  var sendemail = "Feedback type: " + applicationfb + " " + reasonfb + ";  " + idesc;

  var email = 'alshhh.123.987@gmail.com'
  var subject = 'Scarlet Feedback';
  var emailBody = sendemail;
  var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
  win = window.open(mailto_link, 'emailWin');

}
