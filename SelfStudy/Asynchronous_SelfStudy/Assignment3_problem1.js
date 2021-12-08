function refreshUserProfile1() {
    const promise = fetch("/users/me")
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response.statusText)
            }
        })
        .then((data) => {
            return data
        })
        .catch((error) => {
            alert(error)
        })
    return promise
}

async function refreshUserProfile() {
    try {
        const response = await fetch("/users/me")
        let data
        if (response.ok) {
            data = await response.json()
        } else {
            data = Promise.reject(response.statusText)
        }
        return data
    } catch (error) {
        alert(error)
    }
}
