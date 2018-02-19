const dog_api = `https://dog.ceo/api/breeds/list/all`
const selectBreed = document.querySelector(`#selectBreed`);
const viewDog = document.querySelector(`#viewDog`)
const breedImage = document.querySelector(`#breedImage`)



$.ajax({
    url: dog_api,
    type: "GET",
    dataType: "json",
    success: (data)=>{
       
        for (let i  in data.message){
            selectBreed.innerHTML += `
        // //     <option value="${i}">${i}</option>
        //     `
        }
    }
})


viewDog.addEventListener(`click`, e =>{
    const breedName = selectBreed.value
    $.ajax({
        url: `https://dog.ceo/api/breed/${breedName}/images/random`,
        type: "GET",
        dataType: "json",
        success: (data)=>{
            breedImage.setAttribute(`src`, data.message)
        }
    })
})

