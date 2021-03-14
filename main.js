
const sidebarItem = document.querySelectorAll('#item');

sidebarItem.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
        if(!item.classList.contains('active')){
            item.classList.add('active');
         }else{
            item.classList.remove('active');
         }
    });
});