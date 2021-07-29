function onButtonClickHandler() {
    console.log('Меня нажали!');
   const block1 = document.getElementById('block1');
   const block2 = document.getElementById('block2');
   // меняет цвет первого блока
   block1.style.backgroundColor = 'blue';
   // убираем блок 2
   block2.style.visibility = 'hidden';
}