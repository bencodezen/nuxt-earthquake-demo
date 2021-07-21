export const state = () => ({
  bbox: [1, 2, 3]
})

export const getters = {
  tripleBbox(state) {
    return state.bbox.map(item => item * 3)
  }
}

export const mutations = {
  setBbox(state, payload) {
    state.bbox = payload
  }
}
