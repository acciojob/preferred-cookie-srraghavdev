//your JS code here. If required.
let c= document.getElementsByTagName('form')[0]
let d=document.getElementsByTagName('input')
c.addEventListener('submit',(event)=>{
	event.preventDefault()
	document.cookie=`fontsize=${input[0].value}px`
	document.cookie=`color=${input[1].value}`
})