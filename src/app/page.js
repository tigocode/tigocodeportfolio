import styles from "./page.module.css";
import { FaLightbulb, FaRegLightbulb, FaFileDownload } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <div>
          <p>
            tigocode
          </p>
        </div>
        <nav>
          <a href="">sobre</a>
          <a href="">habilidades</a>
          <a href="">projetos</a>
          <button>
            <FaLightbulb />
          </button>
        </nav>
      </header>
      <main>
        <section>
          <Image />
        </section>
        <section>
          <div>
            <h1>tiago dantas</h1>
            <h3>desenvolvedor fullstack</h3>
            <p>Atuo no desenvolvimento web há pouco mais de 5 meses, contribuindo em um projeto Web3 com TypeScript, JavaScript e Chakra UI. No dia a dia, colaboro com uma equipe de 11 dev's, utilizando Git para versionar o código por meio de forks, commits e pull requests. Juntos, criamos novas funcionalidades, mantemos a documentação atualizada e refatoramos o código sempre que necessário. Também estou desenvolvendo um app para controle de finanças, que ainda está no começo, mas tem sido um ótimo espaço para me aprofundar em validações, implementar testes e dar continuidade ao projeto de forma autônoma e prática.</p>
          </div>
          <div>
            <button>
              <p>ver currículo</p>
              <FaFileDownload />
            </button>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}
