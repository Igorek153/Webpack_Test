function createAnalytics() {
    let counter = 0
    let isDestr = false


    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.addEventListener('click', listener)
            isDestr = true
        }, 
        getClick() {
            if(isDestr) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()