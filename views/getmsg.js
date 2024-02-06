// Файл getmsg.js
document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('inp');
    const buttonElement = document.getElementById('btn');
     document.addEventListener('keydown',(event) =>{
        if(event.key == 'Enter'){
          const inputValue = inputElement.value;
          console.log('Текст из input:', inputValue);
          inputElement.value = '';
    
      
          // Здесь вы можете отправить данные на сервер, например, с использованием fetch
          fetch('/submitData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputData: inputValue }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Ответ от сервера:', data);
            // Добавьте здесь обработку ответа от сервера, если необходимо
          })
          .catch(error => {
            console.error('Ошибка при отправке данных на сервер:', error.message);
          });
      }
      
    })
    buttonElement.addEventListener('click', function () {
      const inputValue = inputElement.value;
      console.log('Текст из input:', inputValue);
      inputElement.value = '';

  
      // Здесь вы можете отправить данные на сервер, например, с использованием fetch
      fetch('/submitData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputData: inputValue }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Ответ от сервера:', data);
        // Добавьте здесь обработку ответа от сервера, если необходимо
      })
      .catch(error => {
        console.error('Ошибка при отправке данных на сервер:', error.message);
      });
    })
  });
  