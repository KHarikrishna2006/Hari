let re=[0,0,0]
let k=""
let b=""
function choice(a){
  let img=document.getElementById('img')
  let im=document.getElementById("com")
  im.innerHTML=""
  img.innerHTML=""
      if(a==1){
        let image=document.createElement('img')
        image.src='rock.png'
        img.appendChild(image)   
}
if(a==2){
  let image=document.createElement('img')
  image.src='paper.png'
  img.appendChild(image)   
}
if(a==3){
  let image=document.createElement('img')
  image.src='scissor.png'
  img.appendChild(image)   }
    let computer=Math.random()
    if(computer >=0 && computer<1/3){
      k="rock"
      let im=document.getElementById('com')
      let image=document.createElement('img')
      image.src='rock.png'
      im.appendChild(image)   
    }
    if(computer >1/3 && computer<2/3){
      k="paper"
      let im=document.getElementById('com')
      let image=document.createElement('img')
      image.src='paper.png'
      im.appendChild(image)   
    }
    if(computer >2/3 && computer<=1){
      k="scissor"
      let im=document.getElementById('com')
      let image=document.createElement('img')
      image.src='scissor.png'
      im.appendChild(image)   
    }

    if(k=="rock" && a==1){
       re[2]+=1
       b=3
    }
    if(k=="paper" && a==1){
      re[1]+=1
      b=2
   }
   if(k=="scissor" && a==1){
    re[0]+=1
    b=1
 }
 if(k=="rock" && a==2){
  re[0]+=1
  b=1
}
if(k=="paper" && a==2){
  re[2]+=1
  b=3
}
if(k=="scissor" && a==2){
  re[1]+=1
  b=2
}
if(k=="rock" && a==3){
  re[1]+=1
  b=2
}
if(k=="paper" && a==3){
  re[0]+=1
  b=1
}
if(k=="scissor" && a==3){
  re[2]+=1
  b=3
}
console.log(re)
document.getElementById("poh").innerHTML=re[0]
document.getElementById("poc").innerHTML=re[1]
document.getElementById("tie").innerHTML=re[2]
if(b==1){
  document.getElementById("result").innerHTML="( WON )"
}
if(b==2){
 document.getElementById("result").innerHTML="( LOSE )"
}
if(b==3){
 document.getElementById("result").innerHTML="( TIE )"
}

}
