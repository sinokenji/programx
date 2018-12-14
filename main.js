/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY! How are you doing? I am fine, thanks. ')
})
app.listen(3000, () => console.log('Server running on port 3000'))



