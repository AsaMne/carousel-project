var slider_img= document.querySelector('.slider-img');

var  images= ['a.jpeg',  'b.jpeg', 'c.jpeg','d.jpeg', 'e.jpeg', 'f.jpeg'];
var i=0;  //Current Image index

function  prev(){
        if (i<=0) i= images.length;
        i--;
        return setImg(); 
}
function next(){
if (i>= images.length-1) i=-1;
i++;
return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/' + images[i] );
}