export const selectAllProducts = ({products}) => products.items;

export const getFilteredProducts = ({ products, filter }) => {
    if (!filter) {
      return products.items;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const result = products.items.filter(({ title, category }) => {
    return title.toLowerCase().includes(normalizedFilter) || category.includes(normalizedFilter);
    });
    return result;
}