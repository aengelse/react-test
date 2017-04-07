const defaultState = {
  sections: [],
  isFetchingSections: false,
  selectedSectionDetails: [],
  selectedSection: '',
  isFetchingSection: false
};

export default function navigation(state = defaultState, action) {
  switch (action.type) {
    case 'FETCHING_SECTIONS':
      return {
        ...state,
        isFetchingSections: true
      };
    case 'FETCHING_SECTIONS_SUCCEEDED':
      return {
        ...state,
        isFetchingSections: false,
        sections: action.data
      };
    case 'FETCHING_SECTIONS_FAILED':
      return {
        ...state,
        isFetchingSections: false,
        sections: []
      };
    case 'FETCHING_SECTION':
      return {
        ...state,
        selectedSection: action.selectedSection,
        isFetchingSection: true,
      };
    case 'FETCHING_SECTION_SUCCEEDED':
      return {
        ...state,
        isFetchingSection: false,
        selectedSectionDetails: action.data
      };
    case 'FETCHING_SECTION_FAILED':
      return {
        ...state,
        isFetchingSection: false,
        selectedSectionDetails: []
      };
    default:
      return state
  }
}
