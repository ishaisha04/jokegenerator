const btn=document.getElementById("btn")
const joke=document.getElementsByClassName("joke")
const apiKey="w9UDyZ3774hRcQulLeI/6g==zy2LiMsYqHsMbkOB"
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
btn.addEventListener("click",async()=>{
    try {
        joke[0].innerText="updating...";
    btn.disabled=true;
    btn.innerText="Loading";
    const data=await fetch(apiURL,options).then((res)=>res.json())
    // const data=await response.json()
   // console.log(data);
    joke[0].innerText=data[0].joke;
    btn.disabled=false;
    btn.innerText="Tell Me A Joke";
    } catch (error) {
        joke[0].innerText="error happened try again latter";
        btn.disabled=false;
        btn.innerText="Tell Me A Joke"

    }
    
   
})