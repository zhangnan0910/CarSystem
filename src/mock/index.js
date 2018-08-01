import axios from "axios"
import mockAdapter from "axios-mock-adapter"
import getlist from "./data/data"
import getnav from "./data/navlist"
import getfooter from "./data/getfooter"
import sort from './data/sort'

let mock = new mockAdapter(axios)

mock.onGet("/getsort").reply(200, sort)
mock.onGet("/getlist").reply(200, getlist)
mock.onGet("/getnav").reply(200, getnav)
mock.onGet("/getfooter").reply(200, getfooter)