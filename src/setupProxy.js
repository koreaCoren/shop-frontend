const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/shop-backend",
        createProxyMiddleware({
            target: "http://192.168.0.5",
            changeOrigin: true,
        })
    );
};
