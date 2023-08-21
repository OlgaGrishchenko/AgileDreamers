import React, {FC} from "react";
import classNames from "classnames";
import styles from "../FilterMobile/FilterMobile.module.css";
import {CheckPicker} from "rsuite";
import {byIndustry, byServiceCategory, byStackCode} from "../SearchLine";

type FilterMobileProps={
    opened:boolean
}

const FilterMobile:FC<FilterMobileProps>=({opened})=>{
    return (<>
        {opened && <div className={classNames(styles.filterContainer)}>
        <CheckPicker
            data={byIndustry}
            searchable={false}
            className={styles.checkPicker}
            placeholder={"By Industry"}
            menuClassName={styles.dropdownMenu}
        />

        <CheckPicker
            data={byStackCode}
            searchable={false}
            className={styles.checkPicker}
            placeholder={"By Stack/Code"}
            menuClassName={styles.dropdownMenu}
        />

        <CheckPicker
            data={byServiceCategory}
            searchable={false}
            className={styles.checkPicker}
            placeholder={"By Service Category"}
            menuClassName={styles.dropdownMenu}
        />
    </div>}</>)
}


export default FilterMobile