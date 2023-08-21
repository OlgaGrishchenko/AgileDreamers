import styles from "../MenuMobile/MenuMobile.module.css";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import Button, {ButtonTypes} from "../../Button";
import React, {FC} from "react";
import {CATEGORIES} from "../Header";


type MenuMobileProps={
    isOpened:boolean
    pathname:string
}


const MenuMobile:FC<MenuMobileProps>=({isOpened,pathname})=> {
    return (<>
        {isOpened && <div className={styles.menu}>
            <div>
                {CATEGORIES.map(({link, name}) => {
                    return (
                        <NavLink
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
        </div>}
    </>)
}


export default MenuMobile