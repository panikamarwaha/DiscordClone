const form = document.querySelector("form")
const chatMessages = document.querySelector(".chat__messages")
const input = document.querySelector(".sendMessage")

form.addEventListener("submit", sendMessage)

function sendMessage(e) {
    e.preventDefault()

    if(input.value !== "") {
        var messageDiv = document.createElement("div")
        messageDiv.className = "message"

        var avatar = document.createElement("img")
        avatar.src = "https://github.com/JawherBalti/discord-clone/blob/master/assets/user1.jpg?raw=true"

        var messageInfo = document.createElement("div")
        messageInfo.className = "message__info"

        var userInfo = document.createElement("h4")
        userInfo.innerHTML = "Paritosh"

        var messageTimestamp = document.createElement("span")
        messageTimestamp.className = "message__timestamp"

        

        const date = new Date()
        const year = date.getFullYear()
        const month = String(date.getMonth()).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")

        messageTimestamp.innerHTML = month + "/" + day + "/" + year

        const message = document.createElement("p")
        message.innerHTML = input.value
        input.value = ""

        var editButton = document.createElement("button");
        editButton.innerHTML = '&#9998';
        editButton.className = "edit-button";
        
        editButton.addEventListener("click", function() {
            // Create an input field for editing
            var editInput = document.createElement("input");
            editInput.value = message.textContent; // Pre-fill with existing content

            // Replace the message text with the input field
            message.replaceWith(editInput);

            // Add event listener for finishing editing
            editInput.addEventListener("submit", function() {
                // Create a new message element with edited content
                var newMessage = document.createElement("p");
                newMessage.className ="newMessage";
                newMessage.textContent = editInput.value;

                // Replace the input field with the new message element
                editInput.replaceWith(newMessage);
            });

            var saveButton = document.createElement("button");
            saveButton.className="save";
            saveButton.textContent = "Save";
            saveButton.addEventListener("click", function() {
                // Update the message text with the edited content
                message.textContent = newMessage;

                messageInfo.removeChild(editInput);
        messageInfo.removeChild(saveButton);
        });messageInfo.appendChild(saveButton);
    });
    


var deleteButton = document.createElement("span");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "x";

        deleteButton.addEventListener("click", function() {
            chatMessages.removeChild(messageDiv);
        });
    

        messageInfo.appendChild(editButton);

        messageInfo.appendChild(deleteButton);

        userInfo.appendChild(messageTimestamp)
        messageInfo.appendChild(userInfo)
        messageInfo.appendChild(message)

        messageDiv.appendChild(avatar)
        messageDiv.appendChild(messageInfo)

        chatMessages.appendChild(messageDiv)
        chatMessages.scrollBy(0, 10000)
    }
}

       