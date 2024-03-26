/* This is the JavaScript file for handling user input and API calls */
document.getElementById("submitButton").addEventListener("click", function() {
    var inputText = document.getElementById("inputTextarea").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.openai.com/gpt-4.0/modify-essay", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("suggestionsTextarea").value = response.suggestions;
            document.getElementById("outputTextarea").value = response.modifiedEssay;
        }
    };
    xhr.send(JSON.stringify({ essay: inputText }));
});
