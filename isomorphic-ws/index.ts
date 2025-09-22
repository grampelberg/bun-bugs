import WebSocket from 'isomorphic-ws'

const socket = new WebSocket(`ws://${window.location.host}`)
