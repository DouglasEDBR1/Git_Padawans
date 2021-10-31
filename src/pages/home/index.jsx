import React from 'react';
import Button from '@mui/material/Button';
import MyTheme from '../../components/materialUI/MyTheme.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styled.css';


function Home() {
    return (
        <>
            <div id="top_btn">
                <MuiThemeProvider theme={MyTheme}>
                    <Button variant="outlined">Se-cadastrar</Button>
                    <Button variant="outlined">Entrar</Button>
                </MuiThemeProvider>
            </div>
            <div id="top">

                <div id="top_wrapper">
                    <div id="top_title">
                        <h1>Recycl-e</h1>
                    </div>
                    <div id="top_download">
                        <span id="span1">Baixe agora grátis</span>
                        <div id="download_btn">
                            <Button color="primary" id="btn_android" variant="contained" >Android</Button>

                            <Button id="btn_iphone" variant="contained">iPhone</Button>
                        </div>
                    </div>
                </div>

            </div>

            <div id="middle">
                <div id="middle_img">

                </div>
                <div id="middle_wrapper">
                    <h3 className="middle_title">Por que Recycl-e ?</h3>
                    <h4 className="middle_subtitle">ONU e o Objetivo 12: Consumo e produção responsáveis</h4>
                    <p className="middle_palagraph">Alcançar o crescimento econômico inclusivo e o desenvolvimento sustentável requer a redução urgente da “pegada” ecológica, com a mudança no modo em que produzimos e consumimos bens e recursos.</p>

                    <p className="middle_palagraph"> Estimular indústrias, setor privado e consumidores a reciclar e reduzir o desperdício é igualmente importante, assim como apoiar os países em desenvolvimento a alcançarem uma economia de baixa consumo até 2030.</p>
                    <br></br>
                    <h4 className="middle_subtitle">Facilitando a comunicação</h4>
                    <p className="middle_palagraph">O Recycl-e nasceu da ideia de facilitar a comunicação entre pessoas comuns e empresas dispostas a recolher componentes eletronicos não funcionais, para a reciclagem.</p>
                </div>

            </div>

            <div id="middle_end">
                <h3 className="middle_title">Realizadores</h3>
                <div>
                    <h4 className="middle_subtitle">Padawans participantes</h4>
                    <div>
                        <span>nome2 </span>
                        <span>nome3 </span>
                        <span>nome4 </span>
                        <span>nome5 </span>
                    </div>
                </div>


            </div>

            <div id="footer">
                <h3 className="middle_title">Contato</h3>
                <p className="middle_palagraph">E aí, quer contribuir? tem alguma dúvida, crítica ou sugestão? Entre em contato com a nossa equipe.</p>
                <span>recycle@frwk.com</span>
            </div>
        </>
    );
}

export default Home;