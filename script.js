//your JS code here. If required.
let c= document.getElementsByTagName('form')[0]
let d=document.getElementsByTagName('input')
var r = document.querySelector(':root');
c.addEventListener('submit',(event)=>{
	event.preventDefault()
	document.cookie=`fontsize=${d[0].value}px`
	document.cookie=`color=${d[1].value}`
})
function apply(){
  let cookie=document.cookie
  let split=cookie.split(';')
	console.log(split)
  let fontsize=(split[15].split('='))[1]
 let color=(split[16].split('='))[1]
  r.style.setProperty('--fontsize',fontsize);
  r.style.setProperty('--fontcolor',color);
}