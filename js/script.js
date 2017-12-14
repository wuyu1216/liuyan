window.onload=function () {
    let title=document.getElementsByClassName('title')[0];
    let txt=document.getElementById('txt');
    let info=document.getElementById('info');

    window.onkeyup=function (e) {
        // console.log(e.keyCode);
        console.log(title.value);
        let txtVal=txt.value.length;
        // console.log(txtVal);
        let span=document.getElementsByClassName('num')[0];
        let num=0;
        num+=txtVal;
        span.innerHTML=num;
        // console.log(span.value);
    };
    window.onkeydown=function (e) {
        console.log(txt.value);
        if (txt.value!=''&&title.value!=''){
            if (e.keyCode==13){
                DivTitle=document.createElement('p');
                DivCon=document.createElement('div');
                DivTitle.classList.add('title');
                DivCon.classList.add('con');
                DivCon.innerHTML=txt.value+'<span class="del">删除留言</span>';
                DivTitle.innerHTML=title.value;
                info.insertBefore(DivTitle,info.childNodes[0]);
                DivTitle.inserAfter(DivCon);
                txt.value='';
                title.value='';
            }
        }

    };
};