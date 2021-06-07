import {Overlay, ModalEditarPerfil, Header, ImagemUsuario, EditarImagemUsuario, Logo, EditarDados, ComponentEditarDados, } from "./styles";
import ImageUsuario from "../../assets/ImagesPerfis/image_perfil_professor.jpg";
import ImageLogo from "../../assets/logos/logo_fundo_roxo_png.png";
import { Link } from "react-router-dom";

function EditProfile() {
    return(
        <Overlay>
            <ModalEditarPerfil>
                <Header>
                    <ImagemUsuario>
                        <img src={ImageUsuario} alt="Alterar imagem perfil de usuário" title="Alterar imagem perfil de usuário"/>
                        <EditarImagemUsuario>
                            <label for="arquivo">Editar imagem</label>
                            <input type="file" name="arquivo" id="arquivo"/>
                        </EditarImagemUsuario>
                    </ImagemUsuario>

                    <h3>Editar perfil pessoal</h3>

                    <Logo>
                        <img src={ImageLogo} alt="Logo da empresa" title="Logo da empresa"/>
                    </Logo>
                </Header>

                <EditarDados>
                    <ComponentEditarDados>
                        <p>Nome</p>
                        <input type="text" name="nomeUsuario" value="José Bezerra" size="46"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>E-mail</p>
                        <input type="text" name="emailUsuario" value="jose.bezerra@gmail.com" size="46"/>
                        <span>Adicionar mais um e-mail +</span>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Instituição de ensino</p>
                        <input type="text" name="instituicaoEnsinoUsuario" value="Senai Prof Vicente Amato | Jandira" size="46"/>
                        <span>Adicionar mais uma instituição de ensino +</span>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Você é</p>
                        <input type="text" name="nivelUsuario" value="Professor" size="46"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Senha atual</p>
                        <input type="password" name="senhaUsuario" value="123456456789" size="115"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Nova Senha</p>
                        <input type="text" name="novaSenhaUsuario" value="" size="46"/>
                    </ComponentEditarDados>
                    <ComponentEditarDados>
                        <p>Repetir senha</p>
                        <input type="text" name="confirmacaoNovaSenhaUsuario" value="" size="46"/>
                    </ComponentEditarDados>

                        <button>
                            <Link to="/profileteacher">
                                <p>Salvar dados</p>
                            </Link>
                        </button>
                </EditarDados>
            </ModalEditarPerfil>
        </Overlay>
    );
}

export default EditProfile;