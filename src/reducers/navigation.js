import mockData from './mockData'

const defaultState = {
  navigationItems: mockData
};

export default function navigation(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}