import express from "express";
import { config } from "dotenv";
import postsRoutes from "./routes/posts.mjs";
import tagsRoutes from "./routes/tags.mjs";
import usersRoutes from "./routes/users.mjs";

config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(postsRoutes);
app.use(tagsRoutes);
app.use(usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});