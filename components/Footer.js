export default function Footer() {
  return (
    <footer className="p-4 bg-neutral-100 border-t border-neutral-200">
      <p className="max-w-screen-lg m-auto text-neutral-400 text-xs text-center">
        YoVoto.pe y aplicaciones asociadas son una iniciativa sin fines de lucro
        desarrollada por voluntarios de{" "}
        <a
          href="https://politicalhub-client.herokuapp.com/"
          target="_blank"
          className="underline"
        >
          PoliticalHub
        </a>{" "}
        en coordinación con{" "}
        <a
          href="http://www.impulsopais.pe/"
          target="_blank"
          className="underline"
        >
          ImpulsoPais
        </a>{" "}
        y{" "}
        <a
          href="http://www.hazteuna.com/"
          target="_blank"
          className="underline"
        >
          Hazte Una
        </a>
        . Toda la información mostrada ha sido coleccionada desde bases de datos
        oficiales y autorizadas.
      </p>
      <p className="max-w-screen-lg m-auto text-neutral-400 flex flex-row items-center justify-center gap-8 mt-4">
        <a href="http://www.hazteuna.com/" target="_blank">
          <img
            src={`${process.env.EDGE_URL || ""}/HazteUna.png`}
            title="Hazte Una"
            alt="Hazte Una"
            width="52"
          />
        </a>
        <a href="http://www.impulsopais.pe/" target="_blank">
          <img
            src={`${process.env.EDGE_URL || ""}/ImpulsoPais.png`}
            title="ImpulsoPais"
            alt="ImpulsoPais"
            width="80"
          />
        </a>
        <a href="https://politicalhub-client.herokuapp.com/" target="_blank">
          <img
            src={`${process.env.EDGE_URL || ""}/PoliticalHub.png`}
            title="PoliticalHub"
            alt="PoliticalHub"
            width="48"
          />
        </a>
      </p>
    </footer>
  );
}
