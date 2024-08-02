// Initialize all variables
var username;
var password;
var firstName;
var records;
var present;
var existingUser;
var usernames;
var idx;
var quotes;
var quoteIdx = 0;
var insightComment;
var userLocation;
var journalPrompts;
var jrnlIdx = 0;
var jrnlEntry;
var chosenPrompt;
var pastEntriesIdx;

var userEntries;
var userPrompts;

// LOGIN AND MENU
onEvent("menuLoginButton", "click", function ( ) {
  setScreen("LoginScreen");
  hideElement("redirectSignupButton");
  setText("usernameInput", "");
  setText("passwordInput", "");
});
onEvent("menuSignupButton", "click", function ( ) {
  setScreen("SignupScreen");
  hideElement("redirectLoginButton");
  loginReset();
});
onEvent("loginBackButton", "click", function ( ) {
  setScreen("SlashScreen");
  loginReset();
  hideElement("incorrectPasswordButton");
  hideElement("redirectSignupButton");
});
onEvent("signupBackButton", "click", function ( ) {
  setScreen("SlashScreen");
  signupReset();
});
onEvent("redirectSignupButton", "click", function ( ) {
  setScreen("SignupScreen");
  hideElement("redirectLoginButton");
  loginReset();
});
onEvent("redirectLoginButton", "click", function ( ) {
  hideElement("redirectLoginButton");
  setScreen("LoginScreen");
  signupReset();
});
onEvent("incorrectPasswordButton", "click", function ( ) {
  loginReset();
  hideElement("incorrectPasswordButton");
  hideElement("redirectSignupButton");
});

onEvent("logOutBtn", "click", function ( ) {
  setScreen("SlashScreen");
  loginReset();
  signupReset();
  hideElement("incorrectPasswordButton");
  hideElement("redirectSignupButton");
  setText("locationInsightBox", "");
});

onEvent("quotesButton", "click", function ( ){
  setScreen("QuotesScreen");
  resilienceReminders();
});

onEvent("journalingBackBtn", "click", function ( ) {
  setScreen("MenuScreen");
});


function loginReset() {
  setText("usernameInput", "");
  setText("passwordInput", "");
}

function signupReset() {
  setText("signupUsernameInput", "");
  setText("signupPasswordInput", "");
  setText("firstNameInput", "");
}

function confirmAcc(username, password) {
  // See if user already has an account
  records = readRecordsSync("Logins");
  // Search through records to see if the given user + password already exist
  present = false;
  existingUser = false;
  for (var i=0; i<records.length; i++) {
    if ((username == records[i].Username) && (password == records[i].Password)) {
      present = true;
    } 
    if ((username == records[i].Username && password != records[i].Password)) {
      existingUser = true;
    }
  }
  console.log("Present: " + present  + "\n" + "existingUser: " + existingUser);
  return present, existingUser;
}

onEvent("loginButton", "click", function() {
  // Get user information
  username = getText("usernameInput");
  password = getText("passwordInput");
  
  // Find index of username (corresponds w/ first name), then access First Name of User
  
  // Use the following two lines of code to make a function
  usernames = getColumn("Logins", "Username");
  idx = usernames.indexOf(username);
  console.log(idx);
  // Stop
  
  var firstNames = getColumn("Logins", "FirstName");
  firstName = firstNames[idx];
  console.log(firstName);
  
  // See if the user already has an account; returns boolean 'present'
  confirmAcc(username, password);
  
  if (present == false) {
    showElement("redirectSignupButton");
    // Then, user is prompted to press the button -> SignupScreen
  }
  else { // User already has an account, so they are prompted to MenuScreen
    setScreen("MenuScreen");
    setText("nameBox", firstName + "!");
  }
  if (existingUser == true) {
    showElement("incorrectPasswordButton");
  }
});


onEvent("signUpButton", "click", function ( ) {
  // Get user information
  usernames = getColumn("Logins", "Username");
  username = getText("signupUsernameInput");
  idx = usernames.indexOf(username);
  password = getText("signupPasswordInput");
  firstName = getText("firstNameInput");
  
  // Determine if any inputs are blank => invalid
  if (username.trim().toLowerCase() == "" || password.trim().toLowerCase() == "" || firstName.trim().toLowerCase() == "") {
    setScreen("SignupScreen");
  }
  
  confirmAcc(username, password);
  
  if (present == true || existingUser == true) {
    showElement("redirectLoginButton");
    // User is prompted to press a button -> LoginScreen
  }
  else { // User has created their account, so they are prompted to initial MenuScreen
    setScreen("MenuScreen");
    setText("nameBox", firstName + "!");
    // Add user info to records
    createRecordSync("Logins", {Username:username, Password:password, FirstName:firstName});
  }
  
  
});


// QUOTES
function resilienceReminders() {
  quotes = getColumn("ResilienceReminders", "Comment");
  quoteIdx = 0;
  updateQuoteScreen();
}
  
onEvent("forwardQuote", "click", function ( ) {
  if (quoteIdx < quotes.length-1) {
    quoteIdx++;
    updateQuoteScreen();
  }
  console.log(quoteIdx); //
}); 
  
onEvent("backQuote", "click", function ( ) {
    // console.log()
  if (quoteIdx > 0) {
    quoteIdx--;
    updateQuoteScreen();
  }
  console.log(quoteIdx); // 
}); 
  
onEvent("quoteBackBtn", "click", function ( ) {
  setScreen("MenuScreen");
});
  
