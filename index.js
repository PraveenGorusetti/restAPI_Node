const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const Port = 5000;  
const app = express();  

const mariadb=require('mariadb');

const pool=mariadb.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodedb',
})
async function main(){
    
    try{
        let conn=await pool.getConnection();
        let rows=await conn.query("INSERT INTO clients(Name,Address) VALUES('Keerthi','Karnataka')");
        console.log("Data Inserted");
    }
catch(err){

}
}
main()

app.use(bodyParser.json());  
app.use(cors());  
app.get('/', function(req, res) {  
    res.send('hello server 5000 is working ');  
})  

app.post('/enroll', function(req, res) {  
    console.log(req.body);  
    res.status(200).send({  
        'messege enroll': 'data recived'  
    })  
})  
app.listen(Port, function() {  
    console.log('server running on localhost: ' + Port)  
});
 