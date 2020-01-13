export const getCountPages = (totalItemsCount, pageSize=3, portionSize = 3) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return {pages, portionCount, pagesCount};
}