onEvent("shareInsightButton", "click", function ( ) {
  setScreen("ShareInsightScreen");
});
  
onEvent("shareQuoteBackBtn", "click", function ( ) {
  setScreen("QuotesScreen");
  setText("shareInsightBox", "");
  setProperty("shareQuoteBackBtn", "background-color", "rgb(38, 68, 69)");
  setProperty("shareQuoteBackBtn", "text-color", "rgb(239, 248, 226)");
  // quoteIdx++;
  updateQuoteScreen();
});
  
onEvent("submitInsightBtn", "click", function ( ) {
  insightComment = getText("shareInsightBox");
  userLocation = getText("locationInsightBox");
  // Check to see if user submitted a blank entry
  if (insightComment.trim() == "" || userLocation.trim() == "") {
    showElement("invalidReminderSubmissionBtn");
  } 
  
  else {
    var cmt = firstName + " from " + userLocation + ":\n\n" + insightComment;
    createRecordSync("ResilienceReminders", {Comment:cmt});
    setText("shareInsightBox", "");
    setProperty("shareQuoteBackBtn", "background-color", "rgb(239, 248, 226)");
    setProperty("shareQuoteBackBtn", "text-color", "rgb(38, 68, 69)");
  }
});

onEvent("invalidReminderSubmissionBtn", "click", function ( ) {
  hideElement("invalidReminderSubmissionBtn");
});
 
function updateQuoteScreen() {
  quotes = readRecordsSync("ResilienceReminders");
  setText("quoteBox", quotes[quoteIdx].Comment);
}



// JOURNALING
onEvent("journalingButton", "click", function ( ) {
  setScreen("JournalingScreen");
  journaling();
});

function journaling() {
  journalPrompts = getColumn("JournalPrompts", "Prompts");
  jrnlIdx = 0;
  updateJournalScreen();
}

onEvent("journalForward", "click", function ( ) {
  if (jrnlIdx < journalPrompts.length-1) {
    jrnlIdx++;
  }
  updateJournalScreen();
});

onEvent("journalBack", "click", function ( ) {
  if (jrnlIdx > 0) {
    jrnlIdx--;
  }
  updateJournalScreen();
});


var month;
var day;
var year;

onEvent("choosePromptBtn", "click", function ( ) {
  journalPrompts = readRecordsSync("JournalPrompts");
  chosenPrompt = journalPrompts[jrnlIdx].Prompts;
  setScreen("JournalEntryScreen");
  setText("chosenPromptBox", chosenPrompt);
  setText("pastEntryBox", "");
});

onEvent("seePastEntriesBtn", "click", function () {
  
  setScreen("PastJournalEntriesScreen");
  var allEntries = readRecordsSync("PromptEntries");
  userEntries = [];
  userPrompts = [];
  
  for (var i=0; i<allEntries.length; i++) {
    if (allEntries[i].Username == username){
      appendItem(userEntries, allEntries[i].Entry);
      appendItem(userPrompts, allEntries[i].Prompt);
    }
  }
  pastEntriesIdx = 0;
  updatePastEntries();
});

function updatePastEntries() {
  console.log(userEntries);
  if (userEntries.length >= 1) {
    setText("pastPromptBox", userPrompts[pastEntriesIdx]);
    setText("pastEntryBox", userEntries[pastEntriesIdx]);
  }
  else {
    setText("pastPromptBox", "no entry yet.");
    setText("pastEntryBox", "go back to submit your first journal entry!");
  }
}

onEvent("pastEntryBackBtn", "click", function () {
  setText("pastPromptBox", "");
  setText("pastEntryBox", "");
  setScreen("JournalingScreen");
});


onEvent("pastEntryForward", "click", function ( ) {
  if (pastEntriesIdx < userEntries.length-1) {
    pastEntriesIdx++;
  }
  updatePastEntries();
});

onEvent("pastEntryBack", "click", function () {
  if (pastEntriesIdx > 0) {
    pastEntriesIdx--;
  }
  updatePastEntries();
});


onEvent("journalBackBtn", "click", function () {
  jrnlIdx = 0;
  updateJournalScreen();
  setScreen("JournalingScreen");
});

onEvent("shareEntryBtn", "click", function () {
  var dateCheck = new Date();
  var correspondingMonths = {
    "1" : "january",
    "2" : "feburary",
    "3" : "march", 
    "4" : "april",
    "5" : "may",
    "6": "june", 
    "7" : "july", 
    "8" : "august",
    "9" : "september",
    "10" : "october",
    "11" : "november", 
    "12" : "december"
  };
  month = correspondingMonths[(dateCheck.getMonth() + 1).toString()];
  day = dateCheck.getDate().toString();
  year = dateCheck.getFullYear().toString();
  
  jrnlEntry = getText("journalEntryBox");
  var promptText = month + " " + day + ", " + year + ":\n" + chosenPrompt;
  createRecordSync("PromptEntries", {Username:username, Entry:jrnlEntry, Prompt:promptText});
  setScreen("JournalingScreen");
  setText("journalEntryBox", "");
});

function updateJournalScreen() {
  journalPrompts = readRecordsSync("JournalPrompts");
  setText("journalingPromptsBox", journalPrompts[jrnlIdx].Prompts);
}

// FITBOT - PHYSICAL HEALTH AI CHATBOT
onEvent("fitBotButton", "click", function ( ) {
  open("https://vitality-fitbot.vercel.app/");
});

