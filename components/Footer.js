export default function Footer() {
  return (
    <footer className="p-4 bg-neutral-100 border-t border-neutral-200">
      <p className="max-w-screen-lg m-auto text-neutral-400 text-xs text-center">
        Votemos.pe y aplicaciones asociadas son una iniciativa sin fines de
        lucro desarrollada por voluntarios de{" "}
        <a
          href="https://politicalhub-client.herokuapp.com/"
          target="_blank"
          className="underline"
        >
          PoliticalHub
        </a>{" "}
        en coordinación con
        <a
          href="https://politicalhub-client.herokuapp.com/"
          target="_blank"
          className="underline"
        >
          ImpulsoPais
        </a>{" "}
        y{" "}
        <a
          href="https://politicalhub-client.herokuapp.com/"
          target="_blank"
          className="underline"
        >
          Hazte Una
        </a>
        . Toda la información mostrada ha sido coleccionada desde bases de datos
        oficiales y autorizadas.
      </p>
    </footer>
  );
}
