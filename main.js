// Get the div elements for displaying the current time in Beijing and New York
const beijingTimeDiv = document.getElementById("beijing-time");
const newYorkTimeDiv = document.getElementById("new-york-time");

// Get the div elements for displaying the website's introduction in Chinese and English
const chineseIntroductionDiv = document.getElementById("chinese-introduction");
const englishIntroductionDiv = document.getElementById("english-introduction");

// Function to get the current time in Beijing
function getCurrentTimeInBeijing() {
  const currentTime = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: false, timeZone: "Asia/Shanghai" };
  const beijingTime = currentTime.toLocaleString("en-US", options);
  return beijingTime;
}

// Function to get the current time in New York
function getCurrentTimeInNewYork() {
  const currentTime = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: false, timeZone: "America/New_York" };
  const newYorkTime = currentTime.toLocaleString("en-US", options);
  return newYorkTime;
}

// Function to display the current time in Beijing
function displayBeijingTime() {
  const beijingTime = getCurrentTimeInBeijing();
  beijingTimeDiv.textContent = `Beijing Time: ${beijingTime}`;
}

// Function to display the current time in New York
function displayNewYorkTime() {
  const newYorkTime = getCurrentTimeInNewYork();
  newYorkTimeDiv.textContent = `New York Time: ${newYorkTime}`;
}

// Function to display the website's introduction in Chinese
function displayChineseIntroduction() {
  chineseIntroductionDiv.textContent = "网站功能介绍（中文）";
}

// Function to display the website's introduction in English
function displayEnglishIntroduction() {
  englishIntroductionDiv.textContent = "Website Introduction (English)";
}

// Call the functions to display the current time and website introduction
displayBeijingTime();
displayNewYorkTime();
displayChineseIntroduction();
displayEnglishIntroduction();
