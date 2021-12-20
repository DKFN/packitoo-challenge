import React, {ChangeEvent, FC} from "react";
import {useSelector} from "react-redux";
import {IAppState} from "../store";
import {IProduct} from "./models";

interface IProps {
    onChangecb: (value: number | undefined) => void;
}
export const ProductSelect = ({onChangecb}: IProps) => {
    const products = useSelector((app: IAppState) => app.product.products);
    const proxyCb = (e: ChangeEvent<HTMLSelectElement>) => onChangecb(
        e.target.value === ""
            ? undefined
            : Number.parseInt(e.target.value, 10)
    );

    return (
        <select onChange={proxyCb}>
            <option value={""} key={undefined}>Tous les produits</option>
            {
                products.map((p: IProduct) => <option key={p.id} value={p.id}>{p.name}</option>)
            }
        </select>
    )
}

