// Enable chromereload by uncommenting this line:
import 'chromereload/devonly'

console.log(`'Allo 'Allo! Options`);
let script = <HTMLScriptElement>document.getElementsByName("txt")[0];
script.addEventListener('click', (e:Event) => console.log("options..."));
