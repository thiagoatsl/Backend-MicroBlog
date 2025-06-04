import React from 'react';
import './style.css';
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png'

const Home = () => {
  return (
    <div className="containerPrincipal">
      <header className="cabecalhoPrincipal">
        <div className="logoContainer">
          <img src={logo} alt="Logo Microblog" id="logoImagem" />
        </div>
        <div className="areaPesquisa">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search icone-pesquisa"
          >
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
          </svg>
          <input type="search" placeholder="Pesquisa" id="campoPesquisa" />
        </div>
      </header>

      <main className="corpoPagina">
        <aside className="menuLateral">
          <nav>
            <ul>
              <li>
                <button className="botaoHome ativo">Home</button>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="conteudoFeed">
          <div className="novaPostagemArea">
            <div className="avatarUsuarioLogado">
              <img src={avatar} alt="Seu Avatar" id="avatarNovaPostagem" />
            </div>
            <div className="inputWrapperPostagem">
              <textarea placeholder="O que deseja compartilhar?" id="textoNovaPostagem"></textarea>

              <div className="previewImagemContainer" id="previewImagemContainerPostagem"></div>

              <div className="acoesNovaPostagem">
                <button type="button" className="botaoIcone" id="botaoAbrirSelecionarImagem" title="Adicionar imagem">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-image"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span>Imagem</span>
                </button>
                <input type="file" id="inputArquivoImagem" accept="image/*" style={{ display: 'none' }} />

                <button className="botaoPublicar">Publicar</button>
              </div>
            </div>
          </div>

          <h2 className="tituloUltimasPublicacoes">Últimas Publicações</h2>

          <div className="listaPostagens">
            <article className="postagemItem">
              <div className="avatarUsuarioPostagem">
                <img src={avatar} alt="Avatar Usuário" />
              </div>
              <div className="conteudoDoPost">
                <h3>
                  Usuário 1 <span className="timestampPost">· 2h</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat faucibus mauris. Suspendisse
                  auctor sit amet orci sed vulputate.
                </p>
              </div>
            </article>

            <article className="postagemItem">
              <div className="avatarUsuarioPostagem">
                <img src={avatar} alt="Avatar Usuário" />
              </div>
              <div className="conteudoDoPost">
                <h3>
                  Usuário 2 <span className="timestampPost">· 5h</span>
                </h3>
                <p>
                  Vivamus tempus quam eros, eu venenatis velit porta id. Vestibulum nec lacus vitae nibh suscipit
                  pharetra. Vestibulum dictum consequat maximus.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
