let dCnt = document.querySelectorAll('.cards .days .dCnt')
let hCnt = document.querySelectorAll('.cards .hr .hCnt')
let mCnt = document.querySelectorAll('.cards .min .mCnt')
let sCnt = document.querySelectorAll('.cards .sec .sCnt')
let dCard = document.querySelector(`.cards .days .theCard`)
let mCard = document.querySelector(`.cards .min .theCard`)
let hCard = document.querySelector(`.cards .hr .theCard`)
let sCard = document.querySelector(`.cards .sec .theCard`)
let S = new Date().getSeconds();
//Vars
let sec =  0;
let hr = 0; 
let min = 0;
let days = 14; 
dCnt.forEach((i)=>{
    i.innerHTML = days
    if(days < 10){
        i.innerHTML = "0" + days  
    }
})
mCnt.forEach((i)=>{
    i.innerHTML = min
    if(min < 10){
        i.innerHTML = "0" + min  
    }
})
sCnt.forEach((i)=>{
    i.innerHTML = sec
    if(sec < 10){
        i.innerHTML = "0" + sec  
    }
})
hCnt.forEach((i)=>{
    i.innerHTML = hr
    if(hr < 10){
        i.innerHTML = "0" + hr
    }
})

//

let cnt = setInterval(showTime,1000)
console.log(sCard)
function showTime() {
    sCard.classList.remove('flip')
    mCard.classList.remove('flip')
    hCard.classList.remove('flip')
    dCard.classList.remove('flip')
    if(days == 0 && min == 0 && sec == 0 && hr == 0){
        clearInterval(cnt)
    }else{
        if(sec > 0){
            if(!sCard.classList.contains('flip')){
                sCard.classList.add('flip')
            }
            sec--;
            sCnt.forEach((i)=>{
                i.innerHTML = sec;
            })
            if(sec < 10){
                sCnt.forEach((i)=>{
                    i.innerHTML = "0" + sec;
                })
            }
        }else{
            if(!sCard.classList.contains('flip')){
                sCard.classList.add('flip')
            }
            sec = 59;
            sCnt.forEach((i)=>{
                i.innerHTML = sec;
            })
            if(min > 0){
                if(!mCard.classList.contains('flip')){
                    mCard.classList.add('flip')
                }
                min--
                mCnt.forEach((i)=>{
                    i.innerHTML = min;
                })
                if(min < 10){
                    mCnt.forEach((i)=>{
                        i.innerHTML = "0" + min;
                    })
                }
            }else{
                if(!mCard.classList.contains('flip')){
                    mCard.classList.add('flip')
                }
                mCard.classList.add('flip')
                min = 59 ;
                mCnt.forEach((i)=>{
                    i.innerHTML = min;
                })
                if(hr > 0){
                    if(!hCard.classList.contains('flip')){
                        hCard.classList.add('flip')
                    }
                    hr--
                    if(hr < 10){
                        hCnt.forEach((i)=>{
                            i.innerHTML = "0" + hr;
                        })
                    }
                }else{
                    if(!hCard.classList.contains('flip')){
                        hCard.classList.add('flip')
                    }
                    hr = 23;
                    hCnt.forEach((i)=>{
                        i.innerHTML = hr;
                    })
                    if(days > 0){
                        if(!dCard.classList.contains('flip')){
                            dCard.classList.add('flip')
                        }
                        days--
                        dCnt.forEach((i)=>{
                            i.innerHTML = days;
                        })
                        if(days < 10){
                            dCnt.forEach((i)=>{
                                i.innerHTML = "0" + days;
                            })
                        }
                    }
                }
            }
        }
    }
}