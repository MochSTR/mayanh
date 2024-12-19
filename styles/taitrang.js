// JavaScript Document
const responses = {
    "Xin chào": "Chào bạn, tôi có thể giúp gì cho bạn?",
	"hello": "Chào bạn, tôi có thể giúp gì cho bạn?",
    "coding hubs": "Tại đây bạn sẽ nhận được Ghi chú, Ebooks, Mã nguồn dự án, Câu hỏi phỏng vấn. ghé thăm Trung tâm mã hóa.<a href='https://thecodinghubs.com' target='_blank'>Visit Website</a>",
    "Bạn khỏe không?": "tôi chỉ là một con bot, nhưng tôi ở đây để giúp bạn >:D!",
	"Bạn dạo này sao rồi?": "tôi chỉ là một con bot, nhưng tôi ở đây để giúp bạn >:D!",
	"Bạn thế nào rồi?": "tôi chỉ là một con bot, nhưng tôi ở đây để giúp bạn >:D!",
    "tôi cần giúp đỡ": "Hôm nay tôi có thể giúp gì cho bạn ?",
    "tạm biệt bạn": "Tạm biệt! Chúc một ngày tốt lành!",
	"hẹn gặp lại bạn": "Tạm biệt! Chúc một ngày tốt lành!",
	"bye": "Tạm biệt! Chúc một ngày tốt lành!",
    "default": "Xin lỗi, tôi không hiểu được cái đấy. Muốn kết nối với chuyên gia không?",
    "tôi cần chuyên gia": "Được! Vui lòng đợi trong giây lát trong khi chúng tôi kết nối bạn với chuyên gia.",
	"i need expert": "Được! Vui lòng đợi trong giây lát trong khi chúng tôi kết nối bạn với chuyên gia.",
    "không.": "Được rồi, nếu bạn đổi ý thì hãy cho tôi biết!",
	"no.": "Được rồi, nếu bạn đổi ý thì hãy cho tôi biết!",
	"tôi muốn hỏi giá sản phẩm": "Oke Bạn, Giá ban đầu của sản phẩm là 23,200,000đ. Tuy nhiên, nay chúng tôi đang có khuyến mãi giảm giá xuống còn 20,350,000đ. Nếu bạn còn có gì thắc mắc thì cứ nói nhé!"
};
document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}
function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}
function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}
function checkForBadWords(message) {
      const badWords = ["ngu", "đjt mẹ", "má"];

      // Convert message to lowercase for case-insensitive matching
      const lowerCaseMessage = message.toLowerCase();

      // Check if any bad word is present in the message
      for (const word of badWords) {
        if (lowerCaseMessage.includes(word)) {
          return true; // Bad word found
        }
      }

      return false; // No bad words found
    }
      const messageInput = document.getElementById("message");
      const message = messageInput.value;

      if (checkForBadWords(message)) {
        alert("Please avoid using offensive language.");
      } else {
        // Send the message to the chatbot (replace with your actual chatbot logic)
        // ...
      }
    const addToCartBtn = document.getElementById('addToCart');
const cartList = document.getElementById('cartList');
const productImages = document.querySelectorAll('.product-images img');

addToCartBtn.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.textContent = "Product Name"; 

  // Add the first product image to the cart item (you can choose to add all or selected images)
  const cartImage = document.createElement('img');
  cartImage.src = productImages[2].src; 
  listItem.appendChild(cartImage); 

  cartList.appendChild(listItem);
});

  