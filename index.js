const spanCount = document.querySelector('#spanCount');
const spanAverageRate = document.querySelector('#spanAverageRate');
const ul = document.querySelector('ul');

//declaring first two freelancers
const freeLancers = [
    { name: 'Lancer Pets', price: 25, occupation: 'Petsitter'},
    { name: 'Dr. Robert', price: 45, occupation: 'Programmer'},
];

const names = ['Carl', 'James', 'Gabriel', 'Emmi', 'Lance', 'Sunn O)))', 'Samuel', 'Abe', 'Jason', 'Kurt', 'Blaine', 'William', 'Mike', 'Nick', 'Noah', 'Rick'];
const occupations = ['Programmer', 'Petsitter', 'Therapist', 'Gardener', 'Drummer', 'Personal Chef', 'Singer', 'Guitarists', 'Pianist', 'Architect'];



function render(){
   spanCount.innerHTML = freeLancers.length;  

   let sum = 0;
   freeLancers.forEach((lancer)=>{
       sum = sum + lancer.price;
   });

   const average = sum / freeLancers.length;
   spanAverageRate.innerHTML = average.toFixed(2);

   const html = freeLancers.map((lancer)=> {
      return `
      <h3>
         <li>
            ${lancer.name}
         </li>
         <li>
            Price: ${lancer.price}
         </li>
         <li>
            Occupation: ${lancer.occupation}
         </li>
         <p></p>
       </h3>
      `;
   }).join('');

   ul.innerHTML = html;
}

render();

const interval = setInterval(()=>{
    const nameIndex = Math.floor(Math.random()*names.length);
    const name = names[nameIndex];
    const occupationIndex = Math.floor(Math.random()*occupations.length);
    const occup = occupations[occupationIndex];
    const rate = Math.ceil(Math.random()*50);
    const randomLancer = {
        name: name,
        occupation: occup,
        price: rate,
    };
   freeLancers.push(randomLancer);
   render();
   if(freeLancers.length === 15){
      clearInterval(interval);
   }
}, 1500)