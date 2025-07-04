import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { todoAPI, todoStats } from "../utils/data"

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
*/ 

// 전체 요청
export const useTodos = (filter = 'all') => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: todoAPI.fetchTodos,
    staleTime: 5 * 60 * 1000 // 5분 동안 fresh 상태 유지
  })

  const filteredTodos = todoStats.filterTodos(todoAPI, filter);
  const sortedTodos = todoStats.sortTodos(filteredTodos);
  const stats = todoStats.calculateStats(data);

  return { 
    todos: sortedTodos, 
    isLoading : XPathResult.isLoading, 
    error, 
    stats }
}

// todos 추가, 삭제, 상태 변경 기초 개념 test.md에 정리함
// todos 추가
export const useAddTodo = () => {
  //queryClient 사용이유 -> useMutation 사용하기 위헤ㅐ
  const queryClient = useQueryClient();

  // useMutation 낙관업데이트 4단계를 보장해줌
  return useMutation({
    mutationFn: todoAPI.addTodo,
    onMutate : async (newTodo) => {
      await queryClient.cancelQueries(['todos']);
      const previousTodos = queryClient.getQueriesData(['todos'])

      queryClient.setQueryData(['todos'], (old = []) => [
        ...old, 
        {...newTodo, 
         id: Date.n 
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: todoAPI.deleteTodo,
    onMutate: async (todoId) => {
      await queryClient.cancelQueries(['todos']); // 중복 요청을 막기 위해 캔슬 시킴
      const previousTodos = queryClient.getQueryData(['todos']) // 롤백(기존데잍)을 하기위해서 만듬
      queryClient.setQueryData(['todos'], (old = []) =>
      old.filter(todo => todo.id !== todoId)
    )
    return {previousTodos}
    },
    // 에러가 나면 롤백데이터를 가져옴
    onError: (err, todoId, context) => {
      if(context?.previousTodos){
        queryClient.setQueryData(['todos'], context.previousTodos)
      }
    },
    onSettled:() => {
      queryClient.invalidateQueries(['toods'])
    },
  });
}


// todos 상태 값 변경
export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({todoId, isCompleted}) => todoAPI.toggleTodo(todoId, isCompleted),
    onMutate: async ({todoId, isCompleted}) =>{
      await queryClient.cancelQueries(['todos']);
      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], (old = []) => 
        old.map(todo =>
          todo.id === todoId ? {...todo, isCompleted} : todo
        )
      );

      return {previousTodos};
    },
    onError: (err, variables, context) => {
      if(context?.previousTodos){
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    },
  });
}