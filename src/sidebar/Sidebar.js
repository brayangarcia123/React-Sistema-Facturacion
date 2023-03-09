import React, { Children } from "react";
import { NavLink } from "react-bootstrap";
 
const Sidebar = ({children}) =>{
    const menuItems=[
        {
            path: "/main",
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
            path: "/product",
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
                {
                    menuItems.map((item,index)=>(
                        <div>
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        </div>
                        
                    )
                    )
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};


export default Sidebar;