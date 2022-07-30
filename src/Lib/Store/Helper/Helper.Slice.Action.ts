
export const helperSliceAction = {
  redirectLink: 'helper/setRedirectUrl',
  redirectLinkAction: (payload: string | null ) => ({ type: helperSliceAction.redirectLink, payload }),
};
