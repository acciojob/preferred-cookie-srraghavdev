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
  let fontsize=0
  let color=0
  let cookie=document.cookie
  let split=cookie.split(';')
  for(let i=0;i<split.length;i++){
    let temp=(split[i]).split('=')
    console.log(temp)
    if(temp[0]==' fontsize'){
      fontsize=temp[1]
    }
    else if(temp[0]==' color'){
      color=temp[1]
    }
  }
  r.style.setProperty('--fontsize',fontsize);
  r.style.setProperty('--fontcolor',color);
}