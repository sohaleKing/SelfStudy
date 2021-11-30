export function serializeQueryParams(obj) {
    const str = []
    for (let qp in obj) {
        if (obj.hasOwnProperty(qp)) {
            str.push(`${encodeURIComponent(qp)}=${encodeURIComponent(obj[qp])}`)
        }
    }

    if (str.length) {
        return `?${str.join("&")}`
    } else {
        return ""
    }
}

export function isEmpty(obj) {
    return !!Object.keys(obj).length
}
