-----

# как ?

<h1 className="borderline">2</h1>



-----

# что делать ?

<Box sx={{textAlign: 'center'}}>

<h2> мы точно знаем что </h2>

</Box>


```javascript className=codemedium
	// A long time ago in a galaxy far, far away...
		try {
			
			// some buggy code
			
		} catch (error) {
			
			console.log(error);
			
		}
```

-----

# что делать ?

<center>

<h2 style={{color: 'yellow'}}>НО ЭТО ТОЧНО НЕ ВЫХОД </h2>
</center>

```javascript className=codemediumshift
class SomeClass { 				// мы в любом случае
	constructor() {				// забудем это
		try { /* construct */ } // сделать
	}
	erroredMethod() {			// нужно что-нибудь
		try {
			throw new Error('Unpredictable');
		}
	}							// автоматическое
}
```

-----

# что делать ?

<Box sx={{textAlign: 'center'}}>
<h2> добавим <span style={{color: 'orange'}}>гипотетический</span> декоратор </h2>
</Box>

```javascript className=codehugeshift
// оборачивает конструкторы и методы
// в try catch , который пишет данные в лог
@AutoLogTimelineFall
```
```javascript className=codemediumshift
class SomeClass {
	constructor() {}
	erroredMethod() {
		throw new Error('Unpredictable');
	}
}
```

-----

# что делать ?

<Box sx={{textAlign: 'center'}}>
<h2> добавим <span style={{color: 'orange'}}>гипотетический</span> декоратор </h2>
</Box>

```javascript className=codemediumshift
// оборачивает конструкторы и методы
// в try catch , который пишет данные в лог
@AutoLogTimelineFall
```
<center>

## <span style={{color:'orange'}}>это мы тоже можем забыть</span>,<br/> но вероятность гораздо ниже
</center>

```javascript className=codesmallshift
class SomeClass {
	constructor() {}
	erroredMethod() {
		throw new Error('Unpredictable');
	}
}
```

-----

# что делать ?

<Box sx={{textAlign: 'center'}}>
<h2> добавим <span style={{color: 'orange'}}>гипотетический</span> декоратор </h2>
</Box>

```javascript className=codemediumshift
// оборачивает конструкторы и методы
// в try catch , который пишет данные в лог
@AutoLogTimelineFall
```
<center>

## но вероятность гораздо ниже:<br/><span style={{color:'orange'}}>можно даже написать plugin для babel</span>
</center>

```javascript className=codesmallshift
class SomeClass {
	constructor() {}
	erroredMethod() {
		throw new Error('Unpredictable');
	}
}
```

-----

# что делать ?

<Box sx={{textAlign: 'center'}}>
<h2> теперь добавим <span style={{color:'orange'}}>создателя</span> нашего класса </h2>
</Box>

```javascript className=codemediumshift
@AutoLogTimelineFall
class PredecessorClass {
	constructor() {}
	erroredPredecessorMethod() {
		
		const instance = new SomeClass();
		instance.erroredMethod(); // 100% error
		
	}
}
```

-----

# что делать ?

<Box sx={{textAlign: 'center'}}>
<h2> и вот мы начинаем его <span style={{color:'orange'}}>делегировать</span> </h2>
</Box>

```javascript className=codemediumshift
// создаём расширенный подтип
class ExtendedPredecessor extends PredecessorClass {
	constructor() {}
}

// который тоже упадёт, потому, что 
// SomeClass.erroredMethod() вызовет ошибку
const extended = new ExtendedPredecessor();
extended.erroredPredecessorMethod(); // 100% Error

```

-----

# помним, что <span style={{color:'orange'}}>контроль ошибки</span> мы осуществляем так

```javascript className=codemediumshift
	// A long time ago in a galaxy far, far away...
		try {
		// EACH AND EVERY PIECE of CODE
		} catch (error) {
	/* контроль перехвата ошибки нашим классом */
			if (Catched === false) {
				ShowErrorIframe(error);
			} else {
	/* не наша, бросаем дальше по структуре */
				throw error; // ± ± ±
			}
		}
```

-----

# то есть по факту мы сейчас получили такую слойку

```javascript className=codemediumshift
// A long time ago in a galaxy far, far away...

try {			↑ ↑ ↑	@ PredecessorClass
	try {		 ↑ ↑	@ ExtendedPredecessor
		try {	  ↑		@ SomeClass.erroredMethod
			
			// some buggy code
			
		} catch (error) { console.log(error); }
	} catch (error) { console.log(error); }
} catch (error) { console.log(error); }
```

-----

# то есть по факту мы сейчас получили такую слойку

