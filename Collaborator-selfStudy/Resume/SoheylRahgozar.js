//summary
const Soheyl_Rahgozar = {
    profession: "Software Engineering",
    education: [
        "McGill University",
        "Montreal College of Information Technology",
        "Iran University of Science and Technology",
    ],
    skills: [
        "Modern JavaScript",
        "AngularJs/Angular",
        "NodeJs",
        "Web API",
        "AWS Lambda",
        "TypeScript",
        "mySQL",
        "JQuery",
        "Laravel-PHP",
        "OOP",
        "React",
        "NativeScript",
    ],
    years_experience: 18,
    resolve_problems: (ticket) => {
        fetch(`/customer%request:${ticket}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                return findSolution(data)
            })
    },
    loveChallenge: true,
}
