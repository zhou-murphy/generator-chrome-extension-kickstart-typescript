// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

// WebElement
document.querySelector<HTMLElement>("html")?.addEventListener('click', function(evn: MouseEvent) {
  var element = evn.target as HTMLElement;    
  SendMessage(element.innerText);
});

// WebEdit
document.querySelector<HTMLElement>("html")?.addEventListener('focusout',function(evn: FocusEvent){

  var element = evn.target as HTMLElement;    
  SendMessage(element.innerText);
});

// WebList
document.querySelector<HTMLElement>(['select'].join())?.addEventListener('change',function(evn: FocusEvent){
  var element = evn.target as HTMLElement;    
  SendMessage(element.innerText);
});

function SendMessage(message: string) {
  if(message != null) {
    chrome.runtime.sendMessage(message, function(response:any) {
      // pass
    });
  }
}

