/* This is the JavaScript file for handling user input and API calls */
document.getElementById("submitButton").addEventListener("click", function() {
    var inputText = document.getElementById("inputTextarea").value;

    // 调用chatgpt
    callChatGPT(generatePrompt(inputText));
    return false;
});

// 定义一个函数，用于调用chatgpt
function callChatGPT(prompt) {
    // 通过环境变量获取api_key
    var api_key = process.env["OPENAI_API_KEY"];
    // 检查 API 密钥是否存在
    if (!apiKey) {
        console.error("OpenAI API key is missing");
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.openai.com/v1/chat/completions", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + api_key);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var reply = response.choices[0].message.content;
            console.log(reply)
            // 将reply转换为json格式
            var replyJson = JSON.parse(reply);
            // 将replyJson中的内容写入相应的文本框
            document.getElementById("outputTextarea").textContent = replyJson.analysis;
            // 将replyJson中的建议写入相应的文本框
            document.getElementById("suggestionsTextarea").textContent = replyJson.suggestions.join("\n");
        }
    };
    xhr.send(JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500,
        model: "gpt-3.5-turbo",
    }));
}

// 定义一个函数，将用户的输入和prompt组合在一起
function generatePrompt(inputText) {

    // 定义一个prompt模版，这个模版主要功能是要求gpt对inputText进行专业的雅思论文写作的分析建议
    var prompt = "你是一个专业的雅思英语作文专家，请对以下雅思论文写作进行专业的分析建议，并给出修改意见。\n\n作文内容是：\n"+ inputText +"\n\n请给出修改意见，并给出修改后的内容。" +
        "请以以下json格式返回结果：\n{\n    \"analysis\": \"\",\n    \"suggestions\": [\"\"]\n}";
    return prompt;
}
