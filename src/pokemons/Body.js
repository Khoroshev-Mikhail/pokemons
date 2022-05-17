import React from 'react'
import './body.css'

class Body extends React.Component{
    render(){
        return <div className='main'>
            <header className='header'> 
                <h2 className='header__topH2'>Поймано покемонов</h2>
                <h1 className='header__botH1'>5/16</h1>
            </header>
            <div className='pokemonsgrid'>

                <div className='pokemon'>
                    <div className='pokemon__name'>name</div>
                    <div className='pokemon__img'>
                        <img />
                    </div>
                    <div className='pokemon__button'>
                        <button>Поймать</button>
                    </div>
                </div>

                <div className='pokemon'>
                    <div className='pokemon__name'>name</div>
                    <div className='pokemon__img'>
                        <img />
                    </div>
                    <div className='pokemon__button'>
                        <button>Поймать</button>
                    </div>
                </div>

                <div className='pokemon'>
                    <div className='pokemon__name'>name</div>
                    <div className='pokemon__img'>
                        <img />
                    </div>
                    <div className='pokemon__button'>
                        <button>Поймать</button>
                    </div>
                </div>

                <div className='pokemon'>
                    <div className='pokemon__name'>name</div>
                    <div className='pokemon__img'>
                        <img />
                    </div>
                    <div className='pokemon__button'>
                        <button>Поймать</button>
                    </div>
                </div>

                <div className='pokemon'>
                    <div className='pokemon__name'>name</div>
                    <div className='pokemon__img'>
                        <img />
                    </div>
                    <div className='pokemon__button'>
                        <button>Поймать</button>
                    </div>
                </div>

                <div className='pokemon'>
                    <div className='pokemon__name'>name</div>
                    <div className='pokemon__img'>
                        <img />
                    </div>
                    <div className='pokemon__button'>
                        <button>Поймать</button>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Body