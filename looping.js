arr=[20,'R',3,false]//given arr

//for in loop
for(ind in arr)
{
    console.log(ind);
}
//prints index of objects

//for of loop(with "";{}")
for(ind of arr)
    {
        console.log(ind);
    }
    //prints values of objects


    //for of loop(without";{}")
arr.forEach(ind=>
    {
        console.log(ind)
    });

    arr.forEach(ind=>
        
            console.log(ind)
        )
    //prints values of objects
