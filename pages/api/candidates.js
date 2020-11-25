// temporal endpoint
const CONGRESS_LIMIT = 9;
let cacheData = null;

function paginatedData(data, page = 1) {
  const candidates = data.slice(
    (page - 1) * CONGRESS_LIMIT,
    page * CONGRESS_LIMIT,
  );

  return { candidates, nextPage: page + 1 };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const page = Number.parseInt(req.query.page || 1);

  if (cacheData) {
    res.statusCode = 200;
    res.json(paginatedData(cacheData, page));
    return;
  }

  fetch(`${process.env.API_URL}/congresistas`)
    .then((res) => res.json())
    .then((data) => {
      cacheData = data;
      res.statusCode = 200;
      res.json(paginatedData(cacheData, page));
    });
};