```javascript className=codemediumshift
// A long time ago in a galaxy far, far away...

try {			↑ ↑ ↑	@ PredecessorClass
	try {		 ↑ ↑	@ ExtendedPredecessor
		try {	  ↑		@ SomeClass.erroredMethod
			
			// some buggy code
			
		} catch (error) { console.log(error); }
	} catch (error) { console.log(error); }
} catch (error) { console.log(error); }
```

<img src="./content/img/Yes-You-Can-Slide.jpg" style={{position: 'absolute', top: '50vh', left:'19vw', zIndex: 100, width: '35vw'}} />


-----

# и всё вроде бы хорошо, но


-----

# и всё вроде бы хорошо, но

<Box sx={{marginTop: '30vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>
</center>
</Box>


-----

# и всё вроде бы хорошо, но

<Box sx={{marginTop: '3vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>из-за try ~ catch </h1>
</center>
</Box>

-----

# и всё вроде бы хорошо, но

<Box sx={{marginTop: '3vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>из-за try ~ catch </h1>

# пропал 


```javascript className=codegiant

window.onerror

```

</center>
</Box>

-----

# и всё вроде бы хорошо, но

<Box sx={{marginTop: '3vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>из-за try ~ catch </h1>

# пропал 

```javascript className=codegiant

window.onerror // &
process.on('ucaughtException' 

```
</center>
</Box>


-----

# и всё вроде бы хорошо, но

<Box sx={{marginTop: '3vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>из-за try ~ catch </h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>сейчас покажу </h1>

</center>
</Box>

-----


# и всё вроде бы хорошо, но

<Box sx={{marginTop: '3vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>из-за try ~ catch </h1>

<h1 style={{fontSize: '8vh', color: 'red'}}> ! только уберу мусор из консоли </h1>

</center>
</Box>

-----


# и всё вроде бы хорошо, но

<Box sx={{marginTop: '3vh'}}>

<center>

<h1 style={{fontSize: '10vh', color: 'orange'}}>коллега не доволен</h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>из-за try ~ catch </h1>

<h1 style={{fontSize: '8vh', color: 'red'}}>показываю </h1>



-----

# и всё вроде бы хорошо, но

<Box sx={{textAlign: 'center'}}>

<h2> то есть оно больше не бумкает красиво </h2>

<img src="./content/img/boom.png" style={{marginTop: '2vh', width: '65vw'}} />
</Box>



-----

# и всё вроде бы хорошо, но

<Box sx={{textAlign: 'center'}}>

<h2> а значит он теперь не знает когда реально надо падать </h2>

<img src="./content/img/boom.png" style={{marginTop: '2vh', width: '65vw'}} />
</Box>



-----


-----

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'5vh'}}>парадокс лжеца</h1>


</center>
</Box>

-----

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'5vh'}}>парадокс лжеца</h1>


<h1 style={{fontSize: '10vh', color: 'orange'}}>который врёт всегда...</h1>


</center>
</Box>

-----

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'5vh'}}>парадокс лжеца</h1>


<h1 style={{fontSize: '10vh', color: 'orange'}}>который врёт всегда...</h1>

<h1 style={{fontSize: '10vh', color: 'red'}}> даже когда утверждает, </h1>

<h1 style={{fontSize: '10vh', color: 'red'}}> что на самом деле врёт</h1>


</center>
</Box>


-----

# для увлекающихся AI : Stop Button problem

<Box>
<center>
<a href="https://en.wikipedia.org/wiki/AI_control_problem">
<img src="./content/img/AI_ControlWiki.png" style={{marginTop: '2vh', width: '71vw'}} />
</a>
</center>
</Box>


-----

# для увлекающихся AI : Stop Button problem

<Box>
<center>
<a href="https://www.youtube.com/watch?v=3TYT1QfdfsM">
<img src="./content/img/AI_Control_YT.png" style={{marginTop: '2vh', width: '71vw'}} />
</a>
</center>
</Box>



-----

# значит, чтобы всё стало хорошо

<Box sx={{textAlign: 'center'}}>
<h2> теперь нам нужно управлять экземплярами </h2>
</Box>


```javascript className=codesmallshift
class PredecessorClass {
	erroredPredecessorMethod() {
		try {
			const instance = new SomeClass();
			instance.erroredMethod(); // 100% error
		} catch {
```
```javascript className=codehugeshift
// потому, что иначе код продолжит работать
	PredecessorClass.NotifyInstances(error);
```

```javascript className=codesmallshift
// а именно от этого мы пытаемся избавиться
		}
	}
}
```
-----

# значит, чтобы всё стало хорошо

<Box sx={{textAlign: 'center'}}>
<h2> теперь нам нужно управлять экземплярами </h2>
</Box>


```javascript className=codemediumshift
class PredecessorClass {
	NotifyInstances (error) {
		// потому, что иначе код продолжит работать
		InstancesOfPredecessorClass
			.forEach(instance => {
				instance
					// !!! ; ^ ()
					.PleaseRespectMyError(error);
			});
	}
}
```

-----

# то есть теперь мы получили глобальный контекст

```javascript className=codesmallshift
// A long time ago in a galaxy far, far away...
try {						↑ ↑ ↑	@ PredecessorClass
	try {					 ↑ ↑	@ ExtendedPredecessor
		try {				  ↑		@ SomeClass.erroredMethod
			// some buggy code
		} catch (error) {
			// нужно уведомить, иначе будет хуже
			PredecessorClass.NotifyInstances(error);
		}
	} catch (error) {
		// нужно уведомить, иначе будет хуже
		ExtendedPredecessor.NotifyInstances(error);
	}
} catch (error) {
	// нужно уведомить, иначе будет хуже
	PredecessorClass.NotifyInstances(error);
}
```

-----

# то есть теперь мы получили глобальный контекст

```javascript className=codesmallshift
// A long time ago in a galaxy far, far away...
try {						↑ ↑ ↑	@ PredecessorClass
	try {					 ↑ ↑	@ ExtendedPredecessor
		try {				  ↑		@ SomeClass.erroredMethod
			// some buggy code
		} catch (error) {
			// нужно уведомить, иначе будет хуже
			PredecessorClass.NotifyInstances(error);
		}
	} catch (error) {
		// нужно уведомить, иначе будет хуже
		ExtendedPredecessor.NotifyInstances(error);
	}
} catch (error) {
	// нужно уведомить, иначе будет хуже
	PredecessorClass.NotifyInstances(error);
}
```

<img src="./content/img/Gollum_Render.png" style={{position: 'absolute', top: '32vh', left:'1vw', zIndex: 100, width: '18vw'}} />

-----

# то есть теперь мы получили глобальный контекст

```javascript className=codesmallshift
// A long time ago in a galaxy far, far away...
try {						↑ ↑ ↑	@ PredecessorClass
	try {					 ↑ ↑	@ ExtendedPredecessor
		try {				  ↑		@ SomeClass.erroredMethod
			// some buggy code
		} catch (error) {
			// нужно уведомить, иначе будет хуже
			PredecessorClass.NotifyInstances(error);
		}
	} catch (error) {
		// нужно уведомить, иначе будет хуже
		ExtendedPredecessor.NotifyInstances(error);
	}
} catch (error) {
	// нужно уведомить, иначе будет хуже
	PredecessorClass.NotifyInstances(error);
}
```

<img src="./content/img/Gollum_Render.png" style={{position: 'absolute', top: '32vh', left:'1vw', zIndex: 100, width: '18vw'}} />
<img src="./content/img/titanic.jpg" style={{position: 'absolute', top: '59vh', left:'70vw', zIndex: 100, width: '23vw'}} />

-----


# Это Комбинаторный Взрыв

<Box>
<center>
<a href="https://en.wikipedia.org/wiki/Combinatorial_explosion">
<img src="./content/img/Combinatorial.png" style={{marginTop: '2vh', width: '75vw'}} />
</a>
</center>
</Box>





-----
[{"errorMode":1}]

<h2>
 выберем нужный контекст из миллиона

-----



# привет архитектурным астронавтам

```javascript className=codesmallshift
// A long time ago in a galaxy far, far away...
try {						↑ ↑ ↑	@ PredecessorClass
	try {					 ↑ ↑	@ ExtendedPredecessor
		try {				  ↑		@ SomeClass.erroredMethod
			// some buggy code
		} catch (error) {
			// нужно уведомить, иначе будет хуже
			PredecessorClass.NotifyInstances(error);
		}
	} catch (error) {
		// нужно уведомить, иначе будет хуже
		ExtendedPredecessor.NotifyInstances(error);
	}
} catch (error) {
	// нужно уведомить, иначе будет хуже
	PredecessorClass.NotifyInstances(error);
}
```

<img src="./content/img/Gollum_Render.png" style={{position: 'absolute', top: '29vh', left:'1vw', zIndex: 100, width: '18vw'}} />
<img src="./content/img/titanic.jpg" style={{position: 'absolute', top: '59vh', left:'70vw', zIndex: 100, width: '23vw'}} />
<img src="./content/img/girl_burns.jpeg" style={{position: 'absolute', top: '33vh', left:'25vw', zIndex: 100, width: '35vw'}} />


-----


-----

# и это мы ещё даже код писать не начали


-----

# и это мы ещё даже код писать не начали

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'red', marginTop:'5vh'}}>декоратор был гипотетический</h1>


</center>
</Box>

-----


# и это мы ещё даже код писать не начали

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'red', marginTop:'5vh'}}>декоратор был гипотетический</h1>


<h1 style={{fontSize: '10vh', color: 'orange'}}>а коллега уже не доволен</h1>


</center>
</Box>


-----


# и это мы ещё даже код писать не начали

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'red', marginTop:'5vh'}}>декоратор был гипотетический</h1>


