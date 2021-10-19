import logger from './logger'
import logging from './logging'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,logger,logging
)