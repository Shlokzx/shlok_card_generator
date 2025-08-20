let form = document.querySelector('form');
let inp = document.querySelectorAll('input');
let mai = document.querySelector('#main');

form.addEventListener('submit', function(data){
    data.preventDefault();

    let card = document.createElement('div');
    card.classList.add('card');

    let prof = document.createElement('div');
    prof.classList.add('profile');

    let im = document.createElement('img');
    im.setAttribute('src', inp[0].value);

    let h3 = document.createElement('h3');
    h3.textContent = inp[1].value;

    let h5 = document.createElement('h5')
    h5.textContent = inp[2].value

    let p = document.createElement('p');
    p.textContent = inp[3].value;

    prof.appendChild(im);
    card.appendChild(prof);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);


    mai.appendChild(card)

    form.reset();
})



