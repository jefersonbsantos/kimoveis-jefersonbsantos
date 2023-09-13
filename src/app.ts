import "express-async-errors";
import "reflect-metadata";
import express, { application } from "express";
import { userRouter } from "./routers/user.router";
import { handleError } from "./middlewares/handleErrors.middleware";
import { sessionRouter } from "./routers/session.router";
import { categoryRouter } from "./routers/category.router";
import { realEstateRouter } from "./routers/realEstate.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);

app.use(handleError);

export default app;
