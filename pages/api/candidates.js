// temporal endpoint
const CONGRESS_LIMIT = 21;
let cacheData = null;

function paginatedData(data, page = 1) {
  const candidates = data.slice(
    (page - 1) * CONGRESS_LIMIT,
    page * CONGRESS_LIMIT,
  );
  const isLastPage =
    data[data.length - 1].identificador ===
    candidates[candidates.length - 1].identificador;
  const nextPage = isLastPage ? null : page + 1;

  return { candidates, nextPage };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const page = Number.parseInt(req.query.page || 1);

  if (cacheData) {
    res.statusCode = 200;
    res.json(paginatedData(cacheData, page));
    return;
  }

  const response = await fetch(`${process.env.API_URL}/congresistas`);
  const data = await response.json();
  cacheData = data;
  res.statusCode = 200;
  res.json(paginatedData(cacheData, page));
};
