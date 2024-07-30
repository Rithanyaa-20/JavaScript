//type1
function formValidation(fVC)
{
    setTimeout(()=>
    {
        console.log("Form validation called");
        fVC();

    },2000);
}

function formValidationCompleted()
{
    console.log("Form Validation Completed");
}

formValidation(formValidationCompleted);

//type2
function formValidation(fVC)
{
    setTimeout(()=>
    {
        console.log("Form validation called");
        fVC();

    },2000);
}

function fVC()
{
    console.log("Form Validation Completed");
}

formValidation(fVC);