import React from "react";
import { NavLink } from 'react-router-dom';
 
const Sidebar = ({children}) =>{
    const menuItems=[
        {
            path: "/",
            name: "Inicio"
        },
        {
            path: "/customer",
            name: "Clientes"
        },
        {
            path: "/seller",
            name: "Vendedores"
        },
        {
            path: "/characterlist",
            name: "Productos"
        },
        {
            path: "/shopping_car",
            name: "Carrito de compras"
        },
        {
            path: "/order",
            name: "Pedidos"
        },
        {
            path: "/promotion",
            name: "Promociones"
        },
        {
            path: "/claims",
            name: "Reclamos"
        },
        {
            path: "/statistic",
            name: "Estadisticas"
        },
        {
            path: "/seller",
            name: "Estadisticas"
        },
        {
            path: "/seller",
            name: "Alertas"
        },
        {
            path: "/seller",
            name: "Usuarios"
        }
    ];
    return(
        <div className="todo">
            <div className="sidebar">
                <div className="links">
                    {
                        menuItems.map((item,index)=>(
                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                    <div className="link_text">{item.name}</div>
                                </NavLink>  
                        )
                        )
                    }
                </div>
                <div className="cerrar">
                    <p>Cerrar sesion</p>
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};


export default Sidebar;