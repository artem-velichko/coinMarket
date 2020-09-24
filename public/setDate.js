function setTime(time) {
    let yyyy = time.getFullYear()
    let mm = time.getMonth() + 1
    let dd = time.getDate()
    let hh = time.getHours()
    let min = time.getMinutes()

    if (mm < 10) {
        mm = '0' + mm
    }
    if (dd < 10) {
        dd = '0' + dd
    }
    if (min < 10) {
        min = '0' + min
    }

    return `${hh}:${min} / ${dd}.${mm}.${yyyy}`
}

module.exports = setTime