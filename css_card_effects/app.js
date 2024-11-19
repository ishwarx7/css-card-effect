let items=document.querySelectorAll('.content');
items.forEach(item=>{
    item.addEventListener('mousemove',(e)=>{
        //get position pointet in width (px)
        let positionPx=e.x - item.getBoundingClientRect().left;
        //convert %
        let positionX=(positionPx / item.offsetWidth)*100;
        //get position pointter in height (px)
        let positionPy=e.y - item.getBoundingClientRect().top;
        //convert %
        let positionY=(positionPy / item.offsetWidth)*100;

        item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5)*(50 - positionY) + 'deg');
    })
    item.addEventListener('mouseout', () => {
        item.style.setProperty('--rX','0deg');
        item.style.setProperty('--rY','0deg');
    })
})