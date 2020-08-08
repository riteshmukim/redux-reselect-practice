import { createSelector } from 'reselect';

export const counter = (state) => state.counter;

export const getCount = createSelector(counter, (counter) => counter.count);

export const getData = createSelector(counter, (counter) => counter.data);

export const pa = createSelector(getData, (data) => data.principalAmount);
export const bp = createSelector(getData, (data) => data.bonusPercentage);
