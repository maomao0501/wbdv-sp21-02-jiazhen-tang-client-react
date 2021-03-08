import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        updateItem,
        deleteItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return(
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active? 'active': ' '}`} to={to}>
                        {item.title}
                    </Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    &nbsp;
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </>
            }
        </>
    )
}

export default EditableItem