<h1 style={{fontSize: '10vh', color: 'orange'}}>а коллега уже не доволен</h1>

```javascript className=codegiant

/* пропал */ window.onerror

```


</center>
</Box>


-----


# и это мы ещё даже код писать не начали

<Box sx={{marginTop: '3vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'red', marginTop:'5vh'}}>декоратор был гипотетический</h1>


<h1 style={{fontSize: '10vh', color: 'orange'}}>а коллега уже не доволен</h1>

```javascript className=codegiant

/* пропал */ window.onerror

```

<h1 style={{fontSize: '10vh', color: 'yellow', marginTop: '5vh'}}>и взрыв этот ещё</h1>

</center>
</Box>



-----

# а что если попробовать ?

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>поступить как менеджеры</h1>

</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>поступить как менеджеры</h1>

<a href="https://en.wikipedia.org/wiki/Gantt_chart">
<img src="./content/img/GanttProject.png" style={{width: '65vw'}} />
</a>

</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>поступить как менеджеры</h1>

<h1 style={{fontSize: '10vh', color: 'orange'}}>сначала всё запланировать</h1>


</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>поступить как менеджеры</h1>

<h1 style={{fontSize: '10vh', color: 'orange'}}>сначала всё запланировать</h1>

```javascript className=codegiant

/* не мучить */ window.onerror

```

</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>поступить как менеджеры</h1>

<h1 style={{fontSize: '10vh', color: 'orange'}}>сначала всё запланировать</h1>

```javascript className=codegiant

/* не мучить */ window.onerror

```

<h1 style={{marginTop: '5vh', fontSize: '7vh', color: 'green'}}>И ВЫЯСНИТЬ КОГДА ПАДАЕНИЕ НУЖНО</h1>

</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>поступить как менеджеры</h1>

<h1 style={{fontSize: '10vh', color: 'orange'}}>сначала всё запланировать</h1>

```javascript className=codegiant

/* не мучить */ window.onerror

```

<h1 style={{marginTop: '5vh', fontSize: '7vh', color: 'green'}}>И ВЫЯСНИТЬ КОГДА ПАДАЕНИЕ НУЖНО</h1>
<h1 style={{fontSize: '8vh', color: 'red'}}>?</h1>

</center>
</Box>


-----

# а что если попробовать ?

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '5vh', color: 'green', marginTop:'3vh'}}>правда, придётся использовать не композицию</h1>

