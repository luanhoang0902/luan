// "use strict"
// Xử lý tab infomation
const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document);  

const tabs = $$('.list1');
const panes = $$('.content1');

// Dùng forEach để lặp qua
tabs.forEach(function(tab, index){
    const pane = panes[index]
    tab.onclick = function(){
        console.log(pane);
        $('.content1.selected').classList.remove('selected');
        $('.list1.click-list').classList.remove('click-list');
        this.classList.add('click-list');
        pane.classList.add('selected');
    }
})
//List project
var doituong = document.querySelector('.list-project');
var imageClick = document.querySelectorAll('.image-project');
var outListProject = document.querySelector('.tick-out');
var contentImg = document.querySelector('.content-project img');

// Hiện lên list
var a=[];
imageClick.forEach(function(tab, index){
    chuoi = tab.querySelector('img').src;
    a.push(chuoi);
})

imageClick.forEach(function(tab, index){
    tab.onclick = function(){
        doituong.style.display ='block';
       var linkAnh = tab.querySelector('img').src;
       contentImg.src=linkAnh;
        console.log(a);
        a.find(function(img, index){
            if(contentImg.src===img){
                i=index;
                console.log(i);
            }
        });
    }
});

// Ẩn đi list
outListProject.onclick = function(){
    doituong.style.display = 'none';
}

// Chuyển ảnh

var nextLeft = document.querySelector('.next-left');
var nexRight = document.querySelector('.next-right');
let i;

nextLeft.onclick = function(){
    if(i === 0){
        i = 5   
        contentImg.src=a[i];
      
    }else{
        i--;
        contentImg.src=a[i];
    }
}

nexRight.onclick = function(){
    if(i<5){   
        contentImg.src=a[i+1];
        i = i + 1;
    }else{
        contentImg.src=a[0];
        i = 1;
    }
}

// Thay đổi chế độ.
var regamiClick = document.querySelector('.regemi');
var regamiMoveClick = document.querySelector('.regemi-move');
var imgRegami = document.querySelector('.image-regami');
var textRegami = document.querySelector('.text-regami');

regamiClick.onclick = function(){
    if(regamiClick.style.backgroundColor === 'white'){
        regamiClick.style.backgroundColor = 'black';
        Object.assign(regamiMoveClick.style, {
            backgroundColor: 'white',
            position: 'absolute',
            right: '0',
        })
        imgRegami.style.opacity ='0.5';
        Object.assign(textRegami.style, {
            color: 'white',
            backgroundColor: 'var(--RedPurple)'
        })

    }else{
        regamiClick.style.backgroundColor = 'white';
        Object.assign(regamiMoveClick.style, {
            backgroundColor: 'black',
            position: 'absolute',
            left: '0',
        })
        imgRegami.style.opacity ='1';
        textRegami.style.color = 'black';
        Object.assign(textRegami.style, {
            color: 'black',
            backgroundColor: 'var(--YellowOrange)'
        })
    }
}


