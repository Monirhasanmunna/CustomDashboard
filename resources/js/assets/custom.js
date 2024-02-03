const customJs = () =>{

    const sidebar = document.querySelector('#sidebar');
    const selectToggleButton = document.querySelector('#toggleButton');
    const barsIcon = document.querySelector("#barsIcon");
    

    selectToggleButton.addEventListener('click', () => {
        const currentWidth = sidebar.offsetWidth;

        if(currentWidth == 50 || currentWidth == 0){
            sidebar.style.minWidth = "250px";
            barsIcon.classList.remove('rotate');
        }else{
            sidebar.style.minWidth = "0px";
            barsIcon.classList.add('rotate');
        }
    });

}


export default customJs;