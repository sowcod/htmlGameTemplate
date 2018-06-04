const initCanvas = () => {
  const elem = document.createElement('canvas')
  elem.setAttribute('width', 500)
  elem.setAttribute('height', 500)
  document.body.appendChild(elem)

  return elem
}

class Engine {
  constructor (canvas) {
    this.canvas = canvas
    this.x = 10

    this.beforeTime = 0
    this.frameRate = 30
  }
  frameCheck () {
    const now = (new Date()).getTime()
    if (now - this.beforeTime > 1000 / this.frameRate) {
      this.render()
      this.beforeTime = now
    }
  }
  render () {
    console.log('a')
    const ctx = this.canvas.getContext('2d')
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, 0, 10, 10)
    this.x += 1
  }
}

const loop = (engine) => {
  engine.frameCheck()
  window.requestAnimationFrame(() => loop(engine))
}

const beginLoop = (canvas) => {
  const engine = new Engine(canvas)

  loop(engine)
}

document.body.onload = () => {
  const canvas = initCanvas()
  beginLoop(canvas)
}
