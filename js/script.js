function addClass(selList, selBurger, selBody){
    const list = document.querySelector(selList),
          burger = document.querySelector(selBurger)
          mainBody = document.querySelector(selBody)

    burger.addEventListener('click', function(){
        this.classList.toggle('active')
        list.classList.toggle('active')
        mainBody.classList.toggle('lock')

    })
}
addClass('.header-top__nav', '.header-top__burger', 'body')


