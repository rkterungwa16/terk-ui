export enum HeaderPosition {
  FIXED = "fixed",
  STICKY = "sticky"
}

export const defaultPositionClasses = {
  [HeaderPosition.FIXED]: "Trk__sticky",
  [HeaderPosition.STICKY]: "Trk__sticky"
};

export const HeaderTopClass = "Trk__top--0";
