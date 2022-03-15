export const fetchData = (name, email, description) =>{
    const body = {
        name: name,
        email: email,
        description: description
    }
    try {
        const responsePromise = fetch("http://localhost:5000/api/mail/send", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }catch (error) {
        console.log(error.message)
    }
}