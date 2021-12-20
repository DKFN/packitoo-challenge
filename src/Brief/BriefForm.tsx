import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {IAppState, useAppDispatch} from "../store";
import {fetchProductctData} from "../Products/actions";
import {CircularProgress} from "@mui/material";
import {useFormik} from "formik";
import {IProduct} from "../Products/models";

export const BriefForm: FC = () => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
    const products = useSelector((app: IAppState) => app.product.products);
    const formik = useFormik({
        initialValues: {
            title: '',
            comment: '',
            productId: ""
        },
        onSubmit: (values) => {
            console.log("Values: ", values);
        }
    });

    console.log("State products ", products);

    useEffect(() => {
        setIsLoading(true);
        console.log("Component did mount")
        dispatch(fetchProductctData())
            .then(() => setIsLoading(false));
        // I intentionnally don't provide any deps because I want this function to be called ONLY once on mounting
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    const commonProps = {onChange: formik.handleChange};

    return isLoading
        ? <CircularProgress />
        :<>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor={"title"}>Title:</label>
                <input type="text" name={"title"} value={formik.values.title} {...commonProps}/> <br />

                <label htmlFor={"comment"}>Comment:</label>
                <input type="text" name={"comment"} value={formik.values.comment} {...commonProps}/> <br />


                <label htmlFor={"productId"}>Product:</label>
                <select {...commonProps} name="productId" value={formik.values.productId}>
                    <option value={""} key={undefined} disabled>Selectionnez un produit</option>
                    {
                        products.map((p: IProduct) => <option key={p.id} value={p.id}>{p.name}</option>)
                    }
                </select> <br />
                <input type="submit" value="Create brief" disabled={!formik.values.productId}/>
            </form>
        </>;
}
