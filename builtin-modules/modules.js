// ===============
// OPERATION SYSTEM
// ===============


console.log('Operation System')
const os = require('os')

console.log(os.release())
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(os.userInfo())
console.log(os.uptime())


// ===============
// PROCESS
// ===============



console.log('PROCCES')
console.log(process.argv)
console.log(process.env)
console.log(process.memoryUsage)


// ===============
// TIMER
// ===============



console.log('TIMER')
function Lastgame(game){
    console.log(`Tu ultimo juego comprado fue ${game}`)
}
function gameToFinish(game){
    console.log(`Proximo juego a terminar: ${game}`)
}
function nextGme(game,next){
    console.log(`Proximo juego a jugar: ${game}, ${next}`)
}
setTimeout( Lastgame, 5000, 'Hades')
setImmediate(gameToFinish, 'TerrariaCalamity')
// setInterval(nextGme, 2000, 'Portal', 'Portal2')



// ===============
// FYLE SYSTEM
// ===============


const fs = require('fs')

fs.readFileSync('index.html' , 'utf-8')

fs.renameSync('index.html' , 'main.html')

fs.writeFileSync('main.html', 'Hola')

fs.appendFileSync('main.html', 'Hello')

    const fs = require('fs')
    const path = require('path')

    console.log(path.join('/test', 'note.txt'))
    fs.writeFile('./test/note2.txt', 'I dont know 2', (err) => {
    if(err)
    {
        console.log(err)
    }
    console.log('archivo creado')
    })


    const rs = fs.createReadStream('./test/note.txt', 'utf-8')
    const ws = fs.createWriteStream('./test/newNoteStream.txt', 'utf-8')
    
    
    rs.on('data', (chunk) => {
        ws.write(chunk)
    })
    
    
    rs.pipe(ws)


// ===============
// PATH
// ===============


const path = require('path')

console.log(path.sep)

const filePath = path.join('/test', 'note.txt')
console.log(filePath)

const nameFile = path.basename(filePath)
console.log(nameFile)

const absolute = path.resolve(__dirname,'test', 'note.txt')
console.log(absolute)


// ===============
// HTTP
// ===============


const http = require('http')

const server = http.createServer((res,req) => {
	if(req.url === '/'){
		res.end('first page')	
	}

	if(req.url === '/about'){
	res.end('Section about')
	}
	res.end('<h1>This section doesnt exist</h1> <a hrf="/">Go back home</a>')
})

server.listen(4000, () => {
  console.log('El servidor esta corriendo')
}) 