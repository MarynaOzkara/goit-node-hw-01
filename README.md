1. Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
   node index.js --action="list"
   [Cписок контактів](https://github.com/MarynaOzkara/goit-node-hw-01/blob/main/images/hw-node-01-01.png))

2. Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
   node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
   [Контакт по id](/images/hw-node-01-02.png)

3. Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
   node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
   [Дадаємо контакт](/images/hw-node-01-03.png)

4. Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
   node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
   [Видаляємо контакт](/images/hw-node-01-05.png)
