const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const { calculatorsData } = require("./services");

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    data: [
      {
        name: "Cemento",
        cuantity: 3.17,
        unit: "Bulto 50Kg"
      },
      {
        name: "Acero de refuerzo Ø 1/2'",
        cuantity: 3,
        unit: "Varilla/barra X 6M"
      },
      {
        name: "Acero de estribos Ø 3/8",
        cuantity: 1.19,
        unit: "Varilla/barra X 6M"
      },
      {
        name: "Alambre negro para amarrar",
        cuantity: 0.5,
        unit: "Kilos"
      },
      {
        name: "Arena",
        cuantity: "3.08 171,4",
        unit: "m3 costales 18"
      },
      {
        name: "Piedra",
        cuantity: "1,80 101,4",
        unit: "m3 latas 18"
      }
    ]
  })
})

// app.post("/getResult", (req, res) => {
//   console.log(req.body)
//   res.status(200).json({
//     data: [
//       {
//         name: "Concrete",
//         cuantity: "3.15",
//         unit: "20 kg"
//       },
//       {
//         name: "ReinforcingSteel",
//         cuantity: 3.1,
//         unit: "Varilla/barra x 6mt"
//       },
//       {
//         name: "SteelStirrups",
//         cuantity: 1.9,
//         unit: "Varilla/barra x 6mt"
//       },
//       {
//         name: "BlackTieWire",
//         cuantity: 0.5,
//         unit: "Kilos"
//       },
//       {
//         name: "Sand",
//         cuantity: "3.08 171.4",
//         unit: "m3 latas 18L"
//       },
//       {
//         name: "Boulder",
//         cuantity: "1.80 101.4",
//         unit: "m3 Latas 18L"
//       },
//       {
//         name: "Framework",
//         cuantity: "1.0",
//         unit: "Unidad"
//       },
//     ]
//   })
// })

app.post("/getResult", (req, res) => {
  console.log(req.body)
  if(!req.body){
    res.status(200).json({
      data: []
    });
  }else{
    res.status(200).json(calculatorsData[req.body.name])
  }
})

app.listen(3000, () => {
  console.log("Listen on port 3000")
})