</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '5vh', color: 'green', marginTop:'3vh'}}>правда, придётся использовать не композицию</h1>

<h1 style={{fontSize: '7vh', color: 'orange'}}>а наследование </h1>

</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '5vh', color: 'green', marginTop:'3vh'}}>правда, придётся использовать не композицию</h1>

<h1 style={{fontSize: '7vh', color: 'orange'}}>а наследование </h1>

<a href="https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique">
<img src="./content/img/Pert_chart_colored.svg" style={{marginTop: '2vh', width: '41vw'}} />
</a>

</center>
</Box>


-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '7vh', color: 'green', marginTop:'3vh'}}>диаграмма сетевого планирования</h1>
</center>
</Box>

<Box style={{background:'white', width:'70vw', margin: 'auto', padding: '3vh'}}>
<center>
<a href="https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique">
<img src="./content/img/Pert_chart_colored.svg" style={{marginTop: '2vh', width: '51vw'}} />
</a>
</center>
</Box>

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '7vh', color: 'green', marginTop:'3vh'}}>отражает связи между процессами во времени</h1>
</center>
</Box>

<Box style={{background:'white', width:'70vw', margin: 'auto', padding: '3vh'}}>
<center>
<a href="https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique">
<img src="./content/img/Pert_chart_colored.svg" style={{marginTop: '2vh', width: '51vw'}} />
</a>
</center>
</Box>

-----


# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '7vh', color: 'green', marginTop:'3vh'}}>есть такая штука у менеджеров</h1>
</center>
</Box>

