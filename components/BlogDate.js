import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import {headerDate} from '../styles/Slug.module.scss';



const BlogDate = ({ date, isList }) => {
    const [newDate, setNewDate] = useState('');
    const [formatted, setFormatted] = useState('')

    useEffect(() => {
        setNewDate(new Date(date).toISOString());
        setFormatted(format(new Date(date), 'MMMM dd, yyyy'))
    }, [])

    return (
        <span className={headerDate}>
            {!isList && <span>Last Updated: </span>}
            <time dateTime={newDate} itemProp="dateModified">
                {formatted}
            </time>
        </span>
    )
}

export default BlogDate;