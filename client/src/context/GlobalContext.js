import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
  isLoading: false,
  currency: '$',
  balance: 0,
  loansGiven: [],
  loansTaken: [],
  totalLoansGiven: 0,
  totalLoansTaken: 0,
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const setBalance = (payload) => {
    dispatch({
      type: 'SET_BALANCE',
      payload: payload,
    })
  }
  const getRecords = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/records`
      )

      dispatch({
        type: 'GET_RECORDS',
        payload: res.data.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
  const addRecord = async (record) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/records`,
        record
      )

      dispatch({
        type: 'ADD_RECORD',
        payload: res.data.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
  const deleteRecord = async (payload) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/records/${payload._id}`
      )

      dispatch({
        type: 'DELETE_RECORD',
        payload: payload,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        setBalance,
        deleteRecord,
        getRecords,
        addRecord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
