import { sectionsData, selectedSectionDetails } from './mockData';

function requestSections() {
  return {
    type: 'FETCHING_SECTIONS'
  }
}

function receiveSections(data) {
  return {
    type: 'FETCHING_SECTIONS_SUCCEEDED',
    data
  }
}

export function fetchSections() {
  return dispatch => {
    dispatch(requestSections());

    return setTimeout(()=> {
      dispatch(receiveSections(sectionsData))
    }, 2000)
  };
}

function requestSection(selectedSection) {
  return {
    type: 'FETCHING_SECTION',
    selectedSection
  }
}

function receiveSection(data) {
  return {
    type: 'FETCHING_SECTION_SUCCEEDED',
    data
  }
}

export function fetchSection(selectedSection) {
  return dispatch => {
    dispatch(requestSection(selectedSection));

    return setTimeout(()=> {
      dispatch(receiveSection(selectedSectionDetails[selectedSection].navigation))
    }, 2000)
  };
}
