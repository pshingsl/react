import {creatStore} from "redux"
import { combineReducers } from "redux"

const rootReducer = combineReducers({});
const store = creatStore(rootReducer);

export default store;

/*
1.creatStore()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수)
리덕스는 단일 스토어로 모든 상태 트리를 관리
리덕스를 사용할 시 creatStore를 호출 1호출 안함
*/

/*
2.combineReducers()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수)
리덕스는 단일 스토어로 모든 상태 트리를 관리
리덕스를 사용할 시 creatStore를 호출 1호출 안함
*/