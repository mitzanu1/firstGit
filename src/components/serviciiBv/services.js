import firebase from '../../firebase/firebase'




export const createCategory = async (cat) => {
    const updates = {}
    const id = firebase.database().ref().child(`/categorii`).push().key
    const _categorie = { id, cat }
    updates[`/categorii/${cat}`] = _categorie
    updates[`/listaCategorii/${cat}`] = _categorie
    await firebase.database().ref().update(updates)
}

export const createSubCategory = async (cat, subcat) => {
    const updates = {}
    const id = firebase.database().ref().child(`/categorii/${cat}`).push().key
    const _categorie = { id, subcat }
    updates[`/categorii/${cat}/${subcat}`] = _categorie
    updates[`/listaCategorii/${cat}/${subcat}`] = _categorie
    await firebase.database().ref().update(updates)
}

export const createService = async (cat, subcat, nume, valori ) => {
    const updates = {}
    const id = firebase.database().ref().child(`/categorii/${cat}/${subcat}`).push().key
    const _categorie = { id, ...valori }
    updates[`/categorii/${cat}/${subcat}/${nume}`] = _categorie
    updates[`/listaCategorii/${cat}/${subcat}`] = {id, subcat}
    await firebase.database().ref().update(updates)
}
  