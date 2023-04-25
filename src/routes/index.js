import { Router } from "express";

const router = Router();

router.get('/',(req,res) => res.render('pages/home',{ title:'Home'}));
router.get('/aboutme',(req,res) => res.render('pages/aboutme',{ title:'Sobre mi'}));

export default router;