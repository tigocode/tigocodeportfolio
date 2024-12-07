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
          <div>
            <Image />
          </div>
          <div>
            <div>
              <h1>tiago dantas</h1>
              <h3>desenvolvedor fullstack</h3>
              <p>Atuo como desenvolvedor fullstack há pouco mais de 5 meses, contribuindo projetos JavaScript, React.js, API Rest e SQL. Sou um profissional apaixonado por programação e resolver problemas, buscando sempre aprimorar meu conhecimento e habilidades nesta área que me encanta. Minha transição de carreira é impulsionada não por uma visão negativa do passado, mas sim pelo desejo de infância da realização de viver/respirar programação por isso me dedico integralmente para atingir esse objetivo. Experiências com gestão de pessoas é um ponto de força que trago comigo nessa jornada. Acredito que a colaboração e a interação são fundamentais para o crescimento profissional, e é por isso que valorizo tanto a troca de conhecimentos e experiências com outras pessoas. Ninguém evolui verdadeiramente sozinho, e estou comprometido em contribuir para uma comunidade de aprendizado mútuo.
              </p>
            </div>
            <div>
              <button>
                <p>ver currículo</p>
                <FaFileDownload />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>hard skills</h2>
            <div>
              <div>
                <h3>front-end</h3>
                <div>
                  <span>react.js</span>
                  <span>html5</span>
                  <span>css3</span>
                </div>
              </div>
              <div>
                <h3>back-end</h3>
                <div>
                  <span>node.js</span>
                  <span>api rest</span>
                  <span>sql</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>soft Skills</h2>
            <div>
              <spa>capacidade analítica</spa>
              <spa>experiência como liderança</spa>
              <spa>paixão por resolver problemas</spa>
              <spa>proatividade</spa>
              <spa>flexibilidade</spa>
              <spa>comunicação</spa>
            </div>
          </div>
        </section>
        <section>
          <h3>Projetos</h3>
          <div>
            <h3>front-end</h3>
            <div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
          <div>
            <h3>back-end</h3>
            <div>

            </div>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <h3>Contato</h3>
          <div>
            <a href="mailto:tdantas@tigocode.com.br" target="_blank">
              <span>Email:</span>
              <p>TDantas@tigocode.com.br</p>
            </a>
            <a href="tel:5511977377688" target="_blank">
              <span>Telefone:</span>
              <p>(011) 9 7737-7688</p>
            </a>
          </div>
          <div>Copyright © 2024 | Tiago Dantas</div>
        </section>
      </footer>
    </div>
  );
}
