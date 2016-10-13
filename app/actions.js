'use strict'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCEEDED = 'FETCH_DATA_SUCCEEDED'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

export const fetchData = (url) => ({type: FETCH_DATA, url})

export function fetchDataSucceeded (data) {
  return {
    type: FETCH_DATA_SUCCEEDED,
    data
  }
}
export function fetchDataFailed (err) {
  return {
    type: FETCH_DATA_FAILED,
    err
  }
}
