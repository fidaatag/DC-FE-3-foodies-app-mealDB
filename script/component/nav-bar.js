// import ('https://unpkg.com/boxicons@2.1.4/dist/boxicons.js');
import logoWajah from '../aset/LogoWajah.svg';
import user from '../aset/user.svg';
import '../scss/style.scss';


class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();

        const menu = this.shadowDOM.querySelector('.toggle input');
        menu.addEventListener('click', ()=> {
            let navbar = this.shadowDOM.querySelector('nav ul');
            navbar.classList.toggle('open');
        });
    }

    render() {
        this.shadowDOM.innerHTML =` 
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    text-decoration: none;
                }
                :root {
                    --bg-color: #222327;
                    --text-color: #fff;
                    --main-color: #29fd53;
                }
                nav {
                    width: 100%;
                    top: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: var(--bg-color);
                    padding: 28px 12%;
                    transition: all .50s ease;
                    z-index: 10;
                }
                .logo {
                    display: flex;
                    align-items: center;
                }
                .logo img {
                    margin-right: 5px; 
                    width: 5vh;
                }
                .logo span {
                    color: var(--text-color);
                    font-size: 1.7rem;
                    font-weight: 600;
                }
                .navbar {
                    display: flex;
                    list-style: none;    
                }
                .navbar a{
                    color: var(--text-color);
                    font-size: 1.1rem;
                    font-weight: 500;
                    padding: 5px 0;
                    margin: 0px 30px;
                    transition: all .50s ease;
                }
                .navbar a:hover{
                    color: var(--main-color);
                }
                .login {
                    display: flex;
                    align-items: center;
                    z-index: 9;
                }
                .login a {
                    margin-right: 25px;
                    margin-left: 10px;
                    color: var(--text-color);
                    font-size: 1.1rem;
                    font-weight: 500;
                    transition: all .50s ease;
                }
                .login a:hover {
                    color: var(--main-color);
                }
                .user {
                    display: flex;
                    align-items: center;
                }
                .user img {
                    margin-right: 7px; 
                    width: 3vh;
                }    
                .toggle{
                    display: none;
                    flex-direction: column;
                    height: 20px;
                    justify-content: space-between;
                    position: relative;
                }
                .toggle input{
                    position: absolute;
                    width: 40px;
                    height: 28px;
                    left: -6px;
                    top: -3px;
                    opacity: 0;
                    cursor: pointer;
                    z-index: 2;
                }
                .toggle span{
                    display: block;
                    width: 28px;
                    height: 3px;
                    background-color: var(--main-color);
                    border-radius: 3px;
                    transition: all 0.5s;
                }

                /* Hamburger menu animation*/

                /* cara bacanya :nth-child() adalah... anak ke2 dari .menu-toggle */
                .toggle span:nth-child(2){
                    /* background-color: red; */
                    transform-origin: 0 0;
                }
                .toggle span:nth-child(4){
                    transform-origin: 0 100%;
                }

                /* cara bacanya : ketika input di cek ~cari~ sodaranya yg merupakan span anak ke-2 */
                .toggle input:checked ~ span:nth-child(2){
                    background-color: var(--main-color);
                    transform: rotate(45deg) translate(-1px, -1px);
                }
                .toggle input:checked ~ span:nth-child(4){
                    background-color: var(--main-color);
                    transform: rotate(-45deg) translate(-1px, 0px);
                }
                .toggle input:checked ~ span:nth-child(3){
                    transform: scale(0);
                }

                @media screen and (max-width: 1280px) {
                    nav {
                        padding: 14px 2%;
                        transition: .2s;
                    }
                    .navbar a {
                        padding: 5px 0;
                        margin: 0px 20px;
                    }
                }
                @media screen and (max-width: 1090px) {
                    .navbar {
                        position: absolute;
                        top: 0;
                        right: -100%;
                        z-index: -1;
                        width: 270px;
                        height: 250px;
                        padding-top: 10vh;
                        background: var(--bg-color);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        border-radius: 10px;
                        transition: all .50s ease;
                    }
                    .navbar a {
                        display: block;
                        color: var(--text-color);
                        margin: 12px 0;
                        padding: 0px 25px;
                        transition: all .50s ease;
                    }
                    .navbar a:hover {
                        color: var(--main-color);
                        background: var(--bg-color);
                    }
                    .navbar.open {
                        right: 2%;
                        z-index: 3;
                    }
                    .toggle{
                        display: flex;
                    }
                }
            </style>
            
            <nav>
                <a href="#" class="logo">
                    <img src="${logoWajah}" alt="" srcset="">
                    <span>Foodies</span>
                </a>

                <ul class="navbar">
                    <li><a href="#">Recipe</a></li>
                    <li><a href="#">Price</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div class="login">
                    <a href="#" class="user">
                        <img src="${user}">
                        <span>Sign In</span>
                    </a>
                    <div class="toggle">
                        <input type="checkbox">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        `;

        // console.log(this.shadowDOM.querySelector('#icon-menu'));
        
        
        // const iconMenu = this.shadowDOM.querySelector('#menu-icon');
        // const navbar = this.shadowDOM.querySelector('nav ul');

        // iconMenu.onclick = () => {
        //     iconMenu.classList.toggle('bx-x');
        //     navbar.classList.toggle('open');
        // }
                

    }
}

customElements.define('nav-bar', NavBar);


// const iconMenu = document.querySelector('#menu-icon');
// const navbar = document.querySelector('nav ul');

// console.log(iconMenu);

// iconMenu.onclick = () => {
//     iconMenu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// }