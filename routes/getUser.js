const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/',async (req, res)=> {
    let {page}=req.body;
    if(!page)page=0;
    let skip=page*10;
    const response = await db.any(`SELECT firstname,lastname,username as phone,email FROM user_info_detail  offset ${skip} limit 10 `)
    // console.log(rs);
    return res.json(response);
}) 
 
module.exports = router;