export default function colorize(sentences, average) {
  switch (true) {
    case sentences > average * 2: {
      return { color: "alert-base", message: "Muy por encima de la media" };
    }
    case sentences > average: {
      return { color: "warning-dark", message: "Por encima de la media" };
    }
    case sentences < average / 2 || sentences == 0: {
      return { color: "success-base", message: "Muy por debajo de la media" };
    }
    case sentences < average: {
      return { color: "success-light", message: "Por debajo de la media" };
    }
    default: {
      return { color: "neutral-400", message: "" };
    }
  }
}
