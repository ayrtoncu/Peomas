let textparrafo1="Las umbrías bajo las cuales veo, en mis ensueños, los más traviesos pájaros cantores, son labios; y toda la melodía de tu voz no es hecha sino por palabras creadas por tus labios.";
let textparrafo2="De tus ojos, engastados en el santuario celeste de tu corazón, caen las miradas desoladas ahora, ¡oh Dios!, sobre mi espíritu fúnebre, como la luz de una estrella sobre un sudario."
let textparrafo3="¡Tu corazón, tu corazón! Me despierto y suspiro y vuelvo a dormirme para ensoñar hasta el día de la verdad, que el oro,—capaz de tantas locuras,—no podrá jamás comprar."
let writing = str => {
  let arrFromStr = str.split('');
  let i = 0;
  let prinStr = setInterval(function(){
    title.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      clearInterval(prinStr);
      parrafo_1(textparrafo1)
    }
  }, 150);
}

writing("A LA SEÑORITA");

let parrafo_1 = str => {
  let arrFromStr = str.split('');
  let i = 0;
  let prinStr = setInterval(function(){
    parrafo1.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      parrafo1.innerHTML += `<br> <p>--</p>`;
      clearInterval(prinStr);
      parrafo_2(textparrafo2);
    }
  }, 100);
}

let parrafo_2 = str => {
  let arrFromStr = str.split('');
  let i = 0;
  let prinStr = setInterval(function(){
    parrafo2.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      parrafo2.innerHTML += `<br> <p>--</p>`;
      clearInterval(prinStr);
      parrafo_3(textparrafo3);
    }
  }, 100);
}
let parrafo_3 = str => {
  let arrFromStr = str.split('');
  let i = 0;
  let prinStr = setInterval(function(){
    parrafo3.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      parrafo3.innerHTML += `<br> <p>Espero te haya gustado :)</p>`;
      clearInterval(prinStr);
    }
  }, 100);
}

