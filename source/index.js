let turnIndicator,
    currentTurn,
    nextTurn


const setTurn = () => {
  if (!currentTurn) {
    if (Math.floor(Math.random() * 2) === 0) {
      currentTurn = "X"
      nextTurn = "O"
    } else {
      currentTurn = "O"
      nextTurn = "X"
    }
  } else {
    temp = nextTurn
    nextTurn = currentTurn
    currentTurn = temp
  }

  turnIndicator.text(currentTurn)
}

const assignMove = (e) => {
  if ($(e.target).text() === '') {
    $(e.target).text(currentTurn)
    setTurn()
  } else {
    alert('You can\'t play there')
  }
}

$(document).ready( () => {
  turnIndicator = $('#turnIndicator')

  setTurn()

  $('.game_space').on('click', assignMove)
})
