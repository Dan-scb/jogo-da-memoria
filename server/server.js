const express = require('express')
const app = express()
const cors = require('cors')

const data =[
    {
      id: 1,
      select: 1,
      src: "https://img.icons8.com/dusk/64/000000/react.png"
 },
 {
  id: 2,
   select: 2,
   src: "https://img.icons8.com/windows/32/000000/node-js.png"
},
{
id: 3,
select: 3,
src: "https://img.icons8.com/color/48/000000/facebook.png"
},
{
id: 4,  
select: 4,
src: "https://img.icons8.com/color/48/000000/chrome--v1.png"
},
{
id: 5,  
select: 5,
src: "https://img.icons8.com/color/48/000000/css3.png"
},
{
  id: 6,  
select: 6,
src: "https://img.icons8.com/color/48/000000/html-5--v1.png"
},
{
  id: 7,
select: 7,
src: "https://img.icons8.com/pastel-glyph/64/000000/page-not-found--v1.png"
},
{
  id: 8,
select: 8,
src: "https://img.icons8.com/stickers/100/000000/server.png"
},
{
  id: 9,
select: 9,
src: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-www-web-design-and-development-flatart-icons-outline-flatarticons-1.png"
},


{
  id: 10,
select: 1,
src: "https://img.icons8.com/dusk/64/000000/react.png"
},
{
  id: 11,
select: 2,
src: "https://img.icons8.com/windows/32/000000/node-js.png"
},
{
  id: 12,
select: 3,
src: "https://img.icons8.com/color/48/000000/facebook.png"
},
{
  id: 13,
select: 4,
src: "https://img.icons8.com/color/48/000000/chrome--v1.png"
},
{
  id: 14,
select: 5,
src: "https://img.icons8.com/color/48/000000/css3.png"
},
{
  id: 15,
select: 6,
src: "https://img.icons8.com/color/48/000000/html-5--v1.png"
},
{
  id: 16,
select: 7,
src: "https://img.icons8.com/pastel-glyph/64/000000/page-not-found--v1.png"
},
{
  id: 17,
select: 8,
src: "https://img.icons8.com/stickers/100/000000/server.png"
},
{
  id: 18,
select: 9,
src: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-www-web-design-and-development-flatart-icons-outline-flatarticons-1.png"
},
]

function random(vet){
    
      let large = vet.length

     for(let i =0; i < large; i++){
      let position = Math.floor(Math.random() * large)

       let posiA = vet[i]
       vet[i] = vet[position]
       vet[position] = posiA
          
     }
    
     return vet
    }


app.use(cors())

app.get('/cards', (req, res) => {
    configs = random(data)
    res.send(configs)
})

app.listen(8080, () => {
    console.log('Servidor rodando!')
})