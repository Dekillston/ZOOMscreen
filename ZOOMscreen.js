// Йоууу, друг. Функцию можно пропустить, и не изучать, использование ниже.
function ZOOMscreen(MASS, s) {
	var screen = 0;
	setInterval(() => {
		if(screen == window.screen.width) {return}
		screen = window.screen.width;
		for(var n = 0; n <= MASS.length-1; n++) {
			if(MASS[n][1] >= screen) {
				MASS[n][0].style.zoom = ((100*screen)/MASS[n][2])-((MASS[n][1]-MASS[n][2])/10)+'%';
			} else {
				MASS[n][0].style.zoom = '100%';
			}
		}	
	}, s);
}
// Создаём переменную с твоим блоком который должен уменьшаться
var block = document.getElementById('programm_panel_1');
// Саздаём перемнную, где мы укажем ширину экрана при которой блок должен поменяться
var screen = 1020;
// Саздаём перемнную, где мы укажем ширину блока
var width = 1000;
// Создаём переменную с числом, это будет милисикунды отклика
var S = 1000;
// Запускаем функцию
ZOOMscreen([
	// Здесь мы создаём массив со всеми блоками и ихними данными для использования
	[block, screen, width]
	//[block1, screen1, width1],
	//[block2, screen2, width2],
	//[block3, screen3, width3],
	//[block4, screen4, width4] И так далее, надеюсь вы поняли.
], S);