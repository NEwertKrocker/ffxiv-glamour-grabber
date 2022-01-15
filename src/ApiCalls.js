const fetchChars = (charName, serverName) => {
  return fetch(`https://xivapi.com/character/search?name=${charName}&server=${serverName}`)
    .then(response =>
      {if (response.ok){
        return response.json()
      }
      throw response.message
    })
}

const getCharOutfit = (charID) => {
  return fetch(`https://xivapi.com/character/${charID}`, { mode: 'cors' })
    .then(response =>
      {if (response.ok){
        return response.json()
      }
      throw response.message
    })
}

const fetchItem = (itemID) => {
  return fetch(`https://xivapi.com/item/${itemID}`, { mode: 'cors' })
    .then(response =>
      {if (response.ok){
        return response.json()
      }
      throw response.message
    })
}

export { fetchChars, getCharOutfit, fetchItem };
