// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

let button = <HTMLScriptElement>document.getElementById('btn_run');

const onKeyPress = (e:any) => {
  if ( e.keyCode == 13 ) { // Enterキー除外
    button.click();
  }
};
let objUrl:HTMLInputElement = <HTMLInputElement>document.getElementById('txt_url');
objUrl.focus();
objUrl.addEventListener('keypress', onKeyPress);

console.log(button);
button.addEventListener('click', (e:Event) => {
  let url:string = objUrl.value;
  window.open(url, '_blank');
});
