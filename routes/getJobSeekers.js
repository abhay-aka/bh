const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/',async (req, res)=> {
    let {page}=req.body;
    if(!page)page=0;
    let skip=page*10;
    const response = await db.any(`SELECT latlong, jsd.userid, firstname as userfirstname, lastname as userlastname , jsd.created_datetime, jsd.updated_datetime, addressid FROM jobseeker_detail as jsd inner join user_info_detail as uid on uid.userid = jsd.userid order by id offset ${skip} limit 10 `)
    // console.log(rs);
    return res.json(response);
}) 
 
module.exports = router;