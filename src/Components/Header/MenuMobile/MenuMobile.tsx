import styles from "../MenuMobile/MenuMobile.module.css";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import Button, {ButtonTypes} from "../../Button";
import React, {FC} from "react";
import {CATEGORIES} from "../Header";
import {useDispatch} from "react-redux";
import {isMobileVisible} from "../../../Redux/Reducers/authReducer";


type MenuMobileProps={
    onClose:()=>void
    pathname:string
}


const MenuMobile:FC<MenuMobileProps>=({onClose,pathname})=> {
    return (<>
         <div className={styles.menu}>
            <div>
                {CATEGORIES.map(({link, name}) => {
                    return (
                        <NavLink
                            onClick={onClose}
                            key={link}
                            to={link}
                            className={classNames(styles.categoriesMobile, {
                                [styles.activeСategories]: pathname === link,
                            })}
                        >
                            {name}
                        </NavLink>
                    );
                })}
            </div>
            <div className={classNames(styles.containerButtonsBurger)}>
                <Button
                    className={styles.button}
                    title={"Sign In"}
                    type={ButtonTypes.BigPrimary}
                    onClick={() => {
                    }}
                    mobileLightColor={true}
                />
                <Button
                    className={styles.button}
                    title={"Sign up"}
                    type={ButtonTypes.BigSecondary}
                    onClick={() => {
                    }}
                    mobileDarkColor={true}
                />
            </div>
        </div>
    </>)
}


export default MenuMobile