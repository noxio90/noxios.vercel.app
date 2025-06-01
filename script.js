async function fe() {
    const aipee = fetch("https://api.ipify.org/?format=json")
    alert((await aipee).text)
}

fe()