const router = require("express").Router();
const resourceController = require("../controllers/resource.controller");
const { isAuthenticated, isAuthorizedUpdate, isAuthorizedDelete } = require("../middleware/auth.middleware");

router.post("/", isAuthenticated, resourceController.createResource);
router.get("/posts", resourceController.getResources);
router.get("/posts/:id", isAuthenticated, resourceController.getResources);
router.put("/:id", isAuthenticated, isAuthorizedUpdate, resourceController.updateResource);
router.delete("/:id", isAuthenticated, isAuthorizedDelete, resourceController.destroyResource);

module.exports = router;
// currently trying to add the current user in the res.locals in the app.js via middleware