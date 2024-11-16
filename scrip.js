// Генерируем первый случайный номер
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Первый alert с сообщением и первым случайным числом
alert(`Sizda hozir random sonlar chiqishi boshlaydi. Mana birinchi chiqqan son: ${randomNumber}`);

// Второй alert с другим случайным числом
randomNumber = Math.floor(Math.random() * 100) + 1;
alert(`Random orqali chiqqan son: ${randomNumber}`);

// Третий alert с запросом на умножение и деление
if (confirm("Biz random sonni ko'paytirib yoki bo'lmoqchimiz. Rozimisiz?")) {
  // Умножаем число на 2
  let multiplied = randomNumber * 2;
  // Делим число на 2
  let dividedBy2 = randomNumber / 2;
  // Находим остаток от деления на 3
  let remainder3 = randomNumber % 3;
  
  // Четырехстрочное сообщение с результатами операций
  alert(
    `Mana bu random orqali chiqqan son: ${randomNumber}\n` +
    `Bu sonni 2 ga ko'paytirib ${multiplied} ni hosil qildik\n` +
    `Va shu sonni 2 ga bo'lib: ${dividedBy2} hosil qildik\n` +
    `Va shu sonni 3 ga bo'lgandagi qoldiq: ${remainder3} sonini chiqardik`
  );
}
