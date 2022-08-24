// ------------------------------------------
// Configuration for the header
// ------------------------------------------
import { atom } from 'recoil';

// ------------------------------------------
// This exported attribute name is used to generate results for Category pages
// It will create a filter which will be used when a category page link is clicked on
// Please refer to linksHeader to define the category page values which will be filtered
// ------------------------------------------
export const categoryPageFilterAttribute = 'hierarchicalCategories.lvl0';

// ------------------------------------------
// This const defines the navigation aspect of the header
// The name is for display purposes for each navigation title
// The filter is the value to filter on to show results for the linked category page
// The url should be the lower case URL friendly version of the filter value
// ------------------------------------------
export const linksHeader = atom({
  key: 'linksHeader', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      name: 'All',
      type: 'filter',
      filter: '',
      url: '/search',
    },
    {
      name: 'Mens',
      type: 'filter',
      filter: 'Mens',
      url: '/mens',
    },
    {
      name: 'Womens',
      type: 'filter',
      filter: 'Womens',
      url: '/womens',
    },
    {
      name: 'Womens and Accessories Even and Odd',
      type: 'filterComplex',
      filter: '',
      moreComplexFilter:
        "hierarchicalCategories.lvl0:'Womens' AND hierarchicalCategories.lvl1:'Womens > Accessories' AND brand:'even&odd'",
      url: '/annafield',
    },
    // This uses context from the Algolia dashboard, configured using Visual Editor
    {
      name: 'Accessories',
      type: 'context',
      context: 'accessories',
      url: '/accessories',
    },
  ],
});

export const selectorNavigationRef = atom({
  key: 'selectorNavigationRef', // unique ID (with respect to other atoms/selectors)
  default: '',
});

export const categorySelectionAtom = atom({
  key: 'categorySelectionAtom',
  default: null,
});
