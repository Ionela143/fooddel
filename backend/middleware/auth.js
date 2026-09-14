import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    console.log("BODY BEFORE:", req.body);

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({
        success: false,
        message: "Not Authorized"
      });
    }

    const token = authHeader.replace("Bearer ", "").trim();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Create body if it doesn't exist
    if (!req.body) {
      req.body = {};
    }

    req.body.userId = decoded.id;

    console.log("BODY AFTER:", req.body);

    next();

  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.json({
      success: false,
      message: "Invalid Token"
    });
  }
};

export default authMiddleware;