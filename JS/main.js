let dCnt = document.querySelectorAll('.cards .days .dCnt')
let hCnt = document.querySelectorAll('.cards .hr .hCnt')
let mCnt = document.querySelectorAll('.cards .min .mCnt')
let sCnt = document.querySelectorAll('.cards .sec .sCnt')
let dCard = document.querySelector(`.cards .days .theCard`)
let mCard = document.querySelector(`.cards .min .theCard`)
let hCard = document.querySelector(`.cards .hr .theCard`)
let sCard = document.querySelector(`.cards .sec .theCard`)
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
if(hr > 0){
    if(hr < 10){
        hCnt[1].innerHTML = "0" + hr - 1
    }else{
        hCnt[1].innerHTML = hr - 1
    }
}else{
    hCnt[1].innerHTML = 59
}
if(min > 0){
    if(min < 10){
        mCnt[1].innerHTML = "0" + min - 1
    }else{
        mCnt[1].innerHTML = min - 1
    }
}else{
    mCnt[1].innerHTML = 59
}
if(sec > 0){
    if(sec < 10){
        sCnt[1].innerHTML = "0" + sec - 1
    }else{
        sCnt[1].innerHTML = sec - 1
    }
}else{
    sCnt[1].innerHTML = 59
}
if(days > 0){
    if(days < 10){
        dCnt[1].innerHTML = "0" + days - 1
    }else{
        dCnt[1].innerHTML = days - 1
    }
}
//

if(sec == 0){
    mCard.classList.add('flip')
}
if(min == 0 && sec == 0){
    hCard.classList.add('flip')
}
if(min == 0 && sec == 0 && hr == 0){
    dCard.classList.add('flip')
}
//


let cnt = setInterval(showTime,1000)

function showTime() {
    sCard.classList.remove('flip')
    mCard.classList.remove('flip')
    hCard.classList.remove('flip')
    dCard.classList.remove('flip')
    if(days == 0 && min == 0 && sec == 0 && hr == 0){
        clearInterval(cnt)
    }else{
        sec--;
        if(sec > 0){
            if(!sCard.classList.contains('flip')){
                sCard.classList.add('flip')

            }
            sCnt.forEach((i)=>{
                i.innerHTML = sec;
                sCnt[1].innerHTML = sec - 1 
            })
            if(sec < 10){
                sCnt.forEach((i)=>{
                    i.innerHTML = "0" + sec;
                })
            }
        }else{
            min--
            mCard.classList.add('flip')
            sCard.classList.add('flip')
            sec = 59;
            sCnt.forEach((i)=>{
                i.innerHTML = 59;
            })
            if(min > 0){
                mCnt.forEach((i)=>{
                    i.innerHTML = min;
                    mCnt[1].innerHTML = min - 1
                })
                if(min < 10){
                    mCnt.forEach((i)=>{
                        i.innerHTML = "0" + min;
                    })
                }
            }else{
                hCard.classList.add('flip')
                mCard.classList.add('flip')
                min = 59 ;
                mCnt.forEach((i)=>{
                    i.innerHTML = min;
                })
                hr--
                if(hr > 0){
                    if(hr < 10){
                        hCnt.forEach((i)=>{
                            i.innerHTML = "0" + hr;
                        })
                    }
                }else{
                    hCard.classList.add('flip')
                    dCard.classList.add('flip')
                    hr = 23;
                    hCnt.forEach((i)=>{
                        i.innerHTML = hr;
                    })
                    days--
                    if(days > 0){
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