const form = document.querySelector('form')!

const username = <HTMLInputElement>document.querySelector('#username')
const degree = <HTMLInputElement>document.querySelector('#degree')

form.onsubmit = e => {

    e.preventDefault();
    console.log(`username: ${username.value} \n degree: ${degree.value}`)
}

