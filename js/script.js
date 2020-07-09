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

const filter = () => {
    const list = document.querySelector('.resent__list'),
          items = list.querySelectorAll('a'),
          btnAll = list.querySelector('.all'),
          btnPrint = list.querySelector('.print'),
          btnAnimation = list.querySelector('.animation'),
          btnArt = list.querySelector('.art'),
          btnWeb = list.querySelector('.web'),
          btnPhotography = list.querySelector('.photography'),
          btnVideo = list.querySelector('.video'),
          wrapper = document.querySelector('.resent-box'),
          filAll = wrapper.querySelectorAll('.all'),
          filPrint = wrapper.querySelectorAll('.print'),
          filAnimation = wrapper.querySelectorAll('.animation'),
          filArt = wrapper.querySelectorAll('.art'),
          filWeb = wrapper.querySelectorAll('.web'),
          filPhotography = wrapper.querySelectorAll('.photography'),
          filVideo = wrapper.querySelectorAll('.video');

    const filters = (collection) => {
        filAll.forEach(item => {
            item.style.display = 'none'
        })
        if(collection){
            collection.forEach(i => {
                i.style.display = 'block'
            })
        } else {
            return false
        }
    }
    btnAll.addEventListener('click', () => {
        filters(filAll)
    })

    btnPrint.addEventListener('click', () => {
        filters(filPrint)
    })

    btnAnimation.addEventListener('click', () => {
        filters(filAnimation)
    })

    btnArt.addEventListener('click', () => {
        filters(filArt)
    })

    btnWeb.addEventListener('click', () => {
        filters(filWeb)
    })

    btnPhotography.addEventListener('click', () => {
        filters(filPhotography)
    })

    btnVideo.addEventListener('click', () => {
        filters(filVideo)
    })
    list.addEventListener('click', (event) => {
        event.preventDefault()
        let targ = event.target
        if(targ.tagName == 'A'){
            items.forEach(index => {
                index.classList.remove('active')
                targ.classList.add('active')
            })

        }
    })
}
filter()



