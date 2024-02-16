import React from "react";
import { getCamisetaById } from '../../pages/inicio';
import { useEffect, useState } from 'react';
import './itemDetail.css';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { itemId } = useParams()
    const [camisetaDetail, setCamisetaDetail] = useState(null);
    useEffect(() => {
        getCamisetaById(itemId).then((res) => setCamisetaDetail(res));
    }, [itemId]);

    return (
        <div className="containerDetail">
            {camisetaDetail && <Item {...camisetaDetail} />}
        </div>
    );
}

export default ItemDetailContainer;