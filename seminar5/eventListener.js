let counter=0;

const decrementBtn=document.getElementById("decrement");
const incrementBtn=document.getElementById("increment");
const spanCounter=document.getElementById("counter");

decrementBtn.addEventListener('click',()=>
{
    counter--;

    spanCounter.textContent=counter;
});

incrementBtn.addEventListener('click',()=>
    {
        setInterval(()=>
            {
                counter++;
                spanCounter.textContent=counter;

            },100)
        
    
        
    })