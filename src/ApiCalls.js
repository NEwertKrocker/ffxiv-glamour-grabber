const fetchChars = (charName, serverName) => {
  return fetch(`https://xivapi.com/character/search?name=${charName}&server=${serverName}`)
    .then(response =>
      {if (response.ok){
        return response.json()
      }
      throw response.message
    })
}

export { fetchChars }
