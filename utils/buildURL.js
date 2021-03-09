export default function buildURL({ filter }) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/candidates`);
  Object.entries(filter).forEach(([key, value]) =>
    url.searchParams.append(key, value),
  );

  return url;
}