<Box>
<center>
<a href="https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique">
<img src="./content/img/PERT.png" style={{marginTop: '0vh', width: '71vw'}} />
</a>
</center>
</Box>


-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>и использовать не композицию</h1>

<h1 style={{fontSize: '10vh', color: 'orange'}}>а наследование </h1>


</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();

```


-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '8vh', color: 'green', marginTop:'3vh'}}>использовать не композицию</h1>

<h1 style={{fontSize: '10vh', color: 'orange'}}>а наследование </h1>


</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();
Successor.prototype = entry;
const good = new Successor();

```


-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>

<h1 style={{fontSize: '7vh', color: 'green', marginTop:'3vh'}}>наследование тоже делегирование</h1>

<a href="https://dl.acm.org/doi/abs/10.1145/38807.38820">
<img src="./content/img/delegation_is_inheritance.png" style={{marginTop: '2vh', width: '71vw'}} />
</a>


</center>
</Box>



-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>то есть если взять наследование </h1>

</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();

```

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>то есть если взять наследование </h1>

</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();
Successor.prototype = entry;

```

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>то есть если взять наследование </h1>

</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();
Successor.prototype = entry;
const good = new Successor();

```

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>то есть если взять наследование </h1>
</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();
Successor.prototype = entry;
const good = new Successor();
Errored.prototype = good;

```

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>то есть если взять наследование </h1>

</center>
</Box>

```javascript className=codegiant

const entry = new Predecessor();
Successor.prototype = entry;
const good = new Successor();
Errored.prototype = good;
const error = new Errored();

```


-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>то мы можем получить</h1>
</center>
</Box>



