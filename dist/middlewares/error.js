import ErrorHandler from "../utils/utility-class.js";
export const errorMiddleware = (err, req, res, next) => {
    if (err?.code === 11000) {
        const duplicateField = Object.keys(err.keyPattern || {})[0];
        res.status(400).json({
            success: false,
            message: `${duplicateField} already exist`,
        });
        return;
    }
    //Handles custom Errorhandler
    if (err instanceof ErrorHandler) {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || "Internal Server Error",
        });
        return;
    }
    res.status(500).json({
        success: false,
        message: err.message || "Something went wrong",
    });
};
