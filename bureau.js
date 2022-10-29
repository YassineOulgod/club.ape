const BureauModel=require('../models/bureau')

exports.bureauController=(req,res,next)=>{
    BureauModel.getallmembers().then(members=>{
            res.render('index',{members:members})
    })
}