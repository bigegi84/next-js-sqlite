import { withSessionRoute } from "../../../lib/withSession";
export default withSessionRoute(async (req, res) => {
  if (req.method === "POST") {
    res.status(405).send("");
    return;
  }

  res.status(200).send({ result: `Hello World` });
});
