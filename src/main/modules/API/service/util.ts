export default class Loading {
  async loading() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 300)
    })
  }
}
