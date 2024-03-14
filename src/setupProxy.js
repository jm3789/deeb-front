const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
	// /v1 경로로 들어오는 모든 요청을 네이버의 오픈 API 서버로 전달하는 프록시 역할
	app.use(
		"/v1",
		createProxyMiddleware({
			target: "https://openapi.naver.com",
			changeOrigin: true,
		})
	);
};
