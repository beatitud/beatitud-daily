export const campaigns = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_CAMPAIGNS':
      return payload;
    case 'CREATE_CAMPAIGN':
      return [...state, payload];
    case 'UPDATE_CAMPAIGN':
      return state.map(campaign => {
        return campaign.token === payload.token ? Object.assign({}, campaign, payload): campaign;
      });
    case 'DELETE_CAMPAIGN':
      return state.filter(campaign => {
        return campaign.token !== payload.token;
      });
    default:
      return state;
  }
}

export const settings = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'INIT_SETTINGS':
      payload.languages = ["french"]
      console.log(state)
      return [...state, payload];
    case 'UPDATE_SETTINGS':
      return state.map(campaign => {
        return campaign.token === payload.token ? Object.assign({}, campaign, payload): campaign;
      });
    default:
      return state;
  }
}
