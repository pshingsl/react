import { useEffect, useState } from "react";
import {useQuery, queryClient, useMutation} from '@tanstack/react-query'

// queryFn사용하기 위해 가져옴
import { todoAPI } from "../utils/data";
import todoStats from "../components/ui/TodoStats";

/*
  훅이란 컴포넌트에서 상태와 기능을 쉽게 사용할 수 있게 해주는
  리액트 규칙

  커스텀 훅은 반복되는 훅 로직을 함수로 빼서 여러 컴포넌트에서
  재사용할 수 있게 만들어주는 나만의 훅

  10번째줄 부터 2시내용 시작
  Context 사용 이유
  여기 안에는 최대한 비동기 요청을 안 넣음

  staleTime
   1.자동으로 캐싱 해줌
   2.로딩/에러 상태 관리

  -기존 업데이트 방식
  사용자 클릭 -> 로딩 표시 ->서버(백엔드) 요청 -> 응답(프론트) 대기
  -> 성공 UI 업데이트

  낙관적 업데이트
  사용자 클릭 -> UI 업데이트 ->서버(백엔드) 요청 -> 끝

  사용자 클릭 -> UI 업데이트 ->서버(백엔드) 요청 -> 실패 할 때 롤백
*/ 

export const useTodos = (filter = 'all') => {
  // 공식문서에 있음 refetch(갱신)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn : todoAPI.fetchTodos,
    staleTime: 5 * 60 * 1000 // 5분동안 fresh 상태 fresh컴포넌트가 가장 최신의, 업데이트된 데이터를 가지고 있는 상태
  })

  const filteredTodos = todoStats.filteredTodos(todoAPI, filter)
  const sortedTodos = todoStats.sortedTodos(filteredTodos);
  const stats = todoStats.calculateStats(todos)

  return { todos: data, isLoading, error, refetch }
  
}


// todos 추가
export const useAddTodo = () => {
  //queryClient 사용이유 -> useMutation 사용하기 위헤ㅐ
  const queryClient = usequeryClient();

  return useMutation({
    mutationFn: todoAPI, addTodo,
    onMutate : async (newTodo) => {
      await queryClient.cancelQueries(['todos']);
      const previousTodos = queryClient.getQueriesData(['todos'])

      queryClient.setQueryData(['todos'], (old = []) => [
        ...old, 
        {...newTodo, 
         id: initialTodos.reduce((maxId, todos) =>
             Math.max(maxId, todos.id) + 1, 0), 
        }])
        return {previousTodos}
    },
    onError :(err, newTodo, context) =>{
      if(context?.previousTodos){
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    }
  })
}

// todos 삭제
export const useDeleteTodo = () => {

}


// todos 상태 값 변경
export const useUpdateTodo = () => {
  
}