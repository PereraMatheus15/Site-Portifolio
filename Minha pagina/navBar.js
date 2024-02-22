class MobileNavbar {
    constructor (Menu, navList, navLinks) {
        this.Menu = document.querySelector(Menu);
        this.navList = document.querySelector(this.navList);
        this.navLinks = document.querySelector(this.navLinks);
        this.activeClass = "active" 
        
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(){
        console.logo(this);
        this.navList.classList.toggle(this.activeClass);
    }


    addClickEvent(){
        this.Menu.addeventlistener("click", this.handleClick);
    }

    init(){
        if (this.Menu){
            this.addClickEvent();
        }
        return this;
    }
}
const MobileNavbar = new MobileNavbar(

    ".menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();