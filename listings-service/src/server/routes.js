const setupRoutes = (app) => {
  app.get("/listings", (req, res, next) => {
    return res.json({ message: "Working" });
  });
};

export default setupRoutes;
