const remoteURL = "http://localhost:5002"

export default {
  get(id, routeName) {
    return fetch(`${remoteURL}/${routeName}/${id}`)
      .then(result => result.json())
  },
  getAll(routeName) {
    return fetch(`${remoteURL}/${routeName}`)
      .then(result => result.json())
  },
  getAllEmbeddingOther(id, routeName, embedName) {
    return fetch(`${remoteURL}/${routeName}/${id}?_embed=${embedName}`)
      .then(result => result.json())
  },
  delete(id, routeName) {
    return fetch(`${remoteURL}/${routeName}/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newObject, routeName) {
    return fetch(`${remoteURL}/${routeName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    })
      .then(data => data.json())
  },
  update(editedObject, routeName) {
    return fetch(`${remoteURL}/${routeName}/${editedObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObject)
    }).then(data => data.json());
  }
}