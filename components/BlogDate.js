import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { headerDate, selectNone } from '../styles/Slug.module.scss';



const BlogDate = ({ date, isList }) => {
    const [newDate, setNewDate] = useState('');
    const [formatted, setFormatted] = useState('')

    useEffect(() => {
        setNewDate(new Date(date).toISOString());
        setFormatted(format(new Date(date), 'dd.MM.yyyy'))
    }, [])

    return (
        <span className={headerDate}>
            {!isList && <span>Published </span>}
            <time dateTime={newDate} itemProp="dateModified">
                <div className={selectNone}>
                    {formatted}
                </div>
            </time>
        </span>
    )
}

export default BlogDate;