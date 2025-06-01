async function fe() {
    const aipee = await fetch("https://api.ipify.org/?format=json")
    alert(await aipee.text())
}

fe()