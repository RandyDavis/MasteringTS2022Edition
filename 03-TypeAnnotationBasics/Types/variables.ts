let movieTitle: string = 'The Matrix'
movieTitle = 'The Matrix Reloaded'
movieTitle = 9 // Complains bc movieTitle is a string and we're trying to assign a number
movieTitle.toUpperCase()

let numCatLives: number = 9
numCatLives += 1
numCatLivs = 'zero' // Complains bc numCatLives is a number and we're trying to assign a string

let gameOver: boolean = false
gameOver = true
gameOver = 'true' // Complains bc gameOver is a boolean and we're trying to assign a string
