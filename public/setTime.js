function setTime() {
    let time = new Date()
    let yyyy = time.getFullYear()
    let mm = time.getMonth()
    let dd = time.getDate()
    let hh = time.getHours()
    let min = time.getMinutes()

    return new Date(yyyy, mm, dd, hh, min)
}

module.exports = setTime