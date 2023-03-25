import  express  from "express";
import { create, get, getAll, remove, update } from "../controllers/user.js";


const router = express.Router();
router.get("/api/users",getAll)
router.get("/api/users/:id", get);
router.post("/api/users", create);
router.put("/api/users/:id/edit", update);
router.delete("/api/users/:id", remove);

export default router;
