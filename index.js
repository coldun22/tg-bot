const cron = require('node-cron');
const TelegramApi = require('node-telegram-bot-api');
const token = '6877753204:AAGqoKW_7oKb0jECbxUcF01XBaNege7WfZI'

const bot = new TelegramApi(token, {polling:true})


process.env.TZ = 'Europe/Warsaw';


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware для обработки JSON данных
app.use(bodyParser.json());

// Установка папки для шаблонов (в данном случае "views")
app.use(express.static(path.join(__dirname, 'views')));

// Обработчик корневого маршрута, отправляющий файл "index.html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

bot.on('sticker',(msg)=>{
  if(chatId == '5353052727'){
    stick = msg.sticker.file_id
    console.log(stick)
    bot.sendSticker(-1002026440938,stick)
  }



})

bot.on('photo',(msg)=>{
  if(chatId == '5353052727'){
    img = msg.photo
    bot.sendPhoto(-1002026440938,img)
  }


})

bot.on('voice',(msg)=>{
  voice = msg.voice 
  if(chatId == '5353052727'){
    bot.sendVoice(-1002026440938,voice)

  }

})



function sendmsg(txt){
  bot.sendMessage(-1002026440938,txt)
}
// bot.on('poll',(msg)=>{
//   if(msg.sticker && msg.from.id== leva){
//     bot.deleteMessage(chatId, msg.message_id)
//   }
// })

cron.schedule('0 6 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 7 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('50 9 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('40 10 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('40 11 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('40 12 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 8 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 12 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 14 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 16 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 18 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 18 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 20 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

cron.schedule('0 22 * * *', () => {
  // Этот код будет выполняться каждый день в 8:00 утра
  sendmsg('Кого мы любим?')
  setTimeout(()=>{
    sendmsg('Кого мы просветляем?')
    setTimeout(()=>{
      sendmsg('Кого мы уважаем?')
      setTimeout(()=>{
        sendmsg('Серёёёжа')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Он же наш кумииир.')
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
},);

bot.on('message',async (msg)=>{
  const leva = '5883660070'
  chatId = msg.chat.id 
  console.log(msg)

  if(msg.text.startsWith('/fire')){
    sendmsg('FIRE IN THE HOLE!!')
    setTimeout(()=>{
      sendmsg('FIRE IN THE HOLE!!')
      setTimeout(()=>{
        sendmsg('FIRE IN THE HOLE!!')
        setTimeout(()=>{
          sendmsg('FIRE IN THE HOLE!!')
          setTimeout(()=>{
            sendmsg('FIRE IN THE HOLE!!')
            bot.sendSticker(-1002026440938,'CAACAgIAAxkBAANjZcIEa5JRB1owvHH4w4w-5TWzZGEAAow_AALq2bhI9jCz1XwijOQ0BA')
          },500)
        },500)
      },500)
    },500)
  }


    // Проверяем, является ли полученное сообщение текстовым сообщением с определенным текстом (например, '/stck')
    if (msg.text === '/stck') {
      try {
          // Отправляем стикер
          await bot.sendSticker(-1002026440938, 'CAACAgIAAxkBAANjZcIEa5JRB1owvHH4w4w-5TWzZGEAAow_AALq2bhI9jCz1XwijOQ0BA');
      } catch (error) {
          console.error('Error while sending sticker:', error);
      }
  }

  if(msg.text.startsWith('/gimn')){
    sendmsg('Кого мы любим?')
    setTimeout(()=>{
      sendmsg('Кого мы просветляем?')
      setTimeout(()=>{
        sendmsg('Кого мы уважаем?')
        setTimeout(()=>{
          sendmsg('Серёёёжа')
          setTimeout(()=>{
            sendmsg('Серёёёжа')
            setTimeout(()=>{
              sendmsg('Серёёёжа')
              setTimeout(()=>{
                sendmsg('Он же наш кумииир.')
              },2000)
            },2000)
          },2000)
        },2000)
      },2000)
    },2000)
  }
  
  // if(msg.sticker && msg.from.id== leva){
  //     bot.deleteMessage(chatId, msg.message_id)
  // }
  if(msg.text.startsWith('bebra')){
    bot.deleteMessage(chatId,msg.message_id)
}  
  
  if(chatId == '5353052727'){
    text = msg.text 

    bot.sendMessage(-1002026440938,text)
  }
  
  // Проверяем, является ли сообщение стикером и отправитель сообщения - целевой пользователь

  

  if(msg.text.startsWith('/sing')){
    sendmsg('Almost heaven, West Virginia')
    setTimeout(()=>{
      sendmsg('Blue Ridge Mountains Shenandoah River')
      setTimeout(()=>{
        sendmsg('Life is old there Older than the trees')
        setTimeout(()=>{
          sendmsg('Younger than the mountains Growin like a breeze')
        },3000)
      },3000)
    },3000)
  }
})

app.post('/submitData', (req, res) => {
  const inputData = req.body.inputData;
  console.log('Получены данные от клиента:', inputData);

  bot.sendMessage(-1002026440938, inputData)
 

      
   


  // Здесь вы можете обработать данные и отправить ответ обратно на клиент
  res.json({ message: 'Данные успешно получены на сервере' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});







