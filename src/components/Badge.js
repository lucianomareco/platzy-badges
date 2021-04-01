import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (<div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQFZsipXKBo_ag/profile-displayphoto-shrink_200_200/0/1616958102751?e=1622678400&v=beta&t=zRXRxxZDg76Hrf_NtNBT1XFFJeiCXfXwghyV3RhdN1Q" alt="Avatar" />
                <h1>Luciano <br /> Mareco</h1>
            </div>

            <div className="Badge__section-info">
                <h3>Frontend developer</h3>
                <div>github.com/lucianomareco</div>
            </div>

            <div className="Badge__footer">
                #PlatziConf
            </div>
        </div>
        )
    }
}

export default Badge;