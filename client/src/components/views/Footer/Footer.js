import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> TinishuaEthiopia 2021 <Icon type=""/></p>
           <p> Ecommerce Assignment <Icon type="smile"/></p>
        </div>
    )
}

export default Footer
