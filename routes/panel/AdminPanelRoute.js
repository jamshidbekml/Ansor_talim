const expressFileUpload = require("express-fileupload")

const { PanelGetController } = require("../../controllers/AdminPanelController");
const { ApplicantsGetController, ApplicantToCoursePostController } = require("../../controllers/ApplicantsController");
const { CommentsGetController, AddCommentsPostController, CommentDeleteController } = require("../../controllers/CommentsController");
const { CourseGetController, AddCoursePostController, CourseDeleteController } = require("../../controllers/CourseController");
const { NewsGetController, AddNewsPostController, NewsDeleteController } = require("../../controllers/NewsController");
const { ScenesGetController, AddScenesPostController, SceneDeleteController } = require("../../controllers/ScenesController");
const { UserSessionGetController, SessionDeleteController } = require("../../controllers/UsersController");
const AuthMiddleware = require("../../middlewares/AuthMiddleware");

const AdminPanelRoute = require("express").Router();

AdminPanelRoute.use(AuthMiddleware)
AdminPanelRoute.get("/", AuthMiddleware, PanelGetController);
AdminPanelRoute.get("/sessions", AuthMiddleware, UserSessionGetController);
AdminPanelRoute.get("/sessions/:session_id", SessionDeleteController)
AdminPanelRoute.get("/applicants", ApplicantsGetController);
// AdminPanelRoute.post("/applicants", ApplicantToCoursePostController)

// News page routers
AdminPanelRoute.get("/news", NewsGetController);
AdminPanelRoute.post("/news", expressFileUpload(), AddNewsPostController);
AdminPanelRoute.get("/news/:news_id", NewsDeleteController);

// Courses page routers
AdminPanelRoute.get("/courses", CourseGetController);
AdminPanelRoute.post("/courses", expressFileUpload(), AddCoursePostController);
AdminPanelRoute.get("/courses/:course_id", CourseDeleteController);


// Comments page routers
AdminPanelRoute.get("/comments", CommentsGetController );
AdminPanelRoute.post("/comments", expressFileUpload(), AddCommentsPostController);
AdminPanelRoute.get("/comments/:comment_id", CommentDeleteController)

// Scenes page routers

AdminPanelRoute.get("/scenes", ScenesGetController );
AdminPanelRoute.post("/scenes", expressFileUpload(), AddScenesPostController);
AdminPanelRoute.get("/scenes/:scene_id", SceneDeleteController)




module.exports = AdminPanelRoute;