const i = document.querySelector('input')
const buttons = document.querySelectorAll('button')



for (let b of buttons) {
    b.addEventListener('click', () => {

        const inputBefore = i.value
        const pressedNow = b.innerText
        const latest = inputBefore + pressedNow
        if (pressedNow === 'C') {
            i.value = ''
            console.log(i.value)
        }
        else if (pressedNow === '=') {
            try {
                i.value = eval(inputBefore)
            }
            catch {
                i.value = "Error"
            }

        }

        else {
            i.value = latest
        }


    })
} 
