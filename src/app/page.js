import styles from "./page.module.css";
import { FaLightbulb, FaRegLightbulb, FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import AgenciaDigital from '../../public/assets/agenciaDigital.png';
import BarbeShop from '../../public/assets/barberShop.png';
import Cardapio from '../../public/assets/cardapio.png';
import ErConsultoria from '../../public/assets/erConsultoria.png';
import Perfil from '../../public/assets/Perfil.jpg';

export default function Home() {
  return (
    <div>
      <header className={styles.topo}>
        <div className={styles.logo}>
          <p>
            tigo<span>code</span>
          </p>
        </div>
        <nav className={styles.guia}>
          <a href="#sobre">sobre</a>
          <a href="#habilidades">habilidades</a>
          <a href="#projetos">projetos</a>
          <button>
            <FaLightbulb className={styles.icon_light} />
          </button>
        </nav>
      </header>
      <div className={styles.line}></div>
      <main className={styles.container}>
        <section id="sobre" className={styles.sobre}>
          <div className={styles.perfil}>
            <Image src={Perfil} className={styles.image} />
          </div>
          <div className={styles.content_sobre}>
            <div className={styles.content}>
              <h1>tiago dantas</h1>
              <h3>desenvolvedor fullstack</h3>
              <p>Atuo como desenvolvedor fullstack há pouco mais de 9 meses, contribuindo projetos JavaScript, React.js, API Rest e SQL. Sou um profissional apaixonado por programação e resolver problemas, buscando sempre aprimorar meu conhecimento e habilidades nesta área que me encanta. Minha transição de carreira é impulsionada não por uma visão negativa do passado, mas sim pelo desejo de infância da realização de viver/respirar programação por isso me dedico integralmente para atingir esse objetivo. Experiências com gestão de pessoas é um ponto de força que trago comigo nessa jornada. Acredito que a colaboração e a interação são fundamentais para o crescimento profissional, e é por isso que valorizo tanto a troca de conhecimentos e experiências com outras pessoas. Ninguém evolui verdadeiramente sozinho, e estou comprometido em contribuir para uma comunidade de aprendizado mútuo.
              </p>
            </div>
            <div className={styles.box_dow}>
              <a href="https://drive.google.com/file/d/1iOm_na3pmK9pvRLxvRza7Z-6jjcrlnf8/view?usp=sharing" target="_blank">
                <p>ver currículo</p>
                <FaFileDownload className={styles.icon_dow} />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.container_skills}>
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
              <span>capacidade analítica</span>
              <span>experiência como liderança</span>
              <span>paixão por resolver problemas</span>
              <span>proatividade</span>
              <span>flexibilidade</span>
              <span>comunicação</span>
            </div>
          </div>
        </section>
        <section>
          <h3>Projetos</h3>
          <div>
            <h3>front-end</h3>
            <div>
              <div>
                <Image src={AgenciaDigital} />
              </div>
              <div>
                <Image src={BarbeShop} />
              </div>
              <div>
                <Image src={Cardapio} />
              </div>
              <div>
                <Image src={ErConsultoria} />
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
