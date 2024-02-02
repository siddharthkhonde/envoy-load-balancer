var appRouter = function (app) {
  app.get("/health-service/v1", function (req, res) {
    res.send("Hello. I am microservice #2 -> health-service");
  });

  app.get("/health-service/v1/subpath", function (req, res) {
    res.send("Hello. I am the subpath of microservice #2 -> health-service");
  });
};

module.exports = appRouter;
