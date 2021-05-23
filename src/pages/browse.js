import React from 'react'
import  useContent from '../hooks/contentTaker';
import selectionMap from '../utils/selectionMap';
import { BrowseContainer } from '../containers/browse'
export default function Browse() {

    const series = useContent('series');
    const films = useContent('films');
    const slides = selectionMap({series, films});

    return (
        <BrowseContainer slides={slides}></BrowseContainer>
    )
}
