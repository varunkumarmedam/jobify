export const getRangesOnPageIndex = (currentPageIndex, entriesPerPage, totalEntries) => {
    return isLastPageIndex(currentPageIndex || 0, entriesPerPage || 10, totalEntries || 0) ?
        {
            startIndex: currentPageIndex * entriesPerPage,
            endIndex: totalEntries - 1
        } : {
            startIndex: currentPageIndex * entriesPerPage,
            endIndex: (currentPageIndex + 1) * entriesPerPage
        };
}

const isLastPageIndex = (currentPageIndex, entriesPerPage, totalEntries) => {
    const totalPages = calculateTotalPages(entriesPerPage, totalEntries)
    return (currentPageIndex === totalPages - 1);
}

export const calculateTotalPages = (entriesPerPage, totalEntries) => {
    const lastFilledPage = parseInt(totalEntries / entriesPerPage);
    const lastPartiallyFilledPages = parseInt(totalEntries % entriesPerPage) > 0 ? 1 : 0;
    return lastFilledPage + lastPartiallyFilledPages;
}

export const getPreviousPageIndex = (currentPageIndex) => {
    return canGoPrevious(currentPageIndex) ? currentPageIndex - 1 : currentPageIndex;
}

export const canGoPrevious = (currentPageIndex) => {
    return currentPageIndex > 0;
}

export const getNextPageIndex = (currentPageIndex, entriesPerPage, totalEntries) => {
    return canGoNext(currentPageIndex, entriesPerPage, totalEntries) ? currentPageIndex + 1 : currentPageIndex;
}

export const canGoNext = (currentPageIndex, entriesPerPage, totalEntries) => {
    const totalPages = calculateTotalPages(entriesPerPage, totalEntries);
    return totalPages > 0 && !isLastPageIndex(currentPageIndex, entriesPerPage, totalEntries);
}