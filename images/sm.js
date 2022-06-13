const sounds=[
    'Jason',
    'lil Jon',
    'mario',
    'TwoClock',
    'beep boppy',
    'Dixon Cider',
    'Baldy',
    'PK Fire',
    'look Eye',
    'Show up'
    ];
    
    sounds.forEach((sound) => {
      const btn = document.createElement('button');
      btn.classList.add('btn');
      btn.innerText = sound;
    
      btn.addEventListener('click', () =>{
    
        document.getElementById('buttons').appendChild(btn); 
        }); // <= You forgot this
    });
    