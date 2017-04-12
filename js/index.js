$(function () {
    function reserve(originSize,type) {
        type= type|| "x";
        var html=document.querySelector("html");
        if(type=="x"){
            var cw=document.documentElement.clientWidth;
            html.style.fontSize=cw/originSize*100+"px";
        }else if(type=="y"){
            var ch=document.documentElement.clientHeight;
            html.style.fontSize=ch/originSize*100+"px";
        }
    }
    reserve(1334,"y");


    /*音乐控制*/
    function move(index) {
        muss[index].addEventListener("timeupdate",function () {
            if(!isNaN(muss[index].duration)){
                var bili=muss[index].currentTime/muss[index].duration;
                console.log(bili);
                if(bili==1){
                    bili=0;
                    $(".pause").css("display","none");
                    $(".play").css("display","block");
                }
                prowidth.style.width=bili*5.3+"rem";
            }
        });
    }
    var muss=document.getElementsByTagName("audio");
    var prowidth=$(".progress")[0];
    var num=0;
    var next=0;
    var flag=true;
    $(".mrlist li").click(function () {
        var index=$(this).index(".gq");
        alert(index)
        alert(num)
        if(index==-1){
            return
        }
        if(num!=index){
            muss[num].pause();
            num=index;
            next=num;
        }
            muss[num].play();
            $(".pause").css("display","block");
            $(".play").css("display","none");
            move(num);
        $(".mrlist").css({
            transform:"translate(0,5rem)",
            transition:"transform .5s linear"
        })
    });
    $(".next").click(function () {
        alert(next);
        flag=false;
        if(next<muss.length-1){
            num=next;
            next+=1;
        }else{
            next=0;
        }
        muss[num].pause();
        muss[next].play();
        move(next)
    })
    $(".houtui").click(function () {
        alert(next);
        flag=true;
        if(next>0){
            num=next;
            next-=1;
        }else{
            next=muss.length-1;
        }
        muss[num].pause();
        muss[next].play();
        move(next)
    })
    $(".playbtn").click(function () {
        alert(1)
        if(!flag){
            if(muss[next].paused){
                muss[next].play();
                $(".pause").css("display","block");
                $(".play").css("display","none");
            }else{
                muss[next].pause();
                $(".pause").css("display","none");
                $(".play").css("display","block");
            }
        }else{
            if(muss[num].paused){
                muss[num].play();
                $(".pause").css("display","block");
                $(".play").css("display","none");
            }else{
                muss[num].pause();
                $(".pause").css("display","none");
                $(".play").css("display","block");
            }
        }
    });


    /*歌曲列表*/
    $(".biaodan").click(function () {
        $(".mrlist").css({
            transform:"translate(0,0)",
            transition:"transform .5s linear"
        })
    })
    $(".linebox").click(function () {
        $(".mrlist").css({
            transform:"translate(0,5rem)",
            transition:"transform .5s linear"
        })
    })

   //歌曲管理
    var flag1=true;
    $(".persenlist li").click(function () {
        var index1=$(this).index();
        if(flag1){
            $(".jt").css({transform:"rotate(0deg)"}).eq(index1).css({transform:"rotate(180deg)"});
            flag1=false;
        }else{
            $(".jt").eq(index1).css({transform:"rotate(0deg)"})
            flag1=true;
        }

    })




































})