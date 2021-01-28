export default function colorize(
  sentences,
  average,
  prefix = "text",
  baseClasses,
) {
  switch (true) {
    case prefix === "text" && sentences > average * 2: {
      return {
        classes: `${baseClasses} text-alert-base`,
        message: "Muy por encima de la media",
      };
    }
    case prefix === "text" && sentences > average: {
      return {
        classes: `${baseClasses} text-warning-dark`,
        message: "Por encima de la media",
      };
    }
    case prefix === "text" && (sentences < average / 2 || sentences == 0): {
      return {
        classes: `${baseClasses} text-success-base`,
        message: "Muy por debajo de la media",
      };
    }
    case prefix === "text" && sentences < average: {
      return {
        classes: `${baseClasses} text-success-light`,
        message: "Por debajo de la media",
      };
    }
    case prefix === "bg" && sentences > average * 2: {
      return {
        classes: `${baseClasses} bg-alert-base`,
        message: "Muy por encima de la media",
      };
    }
    case prefix === "bg" && sentences > average: {
      return {
        classes: `${baseClasses} bg-warning-dark`,
        message: "Por encima de la media",
      };
    }
    case prefix === "bg" && (sentences < average / 2 || sentences == 0): {
      return {
        classes: `${baseClasses} bg-success-base`,
        message: "Muy por debajo de la media",
      };
    }
    case prefix === "bg" && sentences < average: {
      return {
        classes: `${baseClasses} bg-success-light`,
        message: "Por debajo de la media",
      };
    }
    default: {
      return { classes: baseClasses, message: "" };
    }
  }
}
