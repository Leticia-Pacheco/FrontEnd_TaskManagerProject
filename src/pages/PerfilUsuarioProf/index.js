import {
    Container,
    ContainerPerfilConteudo,
    Footer,
    PerfilInfoUsuario,
    Conteudo,
    InformacoesUsuario,
    ImageUsuario,
    TextInfos,
    MenuLateral,
    EditarPerfil,
    Grupos,
    ComponentGrupo,
    ImageGrupo,
    Agrupamento,
    ButtonAvancarGrupos,
    ButtonAvancarAnotacoes,
    Anotacoes,
    ComponentAnotacoes,
    AgrupamentoAnotacoes,
    // Logo,
  } from './styles';
  import ImgUsuarioAluno from '../../assets/ImagesPerfis/image_perfil_professor.jpg';
  import ImageFeed from '../../assets/ImagesPerfis/home_feed.png';
  import ImageTarefas from '../../assets/ImagesPerfis/tarefas.png';
  import ImageReunioesDiarias from '../../assets/ImagesPerfis/reunioes_diarias.png';
  import ImageChats from '../../assets/ImagesPerfis/chats.png';
  import ImageVisuAlunos from '../../assets/ImagesPerfis/ver_meus_alunos.png';
  import ImageLogout from '../../assets/ImagesPerfis/sair.png';
  import Configuracoes from '../../assets/ImagesPerfis/configuracao_grupos.png';
  import buttonAvancar from '../../assets/ImagesPerfis/seta_passar_itens.png';
  import buttonVoltar from '../../assets/ImagesPerfis/seta_voltar_itens.png';
  import ConfiguracoesAnotacoes from '../../assets/ImagesPerfis/configuracao_anotacoes.png';
  // import ImageLogo from '../../assets/logos/logo_fundo_roxo_png.png';
  import { Link } from 'react-router-dom';
  
  function ProfileTeacher() {
    return (
      <>
        <Container>
          <ContainerPerfilConteudo>
            <PerfilInfoUsuario>
              <InformacoesUsuario>
                <ImageUsuario>
                  <img
                    src={ImgUsuarioAluno}
                    alt="Foto de perfil do usuário"
                    title="Foto de perfil do usuário"
                  />
                </ImageUsuario>
                <TextInfos>
                  <span>José Bezerra</span>
                  <p>Senai Prof Vicente Amato | Jandira</p>
                </TextInfos>
              </InformacoesUsuario>
  
              <MenuLateral>
                <ul>
                  <li>
                    <img
                      src={ImageFeed}
                      alt="Menu opção feed"
                      title="Menu opção feed"
                    />
                    <p>Feed</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src={ImageTarefas}
                      alt="Menu opção tarefas"
                      title="Menu opção tarefas"
                    />
                    <p>Tarefas</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src={ImageReunioesDiarias}
                      alt="Menu opção reuniões diárias"
                      title="Menu opção reuniões diárias"
                    />
                    <p>Reuniões diárias</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src={ImageChats}
                      alt="Menu opção Chats"
                      title="Menu opção Chats"
                    />
                    <p>Chats</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src={ImageVisuAlunos}
                      alt="Menu opção visualizar progresso de alunos"
                      title="Menu opção visualizar progresso de alunos"
                    />
                    <p>Visualizar alunos</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src={ImageLogout}
                      alt="Menu opção Sair da aplicação"
                      title="Menu opção Sair da aplicação"
                    />
                    <p>Sair</p>
                  </li>
                </ul>
              </MenuLateral>
  
              <Link to="/editprofile">
                <EditarPerfil>
                  <img
                    src={Configuracoes}
                    alt="Configurações do perfil"
                    title="Configurações do perfil"
                  />
                  <p>Editar perfil</p>
                </EditarPerfil>
              </Link>
            </PerfilInfoUsuario>
  
            <Conteudo>
                  <h3>Meus grupos <span>+</span></h3>
                <Grupos>
                  <ButtonAvancarGrupos>
                    <img src={buttonVoltar} alt="Avançar para outros componentes" title="Avançar para outros componentes"/>
                  </ButtonAvancarGrupos>
                  <Agrupamento>
  
                    <ComponentGrupo>
                        <img src={Configuracoes} alt="Configuração dos grupos" title="Configuração dos grupos"/>
                        <ImageGrupo>
                            <p>DS</p>
                        </ImageGrupo>
                        <p>Desenvolvimento de sistemas</p>
                    </ComponentGrupo>
  
                  </Agrupamento>
                  <ButtonAvancarGrupos>
                    <img src={buttonAvancar} alt="Avançar para outros componentes" title="Avançar para outros componentes"/>
                  </ButtonAvancarGrupos>
                </Grupos>
  
                
  
                <h3>Anotações <span>+</span></h3>
                <Anotacoes>
                  <ButtonAvancarAnotacoes>
                    <img src={buttonVoltar} alt="Avançar para outros componentes" title="Avançar para outros componentes"/>
                  </ButtonAvancarAnotacoes>
                  <AgrupamentoAnotacoes>
  
                    <ComponentAnotacoes>
                      <p>03-11-2020</p>
                      <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações"/>
                    </ComponentAnotacoes>
                    <ComponentAnotacoes>
                      <p>03-11-2020</p>
                      <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações"/>
                    </ComponentAnotacoes>
                    <ComponentAnotacoes>
                      <p>03-11-2020</p>
                      <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações"/>
                    </ComponentAnotacoes>
                    <ComponentAnotacoes>
                      <p>03-11-2020</p>
                      <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações"/>
                    </ComponentAnotacoes>
                  </AgrupamentoAnotacoes>
  
                  <ButtonAvancarAnotacoes>
                    <img src={buttonAvancar} alt="Avançar para outros componentes" title="Avançar para outros componentes"/>
                  </ButtonAvancarAnotacoes>
                </Anotacoes>
            </Conteudo>
          </ContainerPerfilConteudo>
        </Container>
        <Footer>
          <p>Copyright © 2021 | TecnoTc Todos os direitos reservados</p>
          
          {/* <Logo>
            <img src={ImageLogo} alt="Logo da empresa" title="Logo da empresa"/>
          </Logo> */}
        </Footer>
      </>
    );
  }
  
  export default ProfileTeacher;