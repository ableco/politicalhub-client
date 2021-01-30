export default function colorize(
  sentences,
  average,
  prefix = "text",
  baseClasses,
) {
  switch (true) {
    case prefix === "text" && sentences == 0: {
      return {
        classes: `${baseClasses} text-success-base`,
        message: "No Alerta",
      };
    }
    case prefix === "bg" && sentences == 0: {
      return {
        classes: `${baseClasses} bg-success-base`,
        message: "No Alerta",
      };
    }
    case prefix === "text" &&
      sentences >= 1 &&
      sentences < Number.parseInt(average / 2): {
      return {
        classes: `${baseClasses} text-warning-light`,
        message: "Alerta Moderada",
      };
    }
    case prefix === "bg" &&
      sentences >= 1 &&
      sentences <= Number.parseInt(average / 2): {
      return {
        classes: `${baseClasses} bg-warning-light`,
        message: "Alerta Moderada",
      };
    }
    case prefix === "text" &&
      sentences > Number.parseInt(average / 2) &&
      sentences <= average: {
      return {
        classes: `${baseClasses} text-warning-dark`,
        message: "Alerta Alta",
      };
    }
    case prefix === "bg" &&
      sentences > Number.parseInt(average / 2) &&
      sentences <= average: {
      return {
        classes: `${baseClasses} bg-warning-dark`,
        message: "Alerta Alta",
      };
    }
    case prefix === "text" && sentences > average: {
      return {
        classes: `${baseClasses} text-alert-base`,
        message: "Alerta Muy Alta",
      };
    }
    case prefix === "bg" && sentences > average: {
      return {
        classes: `${baseClasses} bg-alert-base`,
        message: "Alerta Muy Alta",
      };
    }

    default: {
      return { classes: baseClasses, message: "" };
    }
  }
}
