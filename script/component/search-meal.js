import search from '../aset/search.svg';

class SearchMeal extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#search-input').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
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
                .search-byname{
                    margin: 1.2rem 0;
                    display: flex;
                    justify-content: center;
                }
                .search-control,
                .search-btn{
                    width: 50%;
                }
                .search-control{
                    padding: 0 1rem;
                    font-size: 1.1rem;
                    font-family: inherit;
                    outline: 0;
                    border: 1px solid var(--bg-color);
                    color: var(--bg-color);
                    border-top-left-radius: 2rem;
                    border-bottom-left-radius: 2rem;
                }
                .search-control::placeholder{
                    color: var(--bg-color);
                    opacity: .2;
                }
                .search-btn{
                    width: 55px;
                    height: 55px;
                    font-size: 1.8rem;
                    background: var(--bg-color);
                    border: none;
                    border-top-right-radius: 2rem;
                    border-bottom-right-radius: 2rem;
                    transition: all 0.4s linear;
                    
                }
                .search-btn img {
                    width: 5vh;
                    margin-top: 1vh;
                    margin-right: 1vh;
                    cursor: pointer;
                }
                .search-btn img:hover{
                    opacity: .4;
                } 
            </style>

            <div class="search-byname">
                <input type="text" class="search-control" placeholder="Enter an ingredient" id="search-input">
                <button type="submit" class="search-btn" id="search-btn">
                    <a href='#this'>
                        <img src="${search}" alt="">
                    </a>                  
                </button>
            </div>
        `;

        this.shadowDOM.querySelector('#search-btn')
                .addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-meal', SearchMeal);