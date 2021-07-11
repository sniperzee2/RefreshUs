const Movie=require('../models/movie')
const Game=require('../models/game')
const Webseries=require('../models/web-series')
const express = require('express');

exports.dashboard=async(req,res)=>{

    try {
        const games=await Game.find().lean()
        const movies=await Movie.find().lean()
        const webseries=await Webseries.find().lean()
        res.render('home',{
            name: req.user.displayName,
            photo: req.user.image,
            title:"Dashboard",
            movies:movies,
            games:games,
            webseries:webseries
            
        })
        // res.status(200).json({
        //     message:"Success",
        //     games, 
        //     movies,
        //     webseries
        // })
        // res.render('login')
        
    } catch (error) {
        res.status(500).send(error)
    }
   
}
// exports.home=async (req,res) => {
    
//     try{
        
//     }
//     catch(err){
//         console.error(err)
//         // res.render('/500')
//     }
// }

exports.login=(req,res) => {
    res.render('login',{
        layout:'login',
        title:"Login",
        style:"style.css"
    })
}

exports.landingPage=(req,res) => {
    res.render('landing',{title:"Welcome",
style:"landingpage.css"})
}
exports.profilePage=(req,res) => {
    res.render('profile-page',{
        title:"Profile",
        name: req.user.displayName,
        photo: req.user.image,
        email:profile.emails[0].value, 
        time: req.user.createdAt
    })
}
