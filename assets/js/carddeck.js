function scrollToMe(element){
    let parent = element.parentNode;
    
    parent.scrollLeft = element.offsetLeft - (element.clientWidth / 2);
}