async function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    let res = await fetch("/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: message})
    });

    let data = await res.json();
    addMessage(data.response, "bot");
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chatBox");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
