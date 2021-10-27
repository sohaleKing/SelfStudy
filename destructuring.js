function sendEmail(subject, body, user) {
    const { email } = user

    if (!email) {
        return
    }

    sendOffEmail(email, subject, body)
}

// Twilio --- send your email

const user = {
    firstName: 'Bobby',
    lastName: 'Connolly',
    age: 37,
    email: 'thomas.connolly@mcgill.ca',
}

const user = ['Bobby', 'Connolly', 37, 'thomas.connolly@mcgill.ca']

sendEmail('Meeting next week', 'Oct 31', user)
