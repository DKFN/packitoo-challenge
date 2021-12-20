import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {IAppState, useAppDispatch} from "../store";
import {IBrief} from "./models";
import {fetchBriefs} from "./actions";
import {ProductSelect} from "../Products/ProductSelect";

const ListBriefRow: FC<IBrief> = ({productId, title, comment}: IBrief) => {
    // I should have key indexed the products to have a O(1) here instead of O(n)
    const product = useSelector((state: IAppState) =>
        state.product.products
            .find((p) => p.id === productId)
    );

    return <tr>
        <td>{title}</td>
        <td>{comment}</td>
        <td>{product?.name ?? "NOT FOUND"}</td>
    </tr>;
}

export const ListBrief: FC = () => {
    const dispatch = useAppDispatch();
    const briefs = useSelector((app: IAppState) => app.brief.briefs);
    const [selectedProductId, setSelectedProductId] = React.useState<undefined | number>(undefined);
    const [displayedBriefs, setDisplayedBriefs] = React.useState<IBrief[]>([]);

    useEffect(() => {
        if (selectedProductId === undefined)
            setDisplayedBriefs(briefs);
        else
            setDisplayedBriefs(
                briefs.filter((b) => b.productId === selectedProductId)
            );
    }, [selectedProductId, briefs]);

    useEffect(() => {
        dispatch(fetchBriefs());
        // Same here
        // (Tbf I think this rule is dumb because not carefully selecting them leads to useless renders
        // or conditionnal infinite render loops anyway)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return<>
        <ProductSelect onChangecb={setSelectedProductId} />
        <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Comment</th>
                <th>Product name</th>
            </tr>
        </thead>
        <tbody>
        {
            displayedBriefs.map((b: IBrief) => <ListBriefRow {...b} key={b.id}/>)
        }
        </tbody>
    </table>
        </>
}
