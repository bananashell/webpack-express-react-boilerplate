import { Router } from "express";

let router = Router();

router.get("/", (req, res) => res.send("root products"));
router.get("/test", (req, res) => res.send("test products"));

export default router;
