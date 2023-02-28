import { Router } from "express";
import helloController from "./controllers/helloController";
import UsersController from "./controllers/UsersController";
import RespositoriesController from "./controllers/RespositoriesController";
import auth from "./middlewares/auth";
import SessionsController from "./controllers/SessionsController";

const routes = new Router();
routes.post('/sessions', SessionsController.create)
routes.get('/hello', helloController.index);

// routes.use(auth)
//rest
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


routes.get('/users/:user_id/repositories', RespositoriesController.index);
routes.post('/users/:user_id/repositories', RespositoriesController.create);
routes.delete('/users/:user_id/repositories/:id', RespositoriesController.destroy);

export default routes;