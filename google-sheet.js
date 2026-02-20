const scriptURL = 'https://script.google.com/macros/s/AKfycbwYH92sN6qJn9ZL_ycF1TWhDy-roFnTZwGFevGqXwE44YZBUbAVL1haoeDTTmMp9sju/exec'

const form = document.forms['newsletter-form']

form.addEventListener('submit', e=>
{
    e.preventDefault()
    const submitBtn = form.querySelector('button');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form is submitted Succesfully."))
    .then(()=>{window.location.reload();})
    .catch(error => console.error('Error!',errormessage))
}
    )