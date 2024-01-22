import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "../../config.js";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) return res.status(401).send("access denied");

    const verifiedUser = jwt.verify(token, JWT_PRIVATE_KEY);
    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

export { verifyToken };