<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			children : [{
				name: 'good 1',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'Errored 1 . 1 . 1',
						stroke: 'red'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'good 1 . 2',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'Errored 2 . 1',
					stroke: 'red'
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>а ещё вместо catch мы получаем bubble</h1>
</center>
</Box>



<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			children : [{
				name: 'good 1',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'good 1 . 2',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />



-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>а ещё вместо catch мы получаем bubble</h1>
</center>
</Box>



<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			children : [{
				name: 'good 1',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'not so good 1 . 2',
					stroke: 'red',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />



-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>а ещё вместо catch мы получаем bubble</h1>
</center>
</Box>



<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			children : [{
				name: 'not so good 1',
				stroke: 'red',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'not so good 1 . 2',
					stroke: 'red',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />



-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>а ещё вместо catch мы получаем bubble</h1>
</center>
</Box>



<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'failed',
			stroke: 'red',
			children : [{
				name: 'not so good 1',
				stroke: 'red',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'not so good 1 . 2',
					stroke: 'red',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />


-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'green'}}>то есть не нужно рассылать уведомления</h1>
</center>
</Box>

<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'failed',
			stroke: 'red',
			children : [{
				name: 'not so good 1',
				stroke: 'red',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'not so good 1 . 2',
					stroke: 'red',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />

-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'green'}}>почему не нужно рассылать уведомления ?</h1>
</center>
</Box>


<div className="timelineText">

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>

<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'failed',
			stroke: 'red',
			children : [{
				name: 'not so good 1',
				stroke: 'red',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'not so good 1 . 2',
					stroke: 'red',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />



-----

# а что если попробовать ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'green'}}>почему не нужно рассылать уведомления ?</h1>
</center>
</Box>

<div className="timelineText">

# &mdash; &mdash; <span style={{color:'red'}}>Time</span> &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; <span style={{color:'red'}}>Line</span> &mdash; &mdash; <span style={{color:'red'}}>&gt;</span>
</div>

<div className="timelineTextBlack">

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>

<Chart id='chartAbs2' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'failed',
			stroke: 'red',
			children : [{
				name: 'not so good 1',
				stroke: 'red',
				children : [{
					name: 'good 1 . 1',
					children : [{
						name: 'good 1 . 1 . 1'
					}, {
						name: 'good 1 . 1 . 2',
					}]
				}, {
					name: 'not so good 1 . 2',
					stroke: 'red',
					children : [{
						name: 'good 1 . 2 . 1',
					}, {
						name: 'good 1 . 2 . 2',
					}, {
						name: 'good 1 . 2 . 3',
					}, {
						name: 'Errored 1 . 2 . 4',
						stroke: 'red'
					}, {
						name: 'good 1 . 2 . 5',
					}]
				}],
			}, {
				name: 'good 2',
				children : [{
					name: 'good 2 . 1',
				}, {
					name: 'good 2 . 2',
				}, {
					name: 'good 2 . 3',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />


-----

# данные и время

<div style={{marginLeft: '5vw'}}>

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>наши данные становятся связными во времени</h1>
</center>
</Box>

## синхронизированными по координатам, и никак иначе ...

<br/>

<div className="timelineText">

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>

<div className="timelineTextBlack">

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;


</div>

<Chart id='chartAbs' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			children : [{
				name: 'data 1  -  time 1',
				children : [{
					name: 'data 1 . 1 - time 2',
					children : [{
						name: 'data 1 . 1 - time 3',
					}]
				}, {
					name: 'data 1 . 2 - time 2',
					children : [{
						name: 'data 1 . 2 - time 3',
					}]
				}],
			}, {
				name: 'data 2 - time 1',
				children : [{
					name: 'data 2 . 1 - time 2',
				}, {
					name: 'data 2 . 2 - time 2',
				}, {
					name: 'data 2 . 3 - time 2',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />

</div>


-----

# данные и время

<div style={{marginLeft: '5vw'}}>

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>наши данные становятся связными во времени</h1>
</center>
</Box>

## синхронизированными по координатам, <span style={{color:'red'}}>и в случае ошибки</span> ...

<br/>

<div className="timelineText">

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>


<div className="timelineTextBlack">

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>

<Chart id='chartAbs' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			stroke: 'red',
			children : [{
				name: 'data 1  -  time 1',
				children : [{
					name: 'data 1 . 1 - time 2',
					children : [{
						name: 'data 1 . 1 - time 3',
					}]
				}, {
					name: 'data 1 . 2 - time 2',
					children : [{
						name: 'data 1 . 2 - time 3',
					}]
				}],
			}, {
				name: 'data 2 - time 1',
				stroke: 'red',
				children : [{
					name: 'data 2 . 1 - time 2',
				}, {
					name: 'data 2 . 2 - time 2',
					stroke: 'red',
				}, {
					name: 'data 2 . 3 - time 2',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />

</div>


-----

# данные и время

<div style={{marginLeft: '5vw'}}>

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '5vh', color: 'orange'}}>наши данные становятся связными во времени</h1>
</center>
</Box>

## синхронизированными по координатам, <span style={{color:'red'}}>полная блокировка</span> ...

<br/>

<div className="timelineText">


# &mdash; &mdash; <span style={{color:'red'}}>Time</span> &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; <span style={{color:'red'}}>Line</span> &mdash; &mdash; <span style={{color:'red'}}>&gt;</span>

</div>


<div className="timelineTextBlack">

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; Time &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'red'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>

<Chart id='chartAbs' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'entry',
			stroke: 'red',
			children : [{
				name: 'data 1  -  time 1',
				stroke: 'red',
				children : [{
					name: 'data 1 . 1 - time 2',
					stroke: 'red',
					children : [{
						name: 'data 1 . 1 - time 3',
						stroke: 'red'
					}]
				}, {
					name: 'data 1 . 2 - time 2',
					stroke: 'red',
					children : [{
						name: 'data 1 . 2 - time 3',
						stroke: 'red',
					}]
				}],
			}, {
				name: 'data 2 - time 1',
				stroke: 'red',
				children : [{
					name: 'data 2 . 1 - time 2',
					stroke: 'red',
				}, {
					name: 'data 2 . 2 - time 2',
					stroke: 'red',
				}, {
					name: 'data 2 . 3 - time 2',
					stroke: 'red',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 450,
		margin : {
			top: 25, right: 40, bottom: 10, left: 40
		}
	}
}} />

</div>

<img src="./content/img/shr_cat.jpg" style={{position: 'absolute', top: '55vh', left: '37vw', zIndex: 100, width: '18vw'}} />



-----

-----

# и вот тут как бы вопрос

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '7vh', color: 'green'}}>Что такое эта самая блокировка ?</h1>
<h1 style={{fontSize: '11vh', color: 'red'}}> как понять, что &laquo; фсё &raquo; </h1>
</center>
</Box>

-----

# и вот тут как бы вопрос

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '7vh', color: 'green'}}>Что такое эта самая блокировка ?</h1>
<h1 style={{fontSize: '11vh', color: 'red'}}> как понять, что &laquo; фсё &raquo; </h1>

# что дальше &laquo; кина &raquo; не будет

</center>
</Box>


-----

# и тут я вспомнил мантру : Everything is an Object

<Box sx={{textAlign: 'center'}}>
<h2> BrendanEich on Twitter </h2>
</Box>

<div style={{textAlign: 'center', marginRight: '10vw'}}>
<a href="https://twitter.com/BrendanEich/status/1271998084642246657">
<img src="./content/img/EichObjects.png" style={{marginTop: '2vh', width: '70vw'}} />
</a>
</div>

-----

# и тут я вспомнил мантру : Everything is an Object

<Box  sx={{marginTop: '5vh'}}>
<center>
<h1 style={{fontSize: '11vh'}}>undefined</h1>
</center>
</Box>

-----

# и тут я вспомнил мантру : Everything is an Object

<Box  sx={{marginTop: '5vh'}}>
<center>
<h1 style={{fontSize: '9vh', border: '1px solid gray', maxWidth: '55vw', padding: '2vh 3vh'}}>undefined → null</h1>
</center>
</Box>

-----

# и тут я вспомнил мантру : Everything is an Object

<Box sx={{textAlign: 'center'}}>
<h2> BrendanEich on Twitter </h2>
</Box>

<div style={{textAlign: 'center', marginRight: '10vw'}}>
<a href="https://twitter.com/BrendanEich/status/1257549036963328001">
<img src="./content/img/EichNullUndefined.png" style={{marginTop: '2vh', width: '70vw'}} />
</a>
</div>


-----

# и тут я вспомнил мантру : Everything is an Object

<Box  sx={{marginTop: '5vh'}}>
<center>
<h1 style={{fontSize: '9vh', border: '1px solid gray', maxWidth: '55vw', padding: '2vh 3vh'}}>undefined → null</h1>
<h1 style={{fontSize: '9vh', lineHeight: '5vh', marginTop: '-2vh'}}>↓</h1>
<h1 style={{fontSize: '9vh'}}>Object</h1>
</center>
</Box>



-----

# и тут я вспомнил мантру : Everything is an Object

<Box  sx={{marginTop: '5vh'}}>
<center>
<h1 style={{fontSize: '9vh', border: '1px solid gray', maxWidth: '55vw', padding: '2vh 3vh'}}>undefined → null</h1>
<h1 style={{fontSize: '9vh', lineHeight: '5vh', marginTop: '-2vh'}}>↓</h1>
</center>
<div style={{fontSize: '9vh', border: '1px solid gray', maxWidth: '95vw', padding: '2vh 3vh', textAlign:'left'}}>

```javascript className=codegiant
Object.getPrototypeOf (	Object
	.getPrototypeOf ( {} ) )
			=== null;
```

</div>
</Box>


-----

# и тут я вспомнил мантру : Everything is an Object

<Box  sx={{marginTop: '5vh'}}>
<center>
<h1 style={{fontSize: '9vh', border: '1px solid gray', maxWidth: '55vw', padding: '2vh 3vh'}}>undefined → null</h1>
<h1 style={{fontSize: '9vh', lineHeight: '5vh', marginTop: '-2vh'}}>↓</h1>
<div style={{fontSize: '9vh', border: '1px solid gray', maxWidth: '95vw', padding: '2vh 3vh', textAlign:'left'}}>

```javascript className=codegiantshift
 ogp = Object.getPrototypeOf;
 ogp ( ogp ( {} ) === null;
  typeof null === 'object'
```

</div>
</center>
</Box>


-----

# и тут я вспомнил мантру : Everything is an Object

<Box sx={{textAlign: 'center'}}>
<a href="https://github.com/tc39/ecma262/pull/1913">
<img src="./content/img/tc39.png" style={{marginTop: '2vh', width: '75vw'}} />
</a>
</Box>

-----

# и тут я вспомнил мантру : Everything is an Object

<Box sx={{textAlign: 'center'}}>
<a href="https://github.com/tc39/ecma262/pull/1913">
<img src="./content/img/tc39_2.png" style={{marginTop: '2vh', width: '75vw'}} />
</a>
</Box>



-----

# Everything is an Object : нет ничего лучше Точки

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '11vh'}}>.</h1>
</center>
</Box>

-----

# Everything is an Object : нет ничего лучше Точки

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '11vh', color: 'red'}}>.</h1>
<h1 style={{fontSize: '11vh'}}>точка </h1>
</center>
</Box>

-----

# Everything is an Object : нет ничего лучше Точки

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '11vh', color: 'red'}}>.</h1>
<h1 style={{fontSize: '11vh'}}>нет ничего лучше точки </h1>
</center>
</Box>

-----

# Everything is an Object : нет ничего лучше Точки

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '11vh', color:'gray'}}>точка даёт</h1>
<h1 style={{fontSize: '11vh'}}> methods <span style={{color:'red'}}>.</span> chaining </h1>
</center>
</Box>

-----

# Everything is an Object : нет ничего лучше Точки

<Box  sx={{marginTop: '15vh'}}>
<center>

<h1 style={{fontSize: '11vh', color:'gray'}}>точка даёт</h1>
<h1 style={{fontSize: '11vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>

<h1 style={{color:'orange'}}>Что если создавать экземпляры из экземпляров ?</h1>
</center>
</Box>




-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>если взять наследование </h1>
</center>
</Box>



-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
</center>
</Box>


-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
<h4 style={{color:'green'}}>... и создавать экземпляры из экземпляров ...</h4>
</center>
</Box>

```javascript className=codehugeshift

const entry = new Predecessor();

```

-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
<h4 style={{color:'green'}}>... и создавать экземпляры из экземпляров ...</h4>
</center>
</Box>

```javascript className=codehugeshift

const entry = new Predecessor();
// внутри .Successor this === entry
const good = new entry.Successor();

```

-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
<h4 style={{color:'green'}}>... и создавать экземпляры из экземпляров ...</h4>
</center>
</Box>

```javascript className=codehugeshift

const entry = new Predecessor();
// внутри .Successor this === entry
const good = new entry.Successor();
// внутри .Errored this === good
const error = new good.Errored();

```



-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
<h4 style={{color:'green'}}>... и создавать экземпляры из экземпляров ...</h4>
</center>
</Box>

```javascript className=codehugeshift

const entry = new Predecessor();

```

-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
<h4 style={{color:'green'}}>... и создавать экземпляры из экземпляров ...</h4>
</center>
</Box>

```javascript className=codehugeshift

const entry = (new Predecessor())
// внутри .Successor this === entry
				.Successor();

```

-----

# Что если создавать экземпляры из экземпляров ?

<Box sx={{marginTop: '1vh'}}>
<center>
<h1 style={{fontSize: '7vh', color: 'orange'}}>взять наследование <span className='red'>И</span></h1>
<h1 style={{fontSize: '10vh', lineHeight: '5vh'}}> methods ( ) <span style={{color:'red'}}>.</span> chaining ( )</h1>
<h4 style={{color:'green'}}>... и создавать экземпляры из экземпляров ...</h4>
</center>
</Box>

```javascript className=codehugeshift

const error = (new Predecessor())
// внутри .Successor this === entry
				.Successor()
// внутри .Errored this === good
				.Errored();

```


-----

# Что если создавать экземпляры из экземпляров ?

<div style={{marginLeft: '5vw'}}>

## может быть тогда, используя наследование
## получится <span style={{color:'green'}}>хранить</span> вообще <span style={{color:'green'}}> весь </span> &laquo;шедевр&raquo; ?

<br/>

<div className="timelineText">

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

</div>

<div className="timelineTextBlack">

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;

# &mdash; &mdash; &mdash; Time &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash; &mdash; &mdash; &mdash; <span style={{color:'green'}}>|</span> &mdash; &mdash;  Line &mdash; &mdash; &gt;


</div>

<Chart id='chartAbs' opts={{
	chart : {
		type : 'tree',
		chartData : {
			name : 'Predecessor',
			children : [{
				name: 'Successor 1  -  t 1',
				children : [{
					name: 'Successor 1 . 1 - t 2',
					children : [{
						name: 'Success ...',
					}]
				}, {
					name: 'Successor 1 . 2 - t 2',
					children : [{
						name: 'Success ...',
					}]
				}],
			}, {
				name: 'Successor 2 - t 1',
				children : [{
					name: 'Successor 2 . 1 - t 2',
				}, {
					name: 'Successor 2 . 2 - t 2',
				}, {
					name: 'Successor 2 . 3 - t 2',
				}],
			}],
		},
		print : app.print,
		dy : 15,
		dx : 95,
		width : 430,
		margin : {
			top: 25, right: 40, bottom: 10, left: 70
		}
	}
}} />

</div>

-----


# и в литературе есть название подобной концепции

<div style={{marginLeft: '-3vw', maxWidth: '80vw'}}>

<center>
<h1 className="big"><span style={{color:'orange'}}>Хронотоп</span> </h1>
</center>

<table>
<tbody>
<tr>
<td>
<center>

# закономерная связь <br/> пространственно-временных координат

<p className="author">Алексей Алексеевич Ухтомский</p>
</center>

</td>
<td>

<img src="./content/img/250px-Ukhtomskiy.jpeg" style={{width:'7vw'}} />

</td>
</tr>
<tr>
<td>

<center>

# существенная взаимосвязь <br/> временны́х и пространственных отношений

<p className="author">Михаил Михайлович Бахтин</p>
</center>

</td>
<td>

<img src="./content/img/Mikhail_bakhtin.jpg" style={{width:'7vw'}} />

</td>
</tr>
</tbody>
</table>

</div>
