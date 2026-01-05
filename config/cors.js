const allowedOrigins = [
    "https://michyhems.github.io",
    "https://resume-oi5f.onrender.com",
    "https://backend-7vez.onrender.com",
];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
