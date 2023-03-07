import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='movie'>
        <img src='https://wdltd.imgix.net/assets/images/0/0/2/5/6/mm00256864.jpg?width=700'className='poster'></img>
        <div className='movie-details'>
            <div className='box'>
                <h4 className='title'>Movie Title</h4>
                <p className='rating'>9.7</p>
            <div className='overview'>
                <h1>overview</h1>
                D'après l'uvre de Giovanni Arpino. Musique de Armando Trovajoli. Fausto est un grand amateur de femmes. Il est un bel homme, dans la force de l'âge et vit seul avec sa vieille tante à Turin. Sept ans auparavant, alors capitaine de cavalerie, il a perdu la vue en manipulant une bombe lors des grandes manoeuvres. Il refuse son infirmité et dissimule son amertume sous une agressivité permanente.

            </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
