const cardDt = [
    {
        heading:'card 1',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://pixabay.com/photos/eagle-hawk-beak-feathers-8262555/"
    
},
    {
        heading:' card 2',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://pixabay.com/photos/eagle-hawk-beak-feathers-8262555/"
    
},
    {
        heading:" card 3",
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://pixabay.com/photos/eagle-hawk-beak-feathers-8262555/"
    
},
    {
        heading:'Card 4',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://pixabay.com/photos/eagle-hawk-beak-feathers-8262555/"
    
}
]

const postcontainer = document.querySelector('.container');
 
const post = ()=>{
    cardDt.map((postdata)=>{
        const postelement= document.createElement('div');
        postelement.classList.add('card');
        postelement.innerHTML=`<img src=${postdata.image_url} alt="" />
        <h2 class="heading">${postdata.heading}</h2>
        <p class="card-para">
          Lorem ips eaque architec sapiente, maxime quaerat quia? Nisi est animi
          quis enim necessitatibus delectus eos id commodi ipsam?
        </p>`
        postcontainer.appendChild(postelement)
    })
}
post()