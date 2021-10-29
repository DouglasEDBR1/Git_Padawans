import React from 'react'; 
import './box.css';
import notebook from '../api/notebook.png'

function Box(){
    return(
        <div className="content_box">
            <img className="img_box"src={notebook} ></img>
            <div className="wrappe_box">
            <span className="name_box">Notebook lenovo 340r</span>
            <span className="description_box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque do</span>
            <span className="status_box">Verificação</span>
            </div>
            
        </div>
    );
}

export default Box